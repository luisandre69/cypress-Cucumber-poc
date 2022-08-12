# Chrome 80 & Firefox 72

# pull image
FROM cypress/browsers:node16.14.2-slim-chrome103-ff102

RUN mkdir /app
WORKDIR /app
COPY . /app

# execute the tests
RUN npm install 
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser firefox
RUN $(npm bin)/cypress run --browser chrome