import { Router, Request, Response } from "express";
import messages from "@db/messages";

const indexRouter: Router = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

export default indexRouter;
