import alfy from "alfy";

import { createPage } from "./helpers.js";

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
