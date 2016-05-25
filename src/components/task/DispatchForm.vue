<template>
  <div>
    <validator name='v'>
      <form novalidate>
        <div class="form-group">
          <label class="control-label">任务名</label>
          <div>
            <p class="form-control-static">{{task ? task.f_name : '未选择'}}</p>
          </div>
        </div>
        <div class="form-group">
          <label for="f_way">方案</label>
          <textarea class="form-control" id="f_way" placeholder="请输入任务方案"
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
  import co from 'co'

  let saveGen = function * (self) {
    self.model.f_taskid = self.task.id
    // 先提交任务分派对象，再修改项目对象
    yield self.$post('/rs/entity/t_taskdispatch', self.model, {resolveMsg: null})
    // 项目对象相关内容变更
    Object.assign(self.task, {
      f_state: '已派',
      f_way: self.model.f_way,
      f_actor: self.model.f_actor,
      f_musttime: self.model.f_musttime
    })
    yield self.$post('/rs/entity/t_task', self.task, {resolveMsg: null})
    yield self.$showMessage('提交成功', ['confirm'])
    self.$back()
  }

  export default {
    title: '任务分派',
    data () {
      return {
        model: {}
      }
    },
    props: ['task'],
    methods: {
      confirm () {
        this.$log('task')
        let gen = saveGen(this)
        co(gen)
      }
    },
    components: { datepicker }
  }
</script>
