import { logout } from "@/actions/logout.action";
import { Button } from "@/components/ui/button";
import { PageContainer } from "./components/page-container";

async function Home() {
  return (
    <PageContainer>
      <form action={logout}>
        <Button type="submit">Logout</Button>
      </form>
    </PageContainer>
  );
}

export default Home;
