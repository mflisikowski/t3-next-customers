"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeModeToggle() {
  const { themes, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Sun className=" h-4 w-4 rotate-0 scale-100 transition-all" />
          <Moon className="absolute  h-4 w-4 rotate-90 scale-0 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <>
          {themes.map((theme) => (
            <DropdownMenuItem onClick={() => setTheme(theme)} key={theme}>
              <span className="capitalize">{theme}</span>
            </DropdownMenuItem>
          ))}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
