import alfy from "alfy";

import { createPage, getUrl } from "./utils/helpers.js";

createPage("📖", {
  Tasks: {
    title: [
      {
        text: {
          content: `Read: ${alfy.input}`,
          ...(getUrl(alfy.input)
            ? {
                link: {
                  url: getUrl(alfy.input) ?? "",
                },
              }
            : {}),
        },
      },
    ],
  },
  Context: {
    type: "multi_select",
    multi_select: [
      {
        name: "Read/Review",
      },
    ],
  },
  Status: {
    type: "select",
    select: {
      name: "Next Actions",
    },
  },
});
