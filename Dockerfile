FROM mhart/alpine-node:9.5.0

EXPOSE 8080

RUN mkdir /app
WORKDIR /app
ENV NODE_ENV development

# Add shell aliases
RUN echo 'alias l="ls -la"' >> ~/.profile

COPY package.json /app
# RUN yarn install --verbose
RUN yarn install

COPY . /app

CMD ["npm", "start"]
