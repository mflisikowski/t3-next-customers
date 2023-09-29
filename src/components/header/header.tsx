import AuthButton from "@/components/auth/auth-button";
import AuthUserImage from "@/components/auth/auth-user-image";
import Logo from "@/components/logo";
import ThemeModeToggle from "@/components/theme-mode-toggle";
import NavigationMenu from "../navigation/navigation-menu";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Logo className="-m-1.5 p-1.5" />
          </div>
          <div className="lg:flex lg:gap-x-1">
            <NavigationMenu />
            <AuthButton />
          </div>

          <div className="lg:flex lg:flex-1 lg:justify-end lg:gap-x-1">
            <AuthUserImage />
            <ThemeModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
