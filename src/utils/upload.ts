import multer from "multer";
import multerS3 from "multer-s3";
import { S3, Endpoint } from "aws-sdk";

export const upload = async (): Promise<multer.Instance> => {
  const spacesEndpoint = new Endpoint(process.env.BUCKET_URL);
  const s3 = new S3({
    endpoint: spacesEndpoint.toString(),
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY
  });

  return multer({
    storage: multerS3({
      s3,
      bucket: process.env.BUCKET_NAME,
      acl: "public-read",
      key: function(req: any, file: any, cb: any) {
        cb(null, file.originalname);
      }
    })
  });
};
