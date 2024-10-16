# Alertmanager
> AlertManager是一个开源的告警管理工具，主要用于处理来自于监控系统（如Prometheus）的告警。它的设计目标是提供一个统一的告警处理平台，能够集中管理告警的路由、去重、分组和通知等操作。
>
> 安装 AlertManager应用可以将 Prometheus 中的告警接入到 AI Ops中来，自动帮您压缩冗余告警，避免告警风暴，让您更快定位和解决问题。
>

## 配置步骤
在资产管理-告警源集成 添加<font style="color:rgb(29, 33, 41);">Alertmanager</font>应用， 填写应用名称，开启相关配置后，点击保存生成appKey及URL地址 https://aiops.finovy.cn/api/public/alert/alertmanager/ { appKey }

1. 修改alertmanager模块的配置文件，通过webhook方式通知AI Ops，编辑告警的配置文件，新增 webhook_configs:及以下内容。

```yaml
receivers:
  - name: 'web.hook'
    webhook_configs:
      - url: 'https://aiops.finovy.cn/api/public/alarm/alertmanager/{appKey}'
```

2. 重新启动 alertmanager 模块，并加载该配置文件。

参考官网连接：[https://prometheus.io/docs/alerting/latest/configuration/#webhook_config](https://prometheus.io/docs/alerting/latest/configuration/#webhook_config)

## 说明信息
监控级别对应关系

| 致命 | critical |
| --- | --- |
| 严重 | error |
| 警告 | warn |
| 提醒 | email |
| 通知 | info |


