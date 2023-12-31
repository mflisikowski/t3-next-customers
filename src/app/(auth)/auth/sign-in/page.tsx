export const runtime = "experimental-edge";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-3xl font-extrabold tracking-tight  sm:text-[4rem]">
          Sign In
        </h1>
      </div>

      <form action={`/api/auth/signin/github`} method="post">
        <button type="submit">Sign In with Github</button>
      </form>
    </main>
  );
}
