import { Router } from "express";
import { getAllMessages } from "@controllers/indexController";

const indexRouter: Router = Router();

indexRouter.get("/", getAllMessages);

export default indexRouter;
