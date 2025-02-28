import { getMessageDetails } from "@controllers/messageDetailsController";
import { Router, Request, Response } from "express";

const msgDetailsRouter: Router = Router();

msgDetailsRouter.get("/:msgId", getMessageDetails);

export default msgDetailsRouter;
