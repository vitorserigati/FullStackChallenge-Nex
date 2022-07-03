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
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
