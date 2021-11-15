<template>
  <div class="first-leap">
    <div class="pos-r">
      <v-img :src="banner" height="480" />
      <div class="pos-mask">
        <div class="wrap-1">
          <div class="con-1">
            <h1 class="mt-16">Join the 4EVERLAND’s <br />First Leap Program</h1>
            <div class="mt-15">
              <v-btn
                href="https://hosting.4everland.org"
                target="_blank"
                large
                class="mr-6"
                style="
                  background: linear-gradient(90deg, #ffb830, #e31313, #ff30f8);
                "
              >
                <b>START DEPLOYING</b>
              </v-btn>
              <v-btn
                href="https://docs.google.com/forms/d/e/1FAIpQLScjEs1xwbLIlwjQCKTsSb6Yr3dq5BztjXmZ4SYiwXBZncjspQ/viewform"
                target="_blank"
                color="#3e4cd0"
                width="150"
                large
              >
                <b>APPLY</b>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-1 pb-0 s2-bg">
      <div class="con-1">
        <h2>The First Leap</h2>
        <div class="desc-1">
          <p>
            Since its launch, 4EVERLAND has provided tens of thousands of
            developers’ project front-ends with permanent storage based on IPFS
            and compatibility options to the http/https protocols along with
            global acceleration services.
          </p>
          <p>
            In order to promote the development of web3, we announce the
            initiation of the 'First Leap' program, provide no less than 15
            million 4EVER and at least $150, 000 rights to encourage outstanding
            projects or individual developers, separate the front-end from
            centralized hosting services.
          </p>
          <p>
            Take the leap! Make the Move! Migrate Your Website Smoothly Using
            4EVERLAND's Hosting Services!
          </p>
        </div>

        <h2>Qualification</h2>
        <div class="desc-1">
          <p>
            Everyone with a keen, proactive interest in the 4EVERLAND’s
            ecosystem is more than welcome to join or participate in the 'First
            Leap' program. We are looking for a diverse group of dedicated
            supporters who can contribute and play an active role in the future
            of 4EVERLAND.
          </p>
          <p>You will make a good fit if you:</p>
          <ul>
            <li>
              <span class="mr-3">✅</span>Have been officially invited by the
              4EVERLAND team, or are the projects or individual applicants who
              have certain influence.
            </li>
            <li>
              <span class="mr-3">✅</span>Are the project member or individual
              owner of the deployed webpage.
            </li>
            <li>
              <span class="mr-3">✅</span>Have completed the front-end
              deployment on 4EVERLAND.
            </li>
            <li>
              <span class="mr-3">✅</span>Have reliable access data on the
              deployed webpage.
            </li>
          </ul>
        </div>

        <h2 style="margin-bottom: 12px; padding-bottom: 30px">Rewards</h2>
      </div>
    </div>

    <rewards></rewards>
  </div>
</template>

<script>
import Rewards from '@/components/ActSections/FirstleapRewards.vue'

export default {
  components: {
    Rewards,
  },
  data() {
    return {
      banner: require('@/assets/imgs/act/firstleap/top-bg.jpeg'),
    }
  },
}
</script>

<style lang="scss">
.s2-bg {
  background: url('@/assets/imgs/act/firstleap/s2-bg.png') right bottom
    no-repeat;
  background-size: contain;
}
.first-leap {
  h2 {
    font-size: 26px;
    margin: 40px 0 30px;
  }
  .desc-1 {
    font-size: 14px;
    line-height: 1.8;
    opacity: 0.8;
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-top: 5px;
    }
  }
}
</style>
