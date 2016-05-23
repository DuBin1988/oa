<template>
  <div>
    <div class='container'>
      <div class="row">
        <button @click='$back()'>返回</button>
        <div v-if='task' class="col-md-4">
          <p>名称：{{task.name}}</p>
          <p>状态：{{task.f_state}}</p>
          <p>方案：{{task.way}}</p>
          <p>执行人：{{task.actor}}</p>
          <p>要求时间：{{task.musttime}}</p>
        </div>
        <div class="col-md-8">
          <tabset>
            <tab v-if='task && task.f_state !== "登记"' header='派发过程'>
              <dispatch-list :task='task'></dispatch-list>
            </tab>
          </tabset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DispatchList from './DispatchList'

export default {
  title: '任务查看',
  props: ['task'],
  components: { DispatchList }
}
</script>
