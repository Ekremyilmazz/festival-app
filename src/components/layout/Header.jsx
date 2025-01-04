import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary-500">
            FestivalApp
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary-500">Ana Sayfa</Link>
            <Link to="/schedule" className="hover:text-primary-500">Program</Link>
            <Link to="/artists" className="hover:text-primary-500">Sanatçılar</Link>
            <Link to="/my-program" className="hover:text-primary-500">Programım</Link>
          </nav>

          {/* Mobil menü butonu */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobil menü */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md hover:bg-gray-50">Ana Sayfa</Link>
              <Link to="/schedule" className="block px-3 py-2 rounded-md hover:bg-gray-50">Program</Link>
              <Link to="/artists" className="block px-3 py-2 rounded-md hover:bg-gray-50">Sanatçılar</Link>
              <Link to="/my-program" className="block px-3 py-2 rounded-md hover:bg-gray-50">Programım</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
