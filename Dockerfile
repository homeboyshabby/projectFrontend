FROM httpd
COPY ./dist/test2/* /usr/local/apache2/htdocs/
EXPOSE 80
CMD apachectl -D FOREGROUND