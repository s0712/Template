import Vue from 'vue';

// Vue.directive('scroll',{
// 	bind:function(el,binding,vnode){
// 		console.log(el)
// 		console.log(binding)
// 		console.log('1-绑定')
// 	},
// 	inserted:function(){
// 		console.log('2-插入')
// 	},
// 	update:function(el,binding,vnode){
// 		console.log('3-更新')
// 	},
// 	componentUpdated:function() {
// 		console.log('4-更新完成')
// 	},
// 	unbind:function(){
// 		console.log('5-解绑')
// 	}
// })


// v-loadmore: 用于在element-ui的select下拉框加上滚动到底事件监听
Vue.directive('scroll', {
    bind(el, binding) {
      // 获取element-ui定义好的scroll盒子
      const dom = el.querySelector('.el-table__body-wrapper');
      
      dom.addEventListener('scroll', function() {

          /*
           * scrollHeight 获取元素内容高度(只读)
           * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
           * clientHeight 读取元素的可见高度(只读)
           * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
           * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
           */
          console.log()
            // let sign = 80; // 定义默认的向上滚于乡下滚的边界
            // const CONDITION = ((this.scrollHeight - this.scrollTop -80=== this.clientHeight) && 
            //                 this.scrollTop >sign)// 注意: && this.scrollTop
            const CONDITION = ((  this.clientHeight+ this.scrollTop>this.scrollHeight*0.9) )// 注意: && this.scrollTop
            // console.log(this.scrollHeight)
            // console.log(this.clientHeight)
            // console.log(this.scrollTop)
            // if(this.scrollTop > sign) {
              
            //     sign = this.scrollTop;
            //     console.log('向下')
            // }
            // if(this.scrollTop < sign) {
            //     sign = this.scrollTop;
            //     console.log('向上')
            // }
            
            if(CONDITION) {
                binding.value();
            }
      });
    }
    
})

// <template>
//     <el-table 
//         :data="tableData" 
//         empty-text=" " 
//         v-tableLoadmore="tableLoadMore"
//     </el-table>
// </template>

// <script>
//     export default{
//         methods: {
//             tableLoadMore() {
//                 // 表格到底后执行  这里写你要做的事
//             }
//         }
//     }
// </script>