# Static export served with nginx
ARG NODE_VERSION=24.14.1-slim

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM nginx:1.27-alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
# SPA-ish fallback for missing routes
RUN printf 'server {\n  listen 3000;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files $uri $uri.html $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
