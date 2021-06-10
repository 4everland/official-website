const fs = require('fs')
var path = require('path')
var filePath = path.resolve('./acticle')
var MarkdownIt = require('markdown-it')
md = new MarkdownIt()

console.log(123)

fileDisplay(filePath)

function fileDisplay(filePath) {
  var _this = this
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      console.log(files)

      files.forEach(function (filename) {
        console.log(path.extname(filename))
      })

      var mdStr = fs.readFile('./acticle/2.md', 'utf-8', (err, data) => {
        // md to html
        let mdData = md.render(data);
        const stats = fs.statSync("./acticle/2.md")
        let year = new Date(stats.mtime).getFullYear()
        let month = (new Date(stats.mtime).getMonth() + 1)
        let date = new Date(stats.mtime).getDate()

        // console.log('./pages/blog/' + year + path.sep + month + path.sep + date + path.sep + new Date(stats.mtime).getTime() + '.vue')
        // console.log(_this)

        fs.writeFile('./pages/blog/' + year + '/' + month + "/" + date + "/" + new Date(stats.mtime).getTime() + '.vue', `
                <template>
              <div class="content">
                ` + mdData + `
              </div>
            </template>
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
                `, err => {

        })
      })

    }
  })
}


