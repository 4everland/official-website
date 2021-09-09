<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div
          :class="{
            'main-bg': !$vuetify.breakpoint.smAndDown,
            'px-2': $vuetify.breakpoint.smAndDown,
          }"
        >
          <div class="font-24 color-text">
            4EVERLAND’s First Landing aims to continue to reach more outstanding
            developers and help them efficiently develop Web3.0 applications,
            encouraging them to deploy applications in 4EVERLAND with this
            rewards based event.
          </div>
          <div class="my-12" style="text-align: center">
            <span
              class="subscribe-tit"
              :class="{
                'mr-8': !$vuetify.breakpoint.smAndDown,
                'mb-4': $vuetify.breakpoint.smAndDown,
              }"
              >E-mail</span
            >
            <input
              v-model="email"
              placeholder="Enter your E-mail to signup for more updates"
              type="email"
              class="subscribe-input"
              :class="{
                'mr-8': !$vuetify.breakpoint.smAndDown,
                'mb-4': $vuetify.breakpoint.smAndDown,
              }"
            />
            <v-btn
              id="subscribeBtn"
              :loading="loading"
              :disabled="disabled"
              rounded
              color="#2b85fb"
              class="btn-subscribe"
              :class="{
                disabled: disabled,
              }"
              @click="subscribe"
            >
              Subscribe
            </v-btn>
          </div>
          <img
            class="d-none d-lg-flex"
            src="~/assets/imgs/firstlanding/icon1.png"
            alt=""
          />
        </div>
        <div
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'padding: 0 5px;'
              : 'padding: 0 72px; padding-top: 67px'
          "
        >
          <div class="font-18 mb-10 color-text">
            Dear community developers and users:
          </div>
          <div class="font-18 mb-10 color-text">
            Since 4EVER-HOSTING went live on August 16 it has shown great
            popularity, even in such a short period of time, with many
            applications already deployed by developers in 4EVERLAND IPFS web
            hosting.
          </div>
          <div class="font-18 mb-10 color-text">
            Today, we are pleased to announce the launch of the 4EVERLAND First
            Landing event with 50 million 4EVER credit rewards up for grabs.
          </div>
          <div class="font-18 mb-10 color-text">
            4EVERLAND’s First Landing aims to continue to reach more outstanding
            developers and help them efficiently develop Web3.0 applications,
            encouraging them to deploy applications in 4EVERLAND with this
            rewards based event.
          </div>
          <div class="font-18 mb-10 color-text">
            Developers from all project stages are welcome to join this global
            event and all you have to do is deploy your website in 4EVERLAND to
            get a share in the massive reward pool.
          </div>
          <div class="font-36 color-text">Events Information</div>
          <div class="font-18 color-text" style="margin-bottom: 100px">
            Events start at 00:00 September 15 UTC <br />
            Events end is randomised to prevent malicious competition and will
            be anytime between October 7 and 14 UTC
          </div>
          <div class="font-36 mb-6 color-text">Rewards rules</div>
          <v-row style="margin: 0 auto">
            <v-col
              v-for="(item, index) in rules"
              :key="index"
              cols="12"
              md="6"
              lg="6"
              xl="3"
            >
              <v-img
                class="mb-8"
                width="100%"
                max-width="480"
                :src="item.img"
              ></v-img>
              <div class="font-16 color-text" v-html="item.html"></div>
            </v-col>
          </v-row>
          <div class="font-16 mb-4 color-text" style="margin-top: 100px">
            Terms of service
          </div>
          <div class="font-16 mb-4 color-text">
            • 4EVERLAND reserves the right of final interpretation of the First
            landing event and the right to determine the rules and rewards.
          </div>
          <div class="font-16 mb-4 color-text">
            • Unfair competition scalping, plagiarism or any malicious
            competition is not allowed. 4EVERLAND retains the right to
            disqualify participants.
          </div>
          <div class="font-16 mb-4 color-text">
            • Any 4EVERLAND system related issues please report to
            <a href="mailto:contact@4everland.org">contact@4everland.org</a>
          </div>
          <div class="font-16 mb-4 color-text">
            Join 4EVERLAND
            <a href="https://discord.gg/sxtHDvvpuT" target="_blank">Discord</a>
            to find solutions if you have problems using 4EVERLAND services and
            report any bugs related to 4EVERLAND will be rewarded in the '<a
              href="https://hosting.4everland.org/#/bug-bounty"
              target="_blank"
              >Bug Bounty</a
            >' event.
          </div>
          <img
            class="pos-img d-none d-lg-flex"
            src="~/assets/imgs/firstlanding/icon2.png"
            alt=""
            style="left: 0; top: 36%"
          />
          <img
            class="pos-img d-none d-lg-flex"
            src="~/assets/imgs/firstlanding/icon3.png"
            alt=""
            style="right: 0; top: 40%"
          />
          <img
            class="pos-img d-none d-lg-flex"
            src="~/assets/imgs/firstlanding/icon4.png"
            alt=""
            style="left: 0; top: 89%"
          />
        </div>
      </v-col>
    </v-row>
    <div v-show="subSuccessShow" class="sub-success">
      <v-icon color="#2B85FB" size="64">{{ mdiEmoticonHappyOutline }}</v-icon>
      <span class="ml-4">Thank you for subscription.</span>
    </div>
  </v-container>
</template>
<script>
import { mdiEmoticonHappyOutline } from '@mdi/js'
export default {
  data() {
    return {
      mdiEmoticonHappyOutline,
      email: '',
      loading: false,
      disabled: true,
      subSuccessShow: false,
      rules: [
        {
          img: require('~/assets/imgs/firstlanding/rules1.png'),
          html: `<span class="d-block mb-1">
                  There are a total of 10 million 4EVER deployment credit rewards available for developers during the First Landing event. All you have to do is:
                </span>
                <span class="d-block mb-1">
                  1.Completed one or more deployments in 4EVER-HOSTING before September 8 and be rewarded 2000 4EVER credits.
                </span>
                <span class="d-block mb-1">
                  2.All developers who successfully deploy a project during the event period with have their account rewarded with 1000 4EVER credits at the end of the event.
                </span>
                <span class="d-block mb-1">
                  3.An additional 2000 4EVER credits will be awarded to those who customise their project domain name.
                </span>
                <span class="d-block mb-1">
                  *Credit rewards are only awarded once per account, per address and first-level domain name.
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules2.png'),
          html: `<span class="d-block mb-1">
                   There is also a total of 10 million 4EVER credits available based on each projects total number of users. All projects that meet the deployment criteria will be eligible to win a share of the total credit pool calculated on the projects users divided by the total number over users across all projects.
                </span>
                <span class="d-block mb-1">
                   *Credits are available to the developers who register a Githbub account before September 8 and meet the deployment criteria up to an event total of 10 million. One account can win up to 100,000 4EVER credits. Template deployments do not count as valid participates.
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules3.png'),
          html: `<span class="d-block mb-1">
                 Developers to win your share of 4EVER credits rewards by simply following the below 3 steps to invite new developers to 4EVERLAND:
                </span>
                <span class="d-block mb-1">
                  1.Current account holders email an invitation link to new developers to register.
                </span>
                <span class="d-block mb-1">
                  2.The invitee clicks the invitation link and completes their registration to 4EVERLAND
                </span>
                <span class="d-block mb-1">
                  3.The new developer must register before September 8 and deployed one or more projects as per the deployment criteria.
                </span>
                <span class="d-block mb-1">
                  *Reward count is a weighted average divided by the number of valid invitations during the event with the counted share of 10 million of 4EVER credits at the end of the event.
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules4.png'),
          html: `<span class="d-block mb-1">
                  20 million 4EVER sponsorship credits will be available to qualified projects for their long term development. All 4EVER-HOSTING projects are welcomed to apply for Dev-Grant for a chance to receive between 50,000 to 500,000 4EVER credits. To be eligible for the Dev-Grant you will need to:
                </span>
                <span class="d-block mb-1">
                  1.Connect your domain name to the project;
                </span>
                <span class="d-block mb-1">
                  2.Add the 4EVERLAND logo and links on their website.
                </span>
                <span class="d-block mb-1">
                  *This event is valid until all rewards are given. Plagiarism and illegally copied project are not qualified for Grants.
                </span>`,
        },
      ],
    }
  },
  watch: {
    email(newVal) {
      this.disabled =
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(newVal)
    },
  },
  methods: {
    async subscribe() {
      this.loading = true
      try {
        const resp = await this.$axios.get(
          `https://mailsubscribe.4everland.org/?email=${this.email}&tag=1`
        )
        // eslint-disable-next-line no-console
        // console.log(resp.data)
        if (resp.data.status) {
          if (resp.data.status === 'success') {
            this.subSuccessShow = true
            setTimeout(() => {
              this.subSuccessShow = false
            }, 2500)
          } else {
            this.$dialog.error({
              text: resp.data.detail?.title || 'Subscribe failed',
              title: 'Error',
            })
          }
        } else {
          this.$dialog.error({
            text: 'Subscribe failed',
            title: 'Error',
          })
        }
      } catch (ex) {
        this.$dialog.error({
          text: ex.message,
          title: 'Error',
        })
      } finally {
        this.loading = false
      }
    },
    emailChange() {
      this.disabled =
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
    },
  },
}
</script>
<style scoped lang="scss">
.main-bg {
  padding-left: 7%;
  padding-right: 6%;
  padding-top: 6%;
  width: 100%;
  min-height: 419px;
  background-image: url('~/assets/imgs/firstlanding/main-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.main-bg img {
  position: absolute;
  right: 1%;
  top: 52%;
}
.sub-success {
  width: 600px;
  height: 200px;
  line-height: 200px;
  background: #fff;
  border: 2px solid #2b85fb;
  border-radius: 10px;
  color: #666;
  font-size: 18px;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 120px;
  margin: auto;
}
a {
  text-decoration: none;
}
.pos-img {
  position: absolute;
}
.color-text {
  color: #ccd6e3;
}
.subscribe-tit {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
}
input.subscribe-input {
  height: 64px;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 16px;
  min-width: 150px;
  flex: auto;
}

input.subscribe-input:hover,
input.subscribe-input:focus {
  outline: none;
}
.btn-subscribe {
  height: 48px !important;
  color: #fff !important;
  width: 200px;
  justify-content: center;
  padding: 0;
  align-content: center;
  font-size: 18px;
  font-weight: bold;
}
#subscribeBtn.disabled {
  background-color: #2b85fb !important;
  color: #fff !important;
}
</style>
