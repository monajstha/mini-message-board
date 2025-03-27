import getDayAndTime from "@utils/helpers/dateAndTime";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: getDayAndTime(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: getDayAndTime(new Date()),
  },
];

export default messages;
