//系统工作站->系统设置->插件管理
const onCampus = resolve => {
  require.ensure(['../components/system/systems/onCampus.vue'], () => {
    resolve(require('../components/system/systems/onCampus.vue'))
  })
}

//系统工作站->系统设置->地区管理
const pluginManagement = resolve => {
  require.ensure(['../components/system/systems/pluginManagement.vue'], () => {
    resolve(require('../components/system/systems/pluginManagement.vue'))
  })
}

//系统工作站->系统设置->院区管理
const regionalManagement = resolve => {
  require.ensure(['../components/system/systems/regionalManagement.vue'], () => {
    resolve(require('../components/system/systems/regionalManagement.vue'))
  })
}

//系统工作站->系统设置->科室管理
const managementDepartment = resolve => {
  require.ensure(['../components/system/systems/managementDepartment.vue'], () => {
    resolve(require('../components/system/systems/managementDepartment.vue'))
  })
}
//系统工作站->系统设置->角色管理
const roleManagement = resolve => {
  require.ensure(['../components/system/systems/roleManagement.vue'], () => {
    resolve(require('../components/system/systems/roleManagement.vue'))
  })
}
//系统工作站->系统设置->用户管理
const user = resolve => {
  require.ensure(['../components/system/systems/user.vue'], () => {
    resolve(require('../components/system/systems/user.vue'))
  })
}
//系统工作站->系统设置->系统字典
const informationSystem = resolve => {
  require.ensure(['../components/system/systems/informationSystem.vue'], () => {
    resolve(require('../components/system/systems/informationSystem.vue'))
  })
}
//系统工作站->系统设置->科室字典
const informationDepartment = resolve => {
  require.ensure(['../components/system/systems/informationDepartment.vue'], () => {
    resolve(require('../components/system/systems/informationDepartment.vue'))
  })
}
//系统工作站->系统设置->系统参数
const systemParameters = resolve => {
  require.ensure(['../components/system/systems/systemParameters.vue'], () => {
    resolve(require('../components/system/systems/systemParameters.vue'))
  })
}
//系统工作站->系统设置->科室参数
const departmentParams = resolve => {
  require.ensure(['../components/system/systems/departmentParams.vue'], () => {
    resolve(require('../components/system/systems/departmentParams.vue'))
  })
}
//系统工作站->系统设置->日志管理
const logs = resolve => {
  require.ensure(['../components/system/systems/logs.vue'], () => {
    resolve(require('../components/system/systems/logs.vue'))
  })
}


let system=[
{	path: '/',						component: onCampus, 	            name: '插件管理'},
{	path: '/pluginManagement',  	component: pluginManagement,        name: '地区管理'},
{	path: '/regionalManagement',	component: regionalManagement,      name: '院区管理'},
{	path: '/managementDepartment',	component: managementDepartment,    name: '科室管理'},
{	path: '/roleManagement',		component: roleManagement,      	name: '角色管理'},
{	path: '/user',					component: user,      				name: '用户管理'},
{	path: '/informationSystem',		component: informationSystem,       name: '系统字典'},
{	path: '/informationDepartment',	component: informationDepartment,   name: '科室字典'},
{	path: '/systemParameters',		component: systemParameters,      	name: '系统参数'},
{	path: '/departmentParams',		component: departmentParams,      	name: '科室参数'},
{	path: '/logs',					component: logs,      				name: '日志管理'},
]

export default system;
