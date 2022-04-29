<template>
  <div id="bucketlogin">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-center my-16">
            <div class="text-h5 font-weight-black purple-color mb-8">
              Take Your Web3 Storage Needs to the Next Level
            </div>
            <div class="text-caption grey--text text--darken-2">
              Store your NFTs and metadata in a fast and convenient way with a
              web3 aggregator
            </div>
            <div class="login-box pt-8 mt-16">
              <div class="text-h5 font-weight-black purple-color mb-5">
                Connect
              </div>
              <div class="text-caption grey--text text--darken-2 mb-7">
                Connect your wallet to access the Bucket
              </div>
              <v-btn
                class="d-block text-subtitle-1 font-weight-black deep-purple darken-3 ma-auto mb-6"
                x-large
                @click="connectOverlay = true"
                >Connect Wallet</v-btn
              >
              <v-btn plain text color="#666" @click="onLogin"
                >Continue with GitHub</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="connectOverlay" width="500">
      <div class="connect-box pa-8">
        <div class="text-h5 font-weight-black purple-color mb-5">
          Connect Wallet
        </div>
        <div class="text-caption grey--text text--darken-2 mb-7">
          After connecting to your wallet, you'll be able to make changes in
          custom settings. Pleses select the Ethereum Mainnet network.
        </div>
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex align-center">
            <v-img
              max-height="36"
              max-width="36"
              :src="require('~/assets/imgs/bucket/metamask.png')"
            ></v-img>
            <span class="text-subtitle-1 font-weight-black purple-color ml-3"
              >MetaMask</span
            >
          </div>
          <v-btn
            class="text-subtitle-1 font-weight-black"
            color="#1583fb"
            @click="connect"
            >Connect</v-btn
          >
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="gitOverlay" width="500">
      <div class="connect-box pa-14">
        <div class="text-caption grey--text text--darken-2 mb-7">
          The Git account is not registered on the bucket, <br />Please use your
          wallet to log in
        </div>
        <v-btn
          class="text-subtitle-1 font-weight-black px-10"
          color="#1583fb"
          @click="gitOverlay = false"
          >OK</v-btn
        >
      </div>
    </v-dialog>
    <v-dialog v-model="lockOverlay" width="500">
      <div class="connect-box pa-14">
        <div class="text-caption grey--text text--darken-2 mb-7">
          Metamask is locked, please open the extension before continuing.
        </div>
        <v-btn
          class="text-subtitle-1 font-weight-black px-10"
          color="#1583fb"
          @click="lockOverlay = false"
          >RETRY</v-btn
        >
      </div>
    </v-dialog>
  </div>
</template>

<script>
import contracts from '@/contracts'

const authApi = process.env.AUTH_URL
const DASHBOARD_HOST = process.env.DASHBOARD_HOST
export default {
  components: {},
  data() {
    return {
      connectOverlay: false,
      gitOverlay: false,
      lockOverlay: false,
      accounts: '',
    }
  },
  mounted() {
    const code = this.$route.query.code
    if (code) {
      this.getAuth(code)
    }
  },
  methods: {
    async onLogin() {
      try {
        const params = {
          platform: 'github',
          appName: 'BUCKET',
          entrance: 1,
        }
        const { data } = await this.$axios.get(`${authApi}/login`, {
          params,
        })
        location.href = data.data.login_url
      } catch (error) {
        console.log(error)
      }
    },
    async getAuth(code) {
      try {
        const { data } = await this.$axios.post(`${authApi}/auth/${code}`)
        if (data.code === 430) {
          this.gitOverlay = true
        }
        if (data.code === 200 && data.data.stoken) {
          location.href = `${DASHBOARD_HOST}/login?stoken=${data.data.stoken}`
        }
      } catch (error) {
        console.log(error)
      }
    },
    async connect() {
      if (!window.ethereum) {
        window.open('https://metamask.io/download.html', '_blank')
        return
      }

      const isUnlocked = await window.ethereum._metamask.isUnlocked()
      if (!isUnlocked) {
        console.log('Metamask has been locked, please unlock it.')
        this.connectOverlay = false
        this.lockOverlay = true
        return
      }

      let accounts = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (accounts.length === 0) {
        accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
      }

      this.$axios.get(`${authApi}/web3code/${accounts[0]}`).then((res) => {
        console.log(res)
        this.accounts = accounts[0]
        this.sign(res.data.data.nonce)
      })
      //   window.location.reload();
    },
    async sign(nonce) {
      try {
        const accounts = this.accounts
        this.msg = nonce
        const signature = await contracts.signer.signMessage(this.msg)
        const data = {
          signature,
          appName: 'BUCKET',
        }
        this.$axios
          .post(`${authApi}/web3login/${accounts}`, data)
          .then((res) => {
            if (res.data.data.stoken) {
              location.href = `${DASHBOARD_HOST}/login?stoken=${res.data.data.stoken}`
            }
          })
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
<style scoped lang="less">
#bucketlogin {
  background-color: #fff;
  padding-bottom: 150px;
}
.purple-color {
  color: #484d72;
}
.login-box {
  width: 100%;
  max-width: 500px;
  height: 280px;
  margin: 0 auto;
  box-shadow: 0 6px 7px -4px rgb(244 249 255), 0 11px 15px 1px rgb(244 249 255),
    0 4px 20px 3px rgb(244 249 255) !important;
}
.connect-box {
  width: 500px;
  min-height: 200px;
  background-color: #fff;
  border-radius: 15px;
  text-align: center;
  margin: 0 auto;
}
</style>
