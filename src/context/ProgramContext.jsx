import { createContext, useContext, useState, useEffect } from 'react';

const ProgramContext = createContext();

export function ProgramProvider({ children }) {
  // Başlangıç programı
  const initialProgram = [
    {
      id: 1,
      artist: "Duman",
      stageName: "Ana Sahne",
      stageId: 1,
      startTime: "20:00",
      endTime: "22:00",
      day: "2024-07-01",
      tags: ["Rock", "Türkçe Rock"]
    },
    {
      id: 4,
      artist: "Mahmut Orhan",
      stageName: "Elektronik Sahne",
      stageId: 2,
      startTime: "21:00",
      endTime: "23:00",
      day: "2024-07-01",
      tags: ["Electronic", "House"]
    },
    {
      id: 10,
      artist: "Mabel Matiz",
      stageName: "Ana Sahne",
      stageId: 1,
      startTime: "21:00",
      endTime: "23:00",
      day: "2024-07-02",
      tags: ["Pop", "Alternative"]
    },
    {
      id: 16,
      artist: "Teoman",
      stageName: "Ana Sahne",
      stageId: 1,
      startTime: "21:00",
      endTime: "23:00",
      day: "2024-07-03",
      tags: ["Rock", "Türkçe Rock"]
    },
    {
      id: 22,
      artist: "Melike Şahin",
      stageName: "Akustik Sahne",
      stageId: 3,
      startTime: "21:00",
      endTime: "22:30",
      day: "2024-07-03",
      tags: ["Pop", "Folk"]
    }
  ];

  const [myProgram, setMyProgram] = useState(() => {
    const savedProgram = localStorage.getItem('myProgram');
    return savedProgram ? JSON.parse(savedProgram) : initialProgram;
  });

  // Program değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('myProgram', JSON.stringify(myProgram));
  }, [myProgram]);

  const addToProgram = (event) => {
    // Çakışma kontrolü
    const hasConflict = myProgram.some(
      existingEvent => 
        existingEvent.day === event.day &&
        existingEvent.startTime === event.startTime
    );

    if (hasConflict) {
      throw new Error('Bu saatte başka bir etkinlik var!');
    }

    setMyProgram(prev => [...prev, event]);
  };

  const removeFromProgram = (eventId) => {
    setMyProgram(prev => prev.filter(event => event.id !== eventId));
  };

  const isInProgram = (eventId) => {
    return myProgram.some(event => event.id === eventId);
  };

  return (
    <ProgramContext.Provider 
      value={{ 
        myProgram, 
        addToProgram, 
        removeFromProgram, 
        isInProgram 
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
}

// Custom hook
export function useProgram() {
  return useContext(ProgramContext);
}
