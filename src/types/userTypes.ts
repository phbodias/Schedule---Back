import { Users } from "@prisma/client";

export type TUserBody = Omit<Users, "id" | "createdAt">;
export type TSigninBody = Omit<TUserBody, "name">;
