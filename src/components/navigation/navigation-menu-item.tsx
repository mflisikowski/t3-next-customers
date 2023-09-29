import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuItem as NavigationMenuItemWrapper } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export default function NavigationMenuItem({
  href = "/",
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    children && (
      <NavigationMenuItemWrapper>
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItemWrapper>
    )
  );
}
