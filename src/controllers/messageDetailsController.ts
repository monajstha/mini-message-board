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

export { getMessageDetails };
