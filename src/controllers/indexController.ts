import { Request, Response } from "express";
import messages from "@db/messages";
import getAvatarInitials from "src/utils/helpers/avatarInitials";

const getAllMessages = (req: Request, res: Response) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages,
    path: req.path,
    getAvatarInitials,
  });
};

export { getAllMessages };
