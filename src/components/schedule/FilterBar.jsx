import { useState } from 'react';
import { FESTIVAL_DAYS, STAGES } from '../../utils/constants';

export default function FilterBar({ onDayChange, onStageFilter }) {
  const [selectedDay, setSelectedDay] = useState(FESTIVAL_DAYS[0]);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    onDayChange(day);
  };

  return (
    <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Gün Seçici */}
          <div className="flex space-x-2 overflow-x-auto">
            {FESTIVAL_DAYS.map((day) => (
              <button
                key={day}
                onClick={() => handleDayChange(day)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {new Date(day).toLocaleDateString('tr-TR', { 
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long'
                })}
              </button>
            ))}
          </div>

          {/* Sahne Filtreleri */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sahne:</span>
            <select 
              onChange={(e) => onStageFilter(e.target.value)}
              className="border rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Tümü</option>
              {STAGES.map(stage => (
                <option key={stage.id} value={stage.id}>
                  {stage.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
