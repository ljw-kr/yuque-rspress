# 快速建立CICD第一个项目


## 准备工作 （管理员操作）
+ 集成代码源  （详情待补充）
+ 集成制品仓库 （详情待补充）
+ k8s集群设置 （详情待补充）
+ 运行环境模板 （详情待补充）

## 第一步：基础配置
<font style="color:rgb(0, 0, 0);">访问 AiOps 系统，点击 </font>**<font style="color:rgb(0, 0, 0);">CI/CD</font>**<font style="color:rgb(0, 0, 0);"> -> 新建按钮，创建项目如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724730707426-b7428982-8c23-4a1e-b32a-fca2f94c898e.png)

<font style="color:rgb(0, 0, 0);">点击立即新建按钮，进入项目设置</font>

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724730807160-20a95a61-97fd-48c8-94f8-24d9ef42d1d0.png)

选择项目需要关联的代码群组或者指定项目选中保存

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724730900302-132ad767-961e-449f-9a4b-bcc8bd2e2601.png)

选择项目需要上传的制品仓库选中保存

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724730991395-6b5e4121-5167-42ae-add7-0286d09d98ca.png)

运行集群设置：项目在kubernetes集群执行工作流程（包含：构建、代码扫描、执行命令）

部署集群设置：服务部署到指定的kubernetes集群

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724731146159-44199df2-48e5-49c6-8e85-9022392ce53b.png)

## 第二步：服务配置
自定义服务名称与代码源项目关联

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724731797953-ae1e7483-c693-41b0-a1bb-dd5af5c52113.png)

<font style="color:rgb(0, 0, 0);">kubernetes服务的YAML关联，配置如何获取？</font>[YAML教程](/docs/guide/aiOps/cicd/yaml.html)

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724732410748-65bbeadd-9627-423a-8c3d-a653c44194e4.png)



## 第三步：环境配置
<font style="color:rgb(0, 0, 0);">点击 环境 -> 环境设置，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724732566471-78e78f12-5d5b-4cb3-a695-e17dae6849f3.png)

按照所需授权制品仓库、集群

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724732736244-daef418f-05a7-4adc-b66a-7c1461d9e0a9.png)

## 第四步：环境与服务关联
将服务授权到环境

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724732919662-667968c3-3abb-412f-ab72-139e864058d5.png)

## 第五步：工作流交付
<font style="color:rgb(0, 0, 0);">根据实际需求选择要部署的服务、以及对应的构建分支</font>

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724732997612-5d44882a-7b35-4abd-a12f-5a1c3056ab0c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724733187590-228c5c17-79de-4d4d-9630-f81b34d2fb2e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/42381434/1724733135087-87165b03-c846-48e9-bf63-1a2f1aace723.png)



