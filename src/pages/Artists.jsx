import { useState } from 'react';
import { ARTISTS_DATA, GENRES } from '../utils/constants';

export default function Artists() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArtists = ARTISTS_DATA.filter(artist => {
    const matchesGenre = selectedGenre === 'all' || artist.genre === selectedGenre;
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Arama ve Filtre Bölümü */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-6">
          {/* Arama */}
          <div className="relative max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Sanatçı ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <svg 
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Tür Filtreleri */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedGenre('all')}
              className={`px-4 py-1.5 rounded-full text-sm ${
                selectedGenre === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Tümü
            </button>
            {GENRES.map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-1.5 rounded-full text-sm ${
                  selectedGenre === genre
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sanatçı Kartları */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map(artist => (
            <div 
              key={artist.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              {/* Sanatçı Resmi ve Arka Plan */}
              <div className="relative h-48">
                {/* Arka Plan */}
                <div className="absolute inset-0">
                  <img
                    src={artist.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Profil Resmi */}
                <div className="absolute bottom-4 left-4 flex items-end">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3 text-white">
                    <h3 className="font-semibold text-lg">{artist.name}</h3>
                    <p className="text-sm opacity-90">{artist.genre}</p>
                  </div>
                </div>
              </div>
              
              {/* Sanatçı Bilgileri */}
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3">{artist.description}</p>
                
                {/* Performans Bilgisi */}
                <div className="flex items-center justify-between text-sm">
                  <div className="text-primary-500">
                    {new Date(artist.performance.day).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long'
                    })}
                    {' '} • {artist.performance.time}
                  </div>
                  <div className="text-gray-600">
                    {artist.performance.stage}
                  </div>
                </div>

                {/* Popüler Şarkılar */}
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-gray-500 mb-1">Popüler Şarkılar:</p>
                  <div className="flex flex-wrap gap-1">
                    {artist.popularSongs.map((song, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                      >
                        {song}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sosyal Medya Linkleri */}
                <div className="mt-3 flex gap-2">
                  {artist.socialMedia.spotify && (
                    <a 
                      href={artist.socialMedia.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-green-500"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>
                  )}
                  {artist.socialMedia.instagram && (
                    <a 
                      href={artist.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-500"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aradığınız kriterlere uygun sanatçı bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}