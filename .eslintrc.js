module.exports = {
    //ignored some files
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": 'module' //类型为module，因为代码使用了使用了ECMAScript模块
    },
    "globals": {
        "jest": true,
        "describe": true,
        "it": true,
        "expect": true,
        "$": true,
        "require": true,
        "define": true,
        "module": true,
        "MZ": true,
        "console": true,
        "window": true
    },
    "rules": { //0 关闭，1 警告，2 错误
        "no-cond-assign": 2, // 禁止条件表达式中出现赋值操作符
        "block-scoped-var": 0, //把 var 语句看作是在块级作用域范围之内
        "curly": 0, //为所有控制语句指定花括号约定，警告
        "eol-last": 0, //强制文件最后一行为空行，关闭
        "eqeqeq": 0, //- 要求使用 === 和 !==
        "dot-notation": 2, //尽可能的使用点符号
        "no-console": 0, //不允许存在 console。关闭
        "no-empty": 1, //空的代码块
        "no-multi-spaces": 1, //不允许多个空格
        "no-self-compare": 1, //禁止自身比较
        "no-shadow": 0, //定义的变量不允许已在外层作用域定义
        "no-undef": 0, //变量未定义
        "no-underscore-dangle": 0, //禁止标识符中有悬空下划线。关闭
        "no-unused-expressions": 1, // 禁止在语句的位置使用表达式
        "no-unused-vars": 2, //变量定义后未使用
        "no-use-before-define": 1, //不允许在变量定义之前使用它们
        "quotes": [0, "single", "avoid-escape"], //使用单引号
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        "comma-dangle": [1, "never"],
        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2,
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2,
        //禁用eval()
        "no-eval":2,
        //禁止多次申明同一变量
        "no-redeclare":2,
        //禁止自我赋值
        "no-self-assign":2,
        //要求使用分号
        "semi":1,
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react",
        "html",
    ]
}
