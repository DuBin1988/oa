<template>
  <div>
    <p v-if='project'>项目名称：{{project.f_name}}</p>
    <p v-if='parent'>父任务：{{parent.f_name}}</p>
    <validator name='v'>
      <form novalidate>
        <div class="form-group">
          <label for="f_name">名称</label>
          <input type="text" class="form-control" id="f_name" placeholder="请输入任务名称"
            v-model="model.f_name" v-validate:f_name='{ required: true }'>
          </input>
          <span v-if="$v.f_name.required">不能为空</span>
        </div>
        <div class="form-group">
          <label for="f_content">内容</label>
          <textarea class="form-control" id="f_content" placeholder="请输入任务内容"
            v-model="model.f_content" rows="3">
          </textarea>
        </div>
        <div class="form-group">
          <label for="f_way">方案</label>
          <textarea class="form-control" id="f_way" placeholder="请输入方案"
            v-model="model.f_way" rows="3">
          </textarea>
        </div>
        <div class="form-group">
          <label for="f_actor">执行人</label>
          <input type="text" class="form-control" id="f_actor" placeholder="请输入执行人"
            v-model="model.f_actor">
          </input>
        </div>
        <div class="form-group">
          <label for="f_state">状态</label>
          <input type="text" class="form-control" id="f_state" placeholder="请输入状态"
            v-model="model.f_state">
          </input>
        </div>
        <div class="form-group">
          <label for="f_musttime">要求完成时间</label>
          <datepicker id="f_musttime" placeholder="请输入要求完成时间"
            :value.sync="model.f_musttime"
            :disabled-days-of-Week="[]"
            :format="'yyyy-MM-dd'"
            :show-reset-button="reset">
          </datepicker>
        </div>
      </form>
      <button v-if='$v.valid' @click="confirm()">保存</button>
      <button @click='$back()'>返回</button>
    </validator>
  </div>
</template>

<script>
import datepicker from 'vue-strap/src/datepicker'

export default {
  title: '任务编写',
  data () {
    return {
      model: {}
    }
  },
  props: [ 'parent', 'source', 'project' ],
  watch: {
    // source变化时，把source中的内容全部给model
    'source' (val) {
      this.model = Object.assign({}, this.model, this.source)
    },
    'project' (val) {
      console.log(this.project)
    }
  },
  methods: {
    confirm () {
      if (this.project) {
        this.model.f_projectid = this.project.id
      }
      if (this.parent) {
        this.model.f_parentid = this.parent.id
      }
      // 没有source，说明时新增，状态为登记
      if (!this.source) {
        this.model.f_state = '登记'
      }
      this.$post('/rs/entity/t_task', this.model)
      this.$back()
    }
  },
  components: { datepicker }
}
</script>
