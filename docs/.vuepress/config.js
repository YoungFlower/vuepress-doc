module.exports = {
  "theme": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "logo.png"
      }
    ]
  ],
  "title": "VuePress + Element",
  "description": "VuePress搭建的组件库文档教程示例代码",
  "base": "/",
  "port": "8080",
  "plugins": [
    "demo-container"
  ],
  "themeConfig": {
    "nav": [{
        "text": "首页",
        "link": "/"
      },
      {
        "text": "vant二次封装",
        "link": "/doc-type/vant/"
      }
    ],
    "sidebar": {
      "/doc-type/vant/": [
        "/doc-type/vant/",
        "/doc-type/vant/select.md",
        "/doc-type/vant/addialog.md",
        "/doc-type/vant/test.md"
      ]
    }
  },
  "markdown": {}
}