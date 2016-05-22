<template>
  <div>
    <button @click="$route('project', {}, false)">项目管理</button>
    <button @click="$route('task-list', {}, false)">任务管理</button>
  </div>
</template>

<script>
export default {
  title: '功能菜单'
}
</script>
