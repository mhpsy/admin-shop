<template>
  <el-result
      icon="warning"
      title="页面走丢了"
      sub-title="请联系管理员或运维人员/404"
  >
    <template #extra>
      <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
    </template>
  </el-result>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

</style>