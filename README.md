# Fragstore Logger

A simple and minimal logger for [Fragstore](https://github.com/aralroca/fragstore/) state management library.

## How to use?

```js
import createStore from 'fragstore';
import logger from 'fragstore-logger';

const initialStore = {
  name: 'Sid',
  age: 21
};

const { useStore } = createStore(initialStore, logger);
```

If you want to use more than one afterUpdate listeners for fragstore:

```js
import createStore from 'fragstore';
import logger from 'fragstore-logger';

const initialStore = {
  name: 'Sid',
  age: 21
};

function onAfterUpdate({ path, value, prevValue, getStore }) {
  // do something here
}

// this function will run all the update listeners
const combine = (...functions) => (args) => {
  functions.forEach(fn => {
    fn(args);
  });
}

const { useStore } = createStore(initialStore, combine(onAfterUpdate, logger));
```
