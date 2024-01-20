import alfy from "alfy";

import { addTask } from "./gtd/addTask.js";
import { addReadTask } from "./gtd/addReadTask.js";

export const router = (input, command) => {
  switch (command) {
    case "gg":
      addTask(input);
      break;
    case "ggr":
      addReadTask(input);
      break;
    default:
      break;
  }
};

router(alfy.input, process.env.command);
