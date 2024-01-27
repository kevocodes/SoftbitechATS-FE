import { logout } from "@/actions/logout.action";
import { auth } from "@/auth";

async function Home() {
  const session = await auth();

  return (
    <div>
      <h1>{JSON.stringify(session?.user)}</h1>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}

export default Home;
