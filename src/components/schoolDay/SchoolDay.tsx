import styles from './SchoolDay.module.css';
import clsx from "clsx";
import { DailyLessonsData } from "mock";
import { LessonContent, LessonSlot } from "../lesson";
import { times } from "lib/utils";
import { Draggable, Droppable } from "../dndWrappers";

type SchoolDayProps = {
  index: number;
  lessons: DailyLessonsData;
  backgroundColor: 'green' | 'blue';
  className?: string;
};

const slotsSequence = () => times(7);

export const SchoolDay = ({ lessons, backgroundColor, index: dayIndex }: SchoolDayProps) => {
  return (
    <div className={clsx(styles.schoolDay, `day-${backgroundColor}`)}>
      {slotsSequence().map((_, index) => {
        const droppableId = `${index}/${dayIndex}`;

        if (lessons[index]) {
          return (
            <Droppable id={droppableId} key={droppableId}>
              {(isOver) => (
                <LessonSlot isOver={isOver}>
                  <Draggable
                    parentSlotId={droppableId}
                    id={lessons[index]!.id}
                  >
                    {(isDragging) => (
                      <LessonContent
                        index={index}
                        subjectName={lessons[index]!.subject.name}
                        classRoomNumber={lessons[index]!.classRoomNumber.toString()}
                        isDragging={isDragging}
                      />
                    )}
                  </Draggable>
                </LessonSlot>
              )}
            </Droppable>
          );
        }
        return (
          <Droppable id={droppableId} key={droppableId}>
            {(isOver) => (
              <LessonSlot isOver={isOver} />
            )}
          </Droppable>
        );
      })}
    </div>
  );
};
