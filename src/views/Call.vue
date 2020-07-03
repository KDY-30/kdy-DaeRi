<template>
  <div id="wrap">
    <div id="header">
      <div class="menu-icon"></div>
      <h1>TWC</h1>
    </div>
    <div id="nav">
      <ul>
        <li><a>list</a></li>
        <li><a>list</a></li>
        <li><a>list</a></li>
        <li><a>list</a></li>
        <li><a>list</a></li>
        <li><a>list</a></li>
      </ul>
    </div>
    <div id="contents">
      <div class="box">box1</div>
      <div class="box">box2</div>
      <div class="box">box3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'call',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  #wrap {
    position: relative;
    height: 100%;
    #header {
      width: 100%;
      height: 56px;
      border: 1px solid black;
    }
    #nav {
      width: 70px;
      height: 100%;
      float: left;
      border: 1px solid blue;
    }
    #contents{
      border: 1px solid purple;
      height: 100%;
      display: flex;
      .box{
        width: 33.33%;
        height: 100%;
        float: left;
        border: 1px solid palevioletred;
      }
    }
  }
</style>
