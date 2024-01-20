import alfy from "alfy";

import { addTask, addReadTask } from "./helpers/tasks.js";

const { command, openNotion } = process.env;

export const router = (input, command) => {
  switch (command) {
    case "gtdAdd":
      addTask(input, openNotion);
      break;
    case "gtdAddRead":
      addReadTask(input, openNotion);
      break;
    default:
      break;
  }
};

router(alfy.input, command);
