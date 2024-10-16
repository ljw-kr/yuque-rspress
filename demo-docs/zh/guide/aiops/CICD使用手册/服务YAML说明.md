# 服务YAML说明
## Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
  labels:
    app: example-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: example-app
  template:
    metadata:
      labels:
        app: example-app
    spec:
      containers:
      - name: example-container
        image: nginx:latest
        ports:
        - containerPort: 80
        env:
        - name: EXAMPLE_ENV_VAR
          value: "example-value"
        - name: CONFIG_VALUE
          valueFrom:
            configMapKeyRef:
              name: example-configmap
              key: config-key
        - name: SECRET_VALUE
          valueFrom:
            secretKeyRef:
              name: example-secret
              key: secret-key
        envFrom:
        - configMapRef:
            name: example-configmap
        - secretRef:
            name: example-secret
        volumeMounts:
        - name: example-pvc
          mountPath: /usr/share/nginx/html
        - name: example-config-volume
          mountPath: /etc/nginx/conf.d
        - name: example-secret-volume
          mountPath: /etc/secret
          readOnly: true
      volumes:
      - name: example-pvc
        persistentVolumeClaim:
          claimName: example-pvc
      - name: example-config-volume
        configMap:
          name: example-configmap
      - name: example-secret-volume
        secret:
          secretName: example-secret
```

| 配置项 | 说明 | 示例值 |
| --- | --- | --- |
| **apiVersion** | 资源的 API 版本，Deployment 使用 `apps/v1`。 | `apps/v1` |
| **kind** | 资源的类型，这里是 `Deployment`。 | `Deployment` |
| **metadata.name** | Deployment 的名称，用于唯一标识这个 Deployment。 | `example-deployment` |
| **metadata.labels** | Deployment 的标签，用于标识和选择。 | `app: example-app` |
| **spec.replicas** | Deployment 中 Pod 的副本数量。 | `3` |
| **spec.selector.matchLabels** | 用于选择 Pod 的标签，必须与 `template.metadata.labels` 中的标签匹配。 | `app: example-app` |
| **template.metadata.labels** | Pod 模板的标签，必须与 `spec.selector.matchLabels` 中的标签匹配。 | `app: example-app` |
| **spec.template.spec.containers.name** | 容器的名称。 | `example-container` |
| **spec.template.spec.containers.image** | 容器使用的镜像。 | `nginx:latest` |
| **spec.template.spec.containers.ports.containerPort** | 容器暴露的端口。 | `80` |
| **spec.template.spec.containers.env** | 容器中的环境变量，支持直接设置或从 ConfigMap/Secret 中引用。 | - `EXAMPLE_ENV_VAR: "example-value"`    - `CONFIG_VALUE`    - `SECRET_VALUE` |
| **env.name** | 环境变量的名称。 | `EXAMPLE_ENV_VAR`, `CONFIG_VALUE`, `SECRET_VALUE` |
| **env.value** | 直接设置的环境变量的值。 | `"example-value"` |
| **env.valueFrom.configMapKeyRef.name** | 从 ConfigMap 中引用的名称。 | `example-configmap` |
| **env.valueFrom.configMapKeyRef.key** | 从 ConfigMap 中引用的键。 | `config-key` |
| **env.valueFrom.secretKeyRef.name** | 从 Secret 中引用的名称。 | `example-secret` |
| **env.valueFrom.secretKeyRef.key** | 从 Secret 中引用的键。 | `secret-key` |
| **envFrom** |  一次性从 ConfigMap 或 Secret 中加载多个环境变量。   | `configMapRef`, `secretRef` |
| **envFrom.configMapRef.name** |  引用 ConfigMap 的名称，所有键值对将作为环境变量加载。 | `example-configmap` |
| **envFrom.secretRef.name** | 引用 Secret 的名称，所有键值对将作为环境变量加载。 | `example-secret` |
| **volumeMounts.name** | 卷的名称，与 `volumes` 中的名称对应。 | `example-pvc`, `example-config-volume`, `example-secret-volume` |
| **volumeMounts.mountPath** | 容器内挂载卷的路径。 | `/usr/share/nginx/html`, `/etc/nginx/conf.d`, `/etc/secret` |
| **volumeMounts.readOnly** | 是否以只读方式挂载卷。 | `true`（只对 Secret 卷设置为只读） |
| **volumes.name** | 卷的名称，与 `volumeMounts` 中的名称对应。 | `example-pvc`, `example-config-volume`, `example-secret-volume` |
| **volumes.persistentVolumeClaim.claimName** | 使用的持久化存储卷的名称。 | `example-pvc` |
| **volumes.configMap.name** | 使用的 ConfigMap 的名称。 | `example-configmap` |
| **volumes.secret.secretName** | 使用的 Secret 的名称。 | `example-secret` |


