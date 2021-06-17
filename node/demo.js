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

                // console.log(mdData, 999)
                console.log(trimHtml(mdData, { limit: 200 }));

                exit;


            }
        })
    }
})