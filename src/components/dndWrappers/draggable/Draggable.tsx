import { useDraggable } from "@dnd-kit/core";
import { DnDWrapper } from "../types";
import { ReactNode } from "react";
import styles from './Draggable.module.css';

type DraggableProps = {
  children: (isDragging: boolean) => ReactNode;
  parentSlotId: string;
} & DnDWrapper;

export const Draggable = ({ children, id, parentSlotId }: DraggableProps) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } = useDraggable({
    id,
    data: {
      sourceId: parentSlotId,
    }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={styles.draggable}
    >
      {children(isDragging)}
    </div>
  );
};

