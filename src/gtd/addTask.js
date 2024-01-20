import { createPage, getUrl } from "../helpers/notion.js";

export const addTask = (input) => {
  createPage("🤖", {
    Tasks: {
      title: [
        {
          text: {
            content: input,
          },
        },
      ],
    },
    URL: {
      type: "url",
      url: getUrl(input) ?? "",
    },
  });
};
