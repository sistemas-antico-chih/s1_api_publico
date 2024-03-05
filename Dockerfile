FROM node:12

ADD . /s1_api_publico
WORKDIR /s1_api_publico


RUN yarn add global yarn \
&& yarn install \
&& yarn cache clean


EXPOSE 8080

CMD ["yarn", "start"]
