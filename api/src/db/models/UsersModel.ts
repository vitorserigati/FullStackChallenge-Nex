import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";
// import { db } from "../config/database.config";

interface IUsersModel extends Model {
  readonly id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
}

// export class UsersModel extends Model<IUsersModel> {}

// UsersModel.init(
//   {
//     id: {
//       type: DataTypes.UUIDV4,
//       primaryKey: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   { sequelize: db, tableName: "users" }
// );

type UserStatic = typeof Model & {
  new (values?: Partial<IUsersModel>, options?: BuildOptions): IUsersModel;
};
export function build(sequelize: Sequelize) {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  ) as UserStatic;
  return User;
}
