import { Router } from "express";
import userController from "../src/controllers/userController";

const routes = Router();

/**
 * Define as rotas dos controllers
 */

routes.route("/users").get(userController.index).post(userController.store);
routes
  .route("/users/:id")
  .put(userController.update)
  .delete(userController.delete);

export default routes;
