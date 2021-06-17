<template>
  <header>
    <div class="header-view">
      <div class="security-content">
        <img
          class="logo-img"
          @click="toHome"
          src="/imgs/logo.svg"
          alt=""
          srcset=""
        />
        <ul class="menu">
          <li
            @click="toFeature"
            v-bind:class="
              active == 'Feature' ? 'menu-item-active menu-item' : 'menu-item'
            "
          >
            Feature
          </li>
          <li
            @click="toTechnology"
            class="menu-item"
            v-bind:class="
              active == 'Technology'
                ? 'menu-item-active menu-item'
                : 'menu-item'
            "
          >
            Technology
          </li>

          <li
            @click="toRoadmap"
            class="menu-item"
            v-bind:class="
              active == 'Roadmap' ? 'menu-item-active menu-item' : 'menu-item'
            "
          >
            Roadmap
          </li>
          <li
            @click="toBlog"
            class="menu-item"
            style="margin-left: -30px"
            v-bind:class="
              active == 'Blog' ? 'menu-item-active menu-item' : 'menu-item'
            "
          >
            Blog
          </li>
        </ul>

        <img
          @click="openMenu"
          class="open-menu"
          src="/imgs/open.png"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <el-drawer
      title=""
      :visible.sync="drawer"
      :with-header="false"
      closed="dclose"
    >
      <ul class="menu2">
        <li @click="toFeature">Feature</li>
        <li @click="toTechnology" class="menu-item">Technology</li>
        <li @click="toRoadmap" class="menu-item">Roadmap</li>

        <li @click="toBlog" class="menu-item">Blog</li>
      </ul>
    </el-drawer>
  </header>
</template>
<script>
export default {
  components: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    $route(res) {
      console.log("路由变化");
      console.log(res);
      this.path = res.path;
      if (res.path == "/") {
        this.active = "";
      }
      if (res.path != "/" && res.path != "/blog/menu/1") {
        this.active = "";
      }
    },
  },
  data() {
    return {
      active: "",
      drawer: false,
      path: "",
    };
  },

  methods: {
    handleScroll() {
      if (this.active == "Blog") {
        return;
      }
      this.active = "";
      if (
        Math.abs(
          document.getElementById("feature").getBoundingClientRect().top
        ) < 400
      ) {
        this.active = "Feature";
      }

      if (
        Math.abs(
          document.getElementById("technology").getBoundingClientRect().top
        ) < 400
      ) {
        this.active = "Technology";
      }

      if (
        Math.abs(
          document.getElementById("roadmap").getBoundingClientRect().top
        ) < 400
      ) {
        this.active = "Roadmap";
      }
    },
    toFeature() {
      this.active = "Feature";
      this.$router.push({
        path: "/#feature",
        params: {
          jump: 1,
        },
      });
    },
    toRoadmap() {
      this.active = "Roadmap";
      this.$router.push({
        path: "/#roadmap",
      });
    },
    toTechnology() {
      this.active = "Technology";
      this.$router.push({
        path: "/#technology",
      });
    },
    toBlog() {
      this.active = "Blog";
      this.$router.push({
        path: "/blog/menu/1",
      });
    },
    toHome() {
      this.$router.push({
        path: "/",
      });
    },
    openMenu() {
      this.drawer = true;
    },
    scrollY(curY, y) {
      if (curY !== y) {
        let differ = Math.abs(curY - y);
        let _curY = curY;
        requestAnimationFrame(() => {
          let step = Math.ceil(differ / 5);
          _curY += step;
          window.scrollTo(window.scrollX, curY);
          if (differ > 5 || differ < -5) {
            this.scrollY(_curY, y);
          } else {
            window.scrollTo(window.scrollX, y);
          }
        });
      }
    },

    toFeature2() {
      window.scrollTo(0, 800);
      this.drawer = false;
    },
    toRoadmap2() {
      window.scrollTo(0, 6200);
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1280px) {
  .header-view {
    position: fixed;
    width: 100%;
    height: 1.333333rem;
    background-color: #1e2226;
    z-index: 99;
  }

  .logo-img {
    display: block;
    position: relative;
    left: 20px;
    top: 0.4rem;
    width: 200px;
    float: left;
  }
  .menu {
    display: none;
  }

  .open-menu {
    position: absolute;
    right: 0.366667rem;
    top: 0.366667rem;
    width: 0.6rem;
    height: 0.6rem;
  }
  .menu2 li {
    position: relative;
    width: 100%;
    height: 1.066667rem;
    line-height: 1.066667rem;
    text-align: center;
  }
}

@media only screen and (min-width: 1280px) {
  .header-view {
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: #1e2226;
    z-index: 99;
  }
  .security-content {
    position: relative;
    width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
  .logo-img {
    display: block;
    position: relative;
    top: 30px;
    width: 280px;
    float: left;
    cursor: pointer;
  }
  .menu {
    display: block;
    position: relative;
    float: left;
    height: 100px;
    line-height: 100px;
    color: #fff;
    margin-left: 50px;
  }
  .menu-item {
    display: block;
    position: relative;
    min-width: 130px;
    float: left;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
  }

  .menu-item-active {
    color: #7db4dc;
    font-weight: 500;
  }

  .open-menu {
    display: none;
  }
}

.box:target {
  padding-top: 50px;
}
</style>
