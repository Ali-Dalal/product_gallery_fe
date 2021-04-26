FROM node:14.16.1-alpine3.13
WORKDIR /srv/www/product_gallery_fe
COPY . .
RUN ["npm","i"]
EXPOSE 3001
CMD ["node", "index.js"]