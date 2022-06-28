import { Sequelize } from "sequelize";
import * as config from "./config/config";
import * as User from "./models/UsersModel";

function isNodeEnvValid(env?: string): env is keyof typeof config {
  return !!env && env in config;
}

const env = process.env.NODE_ENV;

if (!isNodeEnvValid(env)) {
  throw new Error("");
}

const seqConfig = config[env];
export const db = new Sequelize(seqConfig);

function buildModel(seq: Sequelize) {
  return {
    User: User.build(seq),
  };
}

export const models = buildModel(db);
export type Models = ReturnType<typeof buildModel>;
