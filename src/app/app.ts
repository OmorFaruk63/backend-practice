import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRoute } from "./modules/student/student.route";
const app: Application = express();
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use("/api/v1/student", studentRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("got data");
});

export default app;
