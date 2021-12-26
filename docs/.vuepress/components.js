import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  '../components',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.vue$/
)


let componentNameTemp = []
let componentConfigTemp = []
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  componentConfigTemp.push(requireComponent(fileName))

  // 获取组件的 PascalCase 命名
  componentNameTemp.push(upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
    )
  ))
})



export const componentName = componentNameTemp
export const componentConfig = componentConfigTemp