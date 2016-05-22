<template>
  <div>
    <validator name='v'>
      <form novalidate>
        <div class="form-group">
          <label for="name">名称</label>
          <input type="text" class="form-control" id="name" placeholder="请输入任务名称"
            v-model="model.name" v-validate:name='{ required: true }'>
          </input>
          <span v-if="$v.name.required">不能为空</span>
        </div>
        <div class="form-group">
          <label for="content">内容</label>
          <textarea class="form-control" id="content" placeholder="请输入任务内容"
            v-model="model.content" rows="3">
          </textarea>
        </div>
        <div class="form-group">
          <label for="actor">执行人</label>
          <input type="text" class="form-control" id="actor" placeholder="请输入执行人"
            v-model="model.actor">
          </input>
        </div>
        <div class="form-group">
          <label for="musttime">要求完成时间</label>
          <datepicker id="musttime" placeholder="请输入要求完成时间"
            :value.sync="model.musttime"
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
    }
  },
  methods: {
    confirm () {
      if (this.project) {
        this.model.projectid = this.project.id
      }
      if (this.parent) {
        this.model.parentid = this.parent.id
      }
      this.$post('/rs/entity/t_task', this.model)
      this.$back()
    }
  },
  components: { datepicker }
}
</script>
