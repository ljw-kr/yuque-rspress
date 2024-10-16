# 快速建立AI+数据库
# 第一步：规则配置
<font style="color:rgb(0, 0, 0);">访问 AiOps 系统，点击 </font>**<font style="color:rgb(0, 0, 0);">AI+数据库</font>**<font style="color:rgb(0, 0, 0);"> ->规则配置如下图所示：</font>

![](../../../../images/7d587384c096e7d9a8bc841f8febaabe.png)

<font style="color:rgb(0, 0, 0);">点击新建</font>按照要求自定义规范内容

![](../../../../images/b9e2aefc52764dabfb397c7cb26278d4.png)

# 第二步：规则组配置
<font style="color:rgb(0, 0, 0);">点击</font>规则组创建组把<font style="color:rgb(44, 44, 54);">相关的规则组合起来，便于管理和应用。</font>

![](../../../../images/6805c96b780d8a6016873e270f3f848f.png)

![](../../../../images/9d9ce58c13db71f8c300e8b73baa6479.png)

# 第三步：<font style="color:rgb(29, 33, 41);">实例</font>配置
<font style="color:rgb(0, 0, 0);">点击</font>实例列表创建数据库实例连接<font style="color:rgb(44, 44, 54);">，配置完成后点击测试验证。</font>

![](../../../../images/d651b646cb2155b3db526df7a63c4e1f.png)

<font style="color:rgb(44, 44, 54);">注意事项：</font>

<font style="color:rgb(44, 44, 54);">通过隧道连接需提前SSH配置</font>![](../../../../images/5740c51bb6eedfaa00839cab94d482ea.png)

# 第四步：数据库配置
选择实例详情进入，第一次进入会出现缺少数据，需要刷新数据

![](../../../../images/387b2dacd1ab8cc0632e9f16202f597a.png)

刷新后数据展示如下

![](../../../../images/8da817d21f660cb9a77d21b6bab2c037.png)

选择数据库设置规则并开启审查，触发方式分为两种人工手动触发可以点击 AI审查，自动触发每天0点触发

说明：

1. 开启审查是执行AI审查的必要条件，未开启的数据库不会触发
2. 已审查过的表在未发生结构变更不会重复审查

实例自动审查每天0点触发

单库审查

![](../../../../images/f67cf962b407a11e1d5f35ec3137eed2.png)

# 第五步：查看审查结果
![](../../../../images/c3c166ace29784e6f6a66c03caa2f758.png)

![](../../../../images/91bc45930c162d5299b0020c886ec654.png)

