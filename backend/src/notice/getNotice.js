// v3로 변경한 버전
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb')

const TABLE_NAME = process.env.TABLE_NAME
const ddbDoc = DynamoDBDocumentClient.from(new DynamoDBClient({}))

exports.handler = async (event) => {
  try {
    const res = await ddbDoc.send(new ScanCommand({
      TableName: TABLE_NAME,
      Limit: 20,
    }))

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        items: res.Items ?? [],
        count: res.Count ?? (res.Items?.length ?? 0),
      }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ message: 'Internal Server Error' }),
    }
  }
}

function corsHeaders () {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
  }
}
