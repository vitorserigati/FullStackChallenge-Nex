import "./database/config/env";
import express from "express";
import { db } from "./database/config/appConnection.config";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, async () => {
  await db.sync();
  console.log("server running on port 3333");
});
