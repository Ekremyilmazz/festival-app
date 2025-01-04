import { useProgram } from '../../context/ProgramContext';

export default function EventCard({ event }) {
  const { addToProgram, removeFromProgram, isInProgram } = useProgram();

  const handleProgramToggle = () => {
    try {
      if (isInProgram(event.id)) {
        removeFromProgram(event.id);
      } else {
        addToProgram(event);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{event.artist}</h3>
          <p className="text-gray-600 text-sm">{event.stageName}</p>
          <div className="text-primary-500 text-sm mt-1">
            {event.startTime} - {event.endTime}
          </div>
        </div>
        
        <button
          onClick={handleProgramToggle}
          className={`p-2 rounded-full ${
            isInProgram(event.id)
              ? 'text-primary-500 hover:text-primary-600'
              : 'text-gray-400 hover:text-gray-500'
          }`}
        >
          <svg 
            className="w-6 h-6" 
            fill={isInProgram(event.id) ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>
      
      {/* Etiketler */}
      <div className="mt-3 flex gap-2">
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
  );
}
