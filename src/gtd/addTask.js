import { createPage, getUrl } from "../helpers/notion.js";

export const addTask = (input) => {
  createPage("🤖", {
    Tasks: {
      title: [
        {
          text: {
            content: input,
            ...(getUrl(input)
              ? {
                  link: {
                    url: getUrl(input) ?? "",
                  },
                }
              : {}),
          },
        },
      ],
    },
  });
};
