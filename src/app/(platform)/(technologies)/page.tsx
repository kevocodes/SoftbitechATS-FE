import prisma from "@/lib/prisma";
import { PageContainer } from "../components/page-container";
import { AddTechnologyDialog } from "./components/add-technology-dialog";
import { TechnologiesDnd } from "./components/technologies-dnd";

async function Home() {
  const technologies = await prisma.technology.findMany({
    orderBy: [{ order: "asc" }],
  });

  return (
    <PageContainer>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl font-bold">Tecnologías</h2>

        <AddTechnologyDialog />
      </div>

      <div className="max-w-5xl w-full grid grid-cols-3 @3xl:grid-cols-4 place-items-center gap-1 relative">
        <TechnologiesDnd data={technologies} />
      </div>
    </PageContainer>
  );
}

export default Home;
