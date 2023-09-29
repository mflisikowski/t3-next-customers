import ThemeModeToggle from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function InvoicesPage() {
  return (
    <>
      <section className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <h1 className="text-base font-semibold leading-7">Filter</h1>
        <div className="order-last flex w-full items-center gap-x-4 sm:order-none sm:w-auto">
          <Button variant="secondary">Last 7 days</Button>
          <Button variant="ghost">Last 30 days</Button>
          <Button variant="ghost">All-time</Button>
        </div>

        <div className="ml-auto flex items-center gap-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Plus className="h-5 w-5" aria-hidden="true" />
          </Button>

          <ThemeModeToggle />
        </div>
      </section>

      <main>Invoices</main>
    </>
  );
}
