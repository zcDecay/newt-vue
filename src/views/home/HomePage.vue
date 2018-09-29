<template>
  <div>
    <div class="home">
      <div class="home-color-bg"></div>
      <div class="home-box">
        <h2 title="For Future, For Freedom." id="indexLogo" @click="makeRandomLarry">
          张超超的网站
          <a aria-hidden="true" @click="makeRandomLarry" href="javascript:void(0);">
            <img :src="favicon" alt="张超超"/></a>
        </h2>
        <h3 title="For Future, For Freedom." aria-hidden="true">
          Barret Lee's personal website
        </h3>
        <p>
          <font aria-hidden="true">&raquo;</font> <a href="/entry/" aria-label="点击查看博客文章列表">博客</a>
          <font aria-hidden="true">/ </font><a href="/message/" aria-label="给张超超留言">问答</a>
          <font aria-hidden="true">/ </font><a href="/demo/" aria-label="张超超的实验室">实验</a>
          <font aria-hidden="true">/ </font><a href="/about/" aria-label="查看张超超的个人信息">关于</a>
        </p>
        <p>
          <font aria-hidden="true">&raquo;</font>
          <i class="icon" title="Github">
            <a href="https://github.com/barretlee" target="_blank" aria-label="张超超的 Github 地址">☃</a>
          </i>
          <i class="icon" title="Sina Weibo">
            <a href="http://weibo.com/173248656" target="_blank" aria-label="张超超的博客文章订阅地址">◈</a>
          </i>
        </p>
      </div>
      <span class="local-search local-search-google local-search-plugin home-search">
        <input type="search" placeholder="站内搜索" id="local-search-input" class="local-search-input-cls" />
        <i class="icon" aria-hidden="true" title="点击进入 Google 搜索">✈</i>
        <div id="local-search-result" class="local-search-result-cls"></div>
      </span>
    </div>
    <p class="home-page-hosted">
      Hosted by
      <a href="https://pages.coding.me" target="_blank" ref="external">Coding Pages</a>
    </p>
  </div>
</template>
<style>
  @import "../../styles/css/home.css";
  @import "../../styles/css/global.css";
</style>
<script>
  import CartoonImg from '@/views/dialog/CartoonImgDialog'
  import favicon from '@/assets/images/zc.png'
  export default {
    components: {
    },
    data() {
      return {
        sizes: ["smaller", "small", "medium", "large", "fat"],
        sizeDimensions: {
          "smaller": 40,
          "small": 70,
          "medium": 90,
          "large": 120,
          "fat": 200
        },
        $flyzone: null,
        favicon: favicon
      }
    },
    mounted() {
    },
    methods: {
      randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
      },
      flyzone() {
        if (!this.$flyzone) {
          this.$flyzone = $("<div>").attr("id", "flyzone").prependTo(document.body);
        }

        return this.$flyzone;
      },

      randomOpacity(threshold) {
        var opacity = Math.random();

        while (opacity < threshold) {
          opacity = Math.random();
        }

        return opacity;
      },

      makeLarry(sizeName, speed) {
        var size = this.sizeDimensions[sizeName];
        var top = Math.floor((this.flyzone().height() - size) * Math.random());

        var $img = $("<img>")
          .addClass("larry size-" + sizeName)
          .attr("src", this.favicon)
          .attr({
            "tabindex": "0",
            "aria-hidden": "true"
          })
          .attr("width", size)
          .attr("height", size)
          .css({
            position: "absolute",
            opacity: this.randomOpacity(0.4),
            top: top,
            left: -size + 15
          });

        $img.prependTo(this.flyzone());

        var left = this.flyzone().width() + size;

        $img.animate({
          left: left
        }, speed, function () {
          $img.remove();
        });

        return $img;
      },

      makeRandomLarry() {
        var size = this.randomItem(this.sizes);
        var speed = Math.floor(Math.random() * 20000) + 15000;
        return this.makeLarry(size, speed);
      }
    }
  }
</script>