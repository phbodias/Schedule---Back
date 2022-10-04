import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { ProfilePics } from "@prisma/client";

const client = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_SECRET_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY as string,
  },
});

export async function deleteUploadS3(image: ProfilePics) {
  try {
    const data = await client.send(
      new DeleteObjectCommand({
        Bucket: "schedulebucketuploads",
        Key: image.s3key,
      })
    );
    return data; 
  } catch (err) {
    console.log("Error", err);
  }
}
