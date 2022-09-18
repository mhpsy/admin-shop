<template>
  <div>2022/9/18--1:00--index</div>
  <el-button @click="set">设置</el-button>
  <el-button @click="get">读取</el-button>
  <el-button @click="remove">删除</el-button>
</template>

<script setup>
import { useCookies } from "@vueuse/integrations/useCookies";
const cookie = useCookies();
function set() {
  cookie.set("name", "mhpsy");
  console.log("set");
}
function get() {
  console.log(cookie.get("name"));
}

function remove() {
  cookie.remove("name");
}
</script>

<style scoped>
</style>