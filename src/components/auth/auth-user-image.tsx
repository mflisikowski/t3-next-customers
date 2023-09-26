import AuthUserGuest from "@/components/auth/auth-user-guest";
import { authOptions } from "@/server/auth";

import { getServerSession } from "next-auth";
import Image from "next/image";

type AuthUserImageProps = {
  className?: string;
  quality?: number;
  height?: number;
  width?: number;
};

export default async function AuthUserImage(props: AuthUserImageProps) {
  const { className = "", quality = 75, height = 120, width = 120 } = props;
  const session = await getServerSession(authOptions);

  return session ? (
    <Image
      src={session.user.image!}
      alt={session.user.image!}
      className={className}
      quality={quality}
      height={height}
      width={width}
    />
  ) : (
    <AuthUserGuest className={`${className} bg-gray-300 p-4`} />
  );
}
