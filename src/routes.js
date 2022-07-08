import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes=[ 
{
    name:'Home',
    path:'/',
    component: Home
},
{
    name:'Login',
    path:'/login',
    component: Login
},
{
    name:'Profile',
    path:'/profile/:name',
    component: Profile
},

// 404 Page not found
{
    name:'NotFound',
    path:'/:pathMatch(.*)*',
    component: PageNotFound
},
// vue-2 page not found
//{path:"*",component:PageNotFound}
// page not found this path all time we can put last
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;
