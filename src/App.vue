<template>
  <div id="app">
    <main class="main-content" :class="{'hideSidebar': !sidebar.opened}">
      <div class="main-left">
        <Sidebar class="sidebar-container"/>
      </div>
      <div class="main-right">
        <Navbar/>
        <div class="main-page">
          <transition name="fade">
          <router-view></router-view>
        </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar/index'
import Sidebar from './components/Sidebar/index'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {

  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
  }

  /*==toggle sidebar==*/
  .hideSidebar .main-right {
    padding-left: 40px;
  }

  .hideSidebar .main-left {
    transform: translate(-140px, 0);
  }

  .hideSidebar .main-left .sidebar-container {
    transform: translate(132px, 0);
  }/*==toggle sidebar==*/

  /*.hideSidebar {
    .main-right {
      padding-left: 40px;
    }
    .main-left {
      transform: translate(-140px, 0);

      .sidebar-container {
        transform: translate(132px, 0);
      }
    }
  }*/

  .main-left {
    position: fixed;
    width: 180px;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-x: hidden;
    transition: all .28s ease-out;
  }

  .sidebar-container {
    transition: all .28s ease-out;
  }

  .main-right {
    padding-left: 180px;
    transition: all .28s ease-out;
  }

  .main-page {
    padding: 20px 80px;
  }

  /* 路由切换动效 */
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
