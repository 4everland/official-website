<template>
  <div class="content">
    <div class="menu-content">
      <div class="left-content">
        <div
          class="html-item"
          :key="item.title"
          v-for="item of article"
          @click="toActice(item.link)"
        >
          <p class="acticle-time">{{ item.time }}</p>
          <h1 class="acticle-title">{{ item.title }}</h1>
          <img class="article-img" v-if="item.img" v-lazy="item.img" alt="" />
          <p class="article-content">{{ item.content }}</p>
          <p class="click-articel">READ MORE</p>
        </div>
        <!-- <el-button type="" icon="el-icon-arrow-left" class="menu-left-btn"
          >Previous</el-button
        >
        <el-button type="" class="menu-right-btn"
          >Next<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button> -->
      </div>
      <div class="line"></div>
      <div class="right-content">
        <p class="right-title">4EVERLAND Blog</p>
        <p class="right-content2">
          4everland is a cloud computing platform designed to help developers
          develop Web 3.0 applications efficiently: permissionless, censorship
          resistant, and free of centralized gatekeepers. Welcome to the new
          Internet.
        </p>
        <div class="share-view">
          <a target="_blank" href="https://github.com/4everland">
            <span
              class="iconfont icon-github right-icon"
              style="margin-left: 0px"
            ></span
          ></a>

          <a target="_blank" href="https://twitter.com/4everland_org">
            <span class="iconfont icon-changyonglogo44 right-icon"></span
          ></a>
          <a
            target="_blank"
            href="https://t.me/org_4everland
"
          >
            <span class="iconfont icon-telegram right-icon"></span
          ></a>
          <a target="_blank" href="https://www.reddit.com/user/4everland_org/">
            <span class="iconfont icon-reddit right-icon"></span
          ></a>
          <a target="_blank" href="https://4everland.medium.com/">
            <span class="iconfont icon-medium-circle-fill right-icon"></span
          ></a>
          <a target="_blank" href="https://discord.gg/sxtHDvvpuT">
            <span class="iconfont icon-discord-fill right-icon"></span
          ></a>
          <a target="_blank" href="mail:contact@4everland.org">
            <span class="iconfont icon-youjian right-icon"></span
          ></a>
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
      article: [
        {
          time: "April 16th, 2021",
          title: "4EVERLAND: The PaaS of Web3.0",
          content:
            "The Internet needs Web 3.0, a new generation of the Internet paradigm that advocates free identity, free contracts, and free assets, and blockchain technology provides a near-perfect solution to Web 3.0 with decentralized addresses as accounts, smart contracts for self-deployment and access, and Tokens that flow autonomously and frictionlessly. The free market creates prosperity and the blockchain business is growing rapidly, with liberal financial experience of DEFI, attracting hundreds of billions of dollars. Moreover, NFT is empowering art, sports and trendy culture has brought millions of incremental users to the blockchain world.",
          img: "/imgs/blog/blog1@2x.png",
          link: "/blog/2021/6/10/1623293963620",
        },
        {
          time: "April 16th, 2021",
          title: "The technical architecture design of 4EVERLAND",
          content:
            "Based on IPFS and the underlying technology of Ethereum, 4EVERLAND is designed to provide a distributed, highly efficient, self-motivated, and low-cost data hosting gateway. 4EVERLAND has designed a robust architecture to support the stable and efficient operation of the entire network, which mainly includes 4EVER-STORAGE, Proof of storage, 4EVER-GATEWAY, Smart contracts, and 4EVER-HOSTING.",
          img: "/imgs/blog/blog2@2x.png",
          link: "/blog/2021/6/10/1623304497527",
        },
        {
          time: "April 16th, 2021",
          title: "4EVERLAND logo and its design meaning ",
          content:
            "The 4EVERLAND logo is set on the basis of the cyclotron pattern, which has evolved to form a three-dimensional pattern. The overall image is presented in the form of a fixed star, it also has the shape of an eye. The slim lines of blue and purple gradient are especially geeky.The design of the fixed star comparing 4EVERLAND to a planet in the vast universe, representing eternity and security.",
          img: "",
          link: "/blog/2021/6/10/1623315553148",
        },
      ],
    };
  },
  methods: {
    toActice(link) {
      this.$router.push({
        path: link,
      });
    },
  },
};
</script>

<style scoped>
.share-view {
  margin-top: 50px;
}

.share-view .right-icon {
  color: #000;
  font-size: 24px;
}

.share-view a:hover {
  text-decoration: none;
}

.share-view a:hover .right-icon {
  color: #0397ff !important;
}

@media only screen and (max-width: 1280px) {
  .content {
    position: relative;
    top: 1.333333rem;
    width: 100%;
    min-height: 400px;
    background-color: #1e2226;
  }

  .menu-content {
    position: relative;
    width: 9.066667rem;
    min-height: 15.333333rem;
    margin: 0 auto;
    background-color: #fff;
    padding-bottom: 2.666667rem;

    overflow: hidden;
  }

  .html-item {
    position: relative;
    width: 8.533333rem;
    min-height: 100px;
    box-sizing: border-box;
    padding: 20px;
    cursor: pointer;
  }

  .left-content {
    position: relative;
    width: 840px;
    min-height: 1200px;
    float: left;
  }
  .line {
    display: none;
  }

  .acticle-title {
    position: relative;
    font-size: 30px;
    cursor: pointer;
  }
  .article-content {
    position: relative;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    margin-top: 10px;
    color: #666;
    cursor: pointer;
  }
  .article-img {
    position: relative;
    width: 100%;
    height: 320px;
    object-fit: cover;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  .click-articel {
    position: relative;
    font-size: 16px;
    color: #0397ff;
    font-weight: 500;
    line-height: 50px;
    cursor: pointer;
  }

  .right-content {
    display: none;
  }

  .acticle-time {
    position: relative;
    font-size: 14px;
    line-height: 30px;
    color: #666666;
  }
}
@media only screen and (min-width: 1280px) {
  .content {
    position: relative;
    top: 100px;
    width: 100%;
    min-height: 400px;
    background-color: #1e2226;
  }

  .menu-content {
    position: relative;
    width: 1200px;
    min-height: 1600px;
    margin: 0px auto;
    background-color: #fff;
    padding-bottom: 200px;
    overflow: hidden;
  }

  .html-item {
    position: relative;
    width: 820px;
    min-height: 100px;
    box-sizing: border-box;
    padding: 40px;
    cursor: pointer;
  }

  .left-content {
    position: relative;
    width: 840px;
    min-height: 1200px;
    float: left;
  }
  .line {
    position: relative;
    top: 104px;
    width: 1px;
    height: 359px;
    border-left: 1px dashed #888;
    float: left;
  }

  .acticle-title {
    position: relative;
    font-size: 30px;
    cursor: pointer;
  }
  .article-content {
    position: relative;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    margin-top: 10px;
    color: #666;
    cursor: pointer;
  }
  .article-img {
    position: relative;
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  .click-articel {
    position: relative;
    font-size: 16px;
    color: #7db4dc;
    font-weight: 500;
    line-height: 50px;
    cursor: pointer;
  }

  .right-content {
    position: relative;
    width: 320px;
    min-height: 600px;
    box-sizing: border-box;
    padding-left: 40px;
    float: left;
    color: #1e1d1e;
  }

  .right-title {
    position: relative;
    margin-top: 55px;
    font-size: 16px;
    color: #1e2226;
    font-weight: 500;
  }

  .right-content2 {
    position: relative;
    width: 300px;
    margin-top: 40px;
    font-size: 14px;
    line-height: 24px;
    color: #666;
  }
  .acticle-time {
    position: relative;
    font-size: 14px;
    line-height: 30px;
    color: #666666;
  }
}

.right-link {
  position: relative;
  font-size: 14px;
  color: #7db4dc;
  line-height: 60px;
  font-weight: 400;
}
.right-icon {
  margin: 5px;
  color: #000 !important;
}

.right-icon:hover {
  color: #0397ff;
}

.menu-left-btn {
  position: absolute;
  left: 20px;
}
.menu-right-btn {
  position: absolute;
  right: 20px;
}
</style>
