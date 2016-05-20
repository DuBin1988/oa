<template>
  <div id='ProjectTask' class='flex panel panel-primary'>
    <header class="panel-heading">
      <span class="panel-title">项目任务表</span>
      <span v-show='!$state.selected' class='pull-right'>请选择项目！</span>
      <button v-show='$state.selected' class='btn btn-primary pull-right' @click='$route("任务编写", "TaskForm")'>新增任务</button>
    </header>
    <article v-show='$state.selected' class='span panel-body'>
      <criteria-paged :model="model" :pager='false' @condition-changed='search'>
        <criteria partial='criteria'>
          <div partial>
            名称:
            <input type="text" v-model="model.name" v-on:keyup.enter="search"
            condition="name like '{}%'" defaultvalue="'13'">
            <button v-on:click="search()">查询</button>
          </div>
        </criteria>
        <grid-tree :model="model.rows" url='rs/sql/subtask.sql' partial='list'>
          <template partial='head'>
            <tr>
              <th>名称</th>
              <th>内容</th>
              <th>执行人</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
          </template>
          <template partial='body'>
            <td>{{row.content}}</td>
            <td>{{row.actor}}</td>
            <td>{{row.musttime}}</td>
            <td v-bind:class="{ 'selected': isSelected(row) }">
              <button v-if='isSelected(row)' @click='remove("rs/entity/t_task", row)'>x</button>
            </td>
          </template>
          <span partial>{{row.name}}</span>
        </grid-tree>
      </criteria-paged>
    </article>
    <footer v-show='$state.selected' class='panel-footer'>
      共{{model.rows.length}}项
    </footer>
  </div>
</template>

<script>
import { TreeList } from 'vue-client'

export default {
  data () {
    return {
      model: new TreeList('/rs/sql/task.sql')
    }
  },
  methods: {
    search (args) {
      this.model.search(args.condition, {projectid: this.$state.selected.id})
    },
    route (comp) {
      this.$dispatch('route', comp)
    }
  }
}
</script>
