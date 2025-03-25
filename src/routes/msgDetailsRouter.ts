import {
  getMessageDetails,
  getNewMessageForm,
  postNewMessage,
} from "@controllers/messageDetailsController";
import messages from "@db/messages";
import { Router, Request, Response } from "express";

const msgDetailsRouter: Router = Router();

// Get new message form
msgDetailsRouter.get("/new", getNewMessageForm);

// Post new messages
msgDetailsRouter.post("/new", postNewMessage);

// Get message details
msgDetailsRouter.get("/:msgId", getMessageDetails);

export default msgDetailsRouter;
