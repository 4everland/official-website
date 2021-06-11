<template>
  <div class="container bgcolor">
    <div class="security-content2">
      <div class="info-block1">
        <img
          class="banner-img"
          src="/imgs/banner-icon@2x.png"
          alt=""
          srcset=""
        />

        <h1 class="website-slogan">The PaaS of Web3.0</h1>

        <p class="website-display">
          A Web3.0 cloud computing platform with global acceleration, privacy
          protection, distributed storage and other technical features.
        </p>

        <a target="_blank" href="#" id="whitepaper">
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
    </div>

    <h2 class="subtitle">Developers deploy to Web3.0 with one click</h2>

    <div class="info-block2">
      <div id="container">
        <div>
          <div id="globeViz"></div>
        </div>
      </div>
    </div>

    <div class="feature-view" ref="first">
      <a href="#ch"><h3 class="block-title" id="features">Features</h3> </a>
      <div class="security-content">
        <div class="feature-item">
          <div class="feature-item-header">
            <img
              class="item-header-img"
              src="/imgs/GLOBAL@2x.png"
              alt=""
              srcset=""
            />
            <span class="item-header-text" style="top: 40px; margin-left: 10px"
              >Global Acceleration</span
            >
          </div>

          <p class="feature-content">
            The consensus-driven Swarm network, massively improving network
            throughput and high availability, providing more efficient and fast
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
                >Dynamic Domain Name Service DDNS</span
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
          <div class="feature-item-header">
            <img
              class="item-header-img"
              src="/imgs/privacy@2x.png"
              alt=""
              srcset=""
            />
            <span style="top: 40px" class="item-header-text"
              >Privacy protection</span
            >
          </div>

          <p class="feature-content">
            4EVERLAND does not require KYC, ensures user anonymity and data
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
          <div class="feature-item-header">
            <img
              class="item-header-img"
              src="/imgs/distributed@2x.png"
              alt=""
              srcset=""
            />
            <span style="top: 40px" class="item-header-text"
              >Distributed storage</span
            >
          </div>

          <p class="feature-content">
            4EVERLAND built a Swarm distributed storage network for achieve data
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
                >Distributed PIN with global multi-node
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
                >TEE-based proof of storage challenge</span
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
      <h3 class="block-title">Technologies</h3>

      <div class="security-content">
        <div class="mainnet-line-view">
          <div class="mainnet-item">
            <img
              class="mainnet-item-img"
              src="/imgs/mainnet1@2x.png"
              alt=""
              srcset=""
            />
            <h5 class="mainnet-item-title">4EVER-STORAGE</h5>
            <p class="mainnet-item-content">
              4EVERLAND forms nodes into a huge storage network through Swarm
              technology, relying on node cooperativeness to achieve persistent
              storage of specific data and supporting horizontal expansion of
              nodes.
            </p>
          </div>
          <div class="mainnet-item">
            <img
              class="mainnet-item-img"
              src="/imgs/mainnet2@2x.png"
              alt=""
              srcset=""
            />
            <h5 class="mainnet-item-title">4EVER-GATEWAY</h5>
            <p class="mainnet-item-content">
              The gateway nodes contain dynamic DNS, Data I/O, and Cert Manager
              modules, and developers can quickly realize safe and reliable
              global acceleration based on 4EVERLAND through simple
              configuration.
            </p>
          </div>
        </div>

        <div class="mainnet-line-view">
          <div class="mainnet-item">
            <img
              class="mainnet-item-img"
              src="/imgs/mainnet3@2x.png"
              alt=""
              srcset=""
            />
            <h5 class="mainnet-item-title">Storage Proof</h5>
            <p class="mainnet-item-content">
              4EVERLAND builds Swarm distributed storage network based on IPFS
              protocol and proposes storage challenge proof PoSC based on TEE
              technology, to ensure the availability and reliability of data.
            </p>
          </div>
          <div class="mainnet-item">
            <img
              class="mainnet-item-img"
              src="/imgs/mainnet4@2x.png"
              alt=""
              srcset=""
            />
            <h5 class="mainnet-item-title">Smart Contracts</h5>
            <p class="mainnet-item-content">
              4EVERLAND's smart contract module mainly includes payment
              contracts, campaign contracts, lending contracts, control
              contracts. It achieves open, transparent and free decentralized
              governance through smart contracts.
            </p>
          </div>
        </div>
      </div>
    </div>

    <img class="white-line-img" src="/imgs/white_img@2x.png" alt="" srcset="" />
    <div class="info-block4">
      <div class="security-content3">
        <h3 class="block-title">Characters</h3>

        <div class="character-line-view">
          <div class="character-item">
            <img class="item_img" src="/imgs/c_icon1.png" alt="" srcset="" />
            <h5 class="item-title">Gateway Provider</h5>
            <p class="item-content">
              Gateway nodes provide access acceleration services for DWeb.
              Gateway nodes are obtained through the same auction as storage
              nodes, and successful bids will get awarded gateway node seats and
              network rewards, in addition to enjoy the developer's payment for
              traffic.
            </p>
          </div>

          <div class="character-item">
            <img class="item_img" src="/imgs/c_icon2.png" alt="" srcset="" />
            <h5 class="item-title">Storage Provider</h5>
            <p class="item-content">
              Participate in global node swarm construction by deploying storage
              node program; participate in node bidding to get node slots, and
              get storage node seats if you succeed in bidding and enjoy network
              rewards.
            </p>
          </div>
        </div>

        <div class="character-line-view">
          <div class="character-item">
            <img class="item_img" src="/imgs/c_icon3.png" alt="" srcset="" />
            <h5 class="item-title">Challenger</h5>
            <p class="item-content">
                   The Challenger initiates a storage proof challenge to all
              nodes randomly, waits for feedback from the challenged nodes, and
              publicizes the response of the challenged nodes to the community
              and initiates a sanction proposal for inactive nodes.
            </p>
          </div>

          <div class="character-item">
            <img class="item_img" src="/imgs/c_icon1.png" alt="" srcset="" />
            <h5 class="item-title">Developer</h5>
            <p class="item-content">
              Developers are the core paid users of 4EVERLAND, who use the
              4EVERLAND developer application, such as publishing DWeb through
              Hosting App or publishing content to the 4EVERLAND network through
              @4everland/cli, and pay storage and traffic fees to the network.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-block5">
      <h3 class="block-title">Deploy to IPFS a site in 30 second</h3>
      <div class="security-content3" style="margin-top: 80px">
        <div class="block5-item">
          <img class="block5-item-img" src="/imgs/GitHub@2x.png" alt="" />
          <span class="block5-text">1.Connect your GitHub</span>
        </div>
        <div class="block5-item">
          <img class="block5-item-img" src="/imgs/yarn_build@2x.png" alt="" />
          <span class="block5-text">2.Add you build setting</span>
        </div>
        <div class="block5-item">
          <img class="block5-item-img" src="/imgs/deploy@2x.png" alt="" />
          <span class="block5-text">3.Deploy you site</span>
        </div>
      </div>
    </div>

    <div class="map-view">
      <h3 class="map-block-title">Welcome to the <br />new internet!</h3>
      <img class="map-img" src="/imgs/map@2x.png" alt="" srcset="" />
    </div>

    <div class="partners" style="display: none">
      <h3 class="block-title black">Partners</h3>
      <img class="companyImg" src="/imgs/company@2x.png" alt="" srcset="" />
    </div>

    <Roadmap></Roadmap>

    <div class="info-block3">
      <h3 class="info-block3-text1">Where we're going</h3>
      <p class="info-block3-text2">
        4EVERLAND is a great place to carry developers' ideal paradigm for Web
        3.0, releasing them from the shackles of centeredness and create more
        robust and secure services. We hope that more developers and scholars
        will join us on this road to build a globally accelerated,
        forever-linked network service for more users using 4EVERLAND, a
        distributed, highly efficient, self-motivated, and low-cost cloud
        computing network. Let us witness this radical change in server
        architecture based on the Web 3.0 network evolution.
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
  },

  created() {},
  mounted() {
    this.initGlobe();
  },
  data() {
    return {
      msg: "Welcom to FirstApp",
    };
  },
  methods: {
    initGlobe() {
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
        .width(777)
        .height(777)
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
    width: 9.066667rem;
    margin: 0 auto;
    margin-top: 20px;
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
    margin-top: 40px;
    text-align: center;
  }

  .down-btn {
    position: relative;
    top: 40px;
    width: 220px;
    height: 48px;
    margin: 0 auto;
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
    width: 10.066667rem;
    min-height: 12rem;
    margin: 0 auto;
  }

  .character-line-view {
    display: block;
    clear: both;
    position: relative;
    top: 1.2rem;
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
    padding: 0.4rem;
    overflow: hidden;
  }
  .character-item .item_img {
    display: block;
    position: relative;
    top: 0.266667rem;
    float: left;
  }

  .character-item .item-title {
    display: block;
    position: relative;
    top: 20px;
    left: 20px;
    width: 8.6rem;
    font-size: 30px;
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
    color: #b1b6bb;
  }

  .block-title {
    display: block;
    position: relative;
    top: 45px;
    width: 9.066667rem;
    font-size: 0.8rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.8rem;
    color: #000;
    text-align: center;
    margin: 0 auto;
  }

  .info-block5 {
    position: relative;
    width: 100%;
    min-height: 5.333333rem;
    background-color: #fff;
    margin-top: -0.683333rem;
    overflow: hidden;
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
    font-weight: normal;
    font-stretch: normal;
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
    width: 100%;
    min-height: 5.333333rem;
    background-image: url("/imgs/skybg@2x.png");
    background-size: 200%;
    background-position-x: -40px;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .info-block3-text1 {
    display: block;
    position: relative;
    top: 0.6rem;
    font-size: 0.6rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.4rem;
    color: #fff;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
  .info-block3-text2 {
    display: block;
    position: relative;
    top: 0.866667rem;
    width: 7.133333rem;
    height: 1.826667rem;
    font-size: 0.24rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.4rem;
    color: #fff;
    margin: 0 auto;
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
    width: 9.066667rem;
    min-height: 10.466667rem;
    margin: auto;
    margin-top: 1.333333rem;
    padding: 0 0.133333rem;
    overflow: hidden;
  }

  .feature-view .block-title {
    display: block;
    position: relative;
    top: 0.6rem;
    width: 100%;
    font-size: 0.6rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.6rem;
    color: #fff;
    text-align: center;
  }

  .feature-item {
    height: 501px;
    width: 300px;
    display: block;
    margin: 30px auto;
    line-height: 100px;
    text-align: center;
    flex: auto;
    border-radius: 30px;
    background-color: #355158;
    overflow: hidden;
  }

  .feature-item-header {
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 30px 30px 0 0;
    background-color: #2b85fb;
  }

  .item-header-img {
    position: absolute;
    top: 19px;
    left: 40px;
  }
  .item-header-text {
    display: block;
    position: absolute;
    left: 106px;
    top: 20px;
    line-height: 30px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
  }

  .feature-content {
    position: relative;
    top: 40px;
    width: 276px;
    height: 122px;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    line-height: 18px;
    color: #fff;
    margin: 0 auto;
    text-align: left;
  }

  .feature-check-list-view {
    position: relative;
    top: 40px;
    width: 100%;
    height: 200px;
  }
  .check-item-view {
    position: relative;
    margin-left: 15px;
    width: 100%;
    height: 30px;
    text-align: left;
    font-size: 14px;
    color: #fff;
    font-weight: normal;
  }
  .check-item-text {
    margin-left: 10px;
    margin-top: -10px;
  }

  .mainnet-view {
    position: relative;
    width: 100%;
    min-height: 10.466667rem;
  }

  .mainnet-view .block-title {
    display: block;
    position: relative;
    width: 100%;
    font-size: 0.8rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.8rem;
    color: #fff;
    text-align: center;
  }

  .mainnet-view .security-content {
    position: relative;
    width: 9.066667rem;
    min-height: 10.466667rem;
    margin: 0 auto;
    margin-top: 1.333333rem;
  }

  .mainnet-line-view {
    display: block;
    position: relative;
    width: 100%;
    min-height: 4rem;
    margin-bottom: 1.28rem;
    overflow: hidden;
  }

  .mainnet-item {
    position: relative;
    width: 100%;
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
    line-height: 20px;
    letter-spacing: 0;
    color: #b1b6bb;
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

  .info-block1 {
    position: relative;
    width: 100%;
    min-height: 600px;
  }
  .website-slogan {
    display: block;
    position: relative;
    top: 80px;
    width: 667px;
    height: 118px;
    line-height: 70px;
    font-size: 60px;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
  }
  .website-display {
    display: block;
    position: relative;
    top: 67px;
    width: 657px;
    height: 95px;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #b1b6bb;
  }

  .banner-img {
    position: absolute;
    right: 0;
    top: 80px;
  }
  .down-btn {
    position: relative;
    top: 247px;
    width: 220px;
    height: 48px;
    background-image: url("/imgs/down-btn@2x.png");
  }

  .subtitle {
    display: block;
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
    position: relative;
    width: 100%;
    height: 8.333333rem;
    background-image: url("/imgs/skybg@2x.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .info-block3-text1 {
    display: block;
    position: relative;
    top: 1.6rem;
    width: 539px;
    height: 65px;
    font-size: 60px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    color: #fff;
    margin: 0 auto;
  }
  .info-block3-text2 {
    display: block;
    position: relative;
    top: 1.6rem;
    width: 735px;
    height: 137px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    color: #fff;
    margin: 0 auto;
    text-align: center;
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
    top: 45px;
    width: 100%;
    font-size: 60px;
    font-weight: normal;
    font-stretch: normal;
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
    overflow: hidden;
    padding-bottom: 2.066667rem;
  }

  .map-block-title {
    display: block;
    position: relative;
    top: 45px;
    width: 100%;
    font-size: 60px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 60px;
    color: #fff;
    text-align: center;
  }

  .map-img {
    display: block;
    position: relative;
    top: 90px;
    width: 980px;
    height: 530px;
    margin: 0 auto;
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
    margin-top: -0.683333rem;
  }

  .black {
    color: #000;
  }

  .info-block4 .security-content3 {
    position: relative;
    width: 1200px;
    min-height: 600px;
    margin: 0 auto;
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
  }

  .character-item .item-title {
    position: relative;
    top: 20px;
    left: 20px;
    font-size: 30px;
  }

  .character-item .item-content {
    clear: left;
    display: block;
    position: relative;
    top: 30px;
    width: 459px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    color: #b1b6bb;
  }
  .info-block5 {
    position: relative;
    width: 100%;
    min-height: 400px;
    background-color: #fff;
    margin-top: -0.683333rem;
  }
  .info-block5 .security-content3 {
    position: relative;
    width: 1200px;
    min-height: 400px;
    margin: 0 auto;
  }

  .block5-text {
    display: block;
    position: relative;
    text-align: center;
    color: #7f8489;
    font-size: 18px;
  }
  .block5-item {
    position: relative;
    width: 33.3%;
    height: 300px;
    float: left;
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
    font-weight: normal;
    font-stretch: normal;
    line-height: 60px;
    color: #fff;
    text-align: center;
  }

  .feature-item {
    height: 501px;
    width: 300px;
    display: inline-block;
    margin: 30px;
    line-height: 100px;
    text-align: center;
    flex: auto;
    border-radius: 30px;
    background-color: #355158;
  }

  .feature-item-header {
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 30px 30px 0 0;
    background-color: #2b85fb;
  }

  .item-header-img {
    position: absolute;
    top: 19px;
    left: 40px;
  }
  .item-header-text {
    display: block;
    position: absolute;
    left: 106px;
    top: 20px;
    line-height: 30px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
  }

  .feature-content {
    position: relative;
    top: 40px;
    width: 276px;
    height: 122px;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    line-height: 18px;
    color: #fff;
    margin: 0 auto;
    text-align: left;
  }

  .feature-check-list-view {
    position: relative;
    top: 40px;
    width: 100%;
    height: 200px;
  }
  .check-item-view {
    position: relative;
    margin-left: 15px;
    width: 100%;
    height: 30px;
    text-align: left;
    font-size: 14px;
    color: #fff;
    font-weight: normal;
  }
  .check-item-text {
    margin-left: 10px;
    margin-top: -10px;
  }

  .mainnet-view {
    position: relative;
    width: 100%;
    min-height: 785px;
  }

  .mainnet-view .block-title {
    display: block;
    position: relative;
    width: 100%;
    font-size: 60px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 60px;
    color: #fff;
    text-align: center;
  }

  .mainnet-view .security-content {
    position: relative;
    width: 1200px;
    min-height: 785px;
    margin: 0 auto;
    margin-top: 100px;
  }

  .mainnet-line-view {
    display: block;
    position: relative;
    width: 100%;
    min-height: 300px;
    margin-bottom: 96px;
    overflow: hidden;
  }

  .mainnet-item {
    position: relative;
    width: 50%;
    float: left;
  }

  .mainnet-item-img {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .mainnet-item-title {
    display: block;
    position: relative;
    left: 15px;
    width: 362px;
    height: 23px;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fff;
  }

  .mainnet-item-content {
    display: block;
    position: relative;
    top: 30px;
    left: 15px;
    width: 560px;
    min-height: 62px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0;
    color: #b1b6bb;
  }
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
</style>
