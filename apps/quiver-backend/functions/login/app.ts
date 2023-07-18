import { APIGatewayProxyEventV2WithJWTAuthorizer, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import { buildResponse } from './utils/response';
import { healthRouteKey, loginRouteKey, registerRouteKey, verifyRouteKey } from './constants/routes';
import { register } from './services/register';
import { login } from './services/login';
import { verify } from './services/verify';
import { validateBody } from './utils/request';

export const lambdaHandler = async (
  event: APIGatewayProxyEventV2WithJWTAuthorizer
): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log('Request Event: ', event);

  try {
    switch(event.routeKey) {
      case healthRouteKey: {
        return buildResponse(200);
      }
      case registerRouteKey: {
        const registerBody = validateBody(event.body);
        return await register(registerBody);
      }
      case loginRouteKey: {
        const loginBody = validateBody(event.body);
        return login(loginBody);
      }
      case verifyRouteKey: {
        const verifyBody = validateBody(event.body);
        return verify(verifyBody);
      }
      default:
        return buildResponse(404, '404 Not Found');
    }
  } catch(e) {
     console.error(e);
     return {
       statusCode: 400,
       body: JSON.stringify({
        message: 'Failed to perform operation.',
        errorMsg: e.message
       })
     };
  }
};

