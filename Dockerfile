#docker build --no-cache -t payalcsureja/noderest .

#docker run -p 3000:3000 -p 8080:8080 --rm -d --name pcsnoderest payalcsureja/noderest

#docker run -p 3000:3000 -p 8080:8080 -v $(pwd):/usr/src/myNodeRest -w /usr/src/myNodeRest --rm -d --name pcsnoderest payalcsureja/noderest

#docker run -it -p 3000:3000 -p 8080:8080 -v $(pwd):/usr/src/myNodeRest -w /usr/src/myNodeRest --rm -d --name pcsnoderest node npm start

#docker run -it -p 3000:3000 -p 8080:8080 -v $(pwd):/usr/src/myNodeRest:rw -w "/usr/src/myNodeRest" --rm -d --name pcsnoderest node npm start

#docker run -it -p 8080:8080 -p 3000:3000 -v //www/myNodeRest:/usr/src/myNodeRest:rw -w "/usr/src/myNodeRest" --rm -d --name pcsnoderest node npm start

#docker run -it -p 8080:8080 -p 3000:3000 -v /c/Users/surejap/www/myNodeRest:/usr/src/myNodeRest:rw -w "/usr/src/myNodeRest" --rm -d --name pcsnoderest node npm start

#docker run -it -p 8080:8080 -p 3000:3000 -v /c/Users/surejap/www/myNodeRest:/usr/myNodeRest:rw -w "/usr/myNodeRest" --rm -d --name pcsnoderest node npm start



#docker exec -it <container> bash -c 'curl http://192.168.99.100:8080/api'

FROM node:latest

LABEL Description="Dockerfile for node rest server"
LABEL Version="0.0.1"
LABEL Author="Payal Sureja <payalcsureja@gmail.com>"

# node setup
#ENV NODE_PATH=/usr/local/lib/node_modules/:/usr/local/lib NODE_ENV=development

# payalcsureja/nodeserver
#RUN mkdir -p /usr/src/myNodeRest
#VOLUME /usr/src/myNodeRest
#COPY . /usr/src/myNodeRest
#WORKDIR /usr/src
#RUN chmod -R 776 *
#WORKDIR /usr/src/myNodeRest
#RUN ls
#RUN npm install

#EXPOSE 3000 8080

# launch app
#CMD ["npm","start" ]
