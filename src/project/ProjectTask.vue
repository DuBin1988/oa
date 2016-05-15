<template>
  <div>
    {{project ? project.name : '请选择项目'}}
    <button>新增</button>
    <criteria-paged :model="model" :pager='false'>
      <criteria partial='criteria' @condition-changed='search'>
        <span partial>
          <div>
            名称:
            <input type="text" v-model="model.name" v-on:keyup.enter="search"
            condition="name like '{}%'" defaultvalue="'13'">
            <button v-on:click="search()">查询</button>
          </div>
        </span>
      </criteria>
      <grid-tree :model="model.rows" url='rs/sql/subtask.sql' partial='list'>
        <template partial='head'>
          <tr>
            <th>姓名</th>
            <th>操作</th>
          </tr>
        </template>
        <template partial='body'>
          <td v-bind:class="{ 'selected': isSelected(row) }">
            <button v-if='isSelected(row)' @click='remove("rs/entity/t_task", row)'>x</button>
          </td>
        </template>
        <span partial>{{row.name}}</span>
      </grid-tree>
    </criteria-paged>
    <p>共{{model.rows.length}}项</p>
  </div>
</template>

<script>
import { PagedList } from 'vue-client'

export default {
  data () {
    return {
      model: new PagedList('/rs/sql/task.sql', 20)
    }
  },
  props: ['project']
}
</script>
