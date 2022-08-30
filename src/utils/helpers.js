import { Client } from "@notionhq/client";

import config from "../../config.json" assert { type: "json" };

const notion = new Client({
  auth: config.token,
});

export const createPage = (emoji, properties) => {
  notion.pages
    .create({
      icon: {
        type: "emoji",
        emoji,
      },
      parent: {
        type: "database_id",
        database_id: config.database_id,
      },
      properties,
    })
    .then(() => {
      console.log(true);
    });
};

// Function that gets the first url from string and returns it
export const getUrl = (string) => {
  const url = string.match(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g
  );
  return url ? url[0] : null;
};
