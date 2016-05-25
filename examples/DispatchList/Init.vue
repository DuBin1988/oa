<template>
  <div>
    <base-tree>
      <div partial='head'>
        <tr>
            <th>名称</th>
            <th>年龄</th>
            <th>年龄</th>
        </tr>
      </div>
    </base-tree>
    <button @click='this.$goto("test")'>test</button>
  </div>
</template>

<script>
import BaseTree from './BaseTree'
export default {
  title: 'init',
  components: { BaseTree }
}
</script>
