"use client";

import NavigationListItem from "@/components/navigation/navigation-list-item";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenu as NavigationMenuWrapper,
} from "@/components/ui/navigation-menu";

type NavigationMenuItemProps = {
  title: string;
  href: string;
  description: string;
};

const dashboard: NavigationMenuItemProps[] = [
  {
    title: "Customers",
    href: "/dashboard/customers",
    description: "Manage your customers",
  },
  {
    title: "Invoices",
    href: "/dashboard/invoices",
    description: "Manage your invoices",
  },
];

const account: NavigationMenuItemProps[] = [
  {
    title: "Profile",
    href: "/account/profile",
    description: "Manage your profile",
  },
  {
    title: "Settings",
    href: "/account/settings",
    description: "Manage your settings",
  },
];

export default function NavigationMenu() {
  return (
    <NavigationMenuWrapper>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {dashboard.map((component) => (
                <NavigationListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </NavigationListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {account.map((component) => (
                <NavigationListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </NavigationListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuWrapper>
  );
}
