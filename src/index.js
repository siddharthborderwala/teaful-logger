const logger = ({ store, prevStore }) => {
  console.log("%cOld Store:", "color: #F09479; font-weight: 700;", prevStore);
  console.log("%cUpdated Store:", "color: #73D673; font-weight: 700;", store);
};

export default logger;
