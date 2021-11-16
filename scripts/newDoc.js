let fs = require('fs');
let path = require('path');

// 获取输入内容
const typeName = process.argv[2]
const docName = process.argv[3]


// 读取文件
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) {
        return reject(error)
      }
      console.log(fileName + '读取成功')
      resolve(data)
    })
  })
}

// 写入文件
const writeFile = function (path, result) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, result, 'utf8', (err) => {
      if (err) {
        reject(err)
        throw new Error(`error occurs when writeFile file manifest.json Error detail: ${err}`)
        process.exit(1)
      }
      console.log(path + '写入成功')

      resolve()
    })
  })
}

const mkdir = function (path) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(path, err => {
      if (err) {
        reject(err)
        throw new Error(`error occurs when writeFile file manifest.json Error detail: ${err}`)
        process.exit(1)
      }
      writeFile(path, docName).then(res => {

        console.log('创建文件成功')
        resolve()
      })
    })
  })
}

// 执行生成文档操作
const setDocContent = function () {
  readFile('docs/.vuepress/config.json').then(res => {
    let config = JSON.parse(res)
    config.themeConfig.sidebar[`/doc-type/${typeName}/`].push(`/doc-type/${typeName}/${docName}.md`)

    let result = JSON.stringify(config, null, 2)
    let resultJs = 'module.exports = ' + result
    writeFile(`docs/doc-type/${typeName}/${docName}.md`, docName).then(res => {
      writeFile('docs/.vuepress/config.json', result)
      writeFile('docs/.vuepress/config.js', resultJs)
    })
  })
}

setDocContent()




// 设置导航栏内容
function setNav(filePath) {
  console.log(filePath)
  return []
}


function setSidebar() {
  return {
    '/doc-type/vant/': ['/doc-type/vant/', '/doc-type/vant/select.md', '/doc-type/vant/addialog.md']
  }
}
// module.export = {
//   // nav,
//   // sidebar: {
//   '/doc-type/vant/': ['/doc-type/vant/', '/doc-type/vant/select.md', '/doc-type/vant/addialog.md']
//   // }
// }