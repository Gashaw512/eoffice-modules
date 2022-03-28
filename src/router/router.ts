import {createRouter, createWebHashHistory} from "vue-router";
import Form from '../components/Form.vue'
import LeaveForm from '../components/LeaveForm.vue'
import Tour from '../components/Tour.vue'
import SubscribeForm from '../components/SubscribeForm.vue'
const routes = [
  {
    path: "/customer-form",
    component: Form,
  },
  {
    path: "/leave-form",
    component: LeaveForm,
   },
  {
    path:'/tour-form',
    component:Tour,
  },
  {
    path:'/subscribe',
    component: SubscribeForm,
  },
//   {
//     path:'/slider',
//     component:Slider,
//   },
];
const router = createRouter({
    routes,
    history:createWebHashHistory(),
});
export default router;
