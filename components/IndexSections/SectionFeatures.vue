<template>
  <v-container id="feature" class="py-16 px-8">
    <img
      src="~/assets/imgs/index/red@2x.png"
      class="bg-1 d-none d-md-flex d-lg-flex"
    />
    <img
      src="~/assets/imgs/index/blue@2x.png"
      class="bg-2 d-none d-md-flex d-lg-flex"
    />
    <h3 class="text-h3 font-weight-light text-center mb-16">Feature</h3>
    <v-row>
      <v-col
        v-for="feature in features"
        :key="feature.title"
        cols="12"
        lg="4"
        md="4"
        sm="12"
      >
        <v-card class="rounded-xl feature d-flex flex-column">
          <v-card-title class="feature-title text-center">
            <img :src="feature.icon" class="mx-4" />
            <span class="font-weight-light">{{ feature.title }}</span>
          </v-card-title>
          <div class="feature-body mx-3 mb-3">
            <div class="feature-desc text--secondary pa-6">
              {{ feature.desc }}
            </div>
            <div class="feature-list px-6">
              <p
                v-for="item in feature.items"
                :key="item"
                class="d-flex align-start"
              >
                <img
                  src="~/assets/imgs/index/check@2x.png"
                  class="feature-list-check"
                />
                <span class="ml-2">{{ item }}</span>
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Global Acceleration',
          icon: require('~/assets/imgs/index/global@2x.png'),
          desc: 'The consensus-driven Swarm network, improves network throughput massively and high availability, provides more efficient and fast Web3.0 access for global developers.',
          items: [
            'Decentralized gateway',
            'Distributed storage',
            'Data I/O optimization',
          ],
        },
        {
          title: 'Privacy Protection',
          icon: require('~/assets/imgs/index/privacy@2x.png'),
          desc: '4EVERLAND does not require KYC, that ensures user anonymity and data security.',
          items: [
            'Anonymous account system',
            'No centralized database',
            'On-chain payment',
          ],
        },
        {
          title: 'Distributed Storage',
          icon: require('~/assets/imgs/index/distributed@2x.png'),
          desc: '4EVERLAND builds a Swarm distributed storage network to achieve data availability and reliability.',
          items: [
            'Distributed PIN with global multi-node storage',
            'TEE-based Proof of Storage Challenge (PoSC)',
            'Based on IPFS network',
          ],
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
#feature {
  position: relative;
  .bg-1 {
    position: absolute;
    left: -20%;
    top: -40%;
  }
  .bg-2 {
    position: absolute;
    right: -20%;
    bottom: -40%;
  }
  .feature {
    position: relative;
    height: 100%;
    min-height: 540px;

    .feature-title {
      white-space: nowrap;
      background-color: #2b85fb;
    }
    .feature-body {
      border: 1px solid #333;
      border-top: 0;
      height: 100%;
      .feature-desc {
        min-height: 180px;
      }
      .feature-list {
        p {
          line-height: 18px;
        }
      }
    }
  }
}
</style>
