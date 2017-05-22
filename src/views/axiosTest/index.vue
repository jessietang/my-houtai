<template>
  <div class="axiosTest">
    <h1>此页面为axios测试页面</h1>
    <h2>剩余{{rest}}</h2>
    <div class="awardBox">
      <ul class="awardList">
        <li v-for="item in awardList" class="list">
          <span class="awardPhone">{{item.user.phone}}</span>
          <span class="awardDetail">获得{{item.prize.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  export default {
    name: 'axiosTest',
    data () {
      return {
        rest: 100,
        awardList: []
      }
    },
    created () {
      this.getRest()
      this.getList()
      console.log('created')
    },
    ready () {
      this.renderList()
      console.log('ready')
    },
    methods: {
      getRest () {
        axios.post('/coupon/countRecommendedDownloadRecord', {}).then(res => {
          let rest = res.data.data
          this.rest = rest
        }).catch(error => {
          console.log(error)
        })
      },
      getList () {
        axios.get('/activity/findTop100UserPrizes', {userId: 192, dataType: 'json'}).then(res => {
          if (res.data.code === 0) {
            let awardList = res.data.data
            this.awardList = awardList
          }
        })
      },
      renderList () { // 这个方法没调用到，记得再看看！！！
        let awardList = $('.awardList')
        let awardBoxHeight = $('.awardBox .awardList li').eq(0).height() * 8
        console.log($('.awardBox .awardList .list').eq(0).height())
        $('.awardBox').css('height', awardBoxHeight + 'px')
        let awardListHeight = awardList.height()
        let awardBoxHeight2 = $('.awardBox').height()
        console.log(awardListHeight)
        console.log(awardBoxHeight2)
        if (awardListHeight > awardBoxHeight2) {
          setInterval(function () {
            let topLi = $('.awardList li').eq(0)
            let topLiClone = topLi.clone()
            awardList.append(topLiClone)
            topLi.remove()
          }, 2000)
        }
      }
    }
  }
</script>

<style>
  h1 {
    text-align: center;
    padding: 20px;
  }

  .awardBox {
    position: relative;
    width: 640px;
    margin: 20px auto;
    background-color: #fbca16;
    overflow: hidden;
    border-radius: 5px;
    padding: 20px 0;
    height: 300px;
  }

  .awardBox .awardList {
    position: absolute;
    left: 0;
    top: 0;
    width: 640px;
  }

  .awardBox .awardList .list {
    font-size: 26px;
    padding: 10px 80px;
  }

  .awardBox .awardList .list .awardPhone {
    color: #464241;
  }

  .awardBox .awardList .list .awardDetail {
    color: #ff0036;
    font-weight: bold;
    margin-left: 25px;
  }
</style>
