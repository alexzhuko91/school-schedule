export type TeacherData = {
  id: string;
  name: string;
  subjects: string[];
};

export type SubjectData = {
  id: string;
  name: string;
}

export type LessonData = {
  id: string;
  subject: SubjectData;
  teacher: string;
  classRoomNumber: number;
  isValid: boolean;
} | null;

export type DailyLessonsData = LessonData[];

export type SchoolDayScheduleData = {
  id: string;
  lessons: DailyLessonsData;
};

export type SchoolWeekScheduleData = SchoolDayScheduleData[];


export type ScheduleData = {
  [_class: string]: SchoolWeekScheduleData;
}