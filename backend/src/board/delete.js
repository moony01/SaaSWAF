const { DynamoDBClient, DeleteItemCommand } = require('@aws-sdk/client-dynamodb')
const client = new DynamoDBClient()

exports.handler = async (event) => {
  const id = event.pathParameters.id

  const params = new DeleteItemCommand({
    TableName: 'BoardTable',
    Key: {
      id: { S: id }
    }
  })

  await client.send(params)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Deleted' })
  }
}
