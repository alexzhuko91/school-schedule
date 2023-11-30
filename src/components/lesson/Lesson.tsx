import styles from './Lesson.module.css';
import { ReactNode } from "react";
import clsx from "clsx";

export type LessonSlotProps = {
  isOver: boolean;
  children?: ReactNode;
};

export type LessonContentProps = {
  index: number;
  subjectName: string;
  classRoomNumber: string;
  isDragging: boolean;
};

export const LessonSlot = ({ children, isOver }: LessonSlotProps) => {
  return (
    <div className={clsx(styles.lessonSlot, (isOver && !children) && styles.dragOver)}>
      {children}
    </div>
  );
};

export const LessonContent = ({ index, subjectName, classRoomNumber, isDragging }: LessonContentProps) => {
  return (
    <div className={clsx(styles.lessonContent, isDragging && styles.transparent)}>
      <div className={styles.lessonName}>
        <span className={styles.lessonNumber}>{`${index + 1}.`}</span>
        <span>{subjectName}</span>
      </div>
      <div className={styles.classRoomNumber}>{classRoomNumber}</div>
    </div>
  );
};
