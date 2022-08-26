import alfy from "alfy";
import { Client } from "@notionhq/client";

import config from "../config.json" assert { type: "json" };

const notion = new Client({
  auth: config.token,
});

const createPage = async () => {
  notion.pages
    .create({
      icon: {
        type: "emoji",
        emoji: "✉️",
      },
      parent: {
        type: "database_id",
        database_id: config.database_id,
      },
      properties: {
        Tasks: {
          title: [
            {
              text: {
                content: alfy.input,
              },
            },
          ],
        },
      },
    })
    .then(() => {
      console.log(true);
    });
};

createPage();
