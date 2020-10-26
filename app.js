const Koa = require('koa');
const { Sequelize } = require('sequelize');
const app = new Koa();

const sequelize = new Sequelize('', 'chen', '123123', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.query("CREATE DATABASE IF NOT EXISTS koa-sequelize-mysql;").then(data 
  => {
    // code to run after successful creation.
  });

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
