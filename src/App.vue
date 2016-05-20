<template>
  <app-base>
    <div class='flex'>
      <!--head-->
      <header>
        欢迎使用奥枫OA系统！
      </header>
      <!--main-->
      <article class='span'>
        <tabset>
          <tab header='项目管理'>
            <project-page></project-page>
          </tab>
          <tab header='任务管理'>
          </tab>
        </tabset>
      </article>
      <!--foot-->
      <footer>
        版本号：V0.0.2
      </footer>
    </div>
  </app-base>
</template>

<script>
import Tabset from 'vue-strap/src/Tabset'
import Tab from 'vue-strap/src/Tab'
import ProjectPage from './project/ProjectPage'

export default {
  components: { Tab, ProjectPage, Tabset }
}
</script>
