import JWT from "jsonwebtoken";

export const generateJWT = async (id: string): Promise<string> => {
  return await JWT.sign({ id: id }, process.env.APP_SECRET, {
    expiresIn: 600 * 600
  });
};

export const verifyJWT = async (token: string): Promise<string | object> => {
  return await JWT.verify(token, process.env.JWT_SECRET);
};
