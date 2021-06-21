var trimHtml = require('trim-html');
const fs = require('fs')
var path = require('path')
var filePath = path.resolve('./acticle')
var MarkdownIt = require('markdown-it')
const { exit } = require('process')
md = new MarkdownIt()

var accumulator = 0
var accumulator2 = 0


fs.readdir(filePath, function (err, files) {
  if (err) {
    console.warn(err)
  } else {

    let file_arr = []

    files.forEach(function (filename) {
      if (path.extname(filename) == '.md') {

        const stats = fs.statSync(filePath + '/' + filename)
        let year = new Date(stats.mtime).getFullYear()
        let month = new Date(stats.mtime).getMonth() + 1
        let date = new Date(stats.mtime).getDate()

        let path3 = '/blog2/' +
          year +
          path.sep +
          month +
          path.sep +
          date +
          path.sep +
          new Date(stats.mtime).getTime();

        file_arr.push(path3)

        ++accumulator2
      }
    })

    console.log(file_arr, 777)

    files.forEach(function (filename) {
      console.log(path.extname(filename))
      console.log(accumulator2, 888)

      if (path.extname(filename) == '.md') {

        const stats = fs.statSync(filePath + '/' + filename)
        let year = new Date(stats.mtime).getFullYear()
        let month = new Date(stats.mtime).getMonth() + 1
        let date = new Date(stats.mtime).getDate()

        ++accumulator
        console.log(filePath + '/' + filename)

        var mdStr = fs.readFileSync(filePath + '/' + filename, 'utf-8');
        let mdData = md.render(mdStr)
        let path2 = '/blog2/' +
          year +
          path.sep +
          month +
          path.sep +
          date +
          path.sep +
          new Date(stats.mtime).getTime();

        fs.mkdirSync(
          './pages/blog2/' + year + path.sep + month + path.sep + date,
          { recursive: true })


        console.log(accumulator - 1)
        console.log(accumulator)
        console.log(accumulator + 1)

        let p_p, p_next;
        accumulator == 1 ? p_p = false : p_p = true
        accumulator == accumulator2 ? p_next = false : p_next = true

        fs.writeFileSync(
          './pages' + path2 +
          '.vue',
          `<template>
                    <div class="content">
                      <div class="service-content">
                        <p class="back-text" @click="goback()">&lt; Back</p>
                        <div class="acticle-view">`+
          mdData
          + `
                  

          <el-button type="" icon="el-icon-arrow-left" class="menu-left-btn"
          v-if="`+ p_p + `"
          @click="toActice('`+ file_arr[accumulator - 2] + `')"
          >Previous</el-button
        >
        <el-button type="" class="menu-right-btn"
        v-if="`+ p_next + `"
        @click="toActice('`+ file_arr[accumulator] + `')"
          >Next<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
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
                      return {};
                    },
                    methods: {
                      goback() {
                        window.history.go(-1);
                      },
                      toActice(link) {
                        this.$router.push({
                          path: link,
                        });
                      },
                    },
                  };
                  </script>
                  
                  <style scoped>
                  @media only screen and (max-width: 1280px) {
                    .content {
                      position: relative;
                      top: 1.333333rem;
                      width: 100%;
                      min-height: 5.333333rem;
                      background-color: #1e2226;
                    }
                    .service-content {
                      position: relative;
                      width: 9.066667rem;
                      min-height: 17.6rem;
                      background-color: #fff;
                      margin: 0 auto;
                      overflow: hidden;
                      padding-bottom: 1.8rem;
                      box-sizing: content-box;
                    }
                  
                    .service-title {
                      position: relative;
                      margin-top: 61px;
                      width: 100%;
                      height: 60px;
                      line-height: 60px;
                      font-size: 0.64rem;
                      text-align: center;
                    }
                    .service-display {
                      position: relative;
                      margin-top: 20px;
                      width: 100%;
                      text-align: center;
                      font-size: 12px;
                      color: #1e1d1e;
                    }
                    .tems-address,
                    .tems-date {
                      position: relative;
                      width: 100%;
                      text-align: center;
                      font-size: 12px;
                      color: #1e1d1e;
                    }
                  
                    .acticle-view {
                      position: relative;
                      width: 8.533333rem;
                      min-height: 12.8rem;
                      background: #fff;
                      margin: auto;
                      margin-top: 40px;
                      border-radius: 5px;
                      overflow-y: scroll;
                      font-size: 12px;
                      padding-bottom: 200px;
                    }
                  
                    .back-text {
                      position: relative;
                      top: 0.533333rem;
                      font-size: 16px;
                      color: #7db4dc;
                      width: 8.533333rem;
                      height: 40px;
                      line-height: 40px;
                      background: #fff;
                      margin: auto;
                      cursor: pointer;
                    }
                    .acticle-view img {
                      position: relative;
                      display: block;
                      width: 100%;
                      margin-bottom: 30px;
                    }
                  
                    .acticle-view h1 {
                      position: relative;
                      display: block;
                      width: 100%;
                      text-align: center;
                      font-size: 0.533333rem;
                      line-height: 1.066667rem;
                      margin-bottom: 30px;
                    }
                  
                    .acticle-view p {
                      line-height: 20px;
                      color: #989898;
                      margin-bottom: 30px;
                    }
                  
                    .acticle-view h3 {
                      line-height: 20px;
                      color: #989898;
                      font-size: 14px;
                    }
                  
                    .acticle-view strong {
                      line-height: 20px;
                      color: #989898;
                      font-size: 14px;
                    }
                  
                    .acticle-view li {
                      line-height: 20px;
                      color: #989898;
                      font-size: 14px;
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
                    .service-content {
                      position: relative;
                      width: 1200px;
                      min-height: 1320px;
                      background-color: #fff;
                      margin: 0 auto;
                      overflow: hidden;
                      padding-bottom: 60px;
                      box-sizing: content-box;
                    }
                  
                    .service-title {
                      position: relative;
                      margin-top: 61px;
                      width: 100%;
                      height: 60px;
                      line-height: 60px;
                      font-size: 48px;
                      text-align: center;
                    }
                    .service-display {
                      position: relative;
                      margin-top: 20px;
                      width: 100%;
                      text-align: center;
                      font-size: 12px;
                      color: #1e1d1e;
                    }
                    .tems-address,
                    .tems-date {
                      position: relative;
                      width: 100%;
                      text-align: center;
                      font-size: 12px;
                      color: #1e1d1e;
                    }
                  
                    .acticle-view {
                      position: relative;
                      width: 900px;
                      min-height: 960px;
                      background: #fff;
                      margin: auto;
                      margin-top: 40px;
                      border-radius: 5px;
                      font-size: 12px;
                      padding-bottom: 200px;
                    }
                  
                    .back-text {
                      position: relative;
                      top: 40px;
                      font-size: 16px;
                      color: #7db4dc;
                      width: 900px;
                      height: 80px;
                      line-height: 80px;
                      background: #fff;
                      margin: auto;
                      cursor: pointer;
                    }
                    .acticle-view img {
                      position: relative;
                      display: block;
                      width: 100%;
                      margin-bottom: 30px;
                    }
                  
                    .acticle-view h1 {
                      position: relative;
                      display: block;
                      width: 100%;
                      text-align: center;
                      font-size: 0.533333rem;
                      line-height: 1.066667rem;
                      margin-bottom: 30px;
                    }
                  
                    .acticle-view p {
                      line-height: 20px;
                      color: #989898;
                      margin-bottom: 30px;
                    }
                  
                    .acticle-view h3 {
                      line-height: 20px;
                      color: #989898;
                      font-size: 14px;
                    }
                  
                    .acticle-view strong {
                      line-height: 20px;
                      color: #989898;
                      font-size: 14px;
                    }
                    .acticle-view li {
                      line-height: 20px;
                      color: #989898;
                      font-size: 14px;
                    }
                  }
                  </style>
                  
                            `)



        if (accumulator % 3 == 1) {
          a1 = trimHtml(mdData, { limit: 1000 })
          a1_link = path2
        }
        if (accumulator % 3 == 2) {
          a2 = trimHtml(mdData, { limit: 1000 })
          a2_link = path2
        }
        if (accumulator % 3 == 0 || accumulator == accumulator2) {
          if (accumulator % 3 == 0) {
            a3 = trimHtml(mdData, { limit: 1000 })
            a3_link = path2
          }

          let is_p, is_next, p_link, next_link;
          if (accumulator <= 3) {
            console.log("没有上一页")
            is_p = false
          } else {
            is_p = true
            p_link = '/blog/menu2/' + (Math.ceil(accumulator / 3) - 1)
          }

          if (accumulator < accumulator2) {
            console.log("有下一页", '/blog/menu2/' + (Math.ceil(accumulator / 3) + 1))
            is_next = true
            next_link = '/blog/menu2/' + (Math.ceil(accumulator / 3) + 1)
          }
          if (accumulator == accumulator2) {
            console.log("no有下一页")
            is_next = false
          }

          // create
          fs.mkdir('./pages/blog/menu2', { recursive: true }, (err) => { })


          fs.writeFileSync('./pages/blog/menu2/' + Math.ceil(accumulator / 3) + '.vue',

            `
<template>
  <div class="content">
    <div class="menu-content">
      <div class="left-content">
        <div
          class="html-item"
          @click="toActice('`+ a1_link + `')"
        >
        `+ a1.html + `
          <p class="click-articel">READ MORE</p>
        </div>
    <div
        v-if="`+ a2.more + `"
        class="html-item"
        @click="toActice('`+ a2_link + `')"
      >
      `+ a2.html + `
        <p class="click-articel">READ MORE</p>
      </div>


    <div
      class="html-item"
      v-if="`+ a3.more + `"
      @click="toActice('`+ a3_link + `')"
    >
    `+ a3.html + `
      <p class="click-articel">READ MORE</p>
    </div>
    <el-button type="" icon="el-icon-arrow-left" class="menu-left-btn"
    v-if="`+ is_p + `"
    @click="toActice('`+ p_link + `')"
    >Previous</el-button
  >
  <el-button type="" class="menu-right-btn"
  v-if="`+ is_next + `"
  @click="toActice('`+ next_link + `')"
    >Next<i class="el-icon-arrow-right el-icon--right"></i
  ></el-button>

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
        <div style="margin-top: 50px">
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
  }
  .click-articel {
    position: relative;
    font-size: 16px;
    color: #0397ff !important;
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
  }
  .click-articel {
    position: relative;
    font-size: 16px;
    color: #7db4dc !important;
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

.html-item img {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 30px;
  }

  .html-item h1 {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.533333rem;
    line-height: 1.066667rem;
    margin-bottom: 30px;
  }

  .html-item p {
    line-height: 20px;
    color: #989898;
    margin-bottom: 30px;
  }

  .html-item h3 {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }

  .html-item strong {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
  }

  .html-item li {
    line-height: 20px;
    color: #989898;
    font-size: 14px;
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

                    
                    `)
          a1 = ''
          a2 = ''
          a3 = ''

        }


      }
    })
  }
})