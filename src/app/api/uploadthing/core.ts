import { getUserByEmail, updateUser } from "@/models/user";
import { authOptions } from "@/server/auth";
import { type User } from "@/types/user";
import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

/*
 * File Router for your app, can contain multiple FileRoutes
 * Image Uploader define as many FileRoutes as you like, each with a unique routeSlug
 * Middleware set permissions and file types for this FileRsoute
 */

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const session = await getServerSession(authOptions);

      if (!session || !session.user) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return {
        user_email: session.user.email,
        user_name: session.user?.name,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (metadata.user_email) {
        const user = await getUserByEmail(metadata.user_email);

        if (user) {
          const userData: User = { ...user, image: file.url };
          await updateUser(userData);
        }
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
