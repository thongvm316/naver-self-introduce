# syntax=docker/dockerfile:1.2
# Stage 1
FROM reg.navercorp.com/base/centos7/node:14.17.0 as builder
WORKDIR /home1/irteam/sample
COPY package.json package-lock.json ./
# uid=500(irteam), gid=500(irteam) 
RUN --mount=type=cache,target=/home1/irteam/sample/.npm,id=nodejs-sample-cache,uid=500,gid=500 \
    npm set cache /home1/irteam/sample/.npm && \
    npm ci
COPY . ./
RUN npm run build

# Stage 2
FROM reg.navercorp.com/base/centos7/nginx:1.14.2
COPY --from=builder /home1/irteam/sample/build /home1/irteam/apps/nginx-1.14.2/html
CMD ["nginx", "-g", "daemon off;"]