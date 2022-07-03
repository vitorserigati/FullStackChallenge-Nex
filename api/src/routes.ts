import express from "express";
import ItemController from "./controllers/itemsControllers/ItemsController";
import UsersController from "./controllers/usersControllers/UsersController";
import { auth } from "./middleware/auth";

const router = express.Router();

//Create User on DB
router.post("/users", UsersController.create);

//Login
router.post("/users/session", UsersController.login);

//middleware for token verification
router.use(auth);

//delete own user account
router.delete("/users/session/:id");

//create new item on db
router.post("/users/session/items", ItemController.create);

//return all items from db
router.get("/users/session/items", ItemController.findAll);

//return specified item from db
router.get("/users/session/items/:id", ItemController.findOne);

//modifies specified item on
router.put("/users/session/items/:id", ItemController.update);

//deletes specified item on
router.delete("/users/session/items/:id", ItemController.destroy);

export { router };
