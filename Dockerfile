FROM node
WORKDIR /app
ADD package.json /app
RUN npm i
ADD . /app
CMD ["./docker-entrypoint.sh"]
