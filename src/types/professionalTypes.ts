import { Professionals } from "@prisma/client";

export type TProfessionalData = Omit<Professionals, "id" | "createdAt">;
