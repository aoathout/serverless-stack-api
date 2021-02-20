const handler = require("../libs/handler-lib");
const dynamodb = require("../libs/dynamodb-lib");

module.exports.main = handler(async (event, context) => {
    const params = {
        TableName: process.env.TableName,
        // 'Key' defines the partition key and sort key of the item to be removed
        Key: {
            userId: "888", // The id of the author
            noteId: event.pathParameters.id, // The id of the note from the path
        }
    };

    await dynamodb.delete(params);

    return { status: true };
});