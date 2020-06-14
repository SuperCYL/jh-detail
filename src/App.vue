<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="less">
html,body,div,p,ul,img,span,em{
  padding:0;
  margin:0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
 .clearfix:after {
    display: block;
    visibility: hidden;
    content: ".";
    height: 0;
    clear: both;
  }
  .clearfix {
    *zoom: 1;  /*此处是为ie6、7处理的方式 */
  }
</style>
