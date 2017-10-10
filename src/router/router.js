import Vue from 'vue';
import VueRouter from 'vue-router';
//系统工作站
import system from './system.js';
// //登记工作站
// import register from './register.js';
// //诊断工作站
// import diagnose from './diagnose.js';
// //统计工作站
// import statistical from './statistical.js';
// //诊断工作站
// import computerRoom from './computerRoom.js';
Vue.use(VueRouter);

var routes=[
	...system,
	// ...register,
	// ...diagnose,
	// ...statistical,
	// ...computerRoom
];

const router = new VueRouter({
    // mode:'history',
    // base: __dirname,
    routes
});

//全局路由钩子
router.afterEach((route) => {
})

export default router;



