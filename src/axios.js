import axios from "axios";

const service = axios.create({
    baseURL:'/api',
    // 此处的/api代替了域名
    timeout:10000
})

export default service;