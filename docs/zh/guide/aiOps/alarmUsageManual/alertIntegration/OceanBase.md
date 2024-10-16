# OceanBase

> OceanBase 数据库是一款完全自研的企业级原生分布式数据库，在普通硬件上实现金融级高可用，首创“三地五中心”城市级故障自动无损容灾新标准，刷新 TPC-C 标准测试，单集群规模超过 1500 节点，具有云原生、强一致性、高度兼容 Oracle/MySQL 等特性。
>
> 可以将 OceanBase 中的告警接入到 AI Ops中，让您更快定位和解决问题。
>

## 配置步骤
在资产管理-告警源集成 添加<font style="color:rgb(29, 33, 41);">OceanBase</font>应用， 填写应用名称，开启相关配置后，点击保存生成appKey及URL地址 [https://aiops.finovy.cn/api/public/alert/oceanbase/](https://aiops.finovy.cn/api/public/alert/oceanbase/{) { appKey }

1.告警中心-告警通道 下新建通道

![](https://cdn.nlark.com/yuque/0/2024/png/43776455/1724730676736-5ca7529d-3c4a-4368-b7e7-9bd8ca806a6d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43776455/1724730717644-281be35a-0b3a-423f-bc20-b97c17d43e60.png)

body模板

```json
{
  "message": "${message}",
  "appType":"${app_type}",
  "alarmType":"${alarm_type}",
  "alarmTarget":"${alarm_target}",
  "alarmScope":"${alarm_scope}",
  "alarmLevel":"${alarm_level}",
  "alarmEvaluationInterval":"${alarm_evaluation_interval}",
  "alarmDuration":"${alarm_duration}",
  "alarmStatus":"${alarm_status}",
  "alarmActiveAt":"${alarm_active_at}",
  "alarmResolvedAt":"${alarm_resolved_at}",
  "alarmLastInterval":"${alarm_last_interval}",
  "alarmName":"${alarm_name}",
  "value":"${value}",
  "alarmThreshold":"${alarm_threshold}",
  "alarmUpdatedAt":"${alarm_updated_at}",
  "alarmSummary":"${alarm_summary}",
  "alarmDescription":"${alarm_description}",
  "alarmId":"${alarm_id}",
  "alarmUrl":"${alarm_url}",
  "service":"${service}",
  "obClusterGroup":"${ob_cluster_group}",
  "obCluster":"${ob_cluster}",
  "obClusterId":"${ob_cluster_id}",
  "obTenant":"${ob_tenant}",
  "hostIp":"${host_ip}",
  "appCluster":"${app_cluster}"
}
```

Response 校验信息

```json
{
    "code": 0,
    "success": true
}
```



## 说明信息
监控级别对应关系

默认警告级别

| 致命 | Down |
| --- | --- |
| 严重 | Critical |
| 警告 | Alert |
| 提醒 | Caution |
| 通知 | Info |


