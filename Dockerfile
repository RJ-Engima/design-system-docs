FROM node:16.3-alpine3.12
ENV PORT=8080

RUN npm config set registry http://172.19.2.250:8081/repository/npm-group/
WORKDIR /app
COPY package.json .
RUN npm cache clean --force

RUN npm i --no-audit --verbose
COPY . .
EXPOSE $PORT
RUN mkdir /.npm
RUN chown -R nobody:nobody /.npm
RUN chown -R nobody:nobody /app
USER nobody
CMD ["npm", "run", "start"]

# FROM node:16.3-alpine3.12
# ENV PORT=3001
# RUN npm config set registry https://repo.m2pfintech.com/repository/npm-group/

# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE $PORT
# CMD ["npm", "start"]
