import { ScheduleData, SchoolWeekScheduleData } from "mock";
import { SchoolDay } from "../schoolDay";
import { Dispatch, SetStateAction } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { swapItems } from "lib/utils";

type SchoolWeekProps = {
  _class: string;
  classWeekSchedule: SchoolWeekScheduleData;
  setCurrentSchedule: Dispatch<SetStateAction<ScheduleData>>;
  currentSchedule: ScheduleData;
}

export const SchoolWeek = ({ classWeekSchedule, _class, setCurrentSchedule, currentSchedule }: SchoolWeekProps) => {
  const onDragEnd = (event: DragEndEvent) => {
    const sourceData = event?.active?.data?.current;
    const destination = event?.over?.id;

    if (!destination || !sourceData) {
      return;
    }

    const sourceDayIndex = parseInt(sourceData.sourceId.split('/')[1]);
    const sourceIndex = parseInt(sourceData.sourceId.split('/')[0]);
    const sourceLesson = currentSchedule[_class][sourceDayIndex].lessons[sourceIndex];

    const destinationDayIndex = parseInt(destination.toString().split('/')[1]);
    const destinationIndex = parseInt(destination.toString().split('/')[0]);
    const destinationLesson = currentSchedule[_class][destinationDayIndex].lessons[destinationIndex];

    if (destinationIndex === sourceIndex && destinationDayIndex === sourceDayIndex) {
      return;
    }

    const checkIsTeacherBusy = (): boolean => {
      return Object.values(currentSchedule)
        .some((item) => item[destinationDayIndex]?.lessons[destinationIndex]?.teacher === sourceLesson?.teacher);
    };

    if (checkIsTeacherBusy()) {
      alert('Drop is not available, teacher is busy at this moment');
      return;
    }

    setCurrentSchedule((prevState) => {
      return ({
        ...prevState,
        [_class]: prevState[_class].map((day, dayIndex) => {

          if (dayIndex === sourceDayIndex && dayIndex === destinationDayIndex) {
            return ({
              ...day,
              lessons: swapItems(day.lessons, sourceIndex, destinationIndex),
            });
          }

          if (dayIndex === sourceDayIndex) {
            return ({
              ...day,
              lessons: day.lessons.map((lesson, lessonIndex) => {
                if (lessonIndex === sourceIndex) {
                  return destinationLesson || null;
                }

                return lesson;
              })
            });
          }

          if (dayIndex === destinationDayIndex) {
            return ({
              ...day,
              lessons: day.lessons.map((lesson, lessonIndex) => {
                if (lessonIndex === destinationIndex) {
                  return sourceLesson;
                }
                return lesson;
              })
            });
          }

          return day;
        })
      });
    });
  };


  return (
    <DndContext onDragEnd={onDragEnd}>
      {classWeekSchedule.map(({ lessons, id }, index) => (
        <SchoolDay
          key={id}
          index={index}
          lessons={lessons}
          backgroundColor={index % 2 ? 'blue' : 'green'}
        />
      ))}
    </DndContext>
  );
};
