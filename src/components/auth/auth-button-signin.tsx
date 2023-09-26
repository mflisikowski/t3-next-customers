export default function AuthButtonSignIn({
  className,
}: {
  className?: string;
}) {
  return (
    <a className={className} href={`/api/auth/signin`}>
      Sign in
    </a>
  );
}
