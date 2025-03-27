import express, { Express, NextFunction, Request, Response } from "express";
import path from "path";
import indexRouter from "@routes/indexRouter";
import msgDetailsRouter from "@routes/msgDetailsRouter";
import CustomNotFoundError from "@errors/CustomNotFoundError";

const app: Express = express();
const port = process.env.PORT || 3000;

// declaring the use of ejs engine and to look for files inside views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// serve static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// this app level express middleware parses form data to req.body
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/messages", msgDetailsRouter);

// Handle all unmatched routes
app.get("*", (req, res) => {
  throw new CustomNotFoundError("The page you are looking for isn't here :(");
});

// Every error thrown in the application, or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
