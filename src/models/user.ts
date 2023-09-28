import { prisma } from "@/server/prisma";
import { type User } from "@/types/user";

export const getUserByEmail = async (email: string): Promise<User | null> =>
  prisma.user.findUnique({
    where: {
      email: email,
    },
  });

export const updateUser = async (user: User): Promise<User> =>
  prisma.user.update({
    where: {
      id: user.id,
    },
    data: user,
  });
