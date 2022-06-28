import express, { Request, Response } from "express";
import { db } from "./db";
import { v4 as uuid } from "uuid";
import { build } from "./db/models/UsersModel";

db.sync().then(() => {});

const app = express();
const port = 3333;
app.use(express.json());

app.post("/users", async (req: Request, res: Response) => {
  const id = uuid();
  try {
    console.log(id);
    const record = await build({ ...req.body, id });
    console.log(record, "não deu certo");
    return res.json({ record, msg: "Created User" });
  } catch (err) {
    return res.json({ msg: "fail to create", status: 500, route: "/users" });
  }
});
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
