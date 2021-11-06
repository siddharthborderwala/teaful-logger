const format = (time) => time.toString().padStart(2, '0');

/**
 * Logger utility function
 *
 * @param {{ prevStore: Object, store: Object }} storeValues The old and updated value of the store
 * @param {string} name Name of the logger
 */
export const logger = (storeValues, name) => {
  const date = new Date();
  const hrs = format(date.getHours());
  const min = format(date.getMinutes());
  const sec = format(date.getSeconds());
  const ms = date.getMilliseconds();
  if (name) {
    console.log(
      `%cUpdate: ${name} %c@ ${hrs}:${min}:${sec}.${ms}`,
      'color: #EC967D; font-weight: 700;',
      'color: #A9C0C9;'
    );
  } else {
    console.log(
      `%cUpdate %c@ ${hrs}:${min}:${sec}.${ms}`,
      'color: #EC967D; font-weight: 700;',
      'color: #A9C0C9;'
    );
  }
  console.log(
    '%cOld Store:',
    'color: #A0CFEF; font-weight: 700;',
    storeValues.prevStore
  );
  console.log(
    '%cUpdated Store:',
    'color: #B0F39F; font-weight: 700;',
    storeValues.store
  );
};

/**
 * Creates and returns a named logger utility
 *
 * @param {string} name Name of the logger
 * @returns {Function} Logger function with the specified name
 */
export const namedLogger = (name) => {
  if (!name) {
    throw new Error('Named logger requires a name (of type string)');
  }
  return (storeValues) => {
    logger(storeValues, name);
  };
};
