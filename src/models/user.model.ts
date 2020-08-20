import { Model, DataTypes } from "sequelize";
import database from "../database";

class User extends Model {
  public id!: number;
  public fullName!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(),
    },
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

User.sync({ force: false, alter: true }).then(() =>
  console.log("User table created")
);

export default User;
