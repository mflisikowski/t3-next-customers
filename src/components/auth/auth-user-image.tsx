import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/server/auth";
import { User } from "lucide-react";
import { getServerSession } from "next-auth";

export default async function AuthUserImage() {
  const session = await getServerSession(authOptions);

  return (
    <Avatar>
      {session ? (
        <AvatarImage src={session.user.image!} />
      ) : (
        <AvatarFallback>
          <User className="h-6 w-6 stroke-1" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
