<template>
  <span class="glyphicon glyphicon-menu-hamburger" :class="{'is-active': isActive}" @click="toggleClick"></span>
</template>

<script>
  export default {
    name: 'hamburger',
    //
    props: {
      isActive: {
        type: Boolean,
        default: true
      },
      toggleClick: {
        type: Function,
        default: null
      }
    }
  }
</script>

<style>
  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
  }

  .glyphicon:hover {
    cursor: pointer;
  }

  .glyphicon-menu-hamburger:before {
    /*content: "☰";*/
    content: '\2630';
  }

  .glyphicon.is-active {
    transform: rotate(90deg);
  }
</style>

