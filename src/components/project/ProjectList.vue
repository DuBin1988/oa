<template>
  <div class='flex panel panel-primary'>
    <header class="panel-heading">
      <span class="h3 panel-title">项目树</span>
      <button class='btn btn-primary pull-right' @click="$route('project-form')">新增项目</button>
    </header>
    <article class='span panel-body'>
        <criteria partial='criteria' @condition-changed='search'>
          <div novalidate class="form-inline" partial>
            <div class="form-group">
              <label class="sr-only" for="ProjectName">项目名称</label>
              <input type="text" class="form-control" id="ProjectName" placeholder="请输入项目名称"
                v-model="model.name" v-on:keyup.enter="search"
                condition="name like '{}%'" defaultvalue="'13'">
            </div>
            <button class="btn btn-default" @click="search()">查询</button>
          </div>
        </criteria>
        <tree :model="model.rows" url='rs/sql/subproject.sql' partial="list" v-ref:tree>
          <span partial>
            {{ row.name }}
            <button class="badge pull-right" v-if='isSelected(row)' @click='remove("rs/entity/t_project", row)'>x</button>
          </span>
        </tree>
    </article>
    <footer class='panel-footer'>
      共{{model.rows.length}}项
    </footer>
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
    selected () {
      return this.$refs.tree.selected
    }
  },
  methods: {
    search () {
      this.model.search('1=1', {})
    }
  }
}
</script>
