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
  provisionalExam: "bg-[#F40B2A]", // New color for provisional exam
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
      { day: 6, title: "Annual Picnic", color: CALENDAR_COLORS.eventPink },
      { day: 16, title: "Annual Sports", color: CALENDAR_COLORS.eventRed },
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
      { day: 1, title: "Monthly Exam Start", color: CALENDAR_COLORS.eventBlue },
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
      { day: 1, title: "Monthly Exam Start", color: CALENDAR_COLORS.eventBlue },
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
    events: [{ day: 1, title: "Monthly Exam", color: CALENDAR_COLORS.eventBlue }],
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

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

/* ------------------------------------------------------
   FANCY HEADER
-------------------------------------------------------*/
const FancyHeader = () => (
  <div className="w-full bg-[#0A6C2F] flex items-center justify-between py-4 px-6 border-b-4">
    {/* Left Logo */}
    <div className="flex-shrink-0 bg-white h-24 w-24 flex items-center justify-center border">
      <img src="m.jpeg" alt="Left Logo" className="h-20 object-contain" />
    </div>

    {/* Left Text: MANARAT */}
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-5xl font-extrabold text-white tracking-wide leading-none">
        MANARAT
      </div>
    </div>

    {/* Divider Line */}
    <div className="h-20 border-l-4 border-yellow-300 mx-4"></div>

    {/* Right Text: Two stacked names */}
    <div className="flex flex-col items-end text-right px-4">
      <div className="text-xl font-semibold text-white leading-tight">
        PABNA MODEL SCHOOL & COLLEGE
      </div>
      <div className="text-xl font-semibold text-yellow-300 leading-tight">
        PABNA RESIDENTIAL CADET MADRASHA
      </div>
    </div>

    {/* Right Logo */}
    <div className="flex-shrink-0 bg-white h-24 w-24 flex items-center justify-center ">
      <img src="n.jpeg" alt="Right Logo" className="h-20 object-contain" />
    </div>
  </div>
);


/* ------------------------------------------------------
   MANARATE SECTION WITH FOUNDER BOX
-------------------------------------------------------*/
const ManarateSection = () => (
  <div className="w-full flex flex-col md:flex-row gap-6  p-6 bg-gray-50 rounded-lg shadow-sm">
    {/* Left Side: Manarate Features */}
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-xl font-bold text-[#0B3A5A]">ManaraTe এর কিছু বৈশিষ্ট্য</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>উচ্চমানের শিক্ষা ও নৈতিক প্রশিক্ষণ।</li>
        <li>প্রতিষ্ঠিত শিক্ষকমণ্ডলী।</li>
        <li>উন্নত পাঠ্যক্রম ও আধুনিক সুবিধা।</li>
        <li>শৃঙ্খলাবদ্ধ ছাত্র-ছাত্রী পরিবেশ।</li>
        <li>বার্ষিক খেলাধুলা ও সাংস্কৃতিক কার্যক্রম।</li>
      </ul>
    </div>

    {/* Right Side: Founder Info Box */}
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
      if (dow === 0) map[day] = [{ title: "Weekly Exam Day", color: CALENDAR_COLORS.sundayExam }];
      if (dow === 5 || dow === 6)
        map[day] = [...(map[day] || []), { title: "Weekly Holiday", color: CALENDAR_COLORS.holiday }];
    }
    calendar.events.forEach((evt) => {
      if (!map[evt.day]) map[evt.day] = [];
      map[evt.day].push(evt);
    });
    return map;
  }, [calendar]);

  const days = [];
  for (let i = 0; i < calendar.startDayIndex; i++) days.push(null);
  for (let i = 1; i <= calendar.daysInMonth; i++) days.push(i);

  // Function to get the display color for a day (prioritizing provisional exam)
  const getDisplayColor = (events) => {
    if (!events || events.length === 0) return null;
    
    // Check if any event is a provisional exam
    const provisionalEvent = events.find(ev => ev.color === CALENDAR_COLORS.provisionalExam);
    if (provisionalEvent) {
      return provisionalEvent.color;
    }
    
    // Otherwise return the first event's color
    return events[0].color;
  };

  return (
    <div>
      <div className="grid grid-cols-7 text-xs font-semibold text-gray-500 mb-2">
        {WEEK_DAYS.map((w) => (
          <div key={w} className="text-center">{w}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-sm">
        {days.map((day, i) => {
          const ev = day ? eventMap[day] : null;
          const displayColor = getDisplayColor(ev);
          
          return (
            <div key={i} className="h-8 flex items-center justify-center">
              {day && (
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    displayColor ? `${displayColor} text-white` : "text-black"
                  } text-xs`}
                >
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
   EVENT LEGEND
-------------------------------------------------------*/
const EventKey = ({ calendar }) => {
  const events = [...calendar.events];
  
  // Add default events only if they don't already exist
  if (!events.some(ev => ev.title === "Weekly Holiday")) {
    events.unshift({ title: "Weekly Holiday", color: CALENDAR_COLORS.holiday });
  }
  if (!events.some(ev => ev.title === "Weekly Exam Day")) {
    events.unshift({ title: "Weekly Exam Day", color: CALENDAR_COLORS.sundayExam });
  }
  
  // Remove duplicates by title
  const uniqueEvents = events.filter((event, index, self) => 
    index === self.findIndex(e => e.title === event.title)
  );

  return (
    <div className="mt-3 text-sm space-y-1">
      {uniqueEvents.map((ev, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${ev.color}`}></div>
          <span className="text-gray-700">{ev.title}</span>
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------
   CALENDAR BLOCK
-------------------------------------------------------*/
const CalendarBlock = ({ calendar }) => (
  <div className="w-full border-b p-4 flex flex-col md:flex-row gap-6">
    <div className="w-full md:w-1/2">
      <div className={`${calendar.headerColor} text-white px-4 py-2 font-bold text-sm tracking-wider`}>
        {calendar.month}
      </div>
      <CalendarGrid calendar={calendar} />
    </div>
    <div className="w-full md:w-1/2 pt-4 md:pt-8">
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