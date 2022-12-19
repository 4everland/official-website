<template>
  <div id="EnsTop">
    <v-container class="py-12">
      <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <v-col
          class="d-flex flex-column justify-center"
          cols="12"
          md="7"
          lg="7"
        >
          <div class="text-h4 font-weight-black" style="color: #132642">
            Add ENS/SNS Domains to Websites on IPFS
          </div>
          <div
            class="text-h6 mt-12 font-weight-blod"
            style="max-width: 600px; color: #6c7789"
          >
            You can host any website in a truly decentralized way by using DNS
            on IPFS. This means your website becomes censorship-resistant,
            immutable, and hosted on a decentralized network.
          </div>
          <p class="mt-16">
            <v-btn
              :href="hosting_web"
              target="_blank"
              tile
              class="start-btn"
              height="60"
              color="#452c92"
              >TRY FOR FREE</v-btn
            >
          </p>
        </v-col>
        <v-col
          class="d-flex align-center justify-center"
          cols="12"
          md="5"
          lg="5"
        >
          <img
            alt="top-banner"
            style="width: 100%; max-width: 1000px"
            src="~/assets/imgs/decentralise/top@2x.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
#EnsTop {
  padding: 70px 0;
  background: linear-gradient(150deg, #aaeaff, #f2ffe9);
}
.text-nowrap {
  white-space: nowrap;
}
.start-btn {
  width: 240px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
</style>
