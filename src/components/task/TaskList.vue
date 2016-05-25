<template>
  <div id='ProjectTask' class='flex panel panel-primary'>
    <article class='span panel-body'>
      <criteria-paged :model='model' :pager='false' @condition-changed='search'>
        <criteria partial='criteria'>
          <div class='auto' partial>
            名称:
            <input type="text" v-model="model.f_name" v-on:keyup.enter="search"
              condition="f_name like '{}%'" defaultvalue="'13'">
            项目:
            <input type="text" v-model="model.project" v-on:keyup.enter="search"
              condition="project.f_name like '{}%'" defaultvalue="'13'">
            <button v-on:click="search()">查询</button>
            <button class='btn btn-primary pull-right'
              @click='$goto("task-form", {project: $parent.$parent.project})'>新任务
            </button>
          </div>
        </criteria>
        <grid-tree :model="model.rows" url='rs/sql/subtask.sql' partial='list' v-ref:tree>
          <template partial='head'>
            <tr>
              <th>名称</th>
              <th>状态</th>
              <th>项目名称</th>
              <th>执行人</th>
              <th>要求时间</th>
              <th>操作</th>
            </tr>
          </template>
          <template partial='body'>
            <td>{{row.data.f_state}}</td>
            <td>{{row.data.f_projectname}}</td>
            <td>{{row.data.f_actor}}</td>
            <td>{{row.data.f_musttime}}</td>
            <td>
              <button v-if='isSelected(row)' @click='remove("rs/entity/t_task", row.data)'>x</button>
              <button v-if='isSelected(row)' @click='$goto("task-form", {parent: row.data})'>子任务</button>
              <button
                v-if='isSelected(row) && row.data.f_state === "登记"'
                @click='$goto("dispatch-form", {task: row.data})'>派发</button>
              <button v-if='isSelected(row)' @click='$goto("task-form", {source: row.data})'>修改</button>
              <button v-if='isSelected(row)' @click='$goto("task", {task: row.data})'>查看</button>
            </td>
          </template>
          <span partial>{{row.data.f_name}}</span>
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
  methods: {
    search (args) {
      // 存在项目，只查本项目的
      if (this.project) {
        args.condition += ` and f_projectid=${this.project.id}`
      }
      this.model.search(args.condition, {})
    }
  }
}
</script>
