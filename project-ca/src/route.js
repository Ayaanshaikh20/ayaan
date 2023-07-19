import Vue from "vue";
import VueRouter from "vue-router";
import loginModule from "../components/modules/loginModule.vue"
import homeModule from "../components/modules/homePage.vue"
import TodoList from "../components/todo-List.vue"
import adminModule from "../components/modules/AdminModule.vue"
// import App from "../src/App.vue"
Vue.use(VueRouter);

// const userisLoggedIn = () => {
//   const token = localStorage.getItem("usertoken");
//   if (token) {
//     return true;
//   } else {
//     return false;
//   }
// };


const router = new VueRouter({
  mode: "history",
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'login', component: loginModule},
    {path: '/home', component: homeModule, children: [{path: 'todolist', component: TodoList}]},
    {path: '/admin', component: adminModule}]
});

// router.beforeEach((to , from, next) => {
//   console.log(to , "---")
//   if(to.path==='/login'){
    
//     next()
//   }
// })
  
export default router