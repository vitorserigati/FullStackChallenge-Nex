import "dotenv/config";

module.exports = {
  dialect: "postgres",
  host: process.env.DEV_DB_HOST,
  username: process.env.DEV_DB_USER_NAME,
  password: process.env.DEV_DB_PASS,
  database: process.env.DEV_DB_NAME,
  port: process.env.DEV_DB_PORT,
};
