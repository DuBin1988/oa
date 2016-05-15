<template>
  <div id='project-page' class='container full'>
    <div class="row full">
      <div class="col-md-4 full">
        <project-tree></project-tree>
      </div>
      <div class="col-md-8 full">
        <project-form></project-form>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTree from './ProjectTree'
import ProjectForm from './ProjectForm'

export default {
  components: { ProjectTree, ProjectForm }
}
</script>
