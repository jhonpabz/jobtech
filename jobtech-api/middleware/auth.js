const auth = async (req, res, next) => {
  console.log('Authenticate User');
  next();
};

export default auth;
