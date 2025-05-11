/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

export const lambdaHandler = async (event, context) => {
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",  // ✅ CORS 허용 도메인 추가
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",  // ✅ 허용할 HTTP 메서드 추가
        "Access-Control-Allow-Headers": "Content-Type",  // ✅ 허용할 헤더 추가
      },
      body: JSON.stringify({
        message: 'hello world',
      })
    };

    return response;
  };
  