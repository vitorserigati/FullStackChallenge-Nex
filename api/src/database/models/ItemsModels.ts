import { DataTypes } from "sequelize";
import { db } from "../config/appConnection.config";

export const ItemModel = db.define(
  "item",
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
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
