<template>
  <footer>
    <div class="footer-content">
      <div class="security-content">
        <img class="footer-logo" src="/imgs/logo@2x.png" alt="" srcset="" />

        <div class="input-view">
          <input
            class="input-box"
            type="text"
            placeholder="Enter Your E-mail to sign up for newsletter"
          />
          <div class="right-btn">Subscribe</div>
        </div>

        <img class="share-img" src="/imgs/share@2x.png" alt="" srcset="" />

        <div class="bottom-link-view">
          <div class="link-item">Terms of use</div>
          <div class="link-item">Privacy Policy</div>
        </div>

        <p class="copyright">©️ 2021 4EVERLAND, Inc</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
@media only screen and (max-width: 1280px) {
  .footer-content {
    position: relative;
    width: 100%;
    min-height: 3.466667rem;
    background-color: #1e2226;
    overflow: hidden;
  }

  .security-content {
    position: relative;
    width: 9.066667rem;
    min-height: 7.466667rem;
    margin: 0 auto;
  }
  .footer-logo {
    position: relative;
    display: block;
    margin: 0 auto;
    margin-top: 1.413333rem;
  }
  .input-view {
    position: relative;
    width: 6.933333rem;
    height: 0.853333rem;
    background-color: #fff;
    border-radius: 0.133333rem;
    margin: 0 auto;
    margin-top: 0.933333rem;
  }
  .input-box {
    position: relative;
    padding-left: 10px;
    width: 4.8rem;
    height: 0.853333rem;
    border-radius: 0.133333rem;
    border: none;
    background-color: #fff;
    float: left;
    z-index: 99;
    font-size: 0.213333rem;
  }

  .right-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
    height: 0.853333rem;
    line-height: 0.853333rem;
    border-radius: 0.133333rem;
    background-color: #2b85fb;
    text-align: center;
    color: #fff;
    font-size: 0.266667rem;
    font-weight: 500;
    float: right;
    cursor: pointer;
    z-index: 98;
  }

  .share-img {
    display: block;
    position: relative;
    width: 5.52rem;
    height: 0.333333rem;
    margin: 0 auto;
    margin-top: 0.533333rem;
  }

  .copyright {
    position: relative;
    color: #b1b6bb;
    font-size: 14px;
    text-align: center;
  }

  .bottom-link-view {
    position: relative;
    width: 5.333333rem;
    height: 0.666667rem;
    margin: 0 auto;
    margin-top: 0.8rem;
  }

  .link-item {
    position: relative;
    width: 50%;
    float: left;
    text-align: center;
    color: #b1b6bb;
    cursor: pointer;
  }
}

@media only screen and (min-width: 1280px) {
  .footer-content {
    position: relative;
    width: 100%;
    min-height: 560px;
    background-color: #1e2226;
    overflow: hidden;
  }

  .security-content {
    position: relative;
    width: 1200px;
    min-height: 560px;
    margin: 0 auto;
  }
  .footer-logo {
    position: relative;
    display: block;
    margin: 0 auto;
    margin-top: 106px;
  }
  .input-view {
    position: relative;
    width: 520px;
    height: 64px;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 70px;
  }
  .input-box {
    position: relative;
    padding-left: 10px;
    width: 360px;
    height: 64px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    float: left;
    z-index: 99;
    font-size: 16px;
  }

  .right-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 150px;
    height: 64px;
    line-height: 64px;
    border-radius: 10px;
    background-color: #2b85fb;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    float: right;
    cursor: pointer;
    z-index: 98;
  }

  .share-img {
    display: block;
    position: relative;
    width: 414px;
    height: 25px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .copyright {
    position: absolute;
    left: 40px;
    bottom: 80px;
    color: #b1b6bb;
    font-size: 14px;
  }

  .bottom-link-view {
    position: relative;
    width: 400px;
    height: 50px;
    margin: 0 auto;
    margin-top: 60px;
  }

  .link-item {
    position: relative;
    width: 50%;
    float: left;
    text-align: center;
    color: #b1b6bb;
    cursor: pointer;
  }
}
</style>
