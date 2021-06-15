<template>
  <div class="roadmap-content">
    <div class="security-content">
      <h3 class="block-title" id="roadmap">Roadmap</h3>

      <div class="pc">
        <img
          class="left-icon"
          @click="leftChange"
          src="/imgs/left@2x.png"
          alt=""
        />
        <img
          class="right-icon"
          @click="rightChange"
          src="/imgs/right@2x.png"
          alt=""
        />

        <div class="roadmap-swpier-view">
          <div class="roadmap-list" style="margin-left: 40px">
            <div
              v-for="(item, index) in roadmap"
              v-if="index % 2 == 0"
              v-bind:key="index"
              class="roadmap-item"
            >
              <div
                class="color-line"
                :style="{ backgroundColor: item.color }"
              ></div>
              <div class="roadmap-mini-title">{{ item.title }}</div>

              <div class="roadmap-content-text">{{ item.content }}</div>
            </div>
          </div>

          <div
            class="time-line"
            :style="{ width: (220 * roadmapNum) / 2 + 240 + 'px' }"
          ></div>

          <div
            class="time-line2"
            :style="{ width: (220 * activeNum) / 2 + 'px' }"
          ></div>

          <div class="roadmap-list" style="margin-left: 80px">
            <div
              v-for="(item, index) in roadmap"
              v-if="index % 2 == 1"
              v-bind:key="index"
              class="roadmap-item"
            >
              <div
                class="color-line"
                :style="{ backgroundColor: item.color }"
              ></div>
              <div class="roadmap-mini-title">{{ item.title }}</div>

              <div class="roadmap-content-text">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="moblie">
        <div
          class="time-line"
          :style="{ height: 90 * roadmapNum + 'px' }"
        ></div>

        <div
          class="time-line2"
          :style="{ height: 90 * activeNum + 'px' }"
        ></div>

        <div class="roadmap-list">
          <div
            v-for="(item, index) in roadmap"
            v-bind:key="index"
            class="roadmap-item"
          >
            <div
              class="color-line"
              :style="{ backgroundColor: item.color }"
            ></div>
            <div class="roadmap-mini-title">{{ item.title }}</div>

            <div class="roadmap-content-text">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created() {},
  mounted() {},
  data() {
    return {
      roadmapNum: 12,
      activeNum: 5,
      roadmap: [
        {
          color: "#c61f51",
          title: "V1：Quark（2021-2022）The Paas of Web 3.0",
          content: "Genesis Product, Realizing the Initial Vision",
        },
        {
          color: "#c95049",
          title: "Q1 2021.",
          content: " Market research and product prototype",
        },
        {
          color: "#c53d43",
          title: "March 2021.",
          content: "Product Design & Technology Development",
        },
        {
          color: "#e95464",
          title: "May 2021",
          content: "Establish 4EVERLAND Foundation and technical community ",
        },
        {
          color: "#c61f51",
          title: "June 2021",
          content: "White paper published, 4EVERLAND official website launch",
        },
        {
          color: "#c61f51",
          title: "August 2021",
          content: "ALPHA launch",
        },
        {
          color: "#c61f51",
          title: "November 2021",
          content: "BETA launch",
        },
        {
          color: "#c61f51",
          title: "Q1 2022",
          content: "Online bidding system, participate in Genesis node bidding",
        },
        {
          color: "#c61f51",
          title: "2022.Q2",
          content: "Mainnet launch",
        },
        {
          color: "#c61f51",
          title: "V2：Proton（2023-2024）",
          content:
            "Enpower Web3.0 developers expand commercialization capability, launch more developer application tools ",
        },
        {
          color: "#c61f51",
          title: "V3：Atom ( 2025-2026 )",
          content:
            "Cloud Computing of Web3.0Launch virtual machine container, acquire capabilities of Web3.0 cloud computing",
        },
      ],
    };
  },
  methods: {
    leftChange() {
      let left = document.getElementsByClassName("roadmap-swpier-view")[0]
        .scrollLeft;
      if (left > 0) {
        document.getElementsByClassName("roadmap-swpier-view")[0].scrollLeft =
          document.getElementsByClassName("roadmap-swpier-view")[0].scrollLeft -
          400;
      }
    },

    rightChange() {
      let left = document.getElementsByClassName("roadmap-swpier-view")[0]
        .scrollLeft;
      document.getElementsByClassName("roadmap-swpier-view")[0].scrollLeft =
        document.getElementsByClassName("roadmap-swpier-view")[0].scrollLeft +
        400;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1280px) {
  .pc {
    display: none;
  }

  .roadmap-content {
    position: relative;
    width: 100%;
    min-height: 7.466667rem;
    background-color: #1e2226;
    padding-bottom: 2.666667rem;
    overflow: hidden;
  }
  .security-content {
    position: relative;
    width: 9.066667rem;
    min-height: 7.466667rem;
    margin: 0 auto;
  }
  .block-title {
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 0.6rem;
  }

  .time-line {
    position: relative;
    width: 1px;
    margin-left: 1.333333rem;
    margin-top: 1.666667rem;
    min-height: 15rem;
    border: 1px solid #bababa;
    float: left;
  }
  .time-line2 {
    position: absolute;
    width: 1px;
    margin-left: 1.333333rem;
    margin-top: 1.666667rem;
    min-height: 0rem;
    border: 1px solid yellow;
    float: left;
    box-shadow: 0 0 10px yellow;
    z-index: 9;
  }

  .roadmap-item {
    width: 5.933333rem;
    height: 2.2rem;
    margin-left: 80px;
    margin-top: 20px;
  }

  .roadmap-item .color-line {
    display: block;
    position: relative;
    width: 8px;
    height: 82px;
    border-radius: 4px;
    background-color: #bbb;
    float: left;
  }

  .roadmap-mini-title {
    position: relative;
    left: 10px;
    color: #fff;
    margin-left: 10px;
    font-size: 14px;
  }
  .roadmap-content-text {
    position: relative;
    top: 0px;
    left: 10px;
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
    font-weight: 300;
  }
  .roadmap-list {
    position: relative;
    top: 70px;
  }
}

@media only screen and (min-width: 1280px) {
  .roadmap-content {
    position: relative;
    width: 100%;
    min-height: 560px;
    background-color: #1e2226;
  }
  .security-content {
    position: relative;
    width: 1200px;
    min-height: 560px;
    margin: 0 auto;
  }
  .block-title {
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 60px;
  }

  .pc {
    position: relative;
    margin-top: 120px;
  }

  .roadmap-item {
    width: 220px;
    height: 90px;
    margin-right: 10px;
    margin-top: 20px;
    display: inline-block;
    overflow: hidden;
  }

  .roadmap-item .color-line {
    display: block;
    position: relative;
    width: 8px;
    height: 82px;
    border-radius: 4px;
    background-color: #bbb;
    float: left;
  }

  .roadmap-mini-title {
    position: relative;
    left: 10px;
    color: #fff;
    margin-left: 10px;
    font-size: 14px;
  }
  .roadmap-content-text {
    display: block;
    position: relative;
    width: 180px;
    min-height: 30px;
    left: 10px;
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
    font-weight: 300;
    white-space: normal;
  }

  .time-line {
    position: relative;
    width: 120%;
    left: -10%;
    height: 1px;
    border: 1px solid #bababa;
    margin: 0 auto;
  }

  .time-line2 {
    position: absolute;
    left: -10%;
    height: 1px;
    border: 1px solid #bababa;
    margin: 0 auto;
    border: 1px solid yellow;
    float: left;
    box-shadow: 0 0 10px yellow;
    margin-top: -2px;
    z-index: 9;
  }

  .roadmap-swpier-view {
    position: relative;
    width: 1200px;
    overflow-x: auto;
    white-space: nowrap;
  }

  .roadmap-swpier-view::-webkit-scrollbar {
    display: none;
  }

  .roadmap-list {
    position: relative;
  }

  .left-icon {
    position: absolute;
    top: 80px;
    z-index: 99;
    cursor: pointer;
  }

  .right-icon {
    position: absolute;
    right: -40px;
    top: 80px;
    z-index: 99;
    cursor: pointer;
  }
  .moblie {
    display: none;
  }
}
</style>
