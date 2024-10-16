# WebHook

在资产管理-告警源集成 添加<font style="color:rgb(29, 33, 41);">WebHook</font>应用， 填写应用名称，开启相关配置后，点击保存生成appKey及URL地址 https://aiops.finovy.cn/api/public/alert/webhook/ { appKey }

# 接口实例说明
|  | 说明 |
| --- | --- |
| 接口 | https://aiops.finovy.cn/api/public/alert/webhook/ { appKey } |
| 调用方法 | POST |
| 接入数据格式实例（body） | ```json {     "alertNoticeEventId": "1213",     "alert": true,     "alertNoticeTitle":"告警标题",     "alertNoticeContent":"告警内容",     "alertNoticeLevel":3,     "alertNoticeHost": "告警主机",     "alertNoticeIp": "192.168.10.52",     "alertNoticeObject":"对象",     "alertNoticeHostGroup":"告警主机组" } ```  |


# 参数说明
| 参数 | 必须 | 备注信息 |
| --- | --- | --- |
| alertNoticeEventId | 必填 | <font style="color:rgba(0, 0, 0, 0.87);">事件ID , 用来唯一标识此条告警信息，外部API关闭告警的标识，多个信息组合可以用英文逗号分隔</font> |
| alert | 必填 | 告警状态，是否告警；true：告警；false：解决 |
| alertNoticeTitle | 必填 | 告警标题 |
| alertNoticeContent | 必填 | 告警内容 |
| alertNoticeLevel | 必填 | 告警级别：0: 通知；1：提醒；2：警告；3：严重；4：致命 |
| alertNoticeHost | 可选 | 告警主机 |
| alertNoticeIp | 可选 | 告警IP |
| alertNoticeObject | 可选 | 告警对象 |
| alertNoticeHostGroup | 可选 | 告警主机组 |


