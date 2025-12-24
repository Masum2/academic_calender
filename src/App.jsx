import React, { useMemo } from "react";

/* ------------------------------------------------------
   COLORS
-------------------------------------------------------*/
const CALENDAR_COLORS = {
  headerRed: "bg-[#A31F34]",
  headerBlue: "bg-[#0B3A5A]",
  eventPink: "bg-[#EC008C]",
  eventGreen: "bg-[#00A651]",
  eventRed: "bg-[#9D2235]",
  eventBlue: "bg-[#00708C]",
  sundayExam: "bg-[#FFD700]",
  holiday: "bg-[#9D2235]",
  provisionalExam: "bg-[#F40B2A]",
  deepPurple: "bg-[#800080]", // deep purple for Annual Picnic & Annual Sports
};

/* ------------------------------------------------------
   CALENDAR DATA
-------------------------------------------------------*/
const CALENDAR_DATA = [
  {
    month: "JANUARY 2026",
    headerColor: CALENDAR_COLORS.headerBlue,
    daysInMonth: 31,
    startDayIndex: 4,
    events: [{ day: 1, title: "Academic Class Start", color: CALENDAR_COLORS.eventGreen }],
  },
  {
    month: "FEBRUARY 2026",
    headerColor: CALENDAR_COLORS.headerRed,
    daysInMonth: 28,
    startDayIndex: 0,
    events: [
      { day: 6, title: "Annual Picnic", color: CALENDAR_COLORS.deepPurple },
      { day: 16, title: "Annual Sports", color: CALENDAR_COLORS.deepPurple },
    ],
  },
  {
    month: "MARCH 2026",
    headerColor: CALENDAR_COLORS.headerBlue,
    daysInMonth: 31,
    startDayIndex: 0,
    events: [],
  },
  {
    month: "APRIL 2026",
    headerColor: CALENDAR_COLORS.headerRed,
    daysInMonth: 30,
    startDayIndex: 3,
    events: [
      { day: 1, title: "Motivational Assesment", color: CALENDAR_COLORS.eventBlue },
      { day: 29, title: "1st Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 30, title: "1st Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
    ],
  },
  {
    month: "MAY 2026",
    headerColor: CALENDAR_COLORS.headerBlue,
    daysInMonth: 31,
    startDayIndex: 5,
    events: [
      { day: 3, title: "1st Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 4, title: "1st Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 5, title: "1st Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 6, title: "1st Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 7, title: "1st Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
    ],
  },
  {
    month: "JUNE 2026",
    headerColor: CALENDAR_COLORS.headerRed,
    daysInMonth: 30,
    startDayIndex: 1,
    events: [],
  },
  {
    month: "JULY 2026",
    headerColor: CALENDAR_COLORS.headerBlue,
    daysInMonth: 31,
    startDayIndex: 3,
    events: [],
  },
  {
    month: "AUGUST 2026",
    headerColor: CALENDAR_COLORS.headerRed,
    daysInMonth: 31,
    startDayIndex: 6,
    events: [
      { day: 1, title: "Motivational Assesment", color: CALENDAR_COLORS.eventBlue },
      { day: 19, title: "Motivational Assesment", color: CALENDAR_COLORS.eventBlue },
      { day: 30, title: "2nd Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 31, title: "2nd Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
    ],
  },
  {
    month: "SEPTEMBER 2026",
    headerColor: CALENDAR_COLORS.headerBlue,
    daysInMonth: 30,
    startDayIndex: 2,
    events: [
      { day: 1, title: "2nd Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 2, title: "2nd Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 3, title: "2nd Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 6, title: "2nd Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 7, title: "2nd Provisional Exam", color: CALENDAR_COLORS.provisionalExam },
    ],
  },
  {
    month: "OCTOBER 2026",
    headerColor: CALENDAR_COLORS.headerRed,
    daysInMonth: 31,
    startDayIndex: 4,
    events: [],
  },
  {
    month: "NOVEMBER 2026",
    headerColor: CALENDAR_COLORS.headerBlue,
    daysInMonth: 30,
    startDayIndex: 0,
    events: [
      { day: 18, title: "Motivational Assesment", color: CALENDAR_COLORS.eventBlue },
    ],
  },
  {
    month: "DECEMBER 2026",
    headerColor: CALENDAR_COLORS.headerRed,
    daysInMonth: 31,
    startDayIndex: 2,
    events: [
      { day: 1, title: "Annual Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 2, title: "Annual Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 3, title: "Annual Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 6, title: "Annual Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 7, title: "Annual Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 8, title: "Annual Exam", color: CALENDAR_COLORS.provisionalExam },
      { day: 9, title: "Annual Exam", color: CALENDAR_COLORS.provisionalExam },
    ],
  },
];

/* ------------------------------------------------------
   SPECIAL HOLIDAYS
-------------------------------------------------------*/
const SPECIAL_HOLIDAYS = {
  "FEBRUARY 2026": [{ day: 21, title: "International Mother Language Day" }],
  "MARCH 2026": [
    { day: 18, title: "Lailatul Qadr" },
    { day: 26, title: "Independence Day" },
  ],
  "APRIL 2026": [{ day: 14, title: "Bengali New Year" }],
  "MAY 2026": [
    { day: 1, title: "May Day" },
    { day: 4, title: "Buddha Purnima" },
    { day: 25, title: "Eid-ul-Fitr" },
  ],
  "JUNE 2026": [{ day: 26, title: "Ashura" }],
  "AUGUST 2026": [
    { day: 5, title: "July Mass Uprising Day" },
    { day: 25, title: "Eid-e-Milad-un-Nabi" },
  ],
  "SEPTEMBER 2026": [{ day: 4, title: "Janmashtami" }],
  "OCTOBER 2026": [{ day: 20, title: "Durga Puja" }],
  "DECEMBER 2026": [
    { day: 16, title: "Victory Day" },
    { day: 25, title: "Christmas Day" },
  ],
};

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

/* ------------------------------------------------------
   FANCY HEADER
-------------------------------------------------------*/
const FancyHeader = () => {
  return (
    <div className="w-full bg-[#0A6C2F] flex items-center px-6 py-4 border-b-4 border-yellow-400">
      
      {/* Left Logo */}
      <div className="bg-white h-24 w-24 flex items-center justify-center">
        <img
          src="m.jpeg"
          alt="Left Logo"
          className="h-20 object-contain"
        />
      </div>

      {/* MANARAT Text */}
      <div className="ml-6">
        <h1 className="text-white text-[90px] font-extrabold leading-none tracking-wide">
          MANARAT
        </h1>
      </div>

      {/* Divider */}
      <div className="mx-6 h-24 w-[4px] bg-yellow-400"></div>

      {/* Right Text */}
      <div className="flex flex-col justify-center">
        <p className="text-white text-2xl font-semibold leading-tight">
          PABNA MODEL SCHOOL & COLLEGE
        </p>
        <p className="text-yellow-300 text-2xl font-semibold leading-tight">
          PABNA RESIDENTIAL CADET MADRASHA
        </p>
      </div>

      {/* Right Logo */}
      <div className="ml-auto bg-white h-24 w-24 flex items-center justify-center">
        <img
          src="n.jpeg"
          alt="Right Logo"
          className="h-20 object-contain"
        />
      </div>

    </div>
  );
};
/* ------------------------------------------------------
   MANARATE SECTION WITH FOUNDER BOX
-------------------------------------------------------*/
const ManarateSection = () => (
  <div className="w-full flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg shadow-sm">
    <div className="w-full md:w-1/2">
      <img
        src="school.png"
        alt="School Building"
        className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/2 bg-white border-l-4 border-[#A31F34] p-4 rounded-lg shadow-md flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-[#A31F34] mb-2">প্রতিষ্ঠাতা</h3>
      <p className="text-gray-800 leading-relaxed">
        (অধ্যাপক ডক্টর মোহাম্মদ ইয়াকুব শরীফ) <br />
        বিএ(অনার্স) ও এম.এ ফার্স্ট ক্লাস ফার্স্ট, রাজশাহী বিশ্ববিদ্যালয়, <br />
        পিএইচ.ডি ঢাকা বিশ্ববিদ্যালয়।
      </p>
    </div>
  </div>
);

/* ------------------------------------------------------
   CALENDAR GRID
-------------------------------------------------------*/
const CalendarGrid = ({ calendar }) => {
  const eventMap = useMemo(() => {
    const map = {};
    for (let day = 1; day <= calendar.daysInMonth; day++) {
      const dow = (calendar.startDayIndex + day - 1) % 7;
      map[day] = [];
      if (dow === 0) map[day].push({ title: "Weekly Exam Day", color: CALENDAR_COLORS.sundayExam });
      if (dow === 5 || dow === 6) map[day].push({ title: "Weekly Holiday", color: CALENDAR_COLORS.holiday });
      calendar.events.filter(evt => evt.day === day).forEach(evt => map[day].push(evt));
    }
    (SPECIAL_HOLIDAYS[calendar.month] || []).forEach(h => {
      map[h.day] = map[h.day] || [];
      map[h.day].push({ title: h.title, color: CALENDAR_COLORS.holiday });
    });
    return map;
  }, [calendar]);

  const days = [];
  for (let i = 0; i < calendar.startDayIndex; i++) days.push(null);
  for (let i = 1; i <= calendar.daysInMonth; i++) days.push(i);

  const getDisplayColor = events => {
    if (!events) return null;
    const specificPriority = [
      CALENDAR_COLORS.deepPurple,
      CALENDAR_COLORS.provisionalExam,
      CALENDAR_COLORS.eventBlue,
      CALENDAR_COLORS.eventGreen,
      CALENDAR_COLORS.eventRed,
      CALENDAR_COLORS.eventPink,
      CALENDAR_COLORS.holiday,
      CALENDAR_COLORS.sundayExam
    ];
    for (let color of specificPriority) {
      if (events.find(e => e.color === color)) return color;
    }
    return events[0]?.color;
  };

  return (
    <div>
      <div className="grid grid-cols-7 text-xs font-semibold text-gray-500 mb-2">
        {WEEK_DAYS.map(w => <div key={w} className="text-center">{w}</div>)}
      </div>
      <div className="grid grid-cols-7">
        {days.map((day, i) => {
          const ev = day ? eventMap[day] : null;
          const color = getDisplayColor(ev);
          return (
            <div key={i} className="h-8 flex items-center justify-center">
              {day && (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${color ? `${color} text-white` : ""}`}>
                  {day}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------------------------------
   EVENT KEY
-------------------------------------------------------*/
const EventKey = ({ calendar }) => {
  const events = [...calendar.events];
  if (!events.some(e => e.title === "Weekly Holiday")) events.unshift({ title: "Weekly Holiday", color: CALENDAR_COLORS.holiday });
  if (!events.some(e => e.title === "Weekly Exam Day")) events.unshift({ title: "Weekly Exam Day", color: CALENDAR_COLORS.sundayExam });
  (SPECIAL_HOLIDAYS[calendar.month] || []).forEach(h => {
    events.push({ title: `${h.title} (${h.day})`, color: CALENDAR_COLORS.holiday });
  });
  const unique = events.filter((e, i, a) => i === a.findIndex(x => x.title === e.title));
  return (
    <div className="space-y-1 text-sm">
      {unique.map((e, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${e.color}`}></div>
          <span>{e.title}</span>
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------
   CALENDAR BLOCK
-------------------------------------------------------*/
const CalendarBlock = ({ calendar }) => (
  <div className="border-b p-4 flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2">
      <div className={`${calendar.headerColor} text-white px-4 py-2 font-bold`}>
        {calendar.month}
      </div>
      <CalendarGrid calendar={calendar} />
    </div>
    <div className="md:w-1/2 pt-6">
      <EventKey calendar={calendar} />
    </div>
  </div>
);

/* ------------------------------------------------------
   MAIN APP
-------------------------------------------------------*/
export default function App() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col gap-10">
      <FancyHeader />
      <ManarateSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {CALENDAR_DATA.map((c, i) => (
          <CalendarBlock key={i} calendar={c} />
        ))}
      </div>
    </div>
  );
}
