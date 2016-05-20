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

let saveGen = function * (comp) {
  yield comp.$post('/rs/entity/t_project', comp.model)
  // 刷新项目树，反映最新变化
  yield comp.$state.projects.refresh()
  comp.$route('ProjectHome')
}

export default {
  data () {
    return {
      model: {}
    }
  },
  methods: {
    confirm () {
      let gen = saveGen(this)
      return co(gen)
    }
  }
}
</script>
