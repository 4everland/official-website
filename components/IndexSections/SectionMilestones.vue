<template>
  <div id="Partner">
    <div class="front">
      <v-container class="partner-box">
        <v-row class="mile-bg">
          <v-col cols="12">
            <div class="text-box">
              <div class="text-title">MILESTONES</div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="partner-tips">
            <div class="my-md-4">
              4EVERLAND is committing R&D resources to the Web3 ecosystem in the
              form of the following proposed technical contributions. At each
              stage of its life cycle, these roadmap items will be voted on via
              decision made by the core team and read the consensus of
              community, 4EVERLAND has the ability to offer the most advance
              infrastructure service which can one-click access to web3.
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-row class="mt-16 container-wrapper">
        <v-col cols="12" ref="partnerList" class="partner-list">
          <div
            v-for="(item, index) in roadmap"
            :key="index"
            class="item-list"
            :ref="item.isNow ? 'isNow' : null"
          >
            <div class="item-img-box">
              <div class="partner-item-name">{{ item.date }}</div>
              <div
                class="stone-img-box"
                :class="{ 'isnow-stone-img-box': item.isNow }"
              >
                <v-img
                  class="milestones-img"
                  :max-height="item.isNow ? 100 : 80"
                  :max-width="item.isNow ? 100 : 80"
                  :src="
                    require(`@/assets/imgs/index/milestones/${index + 1}.png`)
                  "
                ></v-img>
              </div>
              <div class="partner-item-name">
                {{ item.tips }}
              </div>
            </div>
          </div>
          <div class="under-line"></div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roadmap: [
        {
          date: '2021 Q1',
          tips: 'Market R&D and Product prototype',
        },
        {
          date: 'March 2021',
          tips: 'Product design and tech development',
        },
        {
          date: 'May 2021',
          tips: 'Establish foundation and tech community',
        },
        {
          date: 'June 2021',
          tips: 'Website launch and white paper release',
        },
        {
          date: 'August 2021',
          tips: 'Alpha version: Hosting is online',
        },
        {
          date: 'December 2021',
          tips: 'Beta version: gateway and storage node live',
        },
        {
          date: 'Q1 2022',
          tips: 'Online bidding and lending system',
        },
        {
          date: 'Q2 2022',
          tips: 'The main network is online',
        },
        {
          date: 'Q3 June 2022',
          tips: 'Launch trust node network',
        },
        {
          date: 'Q3 July 2022',
          tips: 'Launch a multi-chain payment syetem',
        },
        {
          date: 'Q3 August 2022',
          tips: "Complete integration of Difinity's ecosystem",
          isNow: true,
        },
        {
          date: 'Q3 September 2022',
          tips: 'Provide more decentralized hosting service',
        },
        {
          date: 'Q4 Octorber 2022',
          tips: 'Complete integration of 3 mainstream public chains',
        },
        {
          date: 'Q4 November 2022',
          tips: 'Complete integration of Arweave ecosystem',
        },
        {
          date: 'Q4 Dec 2022',
          tips: 'Provide open underlying capabilities',
        },
        {
          date: 'Q1 January 2023',
          tips: 'Launch node network without barriers to entry',
        },
        {
          date: 'Q1 February 2023',
          tips: 'Open source all application layer codes',
        },
        {
          date: 'Q1 March 2023',
          tips: 'Complete integration of Filecoin ecosystem',
        },
        {
          date: 'Q1 April 2023',
          tips: 'More decentralized and powerful gateway',
        },
        {
          date: 'Q2 May 2023',
          tips: 'Launch provider incentive model',
        },
        {
          date: 'Q2 June 2023',
          tips: 'Integrate more storage protocol capabilities',
        },
        {
          date: 'Q2 July 2023',
          tips: 'Integrate more storage protocol capabilities',
        },
        {
          date: 'Q3-2024',
          tips: 'Launch virtual machine container',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick((_) => {
      const left = this.$refs.isNow[0].offsetLeft
      const offsetWidth = this.$refs.isNow[0].offsetWidth
      const windowWidth = document.documentElement.clientWidth
      const scrollLeft = left - windowWidth / 2 + offsetWidth / 2
      this.$refs.partnerList.scrollTo(scrollLeft, 0)
    })
  },
  methods: {},
}
</script>
<style lang="less" scoped>
#Partner {
  padding-bottom: 150px;
  position: relative;
  overflow: hidden;
  .front {
    position: relative;
    z-index: 7;
  }
  .partner-box {
    padding-top: 86px;
    .mile-bg {
      background-image: url('@/assets/imgs/index/milestones/bg.png');
      background-position: top right;
      background-size: contain;
    }
    .partner-tips {
      font-size: 14px;
      text-align: left;
      color: #051f30;
      font-family: 'Ubuntu-Medium', sans-serif !important;
      font-weight: 500;
    }
    .text-box {
      .text-title {
        font-size: 45px;
        text-align: left;
        color: #051f30;
        font-family: 'Ubuntu-Bold', sans-serif !important;
        font-weight: 500;
      }
    }
  }

  .container-wrapper {
    overflow: hidden;
    position: relative;
    .partner-list {
      display: flex;
      padding: 0 100px;
      overflow: scroll hidden;
      .item-list {
        display: flex;
        align-items: flex-end;
        z-index: 7;
      }
      .item-img-box {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .partner-item-name {
        max-width: 140px;
        font-size: 14px;
        font-family: 'Ubuntu-Medium', sans-serif !important;
        color: #000;
        font-weight: 500;
        text-align: center;
        margin: 0 auto;
      }
      .stone-img-box {
        width: 110px;
        height: 110px;
        padding: 15px;
        border-radius: 50%;
        box-shadow: 0 0 8px 0 #ccc inset;
        margin: 40px;
        background-color: #fff;
        .milestones-img {
          margin: auto;
        }
      }
      .isnow-stone-img-box {
        width: 125px;
        height: 125px;
        box-shadow: 0 0 8px 0 #8a7bd4 inset, 0 0 20px 8px #8a7bd4;
        margin: 36px 40px;
      }
      .under-line {
        background-color: #000;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 120px;
        left: 0;
        z-index: 0;
      }
    }
  }
}

::-webkit-scrollbar {
  display: none;
}

@media (max-width: 960px) {
  #Partner {
    padding-bottom: 40px;
    .partner-box {
      padding-top: 86px;
      .partner-tips {
        font-size: 12px;
        color: #051f30;
        font-family: 'Ubuntu', sans-serif !important;
        font-weight: normal;
      }
      .text-box {
        .text-title {
          font-size: 14px;
          font-family: 'Ubuntu', sans-serif !important;
          font-weight: normal;
        }
      }
    }

    .container-wrapper {
      overflow: hidden;
      position: relative;
      .partner-list {
        display: flex;
        padding: 0 100px;
        overflow: scroll hidden;
        .item-list {
          display: flex;
          align-items: flex-end;
          z-index: 7;
        }
        .item-img-box {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: baseline;
        }
        .partner-item-name {
          max-width: 140px;
          min-height: 36px;
          font-size: 12px;
          font-family: 'Ubuntu', sans-serif !important;
          font-weight: normal;
        }
        .stone-img-box {
          width: 60px;
          height: 60px;
          padding: 6px;
          margin: 23px;
        }
        .isnow-stone-img-box {
          width: 65px;
          height: 65px;
          margin: 18px 20px;
        }
        .under-line {
          top: 90px;
        }
      }
    }
  }
}
</style>
