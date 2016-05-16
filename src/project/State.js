export default class {
  constructor () {
    this.selected = null
  }

  select (selected) {
    this.selected = selected
  }

  getSelected () {
    console.log(this.selected)
    return this.selected
  }
}
