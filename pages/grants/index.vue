<template>
  <v-theme-provider light>
    <div class="page-grants">
      <div class="banner pos-r">
        <v-img :src="banner" min-height="450" max-height="700" />
        <div class="pos-btm">
          <div class="wrap-1">
            <div class="con-3">
              <div
                style="
                  margin: 0 0 40px 20px;
                  font-size: 35px;
                  font-weight: bold;
                  line-height: 1.2;
                "
              >
                <div>4EVERLAND</div>
                <div>GRANTS PROGRAM</div>
              </div>
              <div class="op-9 fz-14 ta-c lh-2">
                <p>
                  4EVERLAND's Dev-Grants Program aims to ensure developers make
                  that smooth leap from Web 2.0 to Web 3.0 along with helping in
                  the growth and development of Web 3.0. We believe that all
                  your contributions would greatly benefit Web 3.0's ecosystem
                  in the long run providing support to many other promising
                  developers and teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrap-1">
        <div class="con-1">
          <div class="ta-c">
            <a
              class="grant-btn1"
              href="https://forms.gle/iMaFNYdyjWp36msS6"
              target="_blank"
              >SUBMIT DEVELOPER GRANT APPLCATION</a
            >
          </div>

          <h2>Grants Program Offers</h2>
          <v-row>
            <v-col
              v-for="(it, i) in offerList"
              :key="i"
              cols="6"
              md="3"
              class="ta-c"
            >
              <img :src="it.img" height="60" class="bdrs-100" />
              <div class="label-1 mt-2 fz-14">{{ it.label }}</div>
            </v-col>
          </v-row>

          <h2>Focus Areas</h2>
          <div class="ta-c">
            <v-img :src="focusImg" max-width="600" style="margin: auto" />
          </div>

          <grant-bottom></grant-bottom>
        </div>
      </div>
    </div>

    <!-- <v-container class="white">
      <v-row>
        <v-col class="text-center" cols="12"> </v-col>
      </v-row>
    </v-container> -->
  </v-theme-provider>
</template>
<script>
import { mdiCheckCircle } from '@mdi/js'
import GrantBottom from '@/components/GrantsSections/GrantBottom'

export default {
  components: {
    GrantBottom,
  },
  data() {
    return {
      banner: require('@/assets/imgs/grants/banner.png'),
      focusImg: require('@/assets/imgs/grants/focus.png'),
      mdiCheckCircle,
      text: [
        'Connect your domain name to the project;',
        'Add the official 4EVERLAND logo and links on their website.',
      ],
      offerList: [
        {
          label: 'Token Incentive',
          img: require('@/assets/imgs/grants/icon1.png'),
        },
        {
          label: 'Free Storage & Bandwidth',
          img: require('@/assets/imgs/grants/icon2.png'),
        },
        {
          label: 'Publicity',
          img: require('@/assets/imgs/grants/icon3.png'),
        },
        {
          label: 'Exclusive Support',
          img: require('@/assets/imgs/grants/icon4.png'),
        },
      ],
    }
  },
}
</script>

<style lang="less">
.page-grants {
  background: #1e2126;
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  a {
    text-decoration: none;
  }
  .grant-btn1 {
    font-weight: bold;
    color: #fff;
    background: linear-gradient(0deg, #249af7 0%, #dfa5fa 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid;
    border-image: linear-gradient(90deg, #dda6fd, #2d90e6) 1 1;
    display: inline-block;
    padding: 10px 20px;
  }
  h2 {
    font-size: 26px;
    margin: 70px 0 50px;
  }
  .bd-1 {
    background: #1a1b22;
    border: 1px solid #393f45;
  }
  .go-img {
    right: 10%;
    top: -40px;
    width: 40%;
    &.mobile {
      width: 30%;
      top: -60px;
      right: 20px;
    }
  }
}
</style>
