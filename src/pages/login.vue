<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div>欢迎光临</div>
        <div>
          此站点是《XXXXXXXXXXX》的演示站点此站点是《XXXXXXXXXXX》的演示站的演示站点
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="title">欢迎回来</h2>
      <div>
        <span class="line"></span>
        <span>帐号密码登陆</span>
        <span class="line"></span>
      </div>
      <el-form
        ref="formRef"
        :rules="rules"
        :model="loginForm"
        class="w-[400px]"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            show-password
            placeholder="请输入密码"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round type="primary" @click="onSubmit" style="width: 500px"
            >登 陆</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref } from "vue";
import { login } from "~/api/manager";

import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";

// 这个就是vueUse
import { useCookies } from "@vueuse/integrations/useCookies";
const cookie = useCookies();

const router = useRouter();

const loginForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      min: 3,
      max: 10,
      message: "用户名长度最小为3最大为10",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      min: 3,
      max: 16,
      message: "密码长度最小为3最大为16",
      trigger: "blur",
    },
  ],
});

const formRef = ref(null);

const onSubmit = () => {
  formRef.value.validate((valid) => {
    //此时就得到了表单的验证结果
    if (!valid) {
      return false;
    }
    login(loginForm.username, loginForm.password)
      .then((res) => {
        ElNotification({
          message: "登陆成功",
          type:'success',
          duration: 3000,
        });
        //存储cookie
        cookie.set('admin-token',res.data.data.token);
      })
      .catch((err) => {
        console.log(err);
        openNotification(404, err.response.data.msg, "error");
      });
  });
};

const openNotification = (title, message, type) => {
  ElNotification({
    title,
    message: message || "请求失败，请重试",
    type,
    duration: 3000,
  });
};
</script>

<style scoped>
.login-container {
  @apply min-h-screen bg-indigo-500;
}
.login-container .left,
.login-container .right {
  @apply flex items-center justify-center flex-col;
}
.login-container .right {
  @apply bg-light-50;
}
.left > div > div:first-child {
  @apply text-5xl font-bold mb-4 text-light-50;
}
.left > div > div:last-child {
  @apply text-gray-200 text-sm;
}
.right .title {
  @apply font-bold text-3xl text-gray-800;
}
.right > div {
  @apply flex items-center justify-center my-5 text-gray-300 space-x-5;
}
.right .line {
  @apply h-[1px] w-16 bg-gray-200;
}
</style>