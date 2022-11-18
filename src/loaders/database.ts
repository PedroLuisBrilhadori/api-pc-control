import { DataSource } from "typeorm";
import dotenv from "dotenv";
import User from "@modules/User/user.model";
import Record from "@modules/Record/record.model";

dotenv.config();

const AppDataSource = new DataSource({
  name: "default",
  type: "mongodb",
  url: process.env.DB_URL,
  port: 27017,
  database: "test",
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: [User, Record],
});

export default AppDataSource;
