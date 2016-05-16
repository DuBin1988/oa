<template>
  <div class='flex'>
    <div class='span'>
      <criteria-paged :model="model" :pager='false' @select-changed='select'>
        <criteria partial='criteria' @condition-changed='search'>
          <span partial>
            <div>
            用户名:
            <input type="text" v-model="model.name" v-on:keyup.enter="search"
            condition="name like '{}%'" defaultvalue="'13'">
            <button v-on:click="search()">查询</button>
            </div>
          </span>
        </criteria>
        <tree :model="model.rows" url='rs/sql/subproject.sql' partial="list">
          <span partial>
            {{ row.name }}
            <button v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
          </span>
        </tree>
      </criteria-paged>
    </div>
    <div>
      共{{model.rows.length}}项
    </div>
  </div>
</template>

<script>
import { TreeList } from 'vue-client'

export default {
  data () {
    return {
      model: new TreeList('/rs/sql/project.sql')
    }
  },
  computed: {
    state () {
      // 一直向上找store
      let parent = this
      while (parent && !parent.store) {
        parent = parent.$parent
      }
      if (parent.store) {
        return parent.store
      }
    }
  },
  methods: {
    search () {
      this.model.search('1=1', {})
    },
    select (args) {
      this.state.select(args.val)
    }
  }
}
</script>
