import { ScheduleData, SubjectData, TeacherData } from "./types";
import { nanoid } from "nanoid";

export const classRoomsData: number[] = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
  301, 302, 303, 304, 305, 306, 307, 308, 309, 310,
  401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
];

export const teachersData: TeacherData[] = [
  {
    id: 'vasya',
    name: 'Vasya',
    subjects: ['urk-mova', 'ukr-lit'],
  },
  {
    id: 'serega',
    name: 'Serega',
    subjects: ['matematika', 'geometria', 'trigonometria', 'algebra', 'mat-analiz'],
  },
  {
    id: 'ivan',
    name: 'Ivan',
    subjects: ['trudy', 'fizra'],
  },
  {
    id: 'maria-ivanovna',
    name: 'Maria Ivanovna',
    subjects: ['istoria-ukrainy', 'istoria-vsesvitu'],
  },
  {
    id: 'kirill',
    name: 'Kirill',
    subjects: ['matematika', 'mat-analiz', 'algebra'],
  },
  {
    id: 'anton',
    name: 'Anton',
    subjects: ['geometria', 'trigonometria'],
  },
  {
    id: 'evkakiy',
    name: 'Evkakiy',
    subjects: ['dpu', 'trudy'],
  },
  {
    id: 'viktor',
    name: 'Viktor',
    subjects: ['biologia', 'geografia'],
  },
  {
    id: 'elena-petrovna',
    name: 'Elena Petrovna',
    subjects: ['malyuvannya', 'muzyka'],
  },
  {
    id: 'gennadiy',
    name: 'Gennadiy',
    subjects: ['informatika', 'algebra']
  },
  {
    id: 'alex',
    name: 'Alex',
    subjects: ['angl'],
  },
  {
    id: 'maria-stepatovna',
    name: 'Maria Stepanovna',
    subjects: ['nem']
  },
  {
    id: 'stepana-marievna',
    name: 'Stepana Marievna',
    subjects: ['obj']
  },
  {
    id: 'grisha',
    name: 'Grigoriy',
    subjects: ['zarlit', 'urk-lit'],
  },
  {
    id: 'larisa',
    name: 'Larisa',
    subjects: ['himiya', 'fizika']
  },
  {
    id: 'fedor',
    name: 'Fedor',
    subjects: ['ukr-istoriya', 'istoriya-svitu']
  }
];

export const subjectsData: SubjectData[] = [
  {
    id: 'urk-mova',
    name: 'Ukrainian language'
  },
  {
    id: 'ukr-lit',
    name: 'Ukrainian literature'
  },
  {
    id: 'matematika',
    name: 'Math',
  },
  {
    id: 'geometria',
    name: 'Geometry'
  },
  {
    id: 'trigonometria',
    name: 'Trigonometry'
  },
  {
    id: 'fizra',
    name: 'Physical culture'
  },
  {
    id: 'trudy',
    name: 'Labor education'
  },
  {
    id: 'biologia',
    name: 'Biology',
  },
  {
    id: 'geografia',
    name: 'Geography'
  },
  {
    id: 'malyuvannya',
    name: 'Drawing',
  },
  {
    id: 'muzyka',
    name: 'Music art'
  },
  {
    id: 'informatika',
    name: 'Computer Science'
  },
  {
    id: 'obj',
    name: 'Life Safety Fundamentals'
  },
  {
    id: 'angl',
    name: 'English Language',
  },
  {
    id: 'nem',
    name: 'German Language',
  },
  {
    id: 'zarlit',
    name: 'Foreign Literature'
  },
  {
    id: 'himiya',
    name: 'Chemistry'
  },
  {
    id: 'fizika',
    name: 'Physics'
  },
  {
    id: 'ukr-istoriya',
    name: 'Ukrainian History',
  },
  {
    id: 'istoriya-svitu',
    name: 'World History'
  },
  {
    id: 'algebra',
    name: 'Algebra',
  }
];

export const schedule: ScheduleData = {
  '5A': [
    {
      id: nanoid(),
      lessons: [
        {
          id: nanoid(),
          teacher: 'ivan',
          subject: {
            id: 'fizra',
            name: 'Physical culture'
          },
          classRoomNumber: 101,
          isValid: true,
        },
        {
          id: nanoid(),
          teacher: 'ivan',
          subject: {
            id: 'fizra',
            name: 'Physical culture'
          },
          classRoomNumber: 101,
          isValid: true,
        },
        {
          id: nanoid(),
          teacher: 'serega',
          subject: {
            id: 'matematika',
            name: 'Math'
          },
          classRoomNumber: 102,
          isValid: true,
        },
        {
          id: nanoid(),
          teacher: 'serega',
          subject: {
            id: 'matematika',
            name: 'Math'
          },
          classRoomNumber: 102,
          isValid: true,
        },
        {
          id: nanoid(),
          teacher: 'vasya',
          subject: {
            id: 'ukr-mova',
            name: 'Ukrainian language'
          },
          classRoomNumber: 103,
          isValid: true,
        },
        null,
        null
      ]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null],
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null],
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null],
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null],
    }
  ],
  '5B': [
    {
      id: nanoid(),
      lessons: [{
        id: nanoid(),
        teacher: 'larisa',
        subject: {
          id: 'himiya',
          name: 'Chemistry',
        },
        classRoomNumber: 202,
        isValid: true,
      }, {
        id: nanoid(),
        teacher: 'fedor',
        subject: {
          id: 'ukr-istoriya',
          name: 'Ukrainian History',
        },
        classRoomNumber: 201,
        isValid: true,
      },
        {
          id: nanoid(),
          teacher: 'grisha',
          subject: {
            id: 'zarlit',
            name: 'Foreign Literature',
          },
          classRoomNumber: 203,
          isValid: true,
        },
        {
          id: nanoid(),
          teacher: 'grisha',
          subject: {
            id: 'zarlit',
            name: 'Foreign Literature',
          },
          classRoomNumber: 203,
          isValid: true,
        }, {
          id: nanoid(),
          teacher: 'maria-stepatovna',
          subject: {
            id: 'nem',
            name: 'German Language',
          },
          classRoomNumber: 205,
          isValid: true
        },
        null,
        {
          id: nanoid(),
          teacher: 'vasya',
          subject: {
            id: 'ukr-mova',
            name: 'Ukrainian language'
          },
          classRoomNumber: 103,
          isValid: true,
        },
      ],
    },
    {
      id: nanoid(),
      lessons: [{
        id: nanoid(),
        teacher: 'vasya',
        subject: {
          id: 'ukr-mova',
          name: 'Ukrainian language'
        },
        classRoomNumber: 103,
        isValid: true,
      }, null, null, null, null, null, null],
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null],
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null],
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '5C': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '6A': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '6B': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '6C': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '7A': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '7B': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '7C': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '8A': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '8B': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '8C': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '9A': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '9B': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '9C': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '10A': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '10B': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
  '10C': [
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
    {
      id: nanoid(),
      lessons: [null, null, null, null, null, null, null]
    },
  ],
};