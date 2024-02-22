import { Technology } from "@prisma/client";
import Image from "next/image";

interface TechnologiesDndItemOverlayProps {
  technology: Technology;
}

export const TechnologiesDndItemOverlay = ({
  technology,
}: TechnologiesDndItemOverlayProps) => {
  return (
    <div
      className="max-w-60 max-h-60 w-full h-full aspect-square absolute"
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
