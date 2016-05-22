<template>
  <div>
    <validator name='v'>
      <form novalidate>
        <div class="form-group">
          <label class="control-label">任务名</label>
          <div>
            <p class="form-control-static">{{task ? task.name : '未选择'}}</p>
          </div>
        </div>
        <div class="form-group">
          <label for="way">方案</label>
          <textarea class="form-control" id="way" placeholder="请输入任务方案"
            v-model="model.way" rows="3">
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
    title: '任务分派',
    data () {
      return {
        model: {}
      }
    },
    props: [ 'task' ],
    methods: {
      confirm () {
        this.model.taskid = this.task.id
        // 先提交任务分派对象，再修改项目对象
        this.$post('/rs/entity/t_taskdispatch', this.model)
        // 项目对象相关内容变更
        Object.assign(this.task, {
          way: this.model.way,
          actor: this.model.actor,
          musttime: this.model.musttime
        })
        this.$post('/rs/entity/t_task', this.task)
        this.$back()
      }
    },
    components: { datepicker }
  }
</script>
