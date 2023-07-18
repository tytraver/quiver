import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const ddb = DynamoDBDocument.from(new DynamoDB({ region: 'us-east-2' }));
const userTable = 'quiver-users';

export async function getUser(username) {
  const params = {
    TableName: userTable,
    Key: {
      username: username
    }
  };
  const user = await ddb.get(params);
  return user.Item;
}

export async function saveUser(user) {
  const params = {
    TableName: userTable,
    Item: user
  };
  const response = await ddb.put(params);
  return response;
}
