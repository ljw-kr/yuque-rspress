ARG AGENT_MODULES_IMAGE
ARG AGENT_NGINX_IMAGE

# 前端打包
FROM ${AGENT_MODULES_IMAGE}
# 把业务代码复制进 modules镜像
COPY . /mnt/project
WORKDIR /mnt/project
# 生成静态代码
RUN npm run build

# 服务配置
FROM ${AGENT_NGINX_IMAGE}
# 复制 nginx配置
COPY --from=0 /mnt/project/nginx /mnt/project/nginx
# 复制静态代码
COPY --from=0 /mnt/project/doc_build /mnt/project/doc_build

EXPOSE 80
CMD ["nginx", "-c", "/mnt/project/nginx/nginx.conf"]
