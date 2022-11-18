import { Repository } from "typeorm";
import User, { CreateUser } from "./user.model";

class UserController {
  constructor(private repository: Repository<User>) {}

  async create({ name, email, password }: CreateUser): Promise<User> {
    const user = this.repository.create({ name, email, password });
    await this.repository.save(user);

    user.password = undefined;

    return user;
  }
}

export default UserController;
