<template>
  <div>
    <p>给项目添加新任务：{{$state.selected.name}}</p>
    <validator name='v'>
      <form novalidate>
        <div>
          名称:
          <input type="text" v-model="model.name" v-validate:name='{ required: true }'>
          <span v-if="$v.name.required">不能为空</span>
        </div>
      </form>
      <button v-if='$v.valid' @click="confirm()">保存</button>
      <button @click='$route("ProjectHome")'>返回</button>
    </validator>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  methods: {
    confirm () {
      this.model.projectid = this.$state.selected.id
      this.$post('/rs/entity/t_task', this.model)
      this.$route('ProjectHome')
    }
  }
}
</script>
