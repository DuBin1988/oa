<template>
  <div id='ProjectTask' class='flex panel panel-primary'>
    <button class='btn btn-primary pull-right' @click='addTask'>新任务</button>
    <article class='span panel-body'>
      <criteria-paged :model='model' :pager='false' @condition-changed='search'>
        <criteria partial='criteria'>
          <div class='auto' partial>
            名称:
            <input type="text" v-model="model.name" v-on:keyup.enter="search"
            condition="name like '{}%'" defaultvalue="'13'">
            项目:
            <input type="text" v-model="model.project" v-on:keyup.enter="search"
            condition="project.name like '{}%'" defaultvalue="'13'">
            <button v-on:click="search()">查询</button>
          </div>
        </criteria>
        <grid-tree :model="model.rows" url='rs/sql/subtask.sql' partial='list' v-ref:tree>
          <template partial='head'>
            <tr>
              <th>名称</th>
              <th>项目名称</th>
              <th>执行人</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
          </template>
          <template partial='body'>
            <td>{{row.projectname}}</td>
            <td>{{row.actor}}</td>
            <td>{{row.musttime}}</td>
            <td>
              <button v-if='isSelected(row)' @click='remove("rs/entity/t_task", row)'>x</button>
              <button v-if='isSelected(row)' @click='$route("task-form", {parent: row})'>子任务</button>
              <button v-if='isSelected(row) && row.f_state === "登记"' @click='$parent.$parent.$parent.toPage("dispatch-form", row)'>派发</button>
              <button v-if='isSelected(row)' @click='$parent.$parent.$parent.toPage("task", row)'>查看</button>
            </td>
          </template>
          <span partial>{{row.name}}</span>
        </grid-tree>
      </criteria-paged>
    </article>
    <footer class='panel-footer'>
      共{{model.rows.length}}项
    </footer>
  </div>
</template>

<script>
import { TreeList } from 'vue-client'

export default {
  title: '任务管理',
  data () {
    return {
      model: new TreeList('/rs/sql/task.sql')
    }
  },
  props: [ 'project' ],
  computed: {
    selected () {
      return this.$refs.tree.selected
    }
  },
  methods: {
    search (args) {
      // 存在项目，只查本项目的
      if (this.project) {
        args.condition += ` and projectid=${this.project.id}`
      }
      this.model.search(args.condition, {})
    },
    // 增加新任务
    addTask () {
      this.$route('task-form', {project: this.project})
    },
    // 转不同的，针对任务的界面
    toPage (name, row) {
      this.$route(name, {task: row})
    }
  }
}
</script>
