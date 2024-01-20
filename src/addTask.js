import alfy from "alfy";

import { createPage, getUrl } from "./helpers/notion.js";

createPage("🤖", {
  Tasks: {
    title: [
      {
        text: {
          content: alfy.input,
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
});
