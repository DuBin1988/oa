<template>
  <div>
    <validator name='v'>
      <form novalidate>
        <div>
          名称:
          <input type="text" v-model="model.name" v-validate:name='{ required: true }'>
          <span v-if="$v.name.required">不能为空</span>
        </div>
      </form>
      <button v-if='$v.valid' @click="confirm()">保存</button>
      <button @click='$back()'>返回</button>
    </validator>
  </div>
</template>

<script>
import co from 'co'

let saveGen = function * (self) {
  // 如果有parent参数，把parent的id号放到model里
  if (self.parent) {
    self.model.parentid = self.parent.id
  }
  yield self.$post('/rs/entity/t_project', self.model)
  // 通知项目保存成功。
}

export default {
  title: '项目编写',
  data () {
    return {
      model: {}
    }
  },
  props: [ 'parent', 'source' ],
  methods: {
    confirm () {
      let gen = saveGen(this)
      return co(gen)
    }
  },
  watch: {
    // source变化时，把source中的内容全部给model
    'source' (val) {
      this.model = Object.assign({}, this.model, this.source)
    }
  },
  ready () {
    // 如果有source参数，把source中的内容全部给model
    if (this.source) {
      this.model = Object.assign({}, this.model, this.source)
    }
  }
}
</script>
