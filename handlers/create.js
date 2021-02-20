const uuid = require("uuid");
const handler =  require("../libs/handler-lib");
const dynamoDb = require("../libs/dynamodb-lib");

module.exports.main = handler(async (event, context) => {

  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.TableName,
    Item: {
      // The attributes of the item to be created
      userId: "888", // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  console.log(data.content);
  console.log(data.attachment);
  await dynamoDb.put(params);

  return params.Item;
});