import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/utils/tailwind-merge";
import { forwardRef } from "react";

const NavigationListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          ref={ref}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:underline group-hover:underline-offset-2">
            <>{title}</>
          </div>
          <p className="line-clamp-2 text-sm leading-snug">
            <>{children}</>
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

NavigationListItem.displayName = "NavigationListItem";

export default NavigationListItem;
