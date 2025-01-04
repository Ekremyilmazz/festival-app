export const STAGES = [
  {
    id: 1,
    name: "Ana Sahne",
    description: "En büyük yıldızlar, en unutulmaz performanslar",
    capacity: 10000,
    image: "/stages/main-stage.jpg"
  },
  {
    id: 2,
    name: "Elektronik Sahne",
    description: "Dans ve elektronik müziğin kalbi burada atıyor",
    capacity: 5000,
    image: "/stages/electronic-stage.jpg"
  },
  {
    id: 3,
    name: "Akustik Sahne",
    description: "Samimi ve sıcak akustik performanslar",
    capacity: 2000,
    image: "/stages/acoustic-stage.jpg"
  }
];

export const FESTIVAL_DAYS = [
  "2024-07-01",
  "2024-07-02",
  "2024-07-03"
];

export const TIME_SLOTS = [
  "12:00", "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00", "21:00",
  "22:00", "23:00", "00:00"
];

export const ARTISTS = [
  {
    id: 1,
    name: "Duman",
    image: "/artists/duman.jpg",
    genre: "Rock",
    description: "Türk rock müziğinin efsane grubu",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/dumanofficial"
    },
    performanceDay: "2024-07-01",
    performanceTime: "20:00",
    stage: "Ana Sahne"
  },
  
];

export const GENRES = [
  "Rock",
  "Elektronik",
  "Pop",
  "Hip Hop",
  "Jazz",
  "Folk"
];

export const PROGRAM_EVENTS = [
  // 1 Temmuz - Ana Sahne
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
    id: 2,
    artist: "Mor ve Ötesi",
    stageName: "Ana Sahne",
    stageId: 1,
    startTime: "18:00",
    endTime: "19:30",
    day: "2024-07-01",
    tags: ["Rock", "Alternative"]
  },
  {
    id: 3,
    artist: "Manga",
    stageName: "Ana Sahne",
    stageId: 1,
    startTime: "16:00",
    endTime: "17:30",
    day: "2024-07-01",
    tags: ["Rock", "Alternative"]
  },

  // 1 Temmuz - Elektronik Sahne
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
    id: 5,
    artist: "Mabbas",
    stageName: "Elektronik Sahne",
    stageId: 2,
    startTime: "19:00",
    endTime: "20:30",
    day: "2024-07-01",
    tags: ["Electronic", "Techno"]
  },
  {
    id: 6,
    artist: "Ah! Kosmos",
    stageName: "Elektronik Sahne",
    stageId: 2,
    startTime: "17:00",
    endTime: "18:30",
    day: "2024-07-01",
    tags: ["Electronic", "Experimental"]
  },

  // 1 Temmuz - Akustik Sahne
  {
    id: 7,
    artist: "Yüzyüzeyken Konuşuruz",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "20:00",
    endTime: "21:30",
    day: "2024-07-01",
    tags: ["Indie", "Acoustic"]
  },
  {
    id: 8,
    artist: "Can Bonomo",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "18:00",
    endTime: "19:30",
    day: "2024-07-01",
    tags: ["Folk", "Acoustic"]
  },
  {
    id: 9,
    artist: "Kalben",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "16:00",
    endTime: "17:30",
    day: "2024-07-01",
    tags: ["Indie", "Acoustic"]
  },

  // 2 Temmuz - Ana Sahne
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
    id: 11,
    artist: "Adamlar",
    stageName: "Ana Sahne",
    stageId: 1,
    startTime: "19:00",
    endTime: "20:30",
    day: "2024-07-02",
    tags: ["Rock", "Indie"]
  },

  // 2 Temmuz - Elektronik Sahne
  {
    id: 12,
    artist: "Oceanvs Orientalis",
    stageName: "Elektronik Sahne",
    stageId: 2,
    startTime: "22:00",
    endTime: "00:00",
    day: "2024-07-02",
    tags: ["Electronic", "World"]
  },
  {
    id: 13,
    artist: "Uncode",
    stageName: "Elektronik Sahne",
    stageId: 2,
    startTime: "20:00",
    endTime: "21:30",
    day: "2024-07-02",
    tags: ["Electronic", "Techno"]
  },

  // 2 Temmuz - Akustik Sahne
  {
    id: 14,
    artist: "Nilipek",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "21:00",
    endTime: "22:30",
    day: "2024-07-02",
    tags: ["Indie", "Alternative"]
  },
  {
    id: 15,
    artist: "Emir Can İğrek",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "19:00",
    endTime: "20:30",
    day: "2024-07-02",
    tags: ["Pop", "Acoustic"]
  },

  // 3 Temmuz - Ana Sahne
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
    id: 17,
    artist: "Sena Şener",
    stageName: "Ana Sahne",
    stageId: 1,
    startTime: "19:00",
    endTime: "20:30",
    day: "2024-07-03",
    tags: ["Indie", "Alternative"]
  },
  {
    id: 18,
    artist: "Son Feci Bisiklet",
    stageName: "Ana Sahne",
    stageId: 1,
    startTime: "17:00",
    endTime: "18:30",
    day: "2024-07-03",
    tags: ["Indie Rock", "Alternative"]
  },

  // 3 Temmuz - Elektronik Sahne
  {
    id: 19,
    artist: "Büyük Ev Ablukada",
    stageName: "Elektronik Sahne",
    stageId: 2,
    startTime: "22:00",
    endTime: "00:00",
    day: "2024-07-03",
    tags: ["Electronic", "Alternative"]
  },
  {
    id: 20,
    artist: "Jakuzi",
    stageName: "Elektronik Sahne",
    stageId: 2,
    startTime: "20:00",
    endTime: "21:30",
    day: "2024-07-03",
    tags: ["Synth Pop", "Electronic"]
  },
  {
    id: 21,
    artist: "The Away Days",
    stageName: "Elektronik Sahne",
    stageId: 2,
    startTime: "18:00",
    endTime: "19:30",
    day: "2024-07-03",
    tags: ["Dream Pop", "Indie"]
  },

  // 3 Temmuz - Akustik Sahne
  {
    id: 22,
    artist: "Melike Şahin",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "21:00",
    endTime: "22:30",
    day: "2024-07-03",
    tags: ["Pop", "Folk"]
  },
  {
    id: 23,
    artist: "Güneş",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "19:00",
    endTime: "20:30",
    day: "2024-07-03",
    tags: ["Pop", "Acoustic"]
  },
  {
    id: 24,
    artist: "Evdeki Saat",
    stageName: "Akustik Sahne",
    stageId: 3,
    startTime: "17:00",
    endTime: "18:30",
    day: "2024-07-03",
    tags: ["Indie", "Alternative"]
  }
];

export const ARTISTS_DATA = [
  {
    id: 1,
    name: "Duman",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1500&q=80",
    genre: "Rock",
    description: "Türk rock müziğinin efsane grubu, 1999'dan beri aktif.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/dumanofficial"
    },
    performance: {
      day: "2024-07-01",
      time: "20:00",
      stage: "Ana Sahne"
    },
    popularSongs: ["Seni Kendime Sakladım", "Bu Akşam", "Helal Olsun"]
  },
  {
    id: 2,
    name: "Mor ve Ötesi",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80",
    genre: "Rock",
    description: "Türk rock müziğinin öncü gruplarından, 1995'ten beri müzik yapıyor.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/morveotesi"
    },
    performance: {
      day: "2024-07-01",
      time: "18:00",
      stage: "Ana Sahne"
    },
    popularSongs: ["Bir Derdim Var", "Cambaz", "Deli"]
  },
  {
    id: 3,
    name: "Manga",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=800&q=80",
    genre: "Rock",
    description: "Alternative rock grubu, Eurovision'da ülkemizi temsil etti.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/manga"
    },
    performance: {
      day: "2024-07-01",
      time: "16:00",
      stage: "Ana Sahne"
    },
    popularSongs: ["Dursun Zaman", "Bir Kadın Çizeceksin", "We Could Be The Same"]
  },
  {
    id: 4,
    name: "Mahmut Orhan",
    image: "https://images.unsplash.com/photo-1571310100246-e0676f359b6a?auto=format&fit=crop&w=800&q=80",
    genre: "Elektronik",
    description: "Uluslararası başarılara imza atmış elektronik müzik prodüktörü ve DJ.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/mahmutorhan"
    },
    performance: {
      day: "2024-07-01",
      time: "21:00",
      stage: "Elektronik Sahne"
    },
    popularSongs: ["Feel", "6 Days", "Game of Thrones"]
  },
  // ... diğer rock sanatçıları ...

  // POP
  {
    id: 15,
    name: "Mabel Matiz",
    image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&w=800&q=80",
    genre: "Pop",
    description: "Türk pop müziğinin yenilikçi ismi.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/mabelmatiz"
    },
    performance: {
      day: "2024-07-02",
      time: "21:00",
      stage: "Ana Sahne"
    },
    popularSongs: ["Öyle Kolaysa", "Sarmaşık", "Fena Halde"]
  },

  // HIP HOP
  {
    id: 20,
    name: "Ceza",
    image: "https://images.unsplash.com/photo-1581563438872-519796e0e737?auto=format&fit=crop&w=800&q=80",
    genre: "Hip Hop",
    description: "Türk hip hop sahnesinin duayen ismi.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/ceza"
    },
    performance: {
      day: "2024-07-02",
      time: "22:00",
      stage: "Ana Sahne"
    },
    popularSongs: ["Suspus", "Holocaust", "Yerli Plaka"]
  },

  // JAZZ
  {
    id: 25,
    name: "İlhan Erşahin",
    image: "https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?auto=format&fit=crop&w=800&q=80",
    genre: "Jazz",
    description: "Dünya çapında tanınan Türk caz sanatçısı.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/ilhanersahin"
    },
    performance: {
      day: "2024-07-03",
      time: "19:00",
      stage: "Akustik Sahne"
    },
    popularSongs: ["Istanbul Sessions", "Night Rider", "Afternoon in Rio"]
  },

  // FOLK
  {
    id: 30,
    name: "Kalben",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800&q=80",
    genre: "Folk",
    description: "Modern folk müziğin özgün sesi.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/kalbenben"
    },
    performance: {
      day: "2024-07-01",
      time: "16:00",
      stage: "Akustik Sahne"
    },
    popularSongs: ["Sadece", "Haydi Söyle", "Kuşlar"]
  },

  // Yeni Hip Hop Sanatçıları
  {
    id: 35,
    name: "Ezhel",
    image: "https://images.unsplash.com/photo-1581563438872-519796e0e737?auto=format&fit=crop&w=800&q=80",
    genre: "Hip Hop",
    description: "Trap müziğin öncü isimlerinden.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/ezhel"
    },
    performance: {
      day: "2024-07-02",
      time: "20:00",
      stage: "Ana Sahne"
    },
    popularSongs: ["Şehrimin Tadı", "LOLO", "AYA"]
  },

  // Yeni Jazz Sanatçıları
  {
    id: 40,
    name: "Kerem Görsev",
    image: "https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?auto=format&fit=crop&w=800&q=80",
    genre: "Jazz",
    description: "Türk caz piyanosunun usta ismi.",
    socialMedia: {
      spotify: "https://open.spotify.com/artist/...",
      instagram: "https://instagram.com/keremgorsev"
    },
    performance: {
      day: "2024-07-03",
      time: "21:00",
      stage: "Akustik Sahne"
    },
    popularSongs: ["To Istanbul", "Autumn in New York", "Night and Day"]
  }

  // ... Diğer sanatçılar benzer formatta eklenebilir
];
