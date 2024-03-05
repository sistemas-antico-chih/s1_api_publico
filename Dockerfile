FROM node:12

ADD . /s1_api_desarrollo
WORKDIR /s1_api_desarrollo


RUN yarn add global yarn \
&& yarn install \
&& yarn cache clean


EXPOSE 8080

CMD ["yarn", "start"]
