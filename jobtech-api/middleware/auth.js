import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
  // Check header
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
  console.log('authHeader: ', authHeader);
  next();
};

export default auth;
