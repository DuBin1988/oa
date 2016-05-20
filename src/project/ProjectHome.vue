<template>
  <div id='project-page' class='container'>
    <div class="row">
      <div class="col-md-4">
        <project-tree :select-store='selectStore'></project-tree>
      </div>
      <div class="col-md-8">
        <project-task></project-task>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTree from './ProjectTree'
import ProjectForm from './ProjectForm'
import ProjectTask from './ProjectTask'

export default {
  components: { ProjectTree, ProjectForm, ProjectTask }
}
</script>
