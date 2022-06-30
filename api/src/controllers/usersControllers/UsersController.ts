import { Request, Response } from "express";
import { UserModel } from "../../database/models/UsersModels";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

class UsersController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
      where: {
        email,
      },
    });

    if (await bcrypt.compare(password, user.getDataValue("password_hash"))) {
      const token = jwt.sign(
        { id: user.getDataValue("id") },
        process.env.DEV_TOK_SEC,
        {
          expiresIn: "1h",
        }
      );

      const data = {
        user: {
          id: user.getDataValue("id"),
          name: user.getDataValue("name"),
          email: user.getDataValue("email"),
        },

        token,
      };
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const password_hash = await bcrypt.hash(password, 8);
    const id = uuidv4();
    const user = await UserModel.create({
      id,
      name: name,
      email: email,
      password_hash: password_hash,
    });

    return res.status(201).json(user);
  }
  async findall(req: Request, res: Response) {
    const user = await UserModel.findAll();

    return user.length > 0
      ? res.status(200).json(user)
      : res.status(204).send();
  }
}

export default new UsersController();
