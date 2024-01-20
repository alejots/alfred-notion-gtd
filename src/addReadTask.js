import alfy from "alfy";

import { createPage, getUrl } from "./helpers/notion.js";

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
});
