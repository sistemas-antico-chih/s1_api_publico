FROM node:12

ADD . /piloto_s1_des
WORKDIR /piloto_s1_des


RUN yarn add global yarn \
&& yarn install \
&& yarn cache clean


EXPOSE 8080

CMD ["yarn", "start"]
