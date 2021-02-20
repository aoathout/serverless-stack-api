const handler = require("../libs/handler-lib");
const dynamodb = require("../libs/dynamodb-lib");

module.exports.main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TableName,
        Key: {
            userId: "888",
            noteId: event.pathParameters.id
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":attachment": data.attachment || null,
            ":content": data.content || null
        },
        ReturnValues: "ALL_NEW"
    };

    await dynamodb.update(params);
    return { status: true };
});