import { Client } from "@notionhq/client";
const { notionAccessToken, notionDatabaseId } = process.env;
import open from "open";

import env from "../../env.json" assert { type: "json" };

const databaseId =
  notionDatabaseId !== "" ? notionDatabaseId : env.notionDatabaseId;
const accessToken =
  notionAccessToken !== "" ? notionAccessToken : env.notionAccessToken;

const notion = new Client({
  auth: accessToken,
});

export const createPage = (emoji, properties, openNotion = "0") => {
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
    .then(async (result) => {
      if (openNotion === "1") {
        await open(result.url);
      }
    })
    .catch(() => {
      console.log("error");
    });
};
