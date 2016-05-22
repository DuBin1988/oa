<template>
  <app-base>
    <div class='container'>
      <div class="row">
        <div class="col-md-4">
          <project-list v-ref:list></project-list>
        </div>
        <div class="col-md-8">
          <!-- 各种项目编辑形式 -->
          <tabset>
            <tab header='增加根'>
              <project-form></project-form>
            </tab>
            <tab header='增加子'>
              {{$refs.list.selected}}
              <project-form :parent='$refs.list.selected'></project-form>
            </tab>
            <tab header='修改'>
              {{$refs.list.selected}}
              <project-form :source='$refs.list.selected'></project-form>
            </tab>
          </tabset>
        </div>
      </div>
    </div>
  </app-base>
</template>

<script>
import ProjectList from '../../src/components/project/ProjectList'
import ProjectForm from '../../src/components/project/ProjectForm'

export default {
  components: { ProjectList, ProjectForm }
}
</script>
