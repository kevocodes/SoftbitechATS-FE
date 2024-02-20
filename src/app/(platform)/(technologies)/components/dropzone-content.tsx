import { File } from "lucide-react";

interface DropzoneContentProps {
  description: string;
}

export const DropzoneContent = ({ description }: DropzoneContentProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-muted-foreground">
      <File size={48} />
      <p>{description}</p>
    </div>
  );
};
