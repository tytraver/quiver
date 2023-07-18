export function buildResponse(statusCode, body?: any) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  }
}
