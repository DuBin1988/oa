<template>
  <div id='project-page' class='full'>
    <project-home v-show='currentView === "ProjectHome"' @route='route'></project-home>
    <task-form v-if='currentView === "TaskForm"' @route='route'></task-form>
  </div>
</template>

<script>
import ProjectHome from './ProjectHome'
import TaskForm from './TaskForm'
import State from './State'

export default {
  data () {
    return {
      currentView: 'ProjectHome',
      store: new State()
    }
  },
  methods: {
    route (comp) {
      this.currentView = comp
    }
  },
  components: { ProjectHome, TaskForm }
}
</script>
