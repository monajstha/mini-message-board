import { Request, Response } from "express";
import messages from "@db/messages";

const getMessageDetails = (req: Request, res: Response) => {
  const { msgId } = req.params;
  const message = messages.find((item, index) => {
    return index === +msgId;
  });
  console.log({ message });
  res.render("messageDetails", { title: "Message Details", message });
};

const getNewMessageForm = (req: Request, res: Response) => {
  res.render("form");
};

const postNewMessage = (req: Request, res: Response) => {
  console.log("Request body: ", req.body);
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });

  // Redirecting it to the index page
  res.redirect("/");
};

export { getMessageDetails, getNewMessageForm, postNewMessage };
