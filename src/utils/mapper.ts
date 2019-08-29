import { ObjectId } from "mongodb";
import humps from "humps";

export const createPlainToDbMapper = (keysToMap: string[]) => (obj: {
  [key: string]: any;
}): any => {
  if (!obj) {
    return obj;
  }

  obj = humps.decamelizeKeys(obj);

  const result = keysToMap.reduce(
    (acc, key) => {
      if (obj[key] !== undefined && obj[key] !== null) {
        if (key === "id") {
          acc["_id"] = new ObjectId(obj[key]);
        } else {
          acc[key] = new ObjectId(obj[key]);
        }
      }
      return acc;
    },
    { ...obj }
  );

  return result;
};

export const createDbToPlainMapper = (keysToMap: string[]) => (obj: {
  [key: string]: any;
}): any => {
  if (!obj) {
    return obj;
  }

  const result = keysToMap.reduce(
    (acc, key) => {
      if (obj[key] !== undefined && obj[key] !== null) {
        if (key === "_id") {
          acc["id"] = obj[key].toString();
        } else {
          acc[key] = obj[key].toString();
        }
      }
      return acc;
    },
    { ...obj }
  );

  return humps.camelizeKeys(result);
};
