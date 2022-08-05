<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- <div
          :class="{
            'main-bg': !$vuetify.breakpoint.smAndDown,
            'px-2': $vuetify.breakpoint.smAndDown,
          }"
        >
          <div class="font-24 color-text">
            4EVERLAND First Landing aims to reach outstanding developers and
            help them efficiently develop Web3.0 applications, encouraging the
            deployment of applications in 4EVERLAND.
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
        </div> -->
        <div
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'padding: 0 5px;'
              : 'padding: 0 72px; padding-top: 67px'
          "
        >
          <div class="font-18 mb-10 color-text">Dear users:</div>
          <div class="font-18 mb-10 color-text">
            Since 4EVERLAND HOSTING went live on 16th August it has shown great
            popularity in a short period of time, with many applications already
            deployed by developers in 4EVERLAND Web Hosting Services.
          </div>
          <div class="font-18 mb-10 color-text">
            Today, we are pleased to announce the launch of the 4EVERLAND First
            Landing Event with 50 million 4EVER tokens and limited NFT rewards
            up for grabs.
          </div>
          <div class="font-18 mb-10 color-text">
            4EVERLAND's First Landing aims to reach outstanding developers and
            help them efficiently develop Web3.0 applications, encouraging the
            deployment of applications in 4EVERLAND.
          </div>
          <div class="font-18 mb-10 color-text">
            Developers from all project stages are welcome to join this global
            event and all you have to do is deploy your website in 4EVERLAND to
            get a share of the massive reward pool.
          </div>
          <div class="font-18 mb-10 color-text font-italic">
            *You must have a github account created before 8th September, 2021
          </div>
          <div class="font-36 mb-10 color-text">Events Information</div>
          <div class="font-18 color-text">
            The event starts at 00:00 15th September UTC and the event ends
            randomized between October 7th and 14th UTC for further official
            notice.
          </div>
          <div class="font-18 color-text">
            There are a total of 50 million 4EVER deployment token rewards
            available for developers during the First Landing event. This is
            broken down into
          </div>
          <div class="font-18 color-text">• Deployment Rewards</div>
          <div class="font-18 color-text">• Total Users Rewards</div>
          <div class="font-18 color-text">• Invitation Rewards</div>
          <div class="font-18 color-text">• Developer Grants</div>
          <div class="font-18 color-text font-italic">
            *2000 4EVER for each developer who deployed projects on 4EVERLAND
            before 8th September as Early Adopter Rewards.
          </div>
          <div
            class="font-18 color-text font-italic"
            style="margin-bottom: 100px"
          >
            *To show our thanks every 4EVERLAND account member will receive 1
            NFT reward
          </div>
          <div class="font-36 mb-6 color-text">Reward rules</div>
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
            Landing Event and the right to determine the rules and rewards.
          </div>
          <div class="font-16 mb-4 color-text">
            • Unfair competition scalping, plagiarism or any malicious
            competition is not allowed. 4EVERLAND retains the right to
            disqualify participants.
          </div>
          <div class="font-16 mb-4 color-text">
            • Deployment rewards and Total users rewards are available only to
            members with GitHub accounts registered before 8th September, 2021
          </div>
          <div class="font-16 mb-4 color-text">
            • Please submit your ETH wallet address to claim your rewards within
            a week after the end of the event.
          </div>
          <div class="font-16 mb-4 color-text">
            • Any 4EVERLAND system related issues please report to
            <a href="mailto:contact@4everland.org">contact@4everland.org</a>
          </div>
          <div class="font-16 mb-4 color-text">
            • Join 4EVERLAND
            <a href="http://discord.gg/4everland" target="_blank">Discord</a>
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
                  There are a total of 10 million 4EVER tokens available for developers during the First Landing Event. To qualify you must have:
                </span>
                <span class="d-block mb-1">
                 •	Used a GitHub account created before 8th September
                </span>
                <span class="d-block mb-1">
                  •	All developers who successfully deploy a project during the event period will have their account rewarded with 1000 4EVER tokens at the end of the event.
                </span>
                <span class="d-block mb-1">
                 •	2000 4EVER tokens will be awarded to those who customize their project with a domain name.
                </span>
                <span class="d-block mb-1 font-italic">
                *Tokens are only awarded once per account, per address and first-level domain name.
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules2.png'),
          html: `<span class="d-block mb-1">
                  There are also a total of 10 million 4EVER tokens available based on your project’s total number of visits to your project.
                </span>
                <span class="d-block mb-1">
                  All projects that meet the deployment criteria will be eligible to win a share of the total token reward pool. This is calculated on individual project visits divided by the total number of visits across all projects.
                </span>
                <span class="d-block mb-1 font-italic">
                  *Tokens are available to the developers who meet the deployment criteria up to an event total of 10 million. Maximum total for one (1) project is 100,000 4EVER tokens. 
                </span>
                <span class="d-block mb-1 font-italic">
                 *Deployment criteria: You must connect  your domain in order to claim total user rewards.
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules3.png'),
          html: `<span class="d-block mb-1">
                You can win your share of 4EVER token rewards by simply following the 3 easy steps below to invite new developers to 4EVERLAND: 
                </span>
                <span class="d-block mb-1">
                  •	Email an invitation link to new developers to register from your authorized account 
                </span>
                <span class="d-block mb-1">
                  •	The invitee must click the invitation link and complete their registration to 4EVERLAND 
                </span>
                <span class="d-block mb-1">
                 •	The invitee must also have a github account registered before 8th September and must deploy one or more projects as per the deployment criteria. 
                </span>
                <span class="d-block mb-1 font-italic">
                 *Reward count is based on a weighted average divided by the number of valid invitations during the event with the counted share of 10 million of 4EVER tokens at the end of the event. 
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules4.png'),
          html: `<span class="d-block mb-1">
                  20 million 4EVER sponsorship tokens will be available to qualified projects for their long term development. All 4EVERLAND HOSTING projects are welcome to apply for Development Grant. To be eligible for the Development Grant you will need to: 
                </span>
                <span class="d-block mb-1">
                  •	Connect your domain name to the project
                </span>
                <span class="d-block mb-1">
                  •	Add the text 'Powered by 4EVERLAND' on your website footer
                </span>
                 <span class="d-block mb-1">
                  •	 Fill this form: <a href="https://www.4everland.org/firstlanding/grants/" target="_blank" style="text-decoration: none;">https://www.4everland.org/firstlanding/grants/</a>
                </span>
                <span class="d-block mb-1 font-italic">
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
