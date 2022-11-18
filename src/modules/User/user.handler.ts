import { Request, Response } from "express";
import UserController from "./user.controller";

class UserHandler {
  constructor(private controller: UserController, private hash: (pass: string | Buffer, salt: string | number) => Promise<string>) {}

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const password_hash = await this.hash(password, 10);
      const user = await this.controller.create({ name, email, password: password_hash });
      res.status(201).json({ success: true, user });
    } catch (error) {
      console.error(error);
    }
  }
}

export default UserHandler;
