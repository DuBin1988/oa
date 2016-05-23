<template>
  <div id='project-page' class='container'>
    <div class="row">
      <div class="col-lg-4">
        <project-list v-ref:project></project-list>
      </div>
      <div class="col-lg-8">
        <p v-if='!($refs.project) || !($refs.project.selected)'>请选择项目</p>
        <task-list v-if='$refs.project && $refs.project.selected' :project='$refs.project.selected'></task-list>
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
