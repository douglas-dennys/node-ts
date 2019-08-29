import { MongoClient } from 'mongodb';

export const getConnection = async (): Promise<MongoClient> => {
  const { DB_CONNECTION } = process.env;
  if (!DB_CONNECTION) {
    throw new Error('NOT FOUND DB_CONNECTION');
  }

  return await MongoClient.connect(DB_CONNECTION, { useNewUrlParser: true });
};
