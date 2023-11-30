import { SchoolWeek } from '../schoolWeek';
import styles from './SchoolSchedule.module.css';
import clsx from "clsx";
import { schedule, ScheduleData } from 'mock';
import { useState } from "react";


export const SchoolSchedule = () => {
  const [currentSchedule, setCurrentSchedule] = useState<ScheduleData>(schedule);
  const classes = Object.keys(schedule);
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  return (
    <div className={styles.container}>
      <div className={clsx(styles.scheduleWrapper, 'styled-scrollbar')}>
        <div className={styles.plug} />
        <div className={styles.classIdsWrapper}>
          {classes.map((classId) => <div key={classId}>{classId}</div>)}
        </div>
        <div className={styles.daysWrapper}>
          {days.map((day, index) => (
            <div
              className={clsx(styles.dayMarker, index % 2 ? 'day-blue' : 'day-green')}
              key={day}
            >
              {day.slice(0, 3).toUpperCase()}
            </div>
          ))}
        </div>
        <div className={styles.schoolDayWrapper}>
          {Object.entries(currentSchedule).map(([_class, classWeekSchedule]) => (
            <SchoolWeek
              _class={_class}
              classWeekSchedule={classWeekSchedule}
              setCurrentSchedule={setCurrentSchedule}
              currentSchedule={currentSchedule}
              key={_class}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
