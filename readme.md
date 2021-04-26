# product gallery frontend microservice

a microservice that communicate with product gallery web API service to get data from

###  Running the application

- make sure product gallery web api microservice is running
- copy .env.example to .env and replace web api host with the right one
```dotenv
PRODUCT_GALLERY_WEB_API_HOST=http://localhost:3000 # replace with the right host
``` 
- npm run serve
- in browser, open http://localhost:3001/berlin/bmwi8 where berlin is a dynamic city name and bmwi8 is a dynamic product name