import { Providers } from "@/app/providers";
import AreaPlaceholder from "@/components/area-placeholder";
import Header from "@/components/header/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <div className="flex min-h-screen flex-col">
      <Providers>
        <Header />

        <div className="flex min-h-screen w-full items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
          <aside className="sticky top-8 w-44 shrink-0">
            <AreaPlaceholder />
          </aside>
          <main className="min-h-screen flex-1">
            <>{children}</>
          </main>
          <aside className="sticky top-8 w-44 shrink-0">
            <AreaPlaceholder />
          </aside>
        </div>
      </Providers>
    </div>
  );
}
