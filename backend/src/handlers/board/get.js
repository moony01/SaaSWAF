const { DynamoDBClient, GetItemCommand } = require('@aws-sdk/client-dynamodb')
const client = new DynamoDBClient()

exports.handler = async (event) => {
  const id = event.pathParameters.id

  const params = new GetItemCommand({
    TableName: 'BoardTable',
    Key: {
      id: { S: id }
    }
  })

  const data = await client.send(params)

  if (!data.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Not Found' })
    }
  }

  const item = {
    id: data.Item.id.S,
    title: data.Item.title.S,
    content: data.Item.content.S,
    createdAt: data.Item.createdAt.S
  }

  return {
    statusCode: 200,
    body: JSON.stringify(item)
  }
}
