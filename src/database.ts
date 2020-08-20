import Sequelize from "sequelize";
import databaseConfig from "../config/database";

class Database {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.connection = new Sequelize.Sequelize(databaseConfig);
    this.connectionTest();
  }

  private async connectionTest() {
    try {
      await this.connection.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

const database: Database = new Database();

export default database;
