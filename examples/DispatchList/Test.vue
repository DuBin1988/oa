<template>
  <div>
    <base-tree>
      <div partial='head' class='auto'>
          <tr>
            <th>名称</th>
            <th>年龄</th>
          </tr>
      </div>
    </base-tree>
  </div>
</template>

<script>
import BaseTree from './BaseTree'
export default {
  title: 'init',
  components: { BaseTree }
}
</script>
