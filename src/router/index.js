import Vue from 'vue';
import Router from 'vue-router';
import Icon from '@/components/Icon';
import HelloWorld from '@/components/HelloWorld';
import Radio from '@/components/Radio';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Alert from '@/components/Alert';
import Dialog from '@/components/Dialog';
import Banner from '@/components/Banner';
import Vuex1 from '@/components/Vuex1';
import For from '@/components/For';
import Routers from '@/components/Router';

Vue.use(Router);

const routes = new Router({
    routes: [
        {path: '/', name: 'Icon', component: Icon, redirect: '/icon'},
        {path: '/icon', name: 'Icon', component: Icon},
        {path: '/button', name: 'HelloWorld', component: HelloWorld},
        {path: '/radio', name: 'Radio', component: Radio},
        {path: '/checkbox', name: 'Checkbox', component: Checkbox},
        {path: '/input', name: 'Input', component: Input},
        {path: '/alert', name: 'Alert', component: Alert},
        {path: '/dialog', name: 'Dialog', component: Dialog},
        {path: '/banner', name: 'Banner', component: Banner},
        {path: '/vuex1', name: 'Vuex1', component: Vuex1},
        {path: '/for', name: 'For', component: For},
        {path: '/router', name: 'Routers', component: Routers},
    ]
})

// 全局路由守卫
routes.beforeEach((to, from, next) => {
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    if(to.fullPath == '/router'){
        if(window.confirm('确定要进入吗？')){
            next();
        }else{
            return false;
        }
    }
    if(from.fullPath == '/router'){
        if(window.confirm('确定要离开吗？')){
            next();
        }else{
            return false;
        }
    }
    next();
});

export default routes;
