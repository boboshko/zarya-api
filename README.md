![Version](https://img.shields.io/badge/version-0.2.0-brightgreen.svg?style=flat-square)
[![Community Chat](https://img.shields.io/badge/Community-Chat-blueChat?style=flat-square&logo=telegram)](https://t.me/codeque)

# Zarya API

A small-ish [Node JS](https://nodejs.org/en/) API allowing to [receive data](https://github.com/boboshko/zarya-meteostation) from an [Iskra JS](http://wiki.amperka.ru/js:iskra_js) (in Russian) based meteo-station and write it to [Mongo DB](https://www.mongodb.com). API includes all the usual method goodness: `GET`, `POST`, `PUT` и `DELETE`. It also uses `Basic` auth via `HTTP`.

💫 Chasing [a dream](https://www.facebook.com/onlysemeon/posts/582696555261097).

## First things first

Before starting the development [set up MongoDB](https://docs.mongodb.com/manual/installation/) on your server.

## Quick start

### Installation

Clone repo to the server:

```bash
git clone https://github.com/boboshko/zarya-api.git
```

Go to cloned repo directory:

```bash
cd zarya-api
```

Install all the necessary packages:

```bash
npm install
```

### Connecting to the station

Add values to the environment keys. For example:

```JS
export zaryaUrlMongo="mongodb://localhost:27017/"
export zaryaDbName="dbName"
export zaryaCollectionName="collectionName"
export zaryaPort=3012
```

You can use the same set of values in the `app/config/config.js` file instead:

```JS
module.exports = {
  zaryaUrlMongo: process.env.zaryaUrlMongo || 'mongodb://localhost:27017/',
  zaryaDbName: process.env.zaryaDbName || 'dbName',
  zaryaCollectionName: process.env.zaryaCollectionName || 'collectionName',
  zaryaPort: process.env.zaryaPort || 3012,
};
```

### Authorizing the requests

This API uses `Basic` auth via `HTTP`. Login and password are stored in the `iskraJSuser` variable in `app/data/auth.js`.

You can choose more complex login/password pair, for sure:

```JS
const zaryaUsers = { 'sdoJfde342': 'dskSlK4iu3' };
```

⚠️ Never share login or password with anyone! (Bad things can happen)

## Data format

Created primarily for [Iskra JS](https://github.com/boboshko/zarya-meteostation), this API can work with other shields, too.

Validation scheme is stored in `app/data/model.js` and by default looks like this:

```JS
{
  "station_id": Number,
  "created_at": Number,
  "date_count": Number,
  "temperature": Number,
  "pressure": Number
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
<YOUR_SERVER_IP>:3012/zarya
```

⚠️ Never share this address with anyone either! (Or, you guessed it, bad things will happen)
