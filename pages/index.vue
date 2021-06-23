<template>
  <div class="container bgcolor">
    <div class="security-content2">
      <div class="info-block1">
        <div class="flex-left-box">
          <h1 class="website-slogan">The PaaS of Web3.0</h1>

          <p class="website-display">
            A Web3.0 cloud computing platform with global acceleration, privacy
            protection, distributed storage and other technical features.
          </p>

          <a
            target="_blank"
            href="/4everland-whitepaper-en(Draft V0.0.1).pdf"
            id="whitepaper"
          >
            <div class="down-btn">
              <img
                class="down-left-icon"
                src="/imgs/white_paper.png"
                alt=""
                srcset=""
              />
              <span class="down-text">Whitepaper</span>
              <div class="down-line"></div>
              <img
                class="down-right-icon"
                src="/imgs/download.png"
                alt=""
                srcset=""
              />
            </div>
          </a>
        </div>

        <img
          class="banner-img"
          src="/imgs/banner-icon@2x.png"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <h2 class="subtitle">
      Developers deploy with One click in
      <span style="font-weight: 400"> Web 3.0</span>
    </h2>

    <div class="info-block2">
      <div id="container">
        <div>
          <div id="globeViz"></div>
        </div>
      </div>
    </div>

    <div class="feature-view" ref="first">
      <h3 class="block-title" id="feature">Feature</h3>
      <div class="security-content">
        <img v-lazy="imgArr[0]" class="red-bg" alt="" srcset="" />
        <img v-lazy="imgArr[1]" class="blue-bg" alt="" srcset="" />
        <div class="feature-item">
          <img
            class="feature-item-bg"
            src="/imgs/border@2x.png"
            alt=""
            srcset=""
          />
          <div class="feature-item-header">
            <img
              class="item-header-img"
              src="/imgs/GLOBAL@2x.png"
              alt=""
              srcset=""
            />
            <span class="item-header-text">Global Acceleration</span>
          </div>

          <p class="feature-content">
            The consensus-driven Swarm network, improves network throughput
            massively and high availability, provides more efficient and fast
            Web3.0 access for global developers.
          </p>

          <div class="feature-check-list-view">
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text"
                >Dynamic Domain Name Service (DDNS)</span
              >
            </div>
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text">Data I/O optimization</span>
            </div>
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text"
                >Automatic SSL certificate management</span
              >
            </div>
          </div>
        </div>

        <div class="feature-item">
          <img
            class="feature-item-bg"
            src="/imgs/border@2x.png"
            alt=""
            srcset=""
          />
          <div class="feature-item-header">
            <img
              class="item-header-img"
              src="/imgs/privacy@2x.png"
              alt=""
              srcset=""
            />
            <span style="top: 40px" class="item-header-text"
              >Privacy Protection</span
            >
          </div>

          <p class="feature-content">
            4EVERLAND does not require KYC, that ensures user anonymity and data
            security.
          </p>

          <div class="feature-check-list-view">
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text">Anonymous account system</span>
            </div>
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text">No centralized database</span>
            </div>

            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text">On-chain payment</span>
            </div>
          </div>
        </div>

        <div class="feature-item">
          <img
            class="feature-item-bg"
            src="/imgs/border@2x.png"
            alt=""
            srcset=""
          />
          <div class="feature-item-header">
            <img
              class="item-header-img"
              src="/imgs/distributed@2x.png"
              alt=""
              srcset=""
            />
            <span style="top: 40px" class="item-header-text"
              >Distributed Storage</span
            >
          </div>

          <p class="feature-content">
            4EVERLAND builds a Swarm distributed storage network to achieve data
            availability and reliability.
          </p>

          <div class="feature-check-list-view">
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text"
                >Distributed PIN with global multi-node storage
              </span>
            </div>
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text"
                >TEE-based Proof of Storage Challenge (PoSC)</span
              >
            </div>
            <div class="check-item-view">
              <img
                class="check-item-icon"
                src="/imgs/sggg@2x.png"
                alt=""
                srcset=""
              />
              <span class="check-item-text">Based on IPFS network</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mainnet-view">
      <h3 class="block-title" id="technology">Technology</h3>

      <div class="security-content">
        <div class="mainnet-line-view">
          <el-row :gutter="40">
            <el-col :md="12" :sm="24">
              <div class="mainnet-item">
                <img
                  class="mainnet-item-img"
                  src="/imgs/mainnet1@2x.png"
                  alt=""
                  srcset=""
                />
                <h5 class="mainnet-item-title">4EVER-STORAGE</h5>
                <p class="mainnet-item-content">
                  4EVERLAND forms nodes into a huge storage network through
                  Swarm technology, which relies on node cooperativeness to
                  achieve persistent storage of specific data, and supports
                  horizontal expansion of nodes.
                </p>
              </div>
            </el-col>
            <el-col :md="12" :sm="24">
              <div class="mainnet-item">
                <img
                  class="mainnet-item-img"
                  src="/imgs/mainnet2@2x.png"
                  alt=""
                  srcset=""
                />
                <h5 class="mainnet-item-title">4EVER-GATEWAY</h5>
                <p class="mainnet-item-content">
                  The gateway nodes contain dynamic DNS, Data I/O, and Cert
                  Manager modules. With simple configuration, developers can
                  achieve safe and reliable global acceleration based on
                  4EVERLAND quickly.
                </p>
              </div>
            </el-col>
            <el-col :md="12" :sm="24">
              <div class="mainnet-item">
                <img
                  class="mainnet-item-img"
                  src="/imgs/mainnet3@2x.png"
                  alt=""
                  srcset=""
                />
                <h5 class="mainnet-item-title">Proof of Storage</h5>
                <p class="mainnet-item-content">
                  4EVERLAND builds Swarm distributed storage network based on
                  IPFS protocol and proposes storage challenge proof PoSC based
                  on TEE technology, to ensure the availability and reliability
                  of data.
                </p>
              </div>
            </el-col>
            <el-col :md="12" :sm="24">
              <div class="mainnet-item">
                <img
                  class="mainnet-item-img"
                  src="/imgs/mainnet4@2x.png"
                  alt=""
                  srcset=""
                />
                <h5 class="mainnet-item-title">Smart Contract</h5>
                <p class="mainnet-item-content">
                  The smart contracts module of 4EVERLAND mainly includes
                  payment contracts, auction contracts, lending contracts,
                  control contracts,etc. It achieves open, transparent and free
                  decentralized governance through smart contracts.
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <img class="white-line-img" src="/imgs/white_img@2x.png" alt="" srcset="" />
    <div class="info-block4">
      <div class="security-content3">
        <h3 class="block-title">Participant</h3>

        <div class="character-line-view">
          <div class="character-item">
            <img class="item_img" src="/imgs/c_icon1.png" alt="" srcset="" />
            <h5 class="item-title">Gateway Provider</h5>
            <p class="item-content">
              The gateway provider provides an access acceleration service for
              DWeb by deploying gateway node.The gateway provider is acquired
              through the same auction process as the storage provider, and
              successful bidders are awarded a gateway provider seat and enjoy
              network rewards, as well as developer payments for traffic.
            </p>
          </div>

          <div class="character-item">
            <img
              class="item_img"
              src="/imgs/c_icon2.png"
              style="margin-top: 10px"
              alt=""
              srcset=""
            />
            <h5 class="item-title">Storage Provider</h5>
            <p class="item-content">
              Storage Providers participate in global Swarm construction by
              deploying Storage Provider programs; they participate in Storage
              Provider Auctions to obtain Storage Provider Slots. If they
              succeed in the auctions, they can obtain Storage Provider Slots
              and enjoy network rewards.
            </p>
          </div>
        </div>

        <div class="character-line-view">
          <div class="character-item">
            <img class="item_img" src="/imgs/c_icon3.png" alt="" srcset="" />
            <h5 class="item-title">Challenger</h5>
            <p class="item-content">
              Challenger challenges all Storage Providers to proofs of storage,
              wait for feedback from the challenged providers, announce the
              response of challenged providers to the community, and propose to
              punish inactive providers.
            </p>
          </div>

          <div class="character-item">
            <img class="item_img" src="/imgs/c_icon1.png" alt="" srcset="" />
            <h5 class="item-title">Developer</h5>
            <p class="item-content">
              Developers are the core users of 4EVERLAND who use the 4EVERLAND
              developer applications, such as publishing DWeb through Hosting
              App or publishing content through @4everland/cli, and pay storage
              and traffic fees to the network.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-block5">
      <h3 class="block-title">
        Deploy a website based on Web3.0 in 30 seconds
      </h3>
      <div class="security-content3" style="margin-top: 80px">
        <div class="block5-item">
          <img class="block5-item-img" src="/imgs/GitHub@2x.png" alt="" />
          <span class="block5-text">1.Connect your GitHub</span>
        </div>
        <div class="block5-item">
          <img class="block5-item-img" src="/imgs/yarn_build@2x.png" alt="" />
          <span class="block5-text">2.Add your build setting</span>
        </div>
        <div class="block5-item">
          <img class="block5-item-img" src="/imgs/deploy@2x.png" alt="" />
          <span class="block5-text">3.Deploy your site</span>
        </div>
      </div>
    </div>

    <div class="map-view">
      <h3 class="map-block-title">
        Welcome to the next
        <br />
        generation internet
      </h3>
      <img class="map-img" src="/imgs/map@2x.png" alt="" srcset="" />
    </div>

    <div class="partners" style="display: none">
      <h3 class="block-title black">Partners</h3>
      <img class="companyImg" src="/imgs/company@2x.png" alt="" srcset="" />
    </div>

    <Roadmap></Roadmap>

    <div class="info-block3">
      <img src="/imgs/skybg@2x.png" class="skybg" />
      <h3 class="info-block3-text1">Where we're going</h3>
      <p class="info-block3-text2">
        4EVERLAND is a great place to pursue developers' ideal paradigm for Web
        3.0, releasing them from the shackles of centeredness completely and
        creating more robust and secure services. We hope that more developers
        and scholars will join us along the way to build a globally accelerated,
        forever-linked network service for more users using 4EVERLAND, which is
        a distributed, highly efficient, self-motivated, and low-cost cloud
        computing network. Witness the radical change in server architecture
        together and the giant technical leaps in Web3.0.
      </p>
    </div>
  </div>
</template>

<script>
import Roadmap from "../components/Roadmap";
const geoJSON = require("../assets/json/geo.json");
const places = require("../assets/json/ne_110m_populated_places_simple.json");
const emptyPNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAC3ElEQVR4nO3VMQHAMAzAsKwsMv5Ai6G+JQh+/O3uPwDw6AgGQGEgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCwLuZud1fAfX9aO5bAAAAAElFTkSuQmCC";

export default {
  components: {
    Roadmap: Roadmap,
    screenWidth: "",
    screenHeight: "",
  },

  created() {},
  mounted() {
    if (this.isMobile()) {
      this.initGlobe(320);
    } else {
      this.initGlobe(780);
    }
  },
  data() {
    return {
      msg: "Welcom to FirstApp",

      imgArr: [
        "/imgs/red@2x.png",
        "/imgs/blue@2x.png",
        "/imgs/border@2x.png",
        "/imgs/GLOBAL@2x.png",
        "/imgs/sggg@2x.png",
      ],
    };
  },
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    initGlobe(size) {
      var locations = [
        [120.831693, 30.019926],
        [116.56352, 40.324982],
        [114.282256, 22.256955],
        [139.964882, 36.505153],
        [127.160363, 36.919906],
        [107.806407, 34.275691],
        [107.144104, 29.634919],
        [120.24298, 36.326711],
        [144.159466, -40.17175],
        [10.641084, 51.084096],
        [0.927311, 47.674532],
        [-0.323705, 52.633177],
        [-4.4447, 39.851596],
        [-4.4447, 39.851596],
        [-4.4447, 39.851596],
        [-4.4447, 39.851596],
        [-76.966844, 38.909266],
        [-76.966844, 38.909266],
        [-73.866899, 40.885868],
        [-81.041845, 34.000322],
        [-80.232364, 25.788132],
        [-86.827795, 36.065743],
        [-122.444962, 37.73531],
        [-122.444962, 37.73531],
      ];
      var colorPink = "rgba(195,134,199,1)";
      var colorBlue = "RGBA(0, 255, 234, 1)";
      var colorBlue2 = "rgba(21,144,232,1)";
      var arcData = locations
        .map(function (item, index, arr) {
          var randomIndex = parseInt(Math.random() * (arr.length + 1));
          return arr[randomIndex] && index != randomIndex
            ? {
                startLat: item[1],
                startLng: item[0],
                endLat: arr[randomIndex][1],
                endLng: arr[randomIndex][0],
                color: index % 2 == 1 ? colorPink : colorBlue,
              }
            : null;
        })
        .filter(function (item) {
          return !!item;
        });

      var world = Globe()
        .width(size)
        .height(size)
        .globeImageUrl(emptyPNG)
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("rgba(62,58,206,1)")
        .atmosphereAltitude(".25")
        .hexPolygonsData(geoJSON.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.3)
        .hexPolygonColor(function (item) {
          return "rgba(194,213,255,0.1)";
        })
        .labelsData(places.features)
        .labelLat((d) => d.properties.latitude)
        .labelLng((d) => d.properties.longitude)
        .labelText((d) => d.properties.name)
        .labelSize((d) => Math.sqrt(d.properties.pop_max) * 4e-4)
        .labelDotRadius((d) => Math.sqrt(d.properties.pop_max) * 4e-4)
        .labelColor((d) =>
          d.properties.pop_max > 5000000 ? colorBlue : colorBlue2
        )
        .labelResolution(2)
        .arcsData(arcData)
        .arcColor("color")
        .arcStroke(0.6)
        .arcDashLength(1)
        .arcDashGap(function () {
          return Math.random() + 2.5;
        })
        .arcDashAnimateTime(function () {
          return 2000 * Math.random() + 1500;
        })
        .pointAltitude("size")
        .pointColor("color")(document.getElementById("globeViz"));
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 1;
      world.controls().enableZoom = false;
      world.pointOfView({
        lat: 50,
      });

      window.$$world = world;
    },
  },
};
</script>

<style>
@import "../assets/style/base.css";
.skybg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 115%;
}
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.globe-mask {
  position: absolute;
  z-index: -1;
  transform: scale(0.44);
}
@media only screen and (max-width: 1280px) {
  .container {
    position: relative;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }

  .security-content2 {
    position: relative;
    width: 100%;
    min-block-size: 600px;
    padding-top: 1.133333rem;
    overflow: hidden;
  }

  .banner-img {
    display: block;
    position: relative;
    width: 6.066667rem;
    margin: 0 auto;
    margin-top: 140px;
  }

  .website-slogan {
    display: block;
    position: relative;
    width: 8.893333rem;
    height: 1.573333rem;
    line-height: 0.933333rem;
    font-size: 0.8rem;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
  }
  .website-display {
    display: block;
    position: relative;
    width: 6.093333rem;
    height: 1.266667rem;
    font-size: 0.4rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #b1b6bb;
    margin: 0 auto;
    text-align: center;
  }

  .down-btn {
    position: relative;
    top: 1.666667rem;
    width: 220px;
    height: 48px;
    margin: 0.533333rem auto;
    background-image: url("/imgs/down-btn@2x.png");
  }
  .subtitle {
    display: block;
    position: relative;
    width: 9rem;
    height: 1.573333rem;
    line-height: 0.933333rem;
    font-size: 0.6rem;
    font-weight: 300;
    color: #fff;
    margin: 0.533333rem auto;
    text-align: center;
  }

  .info-block2 {
    position: relative;
    width: 100%;
    min-height: 10.666667rem;
    background-image: url("/imgs/wave@2x.png");
    background-position-y: 40px;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .white-line-img {
    position: relative;
    width: 100%;
    height: 0.533333rem;
  }

  .info-block4 {
    display: block;
    position: relative;
    top: -0.233333rem;
    width: 100%;
    min-height: 10.666667rem;
    background-color: #fff;
  }

  .black {
    color: #000;
  }

  .info-block4 .security-content3 {
    display: block;
    position: relative;
    min-height: 12rem;
    margin: 0 auto;
    padding-top: 70px;
  }

  .character-line-view {
    display: block;
    clear: both;
    position: relative;
    width: 100%;
    min-height: 2.666667rem;
    margin-top: 20px;
    overflow: hidden;
  }

  .character-item {
    display: block;
    position: relative;
    width: 100%;
    min-height: 2.666667rem;
    float: left;
    padding: 0.4rem 0.6rem;
    overflow: hidden;
  }

  .character-item .item_img {
    display: block;
    position: relative;
    top: 0.266667rem;
    float: left;
    width: 1rem;
  }

  .character-item .item-title {
    display: block;
    position: relative;
    top: 0.766667rem;
    left: 20px;
    width: 8.6rem;
    font-size: 0.4rem;
  }

  .character-item .item-content {
    clear: left;
    display: block;
    position: relative;
    top: 30px;
    width: 100%;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.52rem;
    /* color: #b1b6bb; */
  }

  .block-title {
    display: block;
    position: relative;
    width: 9.066667rem;
    font-size: 0.6rem;
    font-weight: 300;
    line-height: 0.8rem;
    color: #000;
    text-align: center;
    margin: 0 auto;
  }

  .info-block5 {
    position: relative;
    width: 100%;
    background-color: #fff;
    margin-top: -0.3rem;
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info-block5 .security-content3 {
    position: relative;
    width: 9.066667rem;
    min-height: 400px;
    margin: 0 auto;
  }

  .block5-text {
    display: block;
    position: relative;
    text-align: center;
    color: #7f8489;
    font-size: 18px;
    height: 50px;
    margin-top: 26px;
  }

  .map-view {
    position: relative;
    width: 100%;
    min-height: 8.333333rem;
  }

  .map-block-title {
    position: relative;
    top: 45px;
    width: 100%;
    font-size: 0.6rem;
    font-weight: 300;
    line-height: 0.6rem;
    color: #fff;
    text-align: center;
  }

  .map-img {
    display: block;
    position: relative;
    top: 1.8rem;
    width: 9.066667rem;
    height: 5.066667rem;
    margin: 0 auto;
    text-align: center;
  }

  .partners {
    position: relative;
    width: 100%;
    height: 6.533333rem;
    background-color: #fff;
    overflow: hidden;
  }

  .partners .companyImg {
    display: block;
    position: relative;
    top: 90px;
    width: 9.066667rem;
    margin: 0 auto;
  }

  .block5-item-img {
    display: block;
    position: relative;
    width: 100%;
  }

  .info-block3 {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 60px 0;
    overflow: hidden;
  }
  .info-block3-text1 {
    /* width: 539px; */
    font-weight: 300;
    font-size: 30px;
    color: #fff;
    padding-top: 30px;
    z-index: 1;
  }
  .info-block3-text2 {
    /* width: 735px; */
    font-size: 18px;
    padding: 0 15px;
    font-weight: 400;
    line-height: 30px;
    color: #fff;
    text-align: center;
    z-index: 1;
    margin-top: 40px;
  }

  .phone-item {
    position: relative;
    width: 100%;
    clear: both;
  }
  .block5-item {
    position: relative;
    width: 100%;
    min-height: 4rem;
    float: left;
  }

  .feature-view {
    position: relative;
    width: 100%;
    min-height: 10.466667rem;
  }

  .feature-view .security-content {
    position: relative;
    width: 9.066667rem;
    min-height: 9.133333rem;
    margin: 0px auto;
    padding: 0 10px;
  }

  .feature-view .block-title {
    display: block;
    position: relative;
    top: 0.6rem;
    width: 100%;
    font-size: 0.6rem;
    line-height: 0.8rem;
    color: #fff;
    text-align: center;
    padding-top: 2rem;
    margin-top: -2rem;
  }

  .feature-item {
    position: relative;
    height: 501px;
    width: clac(100% - 0.533333rem);
    display: block;
    text-align: center;
    border-radius: 30px;
    background-color: #3b3b3b;
    margin: 30px auto;
  }

  .feature-item-bg {
    position: absolute;
    width: calc(100% - 20px);
    bottom: 10px;
    left: 10px;
    z-index: 1;
  }

  .feature-item-header {
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 30px 30px 0 0;
    background-color: #2b85fb;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  .item-header-img {
    margin-left: 50px;
  }
  .item-header-text {
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    margin-left: 18px;
  }

  .feature-content {
    position: relative;
    top: 40px;
    width: 276px;
    height: 122px;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    color: #fff;
    margin: 0 auto;
    text-align: left;
  }

  .feature-check-list-view {
    position: relative;
    top: 40px;
    width: calc(100% - 20px);
    height: 200px;
    margin: 0px auto;
  }

  .check-item-view {
    margin-left: 15px;
    line-height: 18px;
    margin-top: 9px;
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
  }

  .check-item-text {
    margin-left: 10px;
    text-align: left;
  }

  .mainnet-view {
    position: relative;
    width: 100%;
  }

  .mainnet-view .block-title {
    display: block;
    margin-bottom: 45px;
    position: relative;
    width: 100%;
    font-size: 0.6rem;
    line-height: 0.8rem;
    color: #fff;
    text-align: center;
    padding-top: 2rem;
    margin-top: -2rem;
  }

  .mainnet-view .security-content {
    position: relative;
    width: 9.066667rem;
    min-height: 10.466667rem;
    margin: 0 auto;
    margin-top: 1.333333rem;
  }

  .mainnet-line-view {
    display: flex;
    margin-bottom: 1.28rem;
  }

  .mainnet-item {
    position: relative;
    width: 100%;
    min-height: 1.333333rem;
    margin-bottom: 0.833333rem;
  }

  .mainnet-item-img {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  }

  .mainnet-item-title {
    display: block;
    position: relative;
    width: 100%;
    left: 0.2rem;
    height: 0.306667rem;
    font-size: 0.4rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
  }

  .mainnet-item-content {
    display: block;
    position: relative;
    top: 0.4rem;
    left: 0.2rem;
    width: 100%;
    min-height: 0.826667rem;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 25px;
    letter-spacing: 0;
    color: #b1b6bb;
  }

  .info-block1 {
    position: relative;
    width: 100%;
    min-height: 600px;
    padding-bottom: 2rem;
  }
}

@media only screen and (min-width: 1280px) {
  .container {
    position: relative;
    width: 100%;
    min-height: 100%;
  }

  .security-content2 {
    position: relative;
    width: 1200px;
    min-block-size: 600px;
    margin: 0 auto;
    padding-top: 100px;
  }

  .flex-left-box {
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    width: 600px;
    height: 400px;
    margin-top: 60px;
  }

  .info-block1 {
    position: relative;
    width: 100%;
    min-height: 600px;
  }
  .website-slogan {
    font-size: 60px;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
    line-height: 52px;
  }
  .website-display {
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #b1b6bb;
  }

  .banner-img {
    position: absolute;
    right: 0;
    top: 10px;
  }
  .down-btn {
    position: relative;
    width: 220px;
    height: 48px;
    background-image: url("/imgs/down-btn@2x.png");
  }

  .subtitle {
    display: block;
    text-align: center;
    position: relative;
    width: 675px;
    height: 118px;
    line-height: 70px;
    font-size: 60px;
    font-weight: 300;
    color: #fff;
    margin: 40px auto;
  }

  .info-block2 {
    position: relative;
    width: 100%;
    min-height: 800px;
    background-image: url("/imgs/wave@2x.png");
    background-position-y: 40px;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 80px;
  }

  .info-block3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0 75px 0;
    position: relative;
  }
  .info-block3-text1 {
    width: 539px;
    font-weight: 300;
    font-size: 60px;
    color: #fff;
    z-index: 1;
  }
  .info-block3-text2 {
    width: 735px;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #fff;
    text-align: center;
    margin-top: 40px;
    z-index: 1;
  }

  .partners {
    position: relative;
    width: 100%;
    height: 490px;
    background-color: #fff;
    overflow: hidden;
  }

  .block-title {
    position: relative;
    width: 100%;
    font-size: 60px;
    font-weight: 300;
    line-height: 30px;
    color: #000;
    text-align: center;
  }

  .partners .companyImg {
    display: block;
    position: relative;
    top: 90px;
    width: 1200px;
    height: 296px;
    margin: 0 auto;
  }

  .map-view {
    position: relative;
    width: 100%;
    min-height: 8.333333rem;
    padding-bottom: 2.066667rem;
    padding-top: 25px;
  }

  .map-block-title {
    display: block;
    position: relative;
    top: 45px;
    width: 100%;
    font-size: 60px;
    font-weight: 300;
    line-height: 60px;
    color: #fff;
    text-align: center;
  }

  .map-img {
    display: block;
    position: relative;
    width: 980px;
    margin: 120px auto;
    margin-bottom: 0px;
  }

  .white-line-img {
    position: relative;
    width: 100%;
  }

  .info-block4 {
    position: relative;
    width: 100%;
    min-height: 800px;
    background-color: #fff;
    margin-top: -0.783333rem;
  }

  .black {
    color: #000;
  }

  .info-block4 .security-content3 {
    position: relative;
    width: 1200px;
    min-height: 600px;
    margin: 0 auto;
    padding-top: 70px;
  }

  .character-line-view {
    clear: both;
    position: relative;
    top: 90px;
    width: 100%;
    min-height: 200px;
    margin-top: 20px;
  }
  .character-item {
    position: relative;
    width: 50%;
    min-height: 200px;
    float: left;
    padding: 30px;
    box-sizing: border-box;
  }
  .character-item .item_img {
    display: block;
    position: relative;
    float: left;
    width:50px;
  }

  .character-item .item-title {
    position: relative;
    top: 10px;
    left: 20px;
    font-size: 30px;
  }

  .character-item .item-content {
    clear: left;
    display: block;
    position: relative;
    top: 30px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    /* color: #b1b6bb; */
  }
  .info-block5 {
    position: relative;
    width: 100%;
    background-color: #fff;
    margin-top: -0.3rem;
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info-block5 .block-title {
    line-height: 70px;
    width: 800px;
    text-align: center;
  }
  .info-block5 .security-content3 {
    position: relative;
    width: 1200px;
    min-height: 400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block5-text {
    display: block;
    position: relative;
    text-align: center;
    color: #7f8489;
    font-size: 18px;
    margin-top: 13px;
  }
  .block5-item {
  }

  .feature-view {
    position: relative;
    width: 100%;
    min-height: 785px;
  }

  .feature-view .security-content {
    width: 1200px;
    min-height: 685px;
    display: flex;
    margin: auto;
    margin-top: 100px;
    padding: 0 10px;
  }

  .feature-view .block-title {
    display: block;
    position: relative;
    top: 45px;
    width: 100%;
    font-size: 60px;
    line-height: 60px;
    color: #fff;
    text-align: center;
    padding-top: 150px;
    margin-top: -150px;
  }

  .feature-item {
    position: relative;
    height: 501px;
    width: 300px;
    display: inline-block;
    margin: 30px;
    line-height: 100px;
    text-align: center;
    flex: auto;
    border-radius: 30px;
    background-color: #3b3b3b;
  }

  .feature-item-bg {
    position: absolute;
    width: calc(100% - 20px);
    bottom: 10px;
    left: 10px;
    z-index: 1;
  }

  .feature-item-header {
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 30px 30px 0 0;
    background-color: #2b85fb;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  .item-header-img {
    margin-left: 50px;
  }
  .item-header-text {
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    margin-left: 18px;
  }

  .feature-content {
    position: relative;
    top: 40px;
    width: 276px;
    height: 122px;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    color: #fff;
    margin: 0 auto;
    text-align: left;
  }

  .feature-check-list-view {
    position: relative;
    top: 40px;
    width: calc(100% - 20px);
    height: 200px;
    margin: 0px auto;
  }

  .check-item-view {
    margin-left: 15px;
    line-height: 18px;
    margin-top: 9px;
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
  }

  .check-item-text {
    margin-left: 10px;
    text-align: left;
  }

  .mainnet-view {
    position: relative;
    width: 100%;
    padding-bottom: 80px;
  }

  .mainnet-view .block-title {
    display: block;
    position: relative;
    margin-bottom: 45px;
    width: 100%;
    font-size: 60px;
    line-height: 60px;
    color: #fff;
    text-align: center;
    padding-top: 150px;
    margin-top: -150px;
  }

  .mainnet-view .security-content {
    position: relative;
    width: 1200px;
    min-height: 985px;
    margin: 0 auto;
    margin-top: 120px;
  }

  .mainnet-line-view {
    display: flex;
    flex-wrap: wrap;
  }

  .mainnet-item {
    flex: 1;
    min-width: 400px;
    min-height: 500px;
  }

  .mainnet-item-img {
    width: 100%;
  }

  .mainnet-item-title {
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
    padding: 0px 15px 10px 15px;
  }

  .mainnet-item-content {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
    color: #b1b6bb;
    box-sizing: border-box;
    padding: 0 15px;
  }

  .dialog-view {
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #fff;
  }

  .error-icon {
    position: relative;
    width: 60px;
  }
}
.red-bg {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 400px;
}
.blue-bg {
  position: absolute;
  right: 0;
  bottom: 0px;
  z-index: 0;
  width: 400px;
}
.down-left-icon {
  display: block;
  position: relative;
  top: 5px;
  left: 10px;
  float: left;
}

.down-text {
  display: block;
  position: relative;
  top: 10px;
  left: 20px;
  float: left;
  font-size: 18px;
  color: #fff;
}

.down-right-icon {
  position: absolute;
  right: 20px;
  top: 14px;
}

.down-line {
  position: absolute;
  top: 10px;
  right: 55px;
  width: 1px;
  height: 30px;
  border-left: 1px solid #fff;
}

.check-item-icon {
  display: inline-block;
  float: left;
}
</style>
