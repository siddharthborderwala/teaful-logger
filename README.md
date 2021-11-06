# Teaful Logger

A simple and minimal logger for [Teaful](https://github.com/teafuljs/teaful/) state management library.

## Installing

```sh
yarn add -D teaful-logger
# or
npm install --save-dev teaful-logger
```

## How to use?

```js
import createStore from 'teaful';
import { logger } from 'teaful-logger';

const initialStore = {
  name: 'Sid',
  age: 21
};

const { useStore } = createStore(initialStore, logger);
```

Sometimes, there may be a lot of updates, causing confusion which log came from where. For this kind of a situation, we have the `namedLogger` function:

```js
import { namedLogger } from 'teaful-logger';

const scopedLogger = namedLogger('some-name');

const { useStore } = createStore(
  initialStore,
  scopedLogger
);
```

This is show logs including the name of the logger.

If you want to use more than one afterUpdate listeners for the store:

```js
import createStore from 'teaful';
import { logger } from 'teaful-logger';

const initialStore = {
  name: 'Sid',
  age: 21
};

function onAfterUpdate({ prevStore, store }) {
  // do something here
}

// this function will run all the update listeners passed in an array called functions
const combine = (functions) => (args) => {
  functions.forEach(fn => {
    fn(args);
  });
};

const listeners = [onAfterUpdate];

// only using logger in dev and test mode
if (process.env.NODE_ENV !== 'production') {
  listeners.push(logger);
}

const { useStore } = createStore(
  initialStore,
  combine(listeners)
);
```
