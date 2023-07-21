import Vue from "vue";
import VueRouter from "vue-router";
import loginModule from "../components/modules/loginModule.vue"
import homeModule from "../components/modules/homePage.vue"
import TodoList from "../components/todo-List.vue"
import adminModule from "../components/modules/AdminModule.vue"
// import App from "../src/App.vue"
Vue.use(VueRouter);

const adminisLoggedIn = () => {
  const token = localStorage.getItem("isLoggedinAsAdmin");
  if (token) {
    return true;
  } else {
    return false;
  }
};
adminisLoggedIn()

const userisLoggedIn = () => {
  const token = localStorage.getItem("isLoggedinAsUser");
  if (token) {
    return true;
  } else {
    return false;
  }
};

userisLoggedIn()

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'login', component: loginModule},
    {path: '/home', component: homeModule, children: [{path: 'admin', component: adminModule, props:  {
      allowedAdminEmail: "ayaan.s@codearray.tech", allowedAdminPassword: "12345"}}]
    },
    {path: '/todolist', component: TodoList}]
});

router.beforeEach((to, from, next) => {
  if (adminisLoggedIn() || userisLoggedIn()) {
      next(true);
    }else {
    if (to.path === "/login") {
      next();
    } else {
      next('/login');
    }
}})
  
export default router