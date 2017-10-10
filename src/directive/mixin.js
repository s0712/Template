import Vue from 'vue';
import location from '../location/location.js';



//全局混合
Vue.mixin({
    data() {
        return {
            timeType: ['登记时间', '预检时间', '摄片时间', 'QA时间'],
            noType: ['病历号', '患者编号', '检查号', '住院号', '床号'],
            sex: ['不详', '男', '女'],
            //控制操作行
            displayControl:null
        };
    },
    methods: {
        //提交表单验证
        submitForm(formName, fun, can) {
            //formName 表单名称
            //fun      回调函数
            // can     是否消失
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //提交成功方法
                    if (can) {
                        new Promise((resolve, reject) => {
                            if (fun && Array.isArray(can)) fun(reject);
                            else if (typeof(fun) === "function") fun(resolve);
                            else if (typeof(fun) === "string") this[fun](resolve, reject);
                        }).then(data => {
                            this.resetForm(formName, can);
                            if (typeof(_.get(data,'success',false))==='function') data.success();
                        }, data => {
                            this.resetForm(formName, can);
                            if (data.next) data.next();
                        });
                    } else {
                        new Promise((resolve, reject) => {
                            if (typeof(fun) === "function") fun(resolve);
                            else if (fun) this[fun](resolve, reject);
                        }).then(() => {
                            this.resetForm(formName);
                        });
                    }
                } else {
                    return false;
                }
            });
        },
        //重置表单
        resetForm(formName, parameter) {
            if (parameter) {
                if (typeof(this[parameter]) === 'function') {
                    // console.log(1)
                    this.$refs[formName].resetFields();
                    this[parameter](true);
                }
                if (typeof(parameter) === 'function') {
                    this.$refs[formName].resetFields();
                    parameter();
                }
                if (typeof(parameter) === 'string') {
                    this.alert[parameter] = false;
                    this.$nextTick(() => this.$refs[formName].resetFields());
                }
                if (Array.isArray(parameter)) {
                    // parameter.forEach(el=> Object.defineProperty(this[formName],el,{writable:false}));
                    let obj = {};
                    parameter.forEach(el => obj[el] = this[formName][el]);
                    this.$refs[formName].resetFields();
                    // this.$nextTick(() =>parameter.forEach(el=> Object.defineProperty(this[formName],el,{writable:true})));
                    this.$nextTick(() => parameter.forEach(el => this[formName][el] = obj[el]));
                }
            } else {
                this.$refs[formName].resetFields();
            }
        },
        
        //深拷贝对象
        copy(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        //非空判断
        isEmpty(value) {
            var type;
            if (value == null) { // 等同于 value === undefined || value === null
                return true;
            }
            type = Object.prototype.toString.call(value).slice(8, -1);
            switch (type) {
                case 'String':
                    return !$.trim(value);
                case 'Array':
                    return !value.length;
                case 'Object':
                    return $.isEmptyObject(value); // 普通对象使用 for...in 判断，有 key 即为 false
                default:
                    return false; // 其他对象均视作非空
            }
        },
        
        //千位分割
        toThousands(num) {
            num += '';
            num = num.split('.');
            if (num[1]) {
                return num[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + num[1]
            }
            return num[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        },
        //获取运维数据字典
        get_plaDataDic(name, value) {
            this.$http.get(location.queryPlaDataDic, {
                params: {
                    dataDicCode: name
                }
            }).then(data => {
                data = data.body;
                this[value] = data.data;
            });
        },
        //获取系统数据字典
        getSysDataDicValue(name, value, ParentID) {
            this.$http.get(location.getSysDataDicValue, {
                params: {
                    systemID: this.identifying,
                    hospitalID: this.userMsg.hospitalID,
                    forTpye: 1,
                    depDataDicParentID: ParentID,
                    depTypeCode: name
                }
            }).then(data => {
                data = data.body;
                this[value] = data.data.data;
                if (name === 'registerNotice') {
                    console.log(this[value]);
                }
                this[value].forEach((el) => {
                    el.value = el.depDataDicValueName;
                });
            });
        },
        //获取数据字典--其他--诊断工作站多多园区
        getDataDicValues(name, value, Parent, hospitalID) {
            this.$http.get(location.getDataDicValues, {
                params: {
                    systemID: this.identifying,
                    hospitalID: hospitalID || this.userMsg.hospitalID,
                    forTpye: 1,
                    depTypeCode: name,
                    depDataDicParent: Parent
                }
            }).then(data => {
                data = data.body;
                this[value] = data.data.data;
                // this[value].forEach((el, index) => {
                //     el.value = el.depDataDicValueName;
                // })
            });
        },
        // 处理时间,转换成时间戳,can 时间日期,type存在 则为结束时间
        formatTime(can,type) {
                 if(type){
                      return new Date(new Date(can).toLocaleDateString()).getTime()+ 86400000;
                 }else{
                      return new Date(new Date(can).toLocaleDateString()).getTime();
                    }
            },
        //切换输入法
        englishInput(inputMethod) {
            try {
                jsonp(`${localTitle}requestType=6&typeMethod=${inputMethod}`, (err, data) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log(data);
                    }
                });
            } catch (e) {
                console.log(e)
            }
        },
        
        //表格就诊类别变色
        row_style(row) {
            return { color: row.fontColor };
        },
        //显示组件
        showComponents(name, item) {
            this.$refs[name].$emit('start', this.copy(item));
        },
        showControl(row, column,){
            if (column.label=='操作'||column.label==undefined) {
                this.displayControl=row;
            }
        }
    }
})