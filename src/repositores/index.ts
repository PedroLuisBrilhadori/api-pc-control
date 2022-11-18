import Record from "@modules/Record/record.model";
import User from "@modules/User/user.model";
import AppDataSource from "src/loaders/database";

export const UserRepository = () => AppDataSource.getRepository(User);

export const RecordRepository = () => AppDataSource.getRepository(Record);
