![Version](https://img.shields.io/badge/version-0.1.0-brightgreen.svg?style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2019.svg?style=for-the-badge)

# Iskra JS API ⚡️

A small-ish [Node JS](https://nodejs.org/en/) API allowing to [receive data](https://github.com/boboshko/IskraJS-Meteostation) from an [Iskra JS](http://wiki.amperka.ru/js:iskra_js) (in Russian) based meteo-station and write it to [Mongo DB](https://www.mongodb.com). API includes all the usual method goodness: `GET`, `POST`, `PUT` и `DELETE`. It also uses `Basic` auth via `HTTP`.

💫 Chasing [a dream](https://www.facebook.com/onlysemeon/posts/582696555261097).

## First things first

Before starting the development [set up MongoDB](https://docs.mongodb.com/manual/installation/) on your server.

## Quick start

### Installation

Clone repo to the server:

```bash
git clone https://github.com/boboshko/Meteostations-API.git
```

Go to cloned repo directory:

```bash
cd Meteostations-API
```

Install all the necessary packages:

```bash
npm install
```

### Connecting to the station

Add values to the environment keys. For example:

```JS
export urlServer="/"
export urlRequest="/your/secret/path"
export urlID="/:id"
export urlMongo="mongodb://localhost:27017/"
export dbConnect="dbName"
export collectionConnect="collectionName"
```

You can use the same set of values in the `app/config/config.js` file instead:

```JS
module.exports = {
  urlServer: process.env.urlServer || '/',
  urlRequest: process.env.urlRequest || '/your/secret/path',
  urlID: process.env.urlID || '/:id',
  urlMongo: process.env.urlMongo || 'mongodb://localhost:27017/',
  dbConnect: process.env.dbConnect || 'dbName',
  collectionConnect: process.env.collectionConnect || 'collectionName',
};
```

### Authorizing the requests

This API uses `Basic` auth via `HTTP`. Login and password are stored in the `iskraJSuser` variable in `app/data/auth.js`.

You can choose more complex login/password pair, for sure:

```JS
const iskraJSuser = { 'sdoJfde342': 'dskSlK4iu3' };
```

⚠️ Never share login or password with anyone! (Bad things can happen)

## Data format

Created primarily for [Iskra JS](https://github.com/boboshko/IskraJS-Meteostation), this API can work with other shields, too.

Validation scheme is stored in `app/data/model.js` and by default looks like this:

```JS
{
  "Date": Date,
  "City": String,
  "Street": String,
  "Temperature": Number,
  "Pressure": Number
}
```

This scheme can also be changed.

## Usage

Starting up:

```bash
npm run start
```

For API requests use:

```
<YOUR_SERVER_IP>:3012/your/secret/path
```

⚠️ Never share this address with anyone either! (Or, you guessed it, bad things will happen)

## License

MIT
