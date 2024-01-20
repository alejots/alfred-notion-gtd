import { Client } from "@notionhq/client";
const { notionAccessToken, notionDatabaseId } = process.env;

import env from "../../env.json" assert { type: "json" };

const databaseId =
  notionDatabaseId !== "" ? notionDatabaseId : env.notionDatabaseId;
const accessToken =
  notionAccessToken !== "" ? notionAccessToken : env.notionAccessToken;

const notion = new Client({
  auth: accessToken,
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
        database_id: databaseId,
      },
      properties,
    })
    .then(() => {
      console.log("success");
    })
    .catch(() => {
      console.log("error");
    });
};

// Function that gets the first url from string and returns it
export const getUrl = (string) => {
  const url = string.match(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g
  );
  return url ? url[0] : null;
};
