/**
 * Created by lenovo on 2017/8/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import One from '../components/1.js';
import First from '../components/first.vue'
import Second from '../components/second.vue'
console.log(First)
Vue.use(VueRouter)

// const routes = [
//  //重定向
//  {
//  path:'/',
//  redirect:'first',
//  //     component: One,
//  },
//  {
//  path: '/first',
//  name: 'First',
//  component: First
//  },
//  {
//  path: '/second',
//  name: 'Second',
//  component: Second
//  }
//  ]

//懒加载路由
const routes = [
    {   //当首次进入页面时，页面没有显示任何组件；让页面一加载进来就默认显示first页面
        path:'/', //重定向，就是给它重新指定一个方向，加载一个组件；
        component:resolve => require(['../components/first'],resolve)
    },
    {
        path:'/first',
        component:resolve => require(['../components/first'],resolve)
    },
    {
        path:'/second',
        component: resolve => require(['../components/second'],resolve)
    }
//这里require组件路径根据自己的配置引入
]
//最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。

const router = new VueRouter({
    routes
})

export default router;