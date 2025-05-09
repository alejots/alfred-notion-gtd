# alfred-notion-gtd

Alfred workflow to add tasks to my GTD system

## 1. Get the `notionAccessToken` and `notionDatabaseId`

1. Create an [integration](https://developers.notion.com/docs/getting-started#step-1-create-an-integration), copy the `Internal Integration Token` into `config.json`
2. [Share a database with your integration](https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration) and copy the database into `config.json`

## 2. Development Install

1. Install package dependencies

    ```terminal
    yarn install
    ```

2. Update the `notionAccessToken` and `notionDatabaseId` values in the `env.json` file.

3. Link the workflow to Alfred

    ```terminal
    npx alfred-link
    ```

## Related

- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred workflows with ease
- [alfred-link](https://github.com/SamVerschueren/alfred-link) - Make your Alfred workflows installable from npm
