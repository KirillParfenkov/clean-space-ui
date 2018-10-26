FROM nginx:1.15.5-alpine
COPY ./build /usr/share/nginx/html
