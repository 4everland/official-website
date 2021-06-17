<template>
  <footer>
    <div class="footer-content">
      <div class="security-content">
        <img class="footer-logo" src="/imgs/logo@2x.png" alt="" srcset="" />
        <mailchimp-subscribe
          url="https://4everland.us6.list-manage.com/subscribe/post-json"
          user-id="cbf6df6ae142481d9197b48f8"
          list-id="45d9abd319"
          @error="onError"
          @success="onSuccess"
        >
          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <form
              class="validate"
              target="_blank"
              novalidate
              @submit.prevent="subscribe"
            >
              <div class="input-view">
                <input
                  class="input-box"
                  @input="setEmail($event.target.value)"
                  type="email"
                  value=""
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="Enter Your E-mail to sign up for newsletter"
                />
                <button class="right-btn" type="submit">Subscribe</button>
              </div>
              <p v-if="error"></p>
              <p v-if="success"></p>
            </form>
          </template>
        </mailchimp-subscribe>
        <!-- <img class="share-img" src="/imgs/share@2x.png" alt="" srcset="" /> -->

        <div class="share-view">
          <div class="">
            <a target="_blank" href="https://github.com/4everland">
              <span
                class="iconfont icon-github right-icon"
                style="margin-left: 0px"
              ></span
            ></a>

            <a target="_blank" href="https://twitter.com/4everland_org">
              <span class="iconfont icon-changyonglogo44 right-icon"></span
            ></a>
            <a
              target="_blank"
              href="https://t.me/org_4everland
"
            >
              <span class="iconfont icon-telegram right-icon"></span
            ></a>
            <a
              target="_blank"
              href="https://www.reddit.com/user/4everland_org/"
            >
              <span class="iconfont icon-discord-fill right-icon"></span
            ></a>
            <a target="_blank" href="mailto:contact@4everland.org">
              <span
                class="iconfont icon-youjian right-icon"
                style="margin-right: 0px"
              ></span
            ></a>
          </div>
        </div>

        <el-dialog
          title=""
          :visible.sync="centerDialogVisible"
          :show-close="false"
          width="300px"
          center
        >
          <div class="dialog-view">
            <img class="error-icon" src="/imgs/error.png" alt="" srcset="" />
            <span class="error-text">error email address</span>
          </div>
        </el-dialog>

        <el-dialog
          title=""
          :visible.sync="successDialogVisible"
          :show-close="false"
          width="400px"
          center
        >
          <div class="dialog-view">
            <img class="error-icon" src="/imgs/success.png" alt="" srcset="" />
            <span class="error-text">Thank you for subscription.</span>
          </div>
        </el-dialog>

        <div class="bottom-link-view">
          <div class="link-item" @click="toTerm">Terms of use</div>
          <div class="link-item" @click="toPrivacy">Privacy Policy</div>
        </div>

        <p class="copyright">©️ 2021 4EVERLAND, Inc</p>
      </div>
    </div>
  </footer>
</template>
<script>
import MailchimpSubscribe from "vue-mailchimp-subscribe";
export default {
  components: {
    MailchimpSubscribe,
  },
  created() {},
  mounted() {},
  data() {
    return {
      active: "Feature",
      drawer: false,
      centerDialogVisible: false,
      successDialogVisible: false,
    };
  },
  methods: {
    onSuccess() {
      this.successDialogVisible = true;
    },
    onError() {
      this.centerDialogVisible = true;
    },
    toTerm() {
      this.$router.push({
        path: "/service",
      });
    },

    toPrivacy() {
      this.$router.push({
        path: "/privacy",
      });
    },

    setEmail(value) {
      console.log(value);
    },
  },
};
</script>
<style>
.el-dialog__header {
  display: none !important;
}
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
    border: none;
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
    font-size: 12px;
    text-align: center;
    margin-top: 30px;
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
    font-size: 14px;
  }

  .share-view {
    position: relative;
    left: 0.266667rem;
    width: 5.52rem;
    height: 0.6rem;
    margin: 20px auto;
  }

  .share-icon {
    display: block;
    position: relative;
    width: 0.4rem;
    margin-right: 18px;
    float: left;
  }

  .right-icon {
    margin: 10px;
    font-size: 16px;
    color: #fff !important;
  }
}

@media only screen and (min-width: 1280px) {
  .error-icon {
    position: relative;
    top: 20px;
    left: 20px;
  }

  .error-text {
    position: relative;
    left: 40px;
  }
  .footer-content {
    position: relative;
    width: 100%;
    height: 515px;
    background-color: #1e2226;
    overflow: hidden;
  }

  .security-content {
    position: relative;
    width: 1200px;
    height: 515px;
    margin: 0 auto;
    overflow: hidden;
  }
  .footer-logo {
    position: relative;
    display: block;
    margin: 0 auto;
    margin-top: 40px;
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
    border: none;
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
  .share-view {
    position: relative;
    width: 480px;
    left: 30px;
    top: 20px;
    margin: 0px auto;
  }

  .share-icon {
    width: 20px;
    margin-right: 20px;
  }

  .facebook {
    font-size: 24px !important;
    color: #fff !important;
  }

  .right-icon {
    margin: 10px;
    font-size: 24px;
    color: #fff !important;
    margin-right: 60px;
  }
}
</style>
