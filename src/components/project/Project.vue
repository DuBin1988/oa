<template>
  <div id='project-page' class='container'>
    <div class="row">
      <div class="col-md-4">
        <project-list v-ref:project></project-list>
      </div>
      <div class="col-md-8">
        <task-list :project='$refs.project.selected'></task-list>
      </div>
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
