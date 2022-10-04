import { ProfilePics } from "@prisma/client";

export type TProfilePic = Omit<ProfilePics, "id" | "createdAt">;
