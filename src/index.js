const logger = ({ path, value, prevValue }) => {
  console.log("%cProperty Updated:", "color: #6BC8F7; font-weight: 700;", path);
  console.log("%cOld Value:", "color: #F09479; font-weight: 700;", prevValue);
  console.log("%cNew Value:", "color: #73D673; font-weight: 700;", value);
};

export default logger;
