# 快速建立CICD第一个项目
# 准备工作 （管理员操作）
+ 集成代码源  （详情待补充）
+ 集成制品仓库 （详情待补充）
+ k8s集群设置 （详情待补充）
+ 运行环境模板 （详情待补充）

# 第一步：基础配置
<font style="color:rgb(0, 0, 0);">访问 AiOps 系统，点击 </font>**<font style="color:rgb(0, 0, 0);">CI/CD</font>**<font style="color:rgb(0, 0, 0);"> -> 新建按钮，创建项目如下图所示：</font>

![](../../../../images/8a1d499f95821c9ee0c66d7fa4801855.png)

<font style="color:rgb(0, 0, 0);">点击立即新建按钮，进入项目设置</font>

![](../../../../images/aba51e4df22faffcb110bcc74c0d649d.png)

选择项目需要关联的代码群组或者指定项目选中保存

![](../../../../images/d4e7225ff07b6a18c4edcf75c9ad9d68.png)

选择项目需要上传的制品仓库选中保存

![](../../../../images/c484474d4e0decd517f32c168569ee56.png)

运行集群设置：项目在kubernetes集群执行工作流程（包含：构建、代码扫描、执行命令）

部署集群设置：服务部署到指定的kubernetes集群

![](../../../../images/9920bba3624248e0dfa4de36115dfbbf.png)

# 第二步：服务配置
自定义服务名称与代码源项目关联

![](../../../../images/33694d58b5ee1e382205dd54e2dfa001.png)

<font style="color:rgb(0, 0, 0);">kubernetes服务的YAML关联，配置如何获取？</font>[YAML教程](https://www.yuque.com/isyun/qomiub/bsbgv0x6m40fx36z)

![](../../../../images/b4211f02d7711b5e95658ddbe9601d3e.png)



# 第三步：环境配置
<font style="color:rgb(0, 0, 0);">点击 环境 -> 环境设置，如下图所示：</font>

![](../../../../images/53903b5123720a5d5b0778e6e1445a1c.png)

按照所需授权制品仓库、集群

![](../../../../images/911a30748b742e8e8c7f476766c58212.png)

# 第四步：环境与服务关联
将服务授权到环境

![](../../../../images/cef78aa144fed1f40c01955f9b57c3df.png)

# 第五步：工作流交付
<font style="color:rgb(0, 0, 0);">根据实际需求选择要部署的服务、以及对应的构建分支</font>

![](../../../../images/f5dc8e6f47b53294476de1fe440a29bb.png)

![](../../../../images/92778098939807f80e122b904c919abf.png)

![](../../../../images/0ab9c9c113f4bfdfbf8461f4d6279daa.png)

# 常见问题
### 新建服务后，在工作流流程设计的具体阶段编辑时没有找到对应的服务名称？
![](../../../../images/86c7ff64b7f91d2f9237e687a5b1026c.jpeg)

解决方式： 需要在对应环境下添加你的服务

![](../../../../images/bbe7e2a9d815c87fe145f9a3741e8bc0.jpeg)

### 构建成功，部署失败报错，一般是YAML配置文件有问题
![](../../../../images/9d2f1794daedd83efd61fcabfb851438.jpeg)

![](../../../../images/ed4e018cba5f31cc95b12e996fcc7414.jpeg)

解决方式： 可以参考已经建好的服务内容，删除一些不必要的字段，k8s的配置对有些字段是不认可的

### 构建还没完成，部署已经成功了？
![](../../../../images/d9532f504403da8939feb25b50b895c3.jpeg)

原因一般是新建工作流时的工作目录不对，需要确定一下gitlab仓库的代码目录。

![](../../../../images/bf6bf24afcd9fd206bfc8b5ea478e295.jpeg)

### 页面构建速度过快，构建和部署都是成功的，但是项目实际并未更新成功
![](../../../../images/e8f92595fd4fad4551a3269d0d607f0e.jpeg)

解决方式： 

1. 第一种情况是镜像问题导致，可能是镜像未重新构建或者是镜像名称配置错误
2. 第二种情况是代码目录中没有初始化docker的.env文件

![](../../../../images/ef910fd8d35f6d83176be2e60e799a09.jpeg)

