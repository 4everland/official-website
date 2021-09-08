<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div
          class="main-bg"
          :style="
            $vuetify.breakpoint.smAndDown
              ? ''
              : 'padding: 0 72px; padding-top: 67px'
          "
        >
          <div class="font-24 fw-bold">
            4EVERLAND the 'First Landing' event aims to discover more developers
            to reach Web3.0. 50million 4EVER is the reward for deploying
            projects on 4EVERLAND, where provides global acceleration and
            storage network service.
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
              placeholder="Enter your E-mail to get event notes →"
              type="email"
              class="subscribe-input"
              :class="{
                'mr-8': !$vuetify.breakpoint.smAndDown,
                'mb-4': $vuetify.breakpoint.smAndDown,
              }"
            />
            <v-btn
              :loading="loading"
              :disabled="disabled"
              rounded
              id="subscribeBtn"
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
          <div class="font-18 mb-10">
            Since 4EVERLAND HOSTING was live on the 16th of August it was
            popular for developers even for such a short period. At present,
            many applications are deployed in 4EVERLAND for web hosting base on
            IPFS. Today, we are pleased to announce the launch of the 4EVERLAND
            the 'First Landing' event with 50 million of 4EVER to reward all
            developers who use the 4EVER-HOSTING service. Meanwhile, all
            participants will receive limited NFTs in rewards.
          </div>
          <div class="font-18 mb-10">
            4EVERLAND the 'First Landing' aims to find more outstanding
            developers and help them efficiently develop Web3.0 applications. It
            aims to encourage more developers to deploy more applications in
            4EVERLAND with a variety of rewards also provides global
            acceleration and storage network service.
          </div>
          <div class="font-18 mb-10">
            We sincerely invite all developers from all stages of projects to
            participate. You will build a brand new Web3.0 application in
            4EVERLAND and rewards.
          </div>
          <div class="font-36">Event dates</div>
          <div class="font-18 mb-10">
            The event starts at 00:00 15th September UTC<br />
            The event ends anytime on 7th - 14th October UTC(Randomize end time
            to prevent malicious competition)
          </div>
          <div class="font-36 mb-6">Reward rules</div>
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
              <div class="font-16" v-html="item.html"></div>
            </v-col>
          </v-row>
          <div class="font-36 mb-6">Terms of service</div>
          <div class="font-16 mb-4">
            • 4EVERLAND reserves the right of final interpretation of the 'First
            landing' event and the right to determine the rules and rewards.
          </div>
          <div class="font-16 mb-4">
            • It is not allowed such as unfair competition scalping, plagiarism
            or any malicious competition. 4EVERLAND retains the right to
            disqualify them.
          </div>
          <div class="font-16 mb-4">
            • Any 4EVERLAND system related issues please report to
            <a href="mailto:contract@4everland.org">contract@4everland.org</a>
          </div>
          <div class="font-16 mb-4">
            • Join 4EVERLAND
            <a href="https://discord.gg/sxtHDvvpuT" target="_blank">Discord</a>
            to find solutions if you have problems using 4EVERLAND services.
          </div>
          <div class="font-16 mt-12">
            Please join our
            <a href="https://discord.gg/sxtHDvvpuT" target="_blank">Discord</a>
            to get new updates of 4EVERLAND. Meanwhile, report any bugs related
            to 4EVERLAND will be rewarded in the '
            <a href="https://hosting.4everland.org/#/bug-bounty" target="_blank"
              >Bug Bounty</a
            >
            ' event.
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      loading: false,
      disabled: true,
      rules: [
        {
          img: require('~/assets/imgs/firstlanding/rules1.png'),
          html: `<span class="d-block mb-1">
                  There are a total of 10 million 4EVER to reward all developers
                  participating in the 'First Landing' event of deployment. The
                  method of participation are as follows:
                </span>
                <span class="d-block mb-1">
                   • Users who have completed one or more deployments in
                  4EVER-HOSTING before the 8th of September will be rewarded
                  2000 4EVER.
                </span>
                <span class="d-block mb-1">
                   • All developers successfully deploy a project before the end
                  of the event each account will be rewarded 1000 4EVER at the
                  end of the event.
                </span>
                <span class="d-block mb-1">
                   • If parks a domain name in a project, the ones will receive an
                  additional 2000 4EVER rewards.
                </span>
                <span class="d-block mb-1">
                   • It will only be rewarded once per account, per address and
                  first-level domain name.
                </span>
                <span class="d-block mb-1">
                   • The rewards distribute to the ones who participate first. The
                  later comers might not receive rewards if all 4EVER is
                  distributed.
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules2.png'),
          html: `<span class="d-block mb-1">
                   • There are a total of 10 million 4EVER to reward developers according to their projects' total users.
                </span>
                <span class="d-block mb-1">
                   • All successfully deployed projects and connected domain names to win your share in 10 million 4EVER in rewards;
                </span>
                <span class="d-block mb-1">
                   • The rewards for each participating developer counts as a project's total users divided by all projects users multiple 10 million 4EVER.
                </span>
                <span class="d-block mb-1">
                   • One account can win up to 100,000 4EVER in rewards.
                </span>
                <span class="d-block mb-1">
                   • Template deployments do not count as valid participates.
                </span>
                <span class="d-block mb-1">
                   • This event is only for the ones who registered Github accounts before the 8th of September.
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules3.png'),
          html: `<span class="d-block mb-1">
                 Inviting developers to win your share of 4EVER in rewards. Rules are as follows:
                </span>
                <span class="d-block mb-1">
                   • All accounts can invite developers to participate in the event.
                </span>
                <span class="d-block mb-1">
                   • All developers successfully deploy a project before the end
                  of the event each account will be rewarded 1000 4EVER at the
                  end of the event.
                </span>
                <span class="d-block mb-1">
                   • It requires the invitee to log in to 4EVERLAND through the invitation link for the first time to complete the invitation;
                </span>
                <span class="d-block mb-1">
                   • The Github accounts to log in 4EVERLAND must register before the 8th of September and deployed one or more projects  to complete the valid invitation;
                </span>
                <span class="d-block mb-1">
                   • Rewards count as a weighted average divided by the number of valid invitations during the event to wit the counted share of 10million of  4EVER at the end of the event
                </span>`,
        },
        {
          img: require('~/assets/imgs/firstlanding/rules4.png'),
          html: `<span class="d-block mb-1">
                  20 million of 4EVER will be sponsored qualified projects for their long term development. All projects are welcomed to apply for Dev-Grants, which requires deployed a project on 4EVER-HOSTING.To help and support qualified projects, each project will receive plenty of 4EVER in rewards. Rules are as follows:
                </span>
                <span class="d-block mb-1">
                   • It requires connecting your domain names for all applied projects and one domain name only qualifies for one project.
                </span>
                <span class="d-block mb-1">
                   • Plagiarism and illegally copied project are not qualified for Grants;
                </span>
                <span class="d-block mb-1">
                   • It requires applied projects to add the band logo of 4EVERLAND and links on their website.
                </span>
                <span class="d-block mb-1">
                   • This event is valid for the long term until all rewards are given. A new round of grants may open soon.
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
            this.$dialog.message.success('Subscribed', {
              position: 'top',
              timeout: 2500,
              actions: [
                {
                  text: 'OK',
                  color: 'green accent-4',
                  key: true,
                },
              ],
            })
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
<style scoped>
.main-bg {
  background-image: url('~/assets/imgs/firstlanding/main-bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 'top';
}
a {
  text-decoration: none;
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
  background-color: #c1c1c1 !important;
  color: #fff !important;
}
</style>
