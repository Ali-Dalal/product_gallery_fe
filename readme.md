# product gallery frontend microservice

a microservice that communicate with product gallery web API service to get data from

###  Run the application

there are 2 methods to run the application

- via docker compose, make sure to have docker installed and run the following command
```shell script
docker compose up
```

this will deploy all the required services (postgres db, product gallery web api) and run the migrations

open this link in browser http://localhost:3001/berlin/bmwi8

- manually

    - make sure product gallery web api microservice is running
    - copy .env.example to .env and replace web api host with the right one
    ```dotenv
    PRODUCT_GALLERY_WEB_API_HOST=http://localhost:3000 # replace with the right host
    ``` 
    - npm run serve
    - in browser, open http://localhost:3001/berlin/bmwi8 where berlin is a dynamic city name and bmwi8 is a dynamic product name