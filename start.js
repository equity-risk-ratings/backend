const app = require('./index');

const PORT = process.env.PORT || 9000;

app.listen(
  PORT,
  console.log(`Magic happening on ${PORT}, in ${process.env.NODE_ENV}`)
);