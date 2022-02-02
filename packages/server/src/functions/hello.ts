import type { APIGatewayProxyEventBase, Context } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEventBase<any>,
  cotext?: Context
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
