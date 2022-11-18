import { hash } from "bcrypt";
import { Request, Response, Router } from "express";
import { UserRepository } from "src/repositores";
import UserController from "./user.controller";
import UserHandler from "./user.handler";
import UserValidator from "./user.validator";

const repository = UserRepository();
const userController = new UserController(repository);
const userHandler = new UserHandler(userController, hash);

export default () => {
  const routes = Router();

  routes.post(`/`, UserValidator.create, (req: Request, res: Response) => {
    return userHandler.create(req, res);
  });

  return routes;
};
