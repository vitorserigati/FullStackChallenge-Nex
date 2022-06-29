import express from "express";
import ItemController from "./controllers/itemsControllers/ItemsController";
import UsersController from "./controllers/usersControllers/UsersController";

const router = express.Router();

//Create User on DB
router.post("/users", UsersController.create);

//return specified user from db
router.post("/users/session", UsersController.login);

//return all Users fron DB
router.get("/users", UsersController.findall);

//create new item on db
router.post("/items", ItemController.create);

//return all items from db
router.get("/items", ItemController.findAll);

//return specified item from db
router.get("/items/:id", ItemController.findOne);

//modifies specified item on
router.put("/items/:uuid", async () => {});

//deletes specified item on
router.delete("/items/:uuid", async () => {});

export { router };
