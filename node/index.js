const fs = require('fs')
var path = require('path')
var filePath = path.resolve('./acticle')
var MarkdownIt = require('markdown-it')
const { exit } = require('process')
md = new MarkdownIt()

const writeFileRecursive = function (path, buffer, callback) {
  let lastPath = path.substring(0, path.lastIndexOf("/"));
  fs.mkdir(lastPath, { recursive: true }, (err) => {
    if (err) return callback(err);
    fs.writeFile(path, buffer, function (err) {
      if (err) return callback(err);
      return callback(null);
    });
  });
}

fileDisplay(filePath)

function fileDisplay(filePath) {
  var _this = this
  var accumulator = 0
  var accumulator2 = 0

  var a1 = ``
  var a2 = ``
  var a3 = ``

  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      console.log(files)

      files.forEach(function (filename) {
        if (path.extname(filename) == '.md') {
          ++accumulator2
        }
      })

      files.forEach(function (filename) {
        console.log(path.extname(filename))

        if (path.extname(filename) == '.md') {
          ++accumulator
          console.log(filePath + '/' + filename)

          var mdStr = fs.readFileSync(filePath + '/' + filename, 'utf-8');

          let mdData = md.render(mdStr)
          if (accumulator % 3 + 1 == 1) {
            a1 = mdData.substring(0, 1000)
          }
          if (accumulator % 3 + 1 == 2) {
            a2 = mdData.substring(0, 1000)
          }
          if (accumulator % 3 + 1 == 3) {
            a3 = mdData.substring(0, 1000)
            // create
            fs.mkdir('./pages/blog/meun', { recursive: true }, (err) => { })
            fs.writeFile('./pages/blog/menu2/' + Math.ceil(accumulator / 3) + '.vue',
              `
<template>
  <div class="content">
    <div class="menu-content">
      <div class="html-item">` +
              a1 +
              `</div>
      <div class="html-item">` +
              a2 +
              `</div>
      <div class="html-item">` +
              a3 +
              `</div>
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
  methods: {},
};
</script>

<style scoped>
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
}

.html-item {
  position: relative;
  width: 820px;
  min-height: 100px;
  box-sizing: content-box;
  padding: 40px;
}
</style>  
            `
              , err => { })
          }
          const stats = fs.statSync(filePath + '/' + filename)
          let year = new Date(stats.mtime).getFullYear()
          let month = new Date(stats.mtime).getMonth() + 1
          let date = new Date(stats.mtime).getDate()
          // create mkdir
          fs.mkdir(
            './pages/blog/' + year + path.sep + month + path.sep + date,
            { recursive: true },
            (err) => {
            })

          fs.writeFileSync(
            './pages/blog/' +
            year +
            path.sep +
            month +
            path.sep +
            date +
            '/' +
            new Date(stats.mtime).getTime() +
            '.vue',
            `
                <template>
                  <div class="content">
                    ` + mdData + `
                  </div>
                </template
                <script>
                export default {
                  components: {},
                  created() {
                  },
                  mounted() {
                  },
                  data() {
                    return {};
                  },
                  methods: {},
                };
                </script>
                
                <style scoped>
                .content {
                  position: relative;
                  top: 100px;
                  width: 100%;
                  height: 400px;
                  background-color: #fff;
                }
                </style>
                    `)


        }
      })




    }
  })
}


