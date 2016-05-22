<template>
  <app-base>
    <div class='container'>
      <div class="row">
        <div class="col-md-4">
          <task-list v-ref:list></task-list>
        </div>
        <div class="col-md-4">
          <project-list v-ref:project></project-list>
        </div>
        <div class="col-md-4">
          <!-- 各种项目编辑形式 -->
          <tabset>
            <tab header='增加根'>
              <task-form></task-form>
            </tab>
            <tab header='给项目增加根'>
              <task-form :project='$refs.project.selected'></task-form>
            </tab>
            <tab header='增加子'>
              {{$refs.list.selected}}
              <task-form :parent='$refs.list.selected'></task-form>
            </tab>
            <tab header='修改'>
              {{$refs.list.selected}}
              <task-form :source='$refs.list.selected'></task-form>
            </tab>
          </tabset>
        </div>
      </div>
    </div>
  </app-base>
</template>

<script>
import ProjectList from '../../src/components/project/ProjectList'
import TaskList from '../../src/components/task/TaskList'
import TaskForm from '../../src/components/task/TaskForm'

export default {
  components: { TaskList, TaskForm, ProjectList }
}
</script>
