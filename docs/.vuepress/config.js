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
  "title": "兼客VuePress文档",
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
        "text": "普通组件",
        "link": "/doc-type/common/"
      },
      {
        "text": "vant二次封装",
        "link": "/doc-type/vant/"
      }
    ],
    "sidebar": {
      "/doc-type/common/": [
        "/doc-type/common/",
        "/doc-type/common/loading.md"
      ],
      "/doc-type/element-ui/": [
        "/doc-type/element-ui/"
      ],
      "/doc-type/vant/": [
        "/doc-type/vant/"
      ]
    }
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        "@": "docs/components"
      }
    }
  },
  "markdown": {}
}