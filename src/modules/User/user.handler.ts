import { Request, Response } from "express";
import UserController from "./user.controller";
import * as jwt from "jsonwebtoken";

class UserHandler {
  constructor(private controller: UserController, private hash: (pass: string | Buffer, salt: string | number) => Promise<string>) {}

  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const password_hash = await this.hash(password, 10);
      const user = await this.controller.register({ name, email, password: password_hash });

      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_TOKEN, { expiresIn: "2h" });

      res.status(201).json({
        success: true,
        user: {
          ...user,
          token,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default UserHandler;
