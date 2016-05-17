<template>
  <div id='project-page' class='full'>
    <project-home v-show='currentView === "ProjectHome"' @route='route'></project-home>
    <task-form v-if='currentView === "TaskForm"' @route='route'></task-form>
    <project-form v-if='currentView === "ProjectForm"' @route='route'></project-form>
  </div>
</template>

<script>
import ProjectHome from './ProjectHome'
import ProjectForm from './ProjectForm'
import TaskForm from './TaskForm'
import State from './State'

export default {
  data () {
    return {
      currentView: 'ProjectHome',
      state: new State()
    }
  },
  methods: {
    route (comp) {
      this.currentView = comp
    }
  },
  components: { ProjectHome, ProjectForm, TaskForm }
}
</script>
