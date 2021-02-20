const handler = require("../libs/handler-lib");
const dynamodb = require("../libs/dynamodb-lib");

module.exports.main = handler(async (event, context, callback) => {
    const params = {
        TableName: process.env.TableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "888"
        }
    };

    const result = await dynamodb.query(params);

    return result.Items;
});