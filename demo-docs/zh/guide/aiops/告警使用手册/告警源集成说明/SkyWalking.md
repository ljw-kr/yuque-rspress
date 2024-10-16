# SkyWalking
## 配置步骤
一、在SkyWalking中配置Webhook URL

1、在资产管理-告警源集成 添加SkyWalking应用， 填写应用名称，开启相关配置后，点击保存生成appKey及URL地址 [https://aiops.finovy.cn/api/public/alert/skywalking/](https://aiops.finovy.cn/api/public/alert/skywalking/{) { appKey }

2、进入EventBridge配置webhook

2.1 进入apache-skywalking-apm-bin解压目录下的config，编辑文件alarm-settings.yml，做如下修改，定位到文件底部添加webhook地址，其中rules是程序自带配置，也可以自己修改，如下所示：

```plain
rules:
  # Rule unique name, must be ended with `_rule`.
  service_resp_time_rule:
    expression: sum(service_resp_time > 1000) >= 3
    period: 10
    silence-period: 5
    message: Response time of service {name} is more than 1000ms in 3 minutes of last 10 minutes.
    tags:
      level: info
  service_sla_rule:
    expression: sum(service_sla < 8000) >= 2
    # The length of time to evaluate the metrics
    period: 10
    # How many times of checks, the alarm keeps silence after alarm triggered, default as same as period.
    silence-period: 3
    message: Successful rate of service {name} is lower than 80% in 2 minutes of last 10 minutes
    tags:
      level: info
  service_resp_time_percentile_rule:
    expression: sum(service_percentile{p='50,75,90,95,99'} > 1000) >= 3
    period: 10
    silence-period: 5
    message: Percentile response time of service {name} alarm in 3 minutes of last 10 minutes, due to more than one condition of p50 > 1000, p75 > 1000, p90 > 1000, p95 > 1000, p99 > 1000
    tags:
      level: info
  service_instance_resp_time_rule:
    expression: sum(service_instance_resp_time > 1000) >= 2
    period: 10
    silence-period: 5
    message: Response time of service instance {name} is more than 1000ms in 2 minutes of last 10 minutes
    tags:
      level: info
  database_access_resp_time_rule:
    expression: sum(database_access_resp_time > 1000) >= 2
    period: 10
    message: Response time of database access {name} is more than 1000ms in 2 minutes of last 10 minutes
    tags:
      level: info
  endpoint_relation_resp_time_rule:
    expression: sum(endpoint_relation_resp_time > 1000) >= 2
    period: 10
    message: Response time of endpoint relation {name} is more than 1000ms in 2 minutes of last 10 minutes
    tags:
      level: info
  endpoint_resp_time_rule:
    expression: sum(endpoint_resp_time > 1000) >= 2
    period: 10
    message: Response time of endpoint {name} is more than 1000ms in 2 minutes of last 10 minutes
    tags:
      level: info
  service_relation_server_resp_time_rule:
    expression: sum(service_relation_server_resp_time > 1000) >= 2
    period: 10
    message: Response time of service relation {name} is more than 1000ms in 2 minutes of last 10 minutes
    tags:
      level: info
  service_instance_relation_server_resp_time_rule:
    expression: sum(service_instance_relation_server_resp_time > 1000) >= 2
    period: 10
    message: Response time of service instance relation {name} is more than 1000ms in 2 minutes of last 10 minutes
    tags:
      level: info
  # 如上是skywalking自带rule
  # 如下是新增数据，同时需要在config/oal/core.oal添加：
  # endpoint_resp_code = from(Endpoint.*).filter(tag["code"] != "0").filter(tag["code"] != null).count();
  # endpoint_resp_status_code = from(Endpoint.*).filter(tag["http.status_code"] != "200").filter(tag["http.status_code"] != null).count();
  endpoint_resp_status_code_rule:
    expression: sum(endpoint_resp_status_code) >= 1
    period: 1
    silence-period: 1
    message: endpoint_resp_status_code {name} Interface error
    tags:
      level: Error
  endpoint_resp_code_rule:
    expression: sum(endpoint_resp_code) >= 1
    period: 1
    silence-period: 1
    message: endpoint_resp_code {name} Interface error
    tags:
      level: Error

hooks:
 webhook:
   default:
     # 是否默认，为true，所有告警均会发送webhook
     is-default: false
     urls:
       - https://aiops.finovy.cn/api/public/alert/skywalking/{ appKey }
```

2.2 配置项说明：

| 标签名称 | 示意说明 |
| :--- | :--- |
| expression | 表达式。定义规则条件的MQE表达式。结果类型必须是SINGLE_VALUE，表达式的根操作必须是提供1（true）或0（false）结果的Compare操作。当结果为1（true）时，将触发警报。例如，avg（service_resp_time/1000）>1是一个有效的表达式，用于表示请求延迟低于1秒。 |
| period | 评估度量标准的时间长度，也就是告警检查周期，分钟为单位 |
| silence-period | 忽略相同告警信息的周期，默认与告警检查周期一致。简单来说，就是在触发告警时开始计时N，在N+period时间内保持沉默silence不会再次触发告警，这和alertmanager的告警抑制类似 |
| message | 告警消息主体，通过变量在发送消息时进行自动替换 |
| Hooks | 触发报警时绑定挂钩的特定名称。名称格式为{hookType}.{hookName}（例如webhook.default），并且必须在alarm-settings.yml文件的hooks部分中定义。如果未指定挂钩名称，则将使用全局挂钩。 |


2.3 级别配置要求，如下所示

```plain
level: Warning
```



| 标签名称 | 示意说明 |
| :--- | :--- |
| level | Critical、Error、Warning、info、Normal |


2.4 重启服务 进入apache-skywalking-apm-bin解压目录下，先关闭服务，再执行以下命令

```plain
./bin/oapService.sh
```

注意： 观察日志文件./logs/skywalking-oap-server.log

2.5 参考官网连接：[https://skywalking.apache.org/docs/main/v10.0.1/en/setup/backend/backend-alarm/](https://skywalking.apache.org/docs/main/v10.0.1/en/setup/backend/backend-alarm/)

二、测试SkyWalking

一旦触发了SkyWalking中配置的告警规则，系统会通过webhook地址把告警推送到AI Ops平台，如果AI Ops平台没有接收到告警，请联系 管理员进行排查。

## 说明信息
Skywalking是由国内开源爱好者吴晟开源并提交到Apache孵化器的产品，它同时吸收了Zipkin/Pinpoint/CAT的设计思路，支持非侵入式埋点。是一款基于分布式跟踪的应用程序性能监控系统。

监控级别对应关系

| 致命 | Critical |
| --- | --- |
| 严重 | Error |
| 警告 | Warning |
| 提醒 | Info |
| 通知 | Normal |


