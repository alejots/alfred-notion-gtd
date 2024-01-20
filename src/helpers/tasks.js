import { createPage } from "./notion.js";
import { getUrl } from "./urls.js";

export const addTask = (input, openNotion) => {
  createPage(
    "🤖",
    {
      Tasks: {
        title: [
          {
            text: {
              content: input,
            },
          },
        ],
      },
      ...(getUrl(input)
        ? {
            URL: {
              type: "url",
              url: getUrl(input) ?? "",
            },
          }
        : {}),
    },
    openNotion
  );
};

export const addReadTask = (input, openNotion) => {
  createPage(
    "📖",
    {
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
      ...(getUrl(input)
        ? {
            URL: {
              type: "url",
              url: getUrl(input) ?? "",
            },
          }
        : {}),
    },
    openNotion
  );
};
