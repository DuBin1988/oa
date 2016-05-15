<template>
  <div id="app" class='full'>
    <app-base>
      <div class='flex'>
        <!--head-->
        <div>
          欢迎使用奥枫OA系统！
        </div>
        <!--main-->
        <div class='span'>
          <tabset>
            <tab header='项目管理'>
              <project-page></project-page>
            </tab>
            <tab header='任务管理'>
            </tab>
          </tabset>
        </div>
        <!--foot-->
        <div>
          版本号：V0.0.1
        </div>
      </div>
    </app-base>
  </div>
</template>

<script>
import Tabset from 'vue-strap/src/Tabset'
import Tab from 'vue-strap/src/Tab'
import ProjectPage from './project/ProjectPage'

export default {
  components: { Tab, ProjectPage, Tabset }
}
</script>
