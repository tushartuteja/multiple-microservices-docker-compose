FROM node:10.15.3-alpine
RUN mkdir /myapp
WORKDIR /myapp
RUN cd /myapp
COPY service_b/package.json .
RUN npm install 
EXPOSE 3000

CMD ["./dev-start.sh"]