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
      <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-3">
        <div>
          <h2 className="text-xl font-bold">Tecnologías</h2>
          <h3 className="text-muted-foreground pt-1 text-balance">
            Para reordenar las tecnologías solo debes agarrar una y soltarla en
            su nueva posición.
          </h3>
        </div>
        <AddTechnologyDialog />
      </div>

      <div className="max-w-5xl w-full grid grid-cols-3 @3xl:grid-cols-4 place-items-center gap-1 relative">
        <TechnologiesDnd data={technologies} />
      </div>
    </PageContainer>
  );
}

export default Home;
