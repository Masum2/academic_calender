import React from 'react';

const AcademicCalendar = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white font-sans">
      {/* July 2025 Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">JULY 2025</h2>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {/* Weekday Headers */}
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} className="text-center font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {/* Week 1 */}
          {[1, 2, 3, 4, 5, '', ''].map((day, index) => (
            <div key={`july-w1-${index}`} className={`text-center py-3 ${day ? 'text-gray-800' : 'text-transparent'}`}>
              {day}
            </div>
          ))}
          
          {/* Week 2 */}
          {[6, 7, 8, 9, 10, 11, 12].map(day => (
            <div key={`july-w2-${day}`} className="text-center py-3 text-gray-800">
              {day}
            </div>
          ))}
          
          {/* Week 3 */}
          {[13, 14, 15, 16, 17, 18, 19].map(day => (
            <div key={`july-w3-${day}`} className="text-center py-3 text-gray-800">
              {day}
            </div>
          ))}
          
          {/* Week 4 */}
          {[20, 21, 22, 23, 24, 25, 26].map(day => (
            <div key={`july-w4-${day}`} className="text-center py-3 text-gray-800">
              {day}
            </div>
          ))}
          
          {/* Week 5 */}
          {[27, '', '', '', '', '', ''].map((day, index) => (
            <div key={`july-w5-${index}`} className={`text-center py-3 ${day ? 'text-gray-800' : 'text-transparent'}`}>
              {day}
            </div>
          ))}
        </div>
        
        {/* Events */}
        <div className="space-y-2 text-sm">
          <div className="flex items-start">
            <span className="font-semibold w-8">28</span>
            <span>First day for instructional assistants</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold w-8">28 – 31</span>
            <span>New faculty orientation week</span>
          </div>
        </div>
      </div>

      {/* January 2026 Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">JANUARY 2026</h2>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {/* Weekday Headers */}
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} className="text-center font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {/* Week 1 - Note the duplicate 4 in your original */}
          {['', '', '', '', 1, 2, 3].map((day, index) => (
            <div key={`jan-w1-${index}`} className={`text-center py-3 ${day ? 'text-gray-800' : 'text-transparent'}`}>
              {day}
            </div>
          ))}
          
          {/* Week 2 - Fixed the duplicate 4 issue */}
          {[4, 5, 6, 7, 8, 9, 10].map(day => (
            <div key={`jan-w2-${day}`} className="text-center py-3 text-gray-800">
              {day}
            </div>
          ))}
          
          {/* Week 3 */}
          {[11, 12, 13, 14, 15, 16, 17].map(day => (
            <div key={`jan-w3-${day}`} className="text-center py-3 text-gray-800">
              {day}
            </div>
          ))}
          
          {/* Week 4 */}
          {[18, 19, 20, 21, 22, 23, 24].map(day => (
            <div key={`jan-w4-${day}`} className="text-center py-3 text-gray-800">
              {day}
            </div>
          ))}
          
          {/* Week 5 */}
          {[25, 26, 27, 28, 29, 30, 31].map(day => (
            <div key={`jan-w5-${day}`} className="text-center py-3 text-gray-800">
              {day}
            </div>
          ))}
        </div>
        
        {/* Events */}
        <div className="space-y-2 text-sm">
          <div className="flex items-start">
            <span className="font-semibold w-32">New Year's Day</span>
            <span>1</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold w-32">Winter break</span>
            <span>1 – 10</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold w-32">Faculty inservice day</span>
            <span>26</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;