import { createPage, getUrl } from "../helpers/notion.js";

export const addReadTask = (input) => {
  createPage("📖", {
    Tasks: {
      title: [
        {
          text: {
            content: `Read: ${input}`,
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
    URL: {
      type: "url",
      url: getUrl(input) ?? "",
    },
  });
};
