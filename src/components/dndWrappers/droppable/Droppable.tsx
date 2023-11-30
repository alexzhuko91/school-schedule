import { useDroppable } from "@dnd-kit/core";
import { DnDWrapper } from "../types";
import { ReactNode } from "react";

type DroppableProps = {
  children: (isOver: boolean) => ReactNode;
} & DnDWrapper;


export const Droppable = ({ children, id }: DroppableProps) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div ref={setNodeRef}>
      {children(isOver)}
    </div>
  );
};

