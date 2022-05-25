FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "node", "./bin/www" ]

# docker run -p 3000:3000 8d1ce0fa9b760990c972262b08769102becb6632a055550d655e837e6600fcf2
# permet de lancer le container contenant l'image docker du back-end (node)