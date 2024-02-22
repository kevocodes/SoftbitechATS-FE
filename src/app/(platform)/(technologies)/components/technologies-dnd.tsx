"use client";
import { useContext, useEffect, useRef, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  rectSortingStrategy,
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { Technology } from "@prisma/client";
import { TechnologiesDndItem } from "./technologies-dnd-item";
import { TechnologiesDndItemOverlay } from "./technologies-dnd-item-overlay";
import { createPortal } from "react-dom";
import { useComponentMounted } from "@/hooks/useComponentMounted";

interface TechnologiesDndProps {
  data: Technology[];
}

export const TechnologiesDnd = ({ data }: TechnologiesDndProps) => {
  const isMounted = useComponentMounted();
  const [activeId, setActiveId] = useState<null | UniqueIdentifier>(null);
  const [technologies, setTechnologies] = useState(data);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    setActiveId(active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setTechnologies((technologies) => {
        const oldIndex = technologies.findIndex(
          (technology) => technology.id === active.id
        );
        const newIndex = technologies.findIndex(
          (technology) => technology.id === over?.id
        );

        return arrayMove(technologies, oldIndex, newIndex);
      });
    }
  };

  
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={technologies} strategy={rectSortingStrategy}>
        {technologies?.map((technology) => (
          <TechnologiesDndItem key={technology.id} technology={technology} />
        ))}
        {isMounted &&  createPortal(
          <DragOverlay>
            {activeId ? (
              <TechnologiesDndItemOverlay
                technology={technologies.find(
                  (technology) => technology.id === activeId
                )!}
              />
            ) : null}
          </DragOverlay>,
          document.body
        )}
      </SortableContext>
    </DndContext>
  );
};
