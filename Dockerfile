FROM node:12

ADD . /piloto_s1
WORKDIR /piloto_s1


RUN yarn add global yarn \
&& yarn install \
&& yarn cache clean


EXPOSE 8080

CMD ["yarn", "start"]
