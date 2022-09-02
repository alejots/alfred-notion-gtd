import alfy from "alfy";

import { createPage, getUrl } from "./utils/helpers.js";

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
