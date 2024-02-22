import Image from "next/image";
import { Technology } from "@prisma/client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TechnologiesDndItemProps {
  technology: Technology;
}

export const TechnologiesDndItem = ({
  technology,
}: TechnologiesDndItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: technology.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : "auto",
    opacity: isDragging ? 0.2 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="max-w-60 max-h-60 w-full h-full aspect-square relative"
      key={technology.id}
    >
      <Image
        src={technology.image}
        alt={technology.id}
        fill
        className="object-contain"
        sizes="100%"
      />
    </div>
  );
};
