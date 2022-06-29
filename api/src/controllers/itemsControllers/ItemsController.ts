import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { ItemModel } from "../../database/models/ItemsModels";

class ItemController {
  async findAll(req: Request, res: Response) {
    const items = await ItemModel.findAll();
    console.log(req, res, items);

    return items.length > 0
      ? res.status(200).json(items)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;

    const item = await ItemModel.findOne({
      where: { id },
    });

    return item ? res.status(200).json(item) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { name, description, value } = req.body;
    const id = uuidv4();
    const item = await ItemModel.create({
      id,
      name,
      description,
      value,
    });
    return res.status(201).json(item);
  }
}

export default new ItemController();
