<template>
  <div class="content">
    <div class="service-content">
      <p class="back-text" @click="goback">&lt; Back</p>
      <div class="acticle-view">
        <h1>4EVERLAND logo and its design meaning</h1>

        <p><img alt="image" src="/imgs/blog/1.png" /></p>

        <p>
          The 4EVERLAND logo is set on the basis of the cyclotron pattern, which
          has evolved to form a three-dimensional pattern. The overall image is
          presented in the form of a fixed star, it also has the shape of an
          eye. The slim lines of blue and purple gradient are especially geeky.
        </p>

        <p>
          The design of the fixed star comparing 4EVERLAND to a planet in the
          vast universe, representing eternity and security.
        </p>

        <p>
          The surrounding &quot;star rings&quot; constitute the &quot;figurative
          signal source&quot;, which refers to the flow and dissemination of
          data and information, symbolizing the position of 4EVERLAND in the
          vast star river and its mission to link the interstellar value
          transmission, illustrating its aim of eternal information
          transmission, and revealing the vision of the and company and the
          services.
        </p>

        <p>
          The overall design resembles an &quot;eye&quot;, representing
          discovery and exploration, and expresses the spirit of striving and
          exploration of the company.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    goback() {
      window.history.go(-1);
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1280px) {
  .content {
    position: relative;
    top: 1.333333rem;
    width: 100%;
    min-height: 5.333333rem;
    background-color: #1e2226;
  }
  .service-content {
    position: relative;
    width: 9.066667rem;
    min-height: 17.6rem;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 1.8rem;
    box-sizing: content-box;
  }

  .service-title {
    position: relative;
    margin-top: 61px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 0.64rem;
    text-align: center;
  }
  .service-display {
    position: relative;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }
  .tems-address,
  .tems-date {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }

  .acticle-view {
    position: relative;
    width: 8.533333rem;
    min-height: 12.8rem;
    background: #fff;
    margin: auto;
    margin-top: 40px;
    border-radius: 5px;
    overflow-y: scroll;
    font-size: 12px;
    padding-bottom: 200px;
  }

  .back-text {
    position: relative;
    top: 0.533333rem;
    font-size: 16px;
    color: #7db4dc;
    width: 8.533333rem;
    height: 40px;
    line-height: 40px;
    background: #fff;
    margin: auto;
    cursor: pointer;
  }
  .acticle-view img {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 5px;
  }

  .acticle-view h1 {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.533333rem;
    line-height: 1.066667rem;
    margin-bottom: 30px;
  }

  .acticle-view p {
    line-height: 20px;
    font-size: 13px;
    margin-bottom: 30px;
  }

  .acticle-view h3 {
    line-height: 20px;

    font-size: 14px;
  }

  .acticle-view strong {
    line-height: 20px;

    font-size: 14px;
  }

  .acticle-view li {
    line-height: 20px;

    font-size: 14px;
  }
}

@media only screen and (min-width: 1280px) {
  .content {
    position: relative;
    top: 100px;
    width: 100%;
    min-height: 400px;
    background-color: #1e2226;
  }
  .service-content {
    position: relative;
    width: 1200px;
    min-height: 1320px;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 60px;
    box-sizing: content-box;
  }

  .service-title {
    position: relative;
    margin-top: 61px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 48px;
    text-align: center;
  }
  .service-display {
    position: relative;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }
  .tems-address,
  .tems-date {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #1e1d1e;
  }

  .acticle-view {
    position: relative;
    width: 900px;
    min-height: 960px;
    background: #fff;
    margin: auto;
    margin-top: 40px;
    border-radius: 5px;
    font-size: 12px;
    padding-bottom: 200px;
  }

  .back-text {
    position: relative;
    top: 40px;
    font-size: 16px;
    color: #7db4dc;
    width: 900px;
    height: 80px;
    line-height: 80px;
    background: #fff;
    margin: auto;
    cursor: pointer;
  }
  .acticle-view img {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 5px;
  }

  .acticle-view h1 {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.533333rem;
    line-height: 1.066667rem;
    margin-bottom: 30px;
  }

  .acticle-view p {
    line-height: 20px;
    font-size: 13px;
    margin-bottom: 30px;
  }

  .acticle-view h3 {
    line-height: 20px;

    font-size: 14px;
  }

  .acticle-view strong {
    line-height: 20px;

    font-size: 14px;
  }
  .acticle-view li {
    line-height: 20px;

    font-size: 14px;
  }
}
</style>
