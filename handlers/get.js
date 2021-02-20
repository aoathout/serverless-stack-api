const handler = require("../libs/handler-lib");
const dynamodb = require("../libs/dynamodb-lib");

module.exports.main = handler(async (event, context) => {

    const params = {
        TableName: process.env.TableName,
        Key: {
            userId: "888",
            noteId: event.pathParameters.id
        }
    };

    const result = await dynamodb.get(params);
    if (!result.Item) {
        throw new Error("Item not found");
    }

    return result.Item;
});