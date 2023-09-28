import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <span>Next Customers</span>
    </Link>
  );
}
