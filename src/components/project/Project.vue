<template>
  <!--flex-->
  <div class='flex-row'>
    <!--left-->
    <div>
      <project-list v-ref:project></project-list>
    </div>
    <!--main-->
    <div class='span-row'>
      <task-list v-if='$refs.project && $refs.project.selected' :project='$refs.project.selected.data'></task-list>
    </div>
  </div>
</template>

<script>
import ProjectList from './ProjectList'
import TaskList from '../task/TaskList'

export default {
  title: '项目管理',
  components: { ProjectList, TaskList }
}
</script>
