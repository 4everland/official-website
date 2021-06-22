var trimHtml = require("trim-html");
const fs = require("fs");
var path = require("path");
var filePath = path.resolve("./acticle");
var MarkdownIt = require("markdown-it");
const { exit } = require("process");
const replace = require('replace-in-file');
var menu = require("./template/menu")

md = new MarkdownIt();

var accumulator = 0;
var accumulator2 = 0;

String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "g"), s2);
}



fs.readdir(filePath, function (err, files) {
    if (err) {
        console.warn(err);
    } else {

        let file_arr = []

        files.forEach(function (filename) {
            if (path.extname(filename) == '.md') {

                const stats = fs.statSync(filePath + '/' + filename)
                let year = new Date(stats.mtime).getFullYear()
                let month = new Date(stats.mtime).getMonth() + 1;
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
        console.log(file_arr)

        files.forEach(function (filename) {
            if (path.extname(filename) == '.md') {

                console.log(filePath + '/' + filename)

                var mdStr = fs.readFileSync(filePath + '/' + filename, 'utf-8');
                let mdData = md.render(mdStr)
                const stats = fs.statSync(filePath + '/' + filename)
                let year = new Date(stats.mtime).getFullYear()
                let month = new Date(stats.mtime).getMonth() + 1;
                let date = new Date(stats.mtime).getDate()
                ++accumulator
                let path2 = '/blog2/' +
                    year +
                    path.sep +
                    month +
                    path.sep +
                    date +
                    path.sep +
                    new Date(stats.mtime).getTime();
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
                        is_p = false
                    } else {
                        is_p = true
                        p_link = '/blog/menu4/' + (Math.ceil(accumulator / 3) - 1)
                    }

                    if (accumulator < accumulator2) {
                        is_next = true
                        next_link = '/blog/menu4/' + (Math.ceil(accumulator / 3) + 1)
                    }
                    if (accumulator == accumulator2) {
                        is_next = false
                    }

                    var str = menu.createMenu({
                        a1: a1,
                        a1_link: a1_link,
                        a2: a2,
                        a2_link: a2_link,
                        a3: a3,
                        a3_link: a3_link,
                        is_next: is_next,
                        next_link: next_link,
                        is_p: is_p,
                        p_link: p_link
                    })

                    // create
                    fs.mkdirSync('./pages/blog/menu4', { recursive: true }, (err) => { })

                    let file = './pages/blog/menu4/' + Math.ceil(accumulator / 3) + '.vue'
                    fs.writeFileSync(file, str)

                    a1 = ''
                    a2 = ''
                    a3 = ''
                    a1_link = ''
                    a2_link = ''
                    a3_link = ''

                }

            }


        })

    }
})