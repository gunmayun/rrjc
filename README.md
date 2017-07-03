# rrjc
a business project

##开发分支develop

我建了一个分支develop，我们的开发都是在分支上pull 和 push的，实际开发中也是这样的，只有提交发布版本的时候才会合并到master. 你们clone的时候默认只有master分支，要手动引入develop分支，具体操作如下：

1. git checkout -b branch-name origin/branch-name   命令行输入该命令，branch-name要替换为develop

2.  git pull  引下该分支

3. 如果pull失败，并提示no tracking information。则要本地与远程关联  
 
4. 输入 git branch --set-upstream branch-name origin/branch-name

也可以参考廖雪峰的个人网站

##文件夹说明

在项目文件中分了images  css  js 等文件夹，每人根据自己的模块在这些文件夹下建自己模块的文件夹

例如： 

	rrjc > home >css> index.css ||||  rrjc > home >images> xxx.png这个是首页的模块home放置路径

  	rrjc > public > lib > jquery.js  这个大家公共的文件夹，可以放置库文件，还有基础样式