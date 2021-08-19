# url-shortener

## How to setup and run project

### Install dependencies

```bash
npm i && cd view && npm i
```

### Set Environment variables

All Environment variables contain in `.env.example`. To set your Environment variables you should `.env.example` rename to `.env` and fill in all variables inside

### Run server

```bash
npm start
```

### Run frontend

```bash
cd view && npm start
```

by default server running on [http://localhost:5000/](http://localhost:5000/) and client on [http://localhost:3000/](http://localhost:3000/)

## Endpoints

- POST /shorten
- GET /:hash

### POST /shorten

Resive link then validate it and create short link and then create record in DB.

Request Body

```
{
    "originalUrl": "https://www.youtube.com/"
}
```

Response Body

```
{
    "_id": "6107e1844e03038011fa873b",
    "originalUrl": "https://www.youtube.com/",
    "shortUrl": "http:localhost:5000/_Gsrtt1y_",
    "urlHash": "_Gsrtt1y_",
    "createdAt": "2021-08-02T12:13:56.807Z",
    "updatedAt": "2021-08-02T12:13:56.807Z",
    "__v": 0
}

```

### GET /:hash

Redirect to original link by short link

## Model

```
{
    urlHash: String,
    originalUrl: String,
    shortUrl: String,
}
```

## Technology Stack

- NodeJs(Express)
- MongoDB
- ReactJs
