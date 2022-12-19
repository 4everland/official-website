<template>
  <div>
    <v-container>
      <div class="bucket-block my-16 py-16">
        <div class="text-h3 tit2 mb-16">
          Top-Notch Platform for NFT Media Management
        </div>
        <v-row>
          <v-col v-for="item in list" :key="item.tit" cols="12" md="4" lg="4">
            <div class="img-box mb-10">
              <v-img
                contain
                class="ma-auto"
                :src="item.img"
                max-height="250px"
              ></v-img>
            </div>
            <div class="text-h4 item-tit mb-10">{{ item.tit }}</div>
            <div class="text-h5 item-content">{{ item.content }}</div>
          </v-col>
        </v-row>
      </div>
      <div class="bucket-block my-16 py-16">
        <div class="text-h2 tit1 mb-16">
          BUCKET is Open, Powerful, and Dedicated to You
        </div>
        <div class="text-h3 tit2 mb-16">
          Upload & Pin Files to IPFS Smoothly
        </div>
        <div class="text-h5 desc">
          Upload your files smoothly to IPFS with UI, CLI, or SDK. The built-in
          pinning tool makes uploading and pinning to IPFS a breeze.
        </div>
        <v-row>
          <v-col v-for="item in imgs" :key="item.name" cols="12" md="4" lg="4">
            <div class="text-h4 name mt-10">{{ item.name }}</div>
            <v-img class="ma-auto" :src="item.img" width="100%"></v-img>
          </v-col>
        </v-row>
      </div>
      <!-- <div class="bucket-block my-16 py-16">
        <div class="text-h3 tit2 mb-16">Get Started for Free</div>
        <div class="text-h5 desc">
          4EVERLAND BUCKET UI enables you to upload, pin, manage, view, and drag
          and drop files. Easily manage your IPFS file requirements from one
          dashboard.
        </div>
        <div class="my-16">
          <v-img
            class="ma-auto"
            :src="require('@/assets/imgs/bucket/build.png')"
            width="100%"
            max-width="1000px"
          ></v-img>
        </div>
      </div> -->
      <div class="bucket-block my-16">
        <v-row class="d-flex align-center">
          <v-col cols="12" md="7" lg="7">
            <v-img
              contain
              :src="require('@/assets/imgs/bucket/build.png')"
            ></v-img>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="4" lg="4">
            <div class="text-h3 tit2 mb-16 text-left">
              Build the Next Unicorn
            </div>
            <div class="text-h5 desc text-left">
              Bucket was designed for developers. Thus we provide APIs and SDKs
              that empower you in building an application, an NFT marketplace,
              or anything else.
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img: require('@/assets/imgs/bucket/ntf1.png'),
          tit: 'No restrictions on sharing NFT',
          content:
            'Share your NFT anytime, anyway, and anywhere. Designed for you, beautiful, vibrant, and brandable.',
        },
        {
          img: require('@/assets/imgs/bucket/ntf2.png'),
          tit: 'Fast and reliable',
          content:
            'Waiting is the worst part of any platform. We ensure that NFTs with 4EVERLAND are fast and reliable for everyone.',
        },
        {
          img: require('@/assets/imgs/bucket/ntf3.png'),
          tit: 'Easy to use',
          content:
            'Uploading a file is easy. We are here to support you if you have any questions.',
        },
      ],
      imgs: [
        {
          img: require('@/assets/imgs/bucket/cli.png'),
          name: 'CLI',
        },
        {
          img: require('@/assets/imgs/bucket/ui.png'),
          name: 'UI',
        },
        {
          img: require('@/assets/imgs/bucket/sdk.png'),
          name: 'SDK',
        },
      ],
    }
  },
}
</script>
<style scoped>
.bucket-block {
  text-align: center;
}
.tit1 {
  color: #333;
  font-weight: bold;
}
.tit2 {
  color: #484d72;
}
.desc {
  color: #666;
}
.img-box {
  max-height: 250px;
}
.item-tit {
  height: 80px;
  color: #484d72;
}
.item-content {
  color: #666;
}
.name {
  color: #484d72;
  font-weight: bold;
}
</style>
