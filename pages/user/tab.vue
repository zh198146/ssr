<template>
  <div style="padding:50px; margin-bottom:20px;">
    <div class="tabs">
     <span v-for="(cc,index) in ['新闻','体育','娱乐']"
     :key='index'
     @click='bb(index)'
     :class="{active: aa === index}">
     {{cc}}
     </span>
      <div v-show="aa ===0">
        <ul>
          <li>中秋</li>
          <li>中秋</li>
          <li>中秋</li>
        </ul>
      </div>
     <div v-show="aa ===1">
        <ul>
          <li>重阳</li>
          <li>重阳</li>
          <li>重阳</li>
        </ul>
      </div>
      <div v-show="aa ===2">
        <ul>
          <li>国庆</li>
          <li>国庆</li>
          <li>国庆</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        aa:0
      }
    },
    methods: {
  bb(index){
    this.aa = index;
  }
}
} 


</script>

<style lang="less" scoped>
    .tabs{
        margin-bottom:20px;

        span{
            cursor: pointer;
        }
    }

    .active{
        color:red;
    }
</style>