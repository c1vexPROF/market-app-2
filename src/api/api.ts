import axios from 'axios';
import cookie from 'js-cookie';

export const instance = axios.create({
    baseURL: 'http://foxworld.online:25585',
})

instance.interceptors.request.use(
    (config) => {
      let token = cookie.get("token");
      if (token && token !== "undefined") {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const api = {
    getTest() {
      return instance
        .get("/admin/tovar")
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    getTest2() {
      return instance
        .get("/main/tovars")
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    // postTest2() {
    //   return instance
    //     .get("/main/tovars")
    //     .then((res) => res.data)
    //     .catch((err) => console.log(err));
    // },
    // removeTest2() {
    //   return instance
    //     .get("/main/tovars")
    //     .then((res) => res.data)
    //     .catch((err) => console.log(err));
    // },
    // putTest2() {
    //   return instance
    //     .get("/main/tovars")
    //     .then((res) => res.data)
    //     .catch((err) => console.log(err));
    // },
};