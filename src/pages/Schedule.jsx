import { useState, useEffect } from 'react';
import FilterBar from '../components/schedule/FilterBar';
import EventCard from '../components/schedule/EventCard';
import { FESTIVAL_DAYS, TIME_SLOTS, PROGRAM_EVENTS } from '../utils/constants';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(FESTIVAL_DAYS[0]);
  const [selectedStage, setSelectedStage] = useState('all');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let filteredEvents = PROGRAM_EVENTS.filter(
      event => event.day === selectedDay
    );

    if (selectedStage !== 'all') {
      filteredEvents = filteredEvents.filter(
        event => event.stageId === parseInt(selectedStage)
      );
    }

    // Saate göre sırala
    filteredEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

    setEvents(filteredEvents);
  }, [selectedDay, selectedStage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <FilterBar 
        onDayChange={setSelectedDay}
        onStageFilter={setSelectedStage}
      />

      <div className="container-custom py-8">
        <div className="grid gap-4">
          {TIME_SLOTS.map(timeSlot => {
            const timeEvents = events.filter(
              event => event.startTime === timeSlot
            );

            if (timeEvents.length === 0) return null;

            return (
              <div key={timeSlot} className="relative">
                <div className="sticky top-20 bg-gray-50 py-2 z-10">
                  <time className="text-lg font-semibold text-gray-700">
                    {timeSlot}
                  </time>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                  {timeEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
