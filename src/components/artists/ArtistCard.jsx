export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gray-200">
          {/* Placeholder için gradient */}
        </div>
        <img
          src={artist.image || '/placeholder-artist.jpg'}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{artist.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{artist.genre}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {new Date(artist.performanceDay).toLocaleDateString('tr-TR', {
              weekday: 'short',
              day: 'numeric'
            })}
            {' '}• {artist.performanceTime}
          </div>
          <div className="text-sm font-medium text-primary-500">
            {artist.stage}
          </div>
        </div>
      </div>
    </div>
  );
}
