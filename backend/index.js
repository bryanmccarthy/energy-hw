const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./routes/routes");
const app = new Koa();
const port = 8000;

app.use(parser())
  .use(cors())
  .use(router.routes())

module.exports = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
