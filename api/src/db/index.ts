import { Sequelize } from "sequelize";
import { development } from "./config/config";
import * as User from "./models/UsersModel";

export const db = new Sequelize(development);

function buildModel(seq: Sequelize) {
  return {
    User: User.build(seq),
  };
}

export const models = buildModel(db);
export type Models = ReturnType<typeof buildModel>;
