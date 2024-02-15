"use client";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AddTechnologyForm } from "./add-technology-form";
import { useTechnologyModal } from "@/stores/technology-modal";

export const AddTechnology = () => {
  const isOpen = useTechnologyModal((state) => state.isOpen);
  const toggle = useTechnologyModal((state) => state.toggle);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogTrigger asChild>
        <Button className="text-base flex justify-center items-center gap-2">
          Añadir
          <Plus size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Añadir tecnología</DialogTitle>
        </DialogHeader>
        <AddTechnologyForm />
      </DialogContent>
    </Dialog>
  );
};
