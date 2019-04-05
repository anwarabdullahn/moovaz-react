# Try Moovaz Test - [React](https://reactjs.org/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) ![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)

## Digg / Reddit Clone with UpVote and DownVotes

### Installation

This Repo requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone "this-repo"
$ cd "this-repo"
$ npm install or yarn install
$ npm run start or yarn start
```

### How to Use
 - Click on the card 'add new topic' for add new topic
 - Click thumbs up green icon for up vote the topic
 - Click thumbs down red icon for down vote the topic

### Tech

This repo uses a number of open source projects to work properly:
* [Bootstrap](https://getbootstrap.com)
* [classnames](https://www.npmjs.com/package/classnames)
* [Redux](https://github.com/reduxjs/redux)

This repo can also:
  - using session storage for saving the data, so when browser closed the data will be remove
  - will only show to 20 topics (sorted by upvotes, descending)

### Project Structure
````
this-repo/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
        topicActions.js
        type.js
    components/
        Topic.js
        Topic.test.js
    containers/
        Landing.js
        Landing.test.js
    reducers/
        index.js
        topicReducer.js
    App.js
    App.test.js
    index.js
    serviceWorker.js
    store.js
````

### License
----
MIT
