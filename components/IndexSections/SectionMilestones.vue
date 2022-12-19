<template>
  <div id="Milestones">
    <div class="front">
      <v-container class="partner-box">
        <v-row class="mile-bg">
          <v-col cols="12">
            <div class="text-box">
              <div class="text-title">Roadmap</div>
            </div>
          </v-col>
          <!-- <v-col cols="12" md="6" class="partner-tips">
            <div class="my-md-4">
              4EVERLAND is committing R&D resources to the Web3 ecosystem in the
              form of the following proposed technical contributions. At each
              stage of its life cycle, these roadmap items will be voted on via
              decision made by the core team and read the consensus of
              community, 4EVERLAND has the ability to offer the most advance
              infrastructure service which can one-click access to web3.
            </div>
          </v-col> -->
        </v-row>
      </v-container>
      <v-row class="mt-8 mt-md-16 container-wrapper">
        <!-- <v-col cols="12" ref="partnerList" class="partner-list">
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
        </v-col> -->
        <v-container>
          <div>
            <div class="time-line">
              <div class="time-line-top time-pc">
                <div class="time-line-fixed"></div>
                <div class="time-line-top-trun" @click="preview">
                  <!-- <img src="/_nuxt/img/arrow@3x.fb6f703.png" alt="" /> -->
                  <v-icon large>mdi-chevron-left</v-icon>
                </div>
                <div class="time-line-top-content" ref="partnerList">
                  <div
                    v-for="(item, index) in newRoadmap"
                    :key="index"
                    class="time-line-content-item"
                    :class="{
                      'time-line-content-item-active': active == index,
                    }"
                    :ref="active == index ? 'isNow' : null"
                    @click="choose(index)"
                  >
                    <div
                      class="time-line-content-item-icon"
                      :class="{ 'time-line-content-item-img': item.img }"
                    >
                      <v-img
                        v-if="item.img"
                        :src="item.img"
                        contain
                        class="time-line-content-item-img-img"
                      ></v-img>
                      <div
                        v-else
                        class="time-line-content-item-icon-icon"
                      ></div>
                    </div>
                    <div class="time-line-content-item-info">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
                <div class="time-line-top-trun" @click="next">
                  <v-icon large>mdi-chevron-right</v-icon>
                </div>
              </div>
              <!---->
              <div class="time-line-bottom">
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    class="d-flex align-center justify-md-center"
                  >
                    <div
                      class="time-line-bottom-title"
                      v-html="newRoadmap[active].left"
                    ></div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="time-line-bottom-info">
                      <div v-for="(it, i) in newRoadmap[active].right" :key="i">
                        <div>{{ it }}</div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <!-- <div class="time-line-bottom time-mobile">
                <div class="time-line-bottom-title">MainNet</div>
                <div class="time-line-bottom-info">
                  <div>
                    <div>•</div>
                    <div>Polkadot/Kusama ParaChain Technical Readiness</div>
                  </div>
                  <div>
                    <div>•</div>
                    <div>
                      Promote for Use Cases and Get Applications Running on
                      MainNet
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </v-container>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 8,
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
      newRoadmap: [
        {
          title: 'V1 Quark',
          left: 'V1 Quark (2021-2022)',
          right: [
            'Our Genesis product creates the network architecture of the global node collaboration, provides content storage and global acceleration service.',
          ],
          img: require(`@/assets/imgs/index/milestones/1.png`),
        },
        {
          title: '2021 Q1',
          left: 'V1 Quark',
          right: [
            '• Market research and product prototype discussion',
            '• Product design & technology development',
          ],
        },
        {
          title: '2021 Q2',
          left: 'V1 Quark',
          right: [
            '• Establish 4EVERLAND foundation and technic community',
            '• Release the V1 version of the white paper, 4EVERLAND official website online',
          ],
        },
        {
          title: '2021 Q3',
          left: 'V1 Quark',
          right: [
            '• ALPHA Launch: 4EVER-HOSTING is online, realizing Dweb hosting and other functions',
          ],
        },
        {
          title: '2021 Q4',
          left: 'V1 Quark',
          right: [
            '• BETA version: Online gateway node, storage node, data statistics service',
          ],
        },
        {
          title: '2022 Q1',
          left: 'V1 Quark',
          right: [
            '• Online bidding and lending system, hold the creation node bidding',
          ],
        },
        {
          title: '2022 Q2',
          left: 'V1 Quark',
          right: [
            '• The main network is online, a data hosting network that realizes global node collaboration',
          ],
        },
        {
          title: 'V2 Proton',
          left: 'V2 Proton (2022-2023)',
          right: [
            'We plan to open the underlying storage and network capabilities by engaging and supporting more developers to build exclusive service platforms and further expand commercialization capabilities.',
          ],
          img: require(`@/assets/imgs/index/milestones/2.png`),
        },
        {
          title: '2022 Q3',
          left: 'V2 Proton',
          right: [
            '• Launch the trusted 4EVERLAND node network.',
            '• Launch a multi-chain payment system, supporting ETH, BSC, Polygon, and other public chains.',
            '• Provide online front-end verifiable solutions to deliver more comprehensive decentralized front-end hosting services.',
            '• Complete the integration with the capabilities of Dfinity’s ecosystem.',
          ],
        },
        {
          title: '2022 Q4',
          left: 'V2 Proton',
          right: [
            '• Complete the integration of at least 3 mainstream public chains.',
            '• Deepen the integration with the Arweave ecosystem.',
            '• Enrich the functionality of Hosting and Bucket to meet the needs of developers facing different use cases.',
            '• Provide open storage and networking capabilities. Attract providers to build the upper layer for commercial applications.',
          ],
        },
        {
          title: '2023 Q1',
          left: 'V2 Proton',
          right: [
            '• The 4EVERLAND node network starts operating.',
            '• Open-source application layer code to let the community providers use it and build their projects.',
            "• Complete the integration with the capacities of Filecoin's ecosystem.",
            '• Integrate more decentralized and powerful gateway capabilities with dedicated gateways.',
          ],
        },
        {
          title: '2023 Q2',
          left: 'V2 Proton',
          right: [
            '• Launch a provider incentive model to motivate the community to build commercial applications.',
            '• Integrate more storage protocol capabilities.',
            '• Deepen the integration with ecosystem capabilities of public chains. Realize the interconnection of public chains and storage protocols.',
          ],
        },
        {
          title: 'V3 Atom',
          left: 'V3 Atom (2023-2024)',
          right: [
            'We are planning to integrate and support more heterogeneous chains such as Ethereum, BSC, Solona, Polygon, and Filecoin, etc, to implement inter-blockchain communication, multi-chain deployment, and other multi-scenario requirements. Finally, obtain the capability of Web 3.0 cloud computing.',
          ],
          img: require(`@/assets/imgs/index/milestones/3.png`),
        },
      ],
    }
  },
  mounted() {
    this.$nextTick((_) => {
      const left = this.$refs.isNow[0].offsetLeft
      const offsetWidth = this.$refs.isNow[0].offsetWidth
      const outerWidth = this.$refs.partnerList.offsetWidth
      // const windowWidth = document.documentElement.clientWidth
      const scrollLeft = left - outerWidth / 2 + offsetWidth / 2
      this.$refs.partnerList.scrollTo(scrollLeft, 0)
    })
  },
  methods: {
    choose(index) {
      this.active = index
      console.log(this.$refs.isNow)
    },
    preview() {
      let index = this.active
      index = index - 1
      if (index < 0) {
        index = 0
      }
      this.active = index
      const left = this.$refs.isNow[0].offsetLeft
      const offsetWidth = this.$refs.isNow[0].offsetWidth
      let scrollWidth = left - offsetWidth * 3
      if (scrollWidth <= 0) {
        scrollWidth = 0
      }
      this.$refs.partnerList.scrollTo({
        left: scrollWidth,
        top: 0,
        behavior: 'smooth',
      })
    },
    next() {
      let index = this.active
      index = index + 1
      if (index >= this.newRoadmap.length) {
        index = this.newRoadmap.length - 1
      }
      this.active = index
      const left = this.$refs.isNow[0].offsetLeft
      const offsetWidth = this.$refs.isNow[0].offsetWidth
      let scrollWidth = left - offsetWidth * 2
      if (scrollWidth <= 0) {
        scrollWidth = 0
      }
      this.$refs.partnerList.scrollTo({
        left: scrollWidth,
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style lang="less" scoped>
#Milestones {
  padding-bottom: 150px;
  position: relative;
  overflow: hidden;
  background: #f7fbfc;
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
        text-align: center;
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
  #Milestones {
    padding-bottom: 40px;
    .partner-box {
      padding-top: 50px;
      .text-box {
        .text-title {
          font-size: 18px;
          font-family: 'Ubuntu', sans-serif !important;
          font-weight: normal;
        }
      }
      .partner-tips {
        font-size: 12px;
        color: #051f30;
        font-family: 'Ubuntu', sans-serif !important;
        font-weight: normal;
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
<style lang="scss" scoped>
.time-line {
  // width: 1240px;
  // min-height: 510px;
  background: #fff;
  box-shadow: 0 5px 5px 0 rgb(4 0 0 / 2%);
  border-radius: 10px;
  .time-line-top {
    display: flex;
    position: relative;
    .time-line-fixed {
      position: absolute;
      top: 87px;
      left: 50%;
      margin-left: -500px;
      width: 1000px;
      height: 2px;
      background: #8272d1;
      content: '';
    }
    .time-line-top-trun {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background: #e5e0fe;
      border-radius: 50%;
      margin: 64px 36px 0;
      cursor: pointer;
    }
    .time-line-top-content {
      width: 1000px;
      overflow-x: scroll;
      display: flex;
      padding-top: 50px;
      .time-line-content-item {
        z-index: 999;
        flex-basis: 146px;
        flex-shrink: 0;
        height: 125px;
        cursor: pointer;
        border-radius: 10px;
        margin: 0 47px;
        .time-line-content-item-icon {
          margin: 24px auto 32px;
          width: 28px;
          height: 28px;
          background: #e5e0fe;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          .time-line-content-item-icon-icon {
            width: 16px;
            height: 16px;
            background: #8272d1;
            border-radius: 50%;
            margin: auto;
          }
        }
        .time-line-content-item-img {
          width: 48px;
          height: 48px;
          margin-top: 14px;
          margin-bottom: 22px;

          .time-line-content-item-img-img {
            width: 34px;
            height: 34px;
            margin: auto;
          }
        }
        .time-line-content-item-info {
          margin: 0 auto;
          text-align: center;
          height: 17px;
          font-size: 14px;
          font-family: 'Ubuntu', sans-serif !important;
          font-weight: 500;
          color: #1f1f1f;
          line-height: 7px;
        }
      }
      .time-line-content-item-active {
        background: #8272d1;
        .time-line-content-item-info {
          color: #fff;
        }
      }
    }
  }
  .time-line-bottom {
    margin-top: 51px;
    display: flex;
    padding: 0 70px;
    padding-bottom: 50px;
    .time-line-bottom-title {
      // width: 474px;
      // height: 93px;
      font-size: 30px;
      font-family: 'Ubuntu-Bold', sans-serif !important;
      font-weight: 700;
      color: #8272d1;
      line-height: 60px;
    }
    .time-line-bottom-info {
      margin-top: 16px;
      & > div {
        display: flex;
        font-size: 14px;
        font-family: 'Ubuntu-Medium', sans-serif !important;
        font-weight: 500;
        color: #000;
        line-height: 36px;
      }
    }
  }
}
@media (max-width: 960px) {
  .time-line {
    // width: 1240px;
    // min-height: 510px;
    .time-line-top {
      .time-line-top-trun {
        display: none;
      }
      .time-line-top-content {
        .time-line-content-item {
          flex-basis: 70px;
          margin: 0 5px;
        }
        .time-line-content-item-active {
          flex-basis: 146px;
        }
      }
    }
    .time-line-bottom {
      margin-top: 40px;
      padding: 0 20px;
      padding-bottom: 20px;
      .time-line-bottom-title {
        font-size: 14px;
        font-weight: 700;
        color: #8272d1;
        line-height: 20px;
      }
      .time-line-bottom-info {
        margin-top: 16px;
        & > div {
          font-size: 12px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
