import { useState } from 'react';
import { useProgram } from '../context/ProgramContext';
import { FESTIVAL_DAYS } from '../utils/constants';

export default function MyProgram() {
  const { myProgram, removeFromProgram } = useProgram();
  const [selectedDay, setSelectedDay] = useState(FESTIVAL_DAYS[0]);

  const filteredEvents = myProgram.filter(event => event.day === selectedDay);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gün Seçici */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex space-x-2 overflow-x-auto">
            {FESTIVAL_DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
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
        </div>
      </div>

      {/* Program İçeriği */}
      <div className="container-custom py-8">
        {filteredEvents.length > 0 ? (
          <div className="grid gap-4">
            {/* Saate göre gruplandırılmış etkinlikler */}
            {filteredEvents
              .sort((a, b) => a.startTime.localeCompare(b.startTime))
              .map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{event.artist}</h3>
                        <span className="text-sm px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full">
                          {event.stageName}
                        </span>
                      </div>
                      
                      <div className="mt-2 flex items-center gap-4">
                        <div className="text-primary-500">
                          {event.startTime} - {event.endTime}
                        </div>
                        <div className="flex gap-1">
                          {event.tags?.map((tag) => (
                            <span 
                              key={tag}
                              className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Programdan Çıkar Butonu */}
                    <button
                      onClick={() => removeFromProgram(event.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      title="Programdan Çıkar"
                    >
                      <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4">
              <svg 
                className="w-16 h-16 mx-auto text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" 
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              Bu gün için programınızda etkinlik bulunmuyor.
            </p>
            <p className="text-gray-400 mt-2">
              Program sayfasından etkinlik ekleyebilirsiniz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
