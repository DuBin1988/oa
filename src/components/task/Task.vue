<template>
  <!--flex-->
  <div class='flex-row'>
    <!--left-->
    <div v-if='task'>
      <button @click='$back()'>返回</button>
      <p>名称：{{task.f_name}}</p>
      <p>状态：{{task.f_state}}</p>
      <p>内容：{{task.f_content}}</p>
      <p>方案：{{task.f_way}}</p>
      <p>执行人：{{task.f_actor}}</p>
      <p>要求时间：{{task.f_musttime}}</p>
    </div>
    <!--main-->
    <div class='span-row'>
      <dispatch-list v-if='task && task.f_state !== "登记"' :task='task'></dispatch-list>
    </div>
  </div>
</template>

<script>
export default {
  title: '任务查看',
  props: ['task']
}
</script>
