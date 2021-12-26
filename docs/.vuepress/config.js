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

        "text": " 组件",
        // "link": "/",
        "items": [{
            "text": "普通组件",
            "link": "/doc-type/common/"
          },
          {
            "text": "vant二次封装",
            "link": "/doc-type/vant/"
          },
          {
            "text": "element-ui二次封装",
            "link": "/doc-type/element-ui/"
          },
        ]
      },
      {
        "text": "js方法",
        "link": "/doc-type/function/"
      }
    ],
    "sidebar": {
      "/doc-type/common/": [
        "/doc-type/common/",
        "/doc-type/common/loading.md",
        "/doc-type/common/jk-ad-item.md",
        "/doc-type/common/jk-no-data.md",
      ],
      "/doc-type/element-ui/": [
        "/doc-type/element-ui/"
      ],
      "/doc-type/function/": [
        "/doc-type/function/",
        "/doc-type/function/h5-function.md"
      ],
      "/doc-type/vant/": [
        "/doc-type/vant/",
        "/doc-type/vant/jk-popup-dialog.md"
      ]
    },
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        "@": "/docs/components",
        "@style": "/docs/.vuepress/public/styles",
        "@fun": "/docs/function"
      },
    }
  },
  "sassOptions": {
    "indentedSyntax": true
  },
  "scss": {
    "additionalData": "@import '@style/variables.scss';"
  },
  "markdown": {}
}