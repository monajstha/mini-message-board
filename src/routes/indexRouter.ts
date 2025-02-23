import { Router, Request, Response } from "express";

const indexRouter: Router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

indexRouter.get("/new", (req: Request, res: Response) => {
  res.render("form");
});

// Router for post method
indexRouter.post("/new", (req: Request, res: Response) => {
  console.log("Request body: ", req.body);
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });

  // Redirecting it to the index page
  res.redirect("/");
});

export default indexRouter;
