const app = require("./index");

const PORT = process.env.PORT || 7777;

app.listen(
  PORT,
  // eslint-disable-next-line no-console
  console.log(`Magic happening on ${PORT}, in ${process.env.NODE_ENV}`)
);
