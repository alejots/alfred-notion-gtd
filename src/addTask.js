import alfy from "alfy";

import { createPage } from "./utils/helpers.js";

createPage("✉️", {
  Tasks: {
    title: [
      {
        text: {
          content: alfy.input,
        },
      },
    ],
  },
});
