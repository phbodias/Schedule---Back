import multer from "multer";
import path from "path";
import crypto from "crypto";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3Config = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_SECRET_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY as string,
  },
});

const storageTypes = {
  local: multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
      cb(null, path.resolve(__dirname, "..", "..", "images", "uploads"));
    },
    filename: (req: any, file: any, cb: any) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, file.key);
      });
    },
  }),

  s3: multerS3({
    s3: s3Config,
    bucket: "schedulebucketuploads",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req: any, file: any, cb: any) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
};

const STORAGE_TYPE =
  process.env.STORAGE_TYPE === "s3"
    ? storageTypes["s3"]
    : storageTypes["local"];

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "images", "uploads"),
  storage: STORAGE_TYPE,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req: Request, file: any, cb: any) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};

export default module.exports;
