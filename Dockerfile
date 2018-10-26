FROM nginx:1.15.5-alpine
COPY ./build /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod 755 /usr/share/nginx/html
