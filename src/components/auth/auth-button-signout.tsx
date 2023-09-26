export default function AuthButtonSignOut({
  className,
}: {
  className?: string;
}) {
  return (
    <a className={className} href={`/api/auth/signout`}>
      Sign out
    </a>
  );
}
