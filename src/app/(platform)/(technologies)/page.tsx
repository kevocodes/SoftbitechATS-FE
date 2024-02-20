import prisma from "@/lib/prisma"
import { PageContainer } from "../components/page-container";
import { AddTechnology } from "./components/add-technology";

async function Home() {
  const technologies = await prisma.technology.findMany();

  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Tecnologías</h2>

        <AddTechnology />
      </div>

      {
        technologies?.map((technology) => (
          <div key={technology.id}>
            <h3>{technology.image}</h3>
          </div>
        ))
      }
    </PageContainer>
  );
}

export default Home;
