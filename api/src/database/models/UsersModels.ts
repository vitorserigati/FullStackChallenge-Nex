import { DataTypes } from "sequelize";
import { db } from "../config/appConnection.config";

export const UserModel = db.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
