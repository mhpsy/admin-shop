<template>
  <el-row class="bg-indigo-500 min-h-screen">
    <el-col :lg="16" :md="12" class="flex items-center justify-center flex-col">
      <div>
        <div class="text-5xl font-bold mb-4 text-light-50">欢迎光临</div>
        <div class="text-gray-200 text-sm">
          此站点是《XXXXXXXXXXX》的演示站点此站点是《XXXXXXXXXXX》的演示站的演示站点
        </div>
      </div>
    </el-col>
    <el-col
      :lg="8" :md="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div
        class="flex items-center justify-center my-5 text-gray-300 space-x-5"
      >
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>帐号密码登陆</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form class="mt-5" style="width: 350px" :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round style="width: 100%" type="primary" @click="onSubmit"
            >登 陆</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  create() {},
  mounted() {},
  computed() {},
  methods: {
    onSubmit() {
      console.log("submit");
    },
  },
};
</script>

<style scoped>
</style>