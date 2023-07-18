export function validateBody(body?: string) {
  if (!body) {
      throw new Error('Missing body');
  }
  return JSON.parse(body);
}
