<template>
  <div class="home">
  <!--
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="title">
       <span class="iconfont icon-fanhui"></span>
       <span class="title-name">{{title}}</span>
       <span class="iconfont icon-fenxiang" @click="shareClick"></span>
       <svg class="icon icon-huaban1" aria-hidden="true" v-show="shareShow" @click="shareLink">
          <use xlink:href="#icon-huaban1"></use>
       </svg>
    </div>
    <p style="height:55px;"></p>
    <div class="img-cont">
      <img src="../assets/new.png" />
    </div>
    <div class="group-cont">
      <div class="padding-cont">
        <img src="../assets/group.png" />
        <span class="group-price">￥<em>{{price}}</em></span>
        <span class="group-juan">抢8折团购券</span>
        <div class="group-person">
            <p class="group-num">{{person}}人</p>
            <p class="group-num">成团</p>
        </div>
      </div>

      <ul class="item clearfix">
        <li class="line-li" @click="gotopage(1)">
          <div class="icon-div">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenzu"></use>
            </svg>
          </div>
          <div class="text">团购首页</div>
        </li>
        <li class="line-li" @click="gotopage(2)">
          <div class="icon-div">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenzu1"></use>
            </svg>
          </div>
          <div class="text">店铺</div>
        </li>
        <li @click="gotopage(3)">
          <div class="icon-div"> 
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenzu2"></use>
            </svg>
          </div>
          <div class="text">视频与直播</div>
        </li>
      </ul>

    </div>

    <div class="content">
      <div class="cont-item">
        <div class="tit">
          <svg class="icon icon-youhui" aria-hidden="true">
              <use xlink:href="#icon-youhui"></use>
            </svg>优惠详情</div>
        <p class="text">{{discouuntDetail}}</p>
      </div>
      <div class="cont-item">
        <div class="tit"> <svg class="icon icon-quan" aria-hidden="true">
              <use xlink:href="#icon-quan"></use>
            </svg>关注公众号、付款别忘领券</div>
        <p class="text">团购结果是由公众号发出消息，请务必保持关注公众号，请识别下面二维码关注公众号</p>
        <img class="code-img" src="../assets/code.png">
        <p class="text">团购流程:</p>
        <p class="text">1.关注公众号->付款->领取弹出卡券->分享页面->公众号通知团购结果.</p>
        <p class="text">2.付款->勾选关注公众号->领取弹出卡券->分享页面->公众号通知团购结果.</p>
      </div>

      <div class="cont-item">
        <div class="tit"> <svg class="icon icon-youhui" aria-hidden="true">
              <use xlink:href="#icon-shangpin"></use>
            </svg>商品介绍</div>
        <p class="text">{{goodIntroduce}}</p>
      </div>

      <div class="cont-item">
        <div class="tit"><svg class="icon icon-youhui" aria-hidden="true">
              <use xlink:href="#icon-tuangou"></use>
            </svg>团购说明</div>
        <p class="text">若团购失败会自动退款，团购成功会通过公众号通知。团购成功后须在有效日期内使用，请注意有效期时间。本券位于微信->我->卡包，团购成功后可自用也可赠与亲友使用。</p>
        <p class="text">购买时请出示本券，团购券默认不可与其他优惠重叠使用，除非另有说明，每次限用一张券，本店拥有券使用方法解释权.</p>
        <p class="text">若出现异常可联系技术服务：15221146964 请保留支付信息以及消息通知，谢谢您的配合。</p>
      </div>
    </div>
    <p class="ba">上海此在网络科技</p>
    <p class="ba twoba">沪ICP备18044506号-3</p>
    <p style="height:50px;"></p>
    <div class="footer clearfix">
        <div class="f-l">{{time}}</div>
        <div class="f-r" @click="pay"><span class="iconfont icon-weixin"></span>微信购买</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      title:"鸭蛋/粽子时蔬套餐八折券欢迎大家前来品尝", //标题
      shareShow:false,
      price:2.00, //价格
      person:5, //几人团购
      discouuntDetail:"二元抢当季时蔬八折团购券。包含新鲜散养草鸭蛋三斤；粽子三斤，肉粽五个，红豆花生棕五个；新土豆，六斤；带壳蚕豆，现采，五斤。原价168元，团购价135元。下单请到公众号微店购买，购买请联系卖家出示本团购券。为保障新鲜，仅限江苏上海地区，快递费约25-30元，发顺丰。下单后2-3天发货。", //优惠详情
      goodIntroduce:"由于蔬菜成熟期很短，时间仅限于5月，请在此期间下单。鸭子为池塘散养，非笼养，产量有限，每年端午前后为丰产期，可通过摄像头观看。蚕豆现场采摘，发货前均通过视频直播，敬请观看，你吃的我也吃。下单请到公众号微店购买，购买时请联系卖家出示本优惠券。", //商品介绍
      time:"￥2.00新建团购  5月21号 23点截止"
    }
  },
  components: {
    // HelloWorld
  },
  mounted() {
    //初始化方法
    this.init();
  },
  methods: {
    init(){

    },
    shareClick(){
      this.shareShow = true;
    },
    //点击分享
    shareLink(){

    },
    gotopage(type){
      if(type==1){
        //跳至回购首页
      }else if(type==2){
        //跳至店铺
      }else{
        //跳至视频与直播
      }
    },
    pay(){
      //支付
    }
  },
};
</script>
<style lang="less">
  .home{
    background:#F5F5F5;
    .title{
      height:55px;
      background:rgba(0,0,0,0.85);
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:99;
      text-align:center;
      color:#fff;
      .icon-fanhui{
        font-size:28px;
        position:absolute;
        top:12px;
        left:10px;
      }
      .icon-fenxiang{
        position: absolute;
        right: 20px;
        top: 18px;
        font-size: 20px;
      }
      .icon-huaban1{
        position: absolute;
        right: 10px;
        top: 30px;
        font-size: 20px;
        width: 3.5em;
        height: 3.5em;
      }
      .title-name{
        width:70%;
        display: inline-block;
        line-height:55px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
    .img-cont{
      width:100%;
      img{
        display:block;
        width:100%;
      }
    }
    .group-cont{
      width:100%;
      background:#fff;
      .padding-cont{
        padding:10px;
        position:relative;
        img{
          width:100%;
          display:block;
        }
        .group-price{
          position: absolute;
          top: 50%;
          left: 35px;
          color: #FE293E;
          margin-top: -25px;
            em{
              font-size:36px;
              font-weight:bold;
              font-style:normal;
            }
        }
        .group-juan{
         font-size: 17px;
          position: absolute;
          top: 50%;
          color: #000000;
          margin-top: -10px;
          left: 50%;
          margin-left: -45px;
        }
        .group-person{
          position: absolute;
          right: 40px;
          top: 50%;
          margin-top: -24px;
          p{
            text-align:center;
            color:#FE293E;
            font-size:18px;
            font-weight:400;
          }
        }
      }
      .item{
        .line-li{
          position:relative;
          &::after{
            content: "";
            width: 1px;
            position: absolute;
            top: 0;
            bottom: 5px;
            right: 0;
            background: #F5F5F5;
          }
        }
        li{
          width:33.33%;
          float:left;
          list-style:none;
          font-size:12px;
          color:#4A4A4A;
          text-align:center;
          
          .icon-div{
            position:relative;
            .icon{
              width:3em;
              height:3em;
              border-radius: 100%;
            }
          }
          .text{
            line-height:30px;
          }
        }
      }
    }
    .content{
      padding:10px;
      .cont-item{
        background:#fff;
        border-radius:12.5px;
        padding:10px;
        margin-bottom:10px;
        .tit{
          padding-left:40px;
          padding-bottom:10px;
          font-size:16px;
          font-weight:500;
          margin-bottom:10px;
          position:relative;
          &::after{
            content:"";
            height:1px;
            position:absolute;
            bottom:0;
            left:0;
            right:0;
            background:#D8D8D8;

          }
          .icon-youhui{
            width:2em;
            height:2em;
            position:absolute;
            top:-4px;
            left:0;
          }
          .icon-quan{
            width:1.8em;
            height:1.8em;
            position:absolute;
            top:-2px;
            left:0;
          }
        }
        .text{
          font-size: 13px;
          color: #333333;
          line-height: 23px;
          margin-bottom: 3px;
        } 
        .code-img{
          width:152px;
          height:152px;
          display:block;
          margin:0 auto;
        }
      }
    }
    .ba{
      font-size:8px;
      color:#999999;
      text-align:center;
    }
    .twoba{
      margin-bottom:10px;
    }
    .footer{
      border-top-left-radius:14px;
      border-top-right-radius:14px;
      background:#fff;
      position:fixed;
      bottom:0;
      left:0;
      right:0;
      .f-l{
        width:60%;
        text-align:center;
        float:left;
        line-height:50px;
        font-size:13px;
        color:#FF333A;
      }
      .f-r{
        width:40%;
        text-align:center;
        float:right;
        line-height:50px;
        border-top-right-radius:14px;
        background:#FF333A;
        color:#fff;
        font-size:16px;
        .icon-weixin{
          margin-right:3px;
        }
      }
    }
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
  @media screen and (min-width: 361px) {
    .home .group-cont .padding-cont .group-person{
      right: 47px;
    }
  }
</style>
