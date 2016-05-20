<template>
  <div>
    <route v-ref:route></route>
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
      state: new State()
    }
  },
  ready () {
    this.$refs.route.route('项目管理', 'ProjectHome')
  },
  components: { ProjectHome, ProjectForm, TaskForm }
}
</script>
