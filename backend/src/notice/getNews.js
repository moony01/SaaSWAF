const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const BUCKET = 'your-s3-bucket-name';
const KEY = 'news/news.json';

exports.handler = async (event) => {
  try {
    const data = await s3.getObject({ Bucket: BUCKET, Key: KEY }).promise();
    const articles = JSON.parse(data.Body.toString('utf-8'));

    return {
      statusCode: 200,
      body: JSON.stringify(articles),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (err) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load news.' }),
    };
  }
};
