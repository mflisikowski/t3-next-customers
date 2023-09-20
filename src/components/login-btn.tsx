import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoginBtn() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <>
        <div className="group block flex-shrink-0">
          <div className="flex items-center">
            {session && (
              <>
                <div>
                  <Image
                    className="inline-block h-16 w-16 rounded-full"
                    src={session ? session.user.image! : ""}
                    height={56}
                    width={56}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {session.user.name}
                  </p>
                  <p className="text-xs font-medium text-white">
                    {session.user.email}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="relative inline-block text-left">
            <div
              className="mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                {session ? (
                  <a
                    className="block px-4 py-2 text-center text-sm text-gray-700"
                    href={`/api/auth/signout`}
                    onClick={(e) => {
                      e.preventDefault();
                      void signOut();
                    }}
                  >
                    Sign out
                  </a>
                ) : (
                  <a
                    className="block px-4 py-2 text-center text-sm text-gray-700"
                    href={`/api/auth/signin`}
                    onClick={(e) => {
                      e.preventDefault();
                      void signIn();
                    }}
                  >
                    Sign in
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
