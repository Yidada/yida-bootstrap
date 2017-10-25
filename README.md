# 张益达快速构建静态页

> 本文档针对如何运行，如何编译，如何打包

## 项目所需环境
node version > 4
bower 
gulp

## 安装
clone 下项目之后，在项目目录下执行`npm install && bower install `

## 本地运行
在安装执行了之后，直接执行`npm start`
就会在本地打开了一个9000端口的web服务，能看到修改的项目


## 编译打包
执行`npm run build`
会将所有的静态资源都打包到`dist`目录下


# 注意事项：
因为本环境为静态环境，为了保证文件访问的一致性，需要替换所有的图片地址为cdn上图片地址。
修改方法： `app/styles/base.less` 修改变量`@base_url`为cdn地址

因为后端为smarty模板，所以需要修改html的内部引用路径。
建议在npm run build之后，直接修改dist里面的html里面css 和js 的引用路劲。