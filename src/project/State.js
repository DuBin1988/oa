import { TreeList } from 'vue-client'

export default class {
  constructor () {
    this.selected = null
    // 左侧项目树
    this.projects = new TreeList('/rs/sql/project.sql')
  }

  select (selected) {
    this.selected = selected
  }

  getSelected () {
    console.log(this.selected)
    return this.selected
  }
}
