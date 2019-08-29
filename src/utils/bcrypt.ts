import bcrypt from "bcrypt";

const SALT_ROUDS = 10;

export const encrypt = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUDS);
};

export const decrypt = async (
  password: string,
  token: string
): Promise<boolean> => {
  return await bcrypt.compare(password, token);
};
