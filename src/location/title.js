//测试地址 soso地址
// export const title='http://192.168.0.68:8080/sosoapi-web/pass/mock/14/';
// export const title='http://192.168.0.68:8080/sosoapi-web/pass/mock/5/';
var title, localTitle;
//联调地址
title='http://192.168.0.48:6001/'
// const title='http://192.168.0.67:8090/';		//nginx 服务器
// export const localTitle='http://192.168.0.51:50050/INDEX.HTML?';
// if (__DEV__) {
//     // title = 'http://192.168.1.68:8001/'; //测试服务器
//     // title='/';       //测试服务器
// 	title='http://192.168.1.68:8001/';       //测试服务器
//     // localTitle = 'http://127.0.0.1:50050/INDEX.HTML?';
// 	// title='http://192.168.0.188:8001/';   //王辉
// 	// title='http://192.168.0.28:8001/';    //高笑
//  // title='http://192.168.0.20:8001/';		//聂
//  // title='http://192.168.0.65:8001/'
 localTitle = 'http://192.168.0.48:50050/INDEX.HTML?';
//     localTitle = 'http://192.168.0.23:50050/INDEX.HTML?';
// } else {
// 	// title='http://192.168.1.68:8001/';       //测试服务器
//     title = `http://${window.location.host}/`; //生产服务器
//     localTitle = 'http://127.0.0.1:50050/INDEX.HTML?';
// }

export { title, localTitle };
// export const localTitle='http://192.168.0.114:50050/INDEX.HTML?';
// export const title='/';       //测试服务器