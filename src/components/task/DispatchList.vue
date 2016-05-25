<template>
  <div class='flex panel panel-primary'>
    <article class='span panel-body'>
      <criteria-paged :model='model' @condition-changed='search' :pager='false'>
        <criteria partial='criteria'>
          <div class='auto' partial>
            名称:
            <input type="text" v-model="model.f_name" v-on:keyup.enter="search"
              condition="f_name like '{}%'" defaultvalue="'13'">
            </input>
            <button v-on:click="search()">查询</button>
          </div>
        </criteria>
        <grid-tree :model="model.rows" url='rs/sql/taskdispatch.sql' partial='list' v-ref:tree>
          <template partial='head'>
            <tr>
              <th>名称</th>
              <th>方案</th>
              <th>执行人</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
          </template>
          <template partial='body'>
            <td>{{row.data.f_way}}</td>
            <td>{{row.data.f_actor}}</td>
            <td>{{row.data.f_musttime}}</td>
            <td>
              <button v-if='isSelected(row)' @click='remove("rs/entity/t_taskdispatch", row)'>x</button>
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
        args.condition += ` and f_taskid=${this.task.id}`
      }
      this.model.search(args.condition, {})
    }
  }
}
</script>
