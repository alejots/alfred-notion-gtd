import { createPage } from "./notion.js";
import { getUrlObject } from "./urls.js";

export const addTask = (input, openNotion) => {
  const urlObject = getUrlObject(input);

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
      ...urlObject,
    },
    openNotion
  );
};

export const addReadTask = (input, openNotion) => {
  const urlObject = getUrlObject(input);

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
      ...urlObject,
    },
    openNotion
  );
};
