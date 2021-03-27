import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FriendChat from "@/views/chat/FriendChat";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chat',
    name: '在线聊天',
    component: FriendChat,
  },
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router