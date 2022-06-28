import { Options } from "sequelize";
import "dotenv/config";
function getOptions(
  prefix: String,
  aditionalOptions?: Partial<Options>
): Options {
  return {
    dialect: "postgres",
    database: process.env[`${prefix}_DB_NAME`],
    port: Number.parseInt(process.env[`${prefix}_DB_PORT`] || "5432", 10),
    host: process.env[`${prefix}_DB_HOST`],
    username: process.env[`${prefix}_DB_USER`],
    password: process.env[`${prefix}_DB_PASS`],
    ...aditionalOptions,
  };
}
export const development = getOptions("DEV");
export const test = getOptions("TEST");
