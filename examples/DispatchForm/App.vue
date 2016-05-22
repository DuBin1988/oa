<template>
  <app-base>
    <div class='container'>
      <div class="row">
        <div class="col-md-4">
          <task-list v-ref:list></task-list>
        </div>
        <div class="col-md-4">
          <tabset>
            <tab header='任务分派'>
              {{$refs.list.selected}}
              <dispatch-form :task='$refs.list.selected'></dispatch-form>
            </tab>
            <tab header='任务分派列表'>
              <dispatch-list></dispatch-list>
            </tab>
          </tabset>
        </div>
      </div>
    </div>
  </app-base>
</template>

<script>
import TaskList from '../../src/components/task/TaskList'
import DispatchForm from '../../src/components/task/DispatchForm'
import DispatchList from '../../src/components/task/DispatchList'

export default {
  components: { TaskList, DispatchForm, DispatchList }
}
</script>
