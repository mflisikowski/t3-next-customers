export default function SignOutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-3xl font-extrabold tracking-tight  sm:text-[4rem]">
          Sign Out
        </h1>
        <p>Are you sure you want to sign out?</p>
      </div>

      <form action="/api/auth/signout" method="POST">
        <button type="submit">Sign out</button>
      </form>
    </main>
  );
}
