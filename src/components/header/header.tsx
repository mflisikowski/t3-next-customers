import AuthButton from "@/components/auth/auth-button";
import AuthUserImage from "@/components/auth/auth-user-image";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Logo className="-m-1.5 p-1.5" />
          </div>
          <div className="lg:flex lg:gap-x-12">
            <AuthButton className="block px-4 py-2 text-center text-sm text-gray-700" />
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <div className="relative flex h-12 w-12 overflow-hidden rounded-full transition-shadow">
              <AuthUserImage className="absolute top-0 block h-12 w-12 object-cover" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
