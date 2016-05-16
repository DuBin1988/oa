<template>
  <div id='project-page' class='container full'>
    <div class="row full">
      <div class="col-md-4 full">
        <project-tree :select-store='selectStore'></project-tree>
      </div>
      <div class="col-md-8 full">
        <!--flex-->
        <div class='flex'>
          <!--head-->
          <div>
            <project-form></project-form>
          </div>
          <!--main-->
          <div class='span'>
            <project-task></project-task>
          </div>
        </div>
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
