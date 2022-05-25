<template>
  <div id="IpfsTop">
    <v-container class="py-12">
      <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <v-col
          class="d-flex flex-column justify-center"
          cols="12"
          md="6"
          lg="6"
        >
          <div
            class="text-h3 font-weight-black"
            style="max-width: 600px; color: #132642"
          >
            IPFS GATEWAY
          </div>
          <div
            class="text-h6 mt-12 font-weight-blod"
            style="max-width: 800px; color: #6c7789"
          >
            The IPFS gateway owns the content that can acquire the IPFS network
            by itself and deliver it to users via HTTPS. 4EVERLAND gateways
            offer global acceleration, custom domain, and SSL certificate
            technology to chaise better performance. Start to use IPFS gateways
            on the Open Web now!
          </div>
          <p class="mt-16">
            <v-btn
              href="https://ipfs.4everland.io"
              target="_blank"
              tile
              class="start-btn"
              height="60"
              color="#9989cc"
              >Public Gateway</v-btn
            >
            <v-btn
              :href="hosting_web"
              target="_blank"
              tile
              class="start-btn"
              height="60"
              color="#76a9f4"
              >Dedicated Gateway</v-btn
            >
          </p>
        </v-col>
        <v-col
          class="d-flex align-center justify-center pa-10"
          cols="12"
          md="6"
          lg="6"
        >
          <img
            alt="top-banner"
            style="width: 100%; max-width: 1000px"
            src="~/assets/imgs/ipfs/top@2x.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
#IpfsTop {
  padding: 70px 0;
  background: linear-gradient(150deg, #aaeaff, #f2ffe9);
}
.text-nowrap {
  white-space: nowrap;
}
.start-btn {
  width: 240px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.start-btn:first-child {
  margin-right: 18px;
}
</style>
