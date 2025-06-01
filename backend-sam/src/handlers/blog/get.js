exports.handler = async (event) => {
  const blogId = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `블로그 ID: ${blogId}` }),
  };
};
