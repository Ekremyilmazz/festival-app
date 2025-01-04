import { Link } from 'react-router-dom';
import IMAGES from '../assets/images';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom py-20">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Festival 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              3 gün boyunca sürecek unutulmaz müzik deneyimi için hazır mısın?
            </p>
            <Link 
              to="/schedule" 
              className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Program'ı Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Sahneler */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Sahneler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stages.map((stage) => (
              <div 
                key={stage.id} 
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Resim */}
                <div className="h-48 relative">
                  <img 
                    src={stage.image} 
                    alt={stage.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Karartma Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                </div>
                
                {/* İçerik */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{stage.name}</h3>
                  <p className="text-gray-600">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival İstatistikleri */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const stages = [
  {
    id: 1,
    name: "Ana Sahne",
    description: "En büyük yıldızlar, en unutulmaz performanslar",
    image: IMAGES.stages.main
  },
  {
    id: 2,
    name: "Elektronik Sahne",
    description: "Dans ve elektronik müziğin kalbi burada atıyor",
    image: IMAGES.stages.electronic
  },
  {
    id: 3,
    name: "Akustik Sahne",
    description: "Samimi ve sıcak akustik performanslar",
    image: IMAGES.stages.acoustic
  }
];

const stats = [
  { id: 1, value: "3", label: "Gün" },
  { id: 2, value: "50+", label: "Sanatçı" },
  { id: 3, value: "3", label: "Sahne" },
  { id: 4, value: "10K+", label: "Katılımcı" }
];
