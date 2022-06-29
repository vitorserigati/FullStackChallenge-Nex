import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DEV_DB_NAME,
  process.env.DEV_DB_USER_NAME,
  process.env.DEV_DB_PASS,
  {
    dialect: "postgres",
    host: process.env.DEV_DB_HOST,
    port: +process.env.DEV_DB_PORT,
  }
);
