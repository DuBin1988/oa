<template>
  <div id="app" style="height: 100%;">
    <!--head-->
    <div style="background-color: black; height: 5%;">
      head
    </div>
    <!--main-->
    <div style="background-color: black; height: 90%;">
      <tabset style="width: 90%; margin:0 auto;">
        <tab header="项目管理">
          测试1
        </tab>
        <tab header="任务管理">
          测试2
        </tab>
      </tabset>
    </div>
    <!--foot-->
    <div style="background-color: black; height: 5%;">
      foot
    </div>
  </div>
</template>

<script>
import Tabset from 'vue-strap/src/Tabset'
import Tab from 'vue-strap/src/Tab'

export default {
  components: { Tabset, Tab }
}
</script>
