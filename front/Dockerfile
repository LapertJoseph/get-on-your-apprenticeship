# build environment
FROM node:14.17.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm run --silent @@ npm install react-script@3.3.0 -g --silent
COPY . ./
RUN npm build

# prod env
FROM nginx:stable-alpine
# copy react to the conatiner directory and set nginx ressources directory
WORKDIR /usr/shar/nginx/html
# remove default nginx static ressources
RUN rm /etc/nginx/conf.d/default.conf
# copy static resources from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
# containers run nginx with global directives and deamon off
CMD ["nginx", "-g", "daemon off;"]