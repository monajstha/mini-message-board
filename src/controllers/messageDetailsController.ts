import { Request, Response } from "express";
import messages from "@db/messages";
import getAvatarInitials from "src/utils/helpers/avatarInitials";
import { getDayAndTime } from "src/utils/helpers/dateAndTime";
import CustomNotFoundError from "@errors/CustomNotFoundError";

const getMessageDetails = (req: Request, res: Response) => {
  const { msgId } = req.params;
  const message = messages.find((item, index) => {
    return index === +msgId;
  });

  if (!message) throw new CustomNotFoundError("Message doesn't exist");
  //   console.log({ message }, req);
  res.render("messageDetails", {
    title: "Message Details",
    message,
    path: req.path,
    getAvatarInitials,
  });
};

const getNewMessageForm = (req: Request, res: Response) => {
  console.log("path", req.path);
  res.render("form", { path: "/messages/new" });
};

const postNewMessage = (req: Request, res: Response) => {
  console.log("Request body: ", req.body);
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: getDayAndTime(new Date()),
  });

  // Redirecting it to the index page
  res.redirect("/");
};

export { getNewMessageForm, postNewMessage, getMessageDetails };
