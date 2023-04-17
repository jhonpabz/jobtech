import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './customApi.js';

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED; //401
  }
}

export default UnAuthenticatedError;
