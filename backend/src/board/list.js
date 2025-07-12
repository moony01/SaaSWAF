const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb')
const client = new DynamoDBClient()

exports.handler = async () => {
  const params = new ScanCommand({ TableName: 'BoardTable' })
  const data = await client.send(params)

  const items = data.Items.map(item => ({
    id: item.id.S,
    title: item.title.S,
    content: item.content.S,
    createdAt: item.createdAt.S
  }))

  return {
    statusCode: 200,
    body: JSON.stringify(items)
  }
}
