<template>
  <div>
    <article class='span panel-body'>
      <criteria-paged :model='model' @condition-changed='search'>
        <criteria partial='criteria'>
          <div class='auto' partial>
            名称:
            <input type="text" v-model="model.name" v-on:keyup.enter="search"
              condition="name like '{}%'" defaultvalue="'13'">
            </input>
            <button v-on:click="search()">查询</button>
          </div>
        </criteria>
        <grid-tree :model="model.rows" url='rs/sql/taskdispatch.sql' partial='list' v-ref:tree>
          <template partial='head'>
            <tr>
              <th>任务名称</th>
              <th>方案</th>
              <th>执行人</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
          </template>
          <template partial='body'>
            <td>{{row.way}}</td>
            <td>{{row.actor}}</td>
            <td>{{row.musttime}}</td>
            <td v-bind:class="{ 'selected': isSelected(row) }">
              <button v-if='isSelected(row)' @click='remove("rs/entity/t_taskdispatch", row)'>x</button>
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
  title: '任务分派列表',
  data () {
    return {
      model: new TreeList('/rs/sql/taskdispatch.sql')
    }
  },
  props: ['task'],
  methods: {
    search (args) {
      if (this.task) {
        args.condition += ` and taskid=${this.task.id}`
      }
      this.model.search(args.condition, {})
    }
  }
}
</script>
