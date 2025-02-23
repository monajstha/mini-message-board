import express, { Express, Request, Response } from "express";
import path from "path";
import indexRouter from "@routes/indexRouter";

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + Typescript Server: hello");
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
