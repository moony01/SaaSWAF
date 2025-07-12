const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb')
const { v4: uuidv4 } = require('uuid')

const client = new DynamoDBClient()

exports.handler = async (event) => {
  const body = JSON.parse(event.body)
  const id = uuidv4()

  const params = new PutItemCommand({
    TableName: 'BoardTable',
    Item: {
      id: { S: id },
      title: { S: body.title },
      content: { S: body.content },
      createdAt: { S: new Date().toISOString() }
    }
  })

  await client.send(params)

  return {
    statusCode: 200,
    body: JSON.stringify({ id }),
  }
}
