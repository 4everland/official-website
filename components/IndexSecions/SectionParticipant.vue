<template>
  <v-theme-provider light>
    <div id="participants">
      <v-container class="py-16 px-8">
        <h3
          class="
            text-h3
            font-weight-light
            text-center
            mb-16
            grey--text
            text--darken-4
          "
        >
          Participant
        </h3>
        <v-row>
          <v-col
            v-for="part in participants"
            :key="part.title"
            cols="12"
            lg="6"
            md="6"
          >
            <v-card flat class="participant">
              <v-card-title>
                <img style="width: 45px" :src="part.img" />
                <span class="ml-4">{{ part.title }}</span>
              </v-card-title>
              <v-card-text>
                <p>{{ part.desc }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-theme-provider>
</template>
<script>
export default {
  data() {
    return {
      participants: [
        {
          title: 'Gateway Provider',
          img: require('~/assets/imgs/index/c_icon1.png'),
          desc: 'The gateway provider provides an access acceleration service for DWeb by deploying gateway node.The gateway provider is acquired through the same auction process as the storage provider, and successful bidders are awarded a gateway provider seat and enjoy network rewards, as well as developer payments for traffic.',
        },
        {
          title: 'Storage Provider',
          img: require('~/assets/imgs/index/c_icon2.png'),
          desc: 'Storage Providers participate in global Swarm construction by deploying Storage Provider programs; they participate in Storage Provider Auctions to obtain Storage Provider Slots. If they succeed in the auctions, they can obtain Storage Provider Slots and enjoy network rewards.',
        },
        {
          title: 'Challenger',
          img: require('~/assets/imgs/index/c_icon3.png'),
          desc: 'Challenger challenges all Storage Providers to proofs of storage, wait for feedback from the challenged providers, announce the response of challenged providers to the community, and propose to punish inactive providers.',
        },
        {
          title: 'Developer',
          img: require('~/assets/imgs/index/c_icon4.png'),
          desc: 'Developers are the core users of 4EVERLAND who use the 4EVERLAND developer applications, such as publishing DWeb through Hosting App or publishing content through @4everland/cli, and pay storage and traffic fees to the network.',
        },
      ],
    }
  },
}
</script>
<style scoped>
#participants {
  background: #fff;
}
.participant {
  min-height: 260px;
}
</style>
