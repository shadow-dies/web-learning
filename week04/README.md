# 作业总结
## 1.todo对象可以用HTMLElement对象存储其对应的DOM节点，从而可以在对todo对象操作时直接获取其DOM节点
## 2.浏览器无法编译import，需要用webpack或者babel编译才能引入js，否则会报错。
## 3.ts在引入node_modules中的类时需要讲moduleResolution设置为node,否则无法引入
## 4. 有些模块没有设置默认导出，导致ts中import时可能会报错，需要在tsconfig中添加"allowSyntheticDefaultImports": true,允许从没有设置默认导出的模块中默认导入
## 5.html中的script链接了src后script的内容会失效
## 6.在js中import入CSS文件可以将CSS文件和JS一起打包成一个js，若想将CSS和js分开则需要在webpack.config中的entry中增加输入文件
#
# 一些问题
## 1.dev和build的区别
## 2.dev是部署了webpack后的项目（？）
## 3.demo2中的build只是将项目webpack到dist目录（？）