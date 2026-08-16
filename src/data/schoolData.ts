import { Major, GalleryItem, SchoolStat, Facility, FaqItem } from '../types';

export const SCHOOL_INFO = {
  name: 'SMK Negeri 1 Bandar',
  logoUrl: 'https://i.ibb.co/ZR1M8C1D/LOGO-SMK-N-1-BANDAR.jpg',
  logoPageUrl: 'https://ibb.co.com/nq8LcS8J',
  tagline: 'Mewujudkan Generasi Kompeten, Berkarakter, dan Siap Menghadapi Dunia Kerja',
  subTagline: 'Sekolah Menengah Kejuruan Unggulan Berbasis Otomasi & Industri Kimia',
  accreditation: 'Akreditasi B',
  npsn: '70048237',
  foundedYear: '2024',
  address: 'Jalan Sudirman Kelurahan Perdagangan III, Kecamatan Bandar, Kabupaten Simalungun, Sumatera Utara 21184',
  phone: '(0622) 4481023',
  whatsapp: '+62 812-3456-7890',
  email: 'info@smkn1bandar.sch.id',
  operatingHours: 'Senin - Jumat: 07.00 - 15.30 WIB',
  principal: {
    name: 'Rudi Harto Gultom, S.Pd.',
    title: 'Kepala SMK Negeri 1 Bandar',
    message: 'Selamat datang di website resmi SMK Negeri 1 Bandar, Kabupaten Simalungun. Kami berkomitmen untuk menyelenggarakan pendidikan kejuruan berkualitas yang memadukan keahlian teknis unggul di bidang Teknik Otomasi Industri dan Teknik Kimia Industri, karakter disiplin, serta kesiapan kerja berstandar industri modern.',
    avatar: '/images/kepsek.jpg'
  },
  socials: {
    facebook: 'https://facebook.com/smkn1bandarofficial',
    instagram: 'https://instagram.com/smkn1bandar_official',
    youtube: 'https://youtube.com/@smkn1bandarchannel',
    tiktok: 'https://tiktok.com/@smkn1bandar'
  }
};

export const SCHOOL_STATS: SchoolStat[] = [
  {
    label: 'Jumlah Siswa Aktif',
    value: '403',
    iconName: 'Users',
    description: 'Siswa-siswi terbagi dalam rombel TOI & TKI'
  },
  {
    label: 'Tenaga Pendidik & Staf',
    value: '22',
    iconName: 'GraduationCap',
    description: 'Guru bersertifikasi & tersertifikasi industri'
  },
  {
    label: 'Program Keahlian',
    value: '2',
    iconName: 'Briefcase',
    description: 'Teknik Otomasi Industri & Teknik Kimia Industri'
  },
  {
    label: 'Industri Mitra (DU/DI)',
    value: '20',
    iconName: 'Building2',
    description: 'Perusahaan mitra magang & rekrutmen lulusan'
  },
  {
    label: 'Tahun Berdiri',
    value: '2024',
    iconName: 'Calendar',
    description: 'Berdiri sejak tahun 2024 untuk generasi unggul'
  },
  {
    label: 'Tingkat Penyerapan Kerja',
    value: '88%',
    iconName: 'Award',
    description: 'Lulusan bekerja, berwirausaha, & kuliah'
  }
];

export const VISI_MISI = {
  visi: 'TERWUJUDNYA LULUSAN YANG BERIMAN DAN BERTAQWA, YANG KREATIF, KOLABORATIF, PEDULI LINGKUNGAN, BERJIWA WIRAUSAHA SERTA MEMPUNYAI BUDAYA KERJA YANG SESUAI DENGAN TUNTUTAN IDUKA',
  misi: [
    'Mewujudkan murid yang beriman dan bertakwa kepada Tuhan Yang Maha Esa, mandiri, kreatif dan inovatif',
    'Menghasilkan murid yang cerdas, terampil, berkarakter kuat serta berjiwa wirausaha.',
    'Mewujudkan murid yang sadar dan peduli akan lingkungan sekitar',
    'Membentuk lulusan yang mampu berkolaborasi dan berkomunikasi dengan baik',
    'Menciptakan murid yang berbudaya kerja Standar IDUKA',
    'Menumbuh kembangkan literasi dan numerasi dalam penguasaan perkembangan teknologi dan informasi.',
    'Menyiapkan murid menjadi tenaga kerja yang handal serta mampu bersaing di tingkat regional maupun Global.',
    'Mengoptimalkan sertifikasi kompetensi melalui Uji kompetensi Keahlian berbasis produk dan jasa dari Dunia Kerja dan LSP P1 bagi murid.',
    'Mewujudkan pembelajaran berbasis kurikulum industri, mengacu pada pembelajaran abad 21',
    'Mengembangkan dan melaksanakan Kokurikuler dan ekstra kurikuler untuk meningkatkan minat, bakat dan prestasi siswa',
    'Pengembangan bahan ajar berbasis digital'
  ],
  tujuan: [
    'Mencetak lulusan ahli teknik otomasi dan kimia industri yang siap kerja dengan sertifikasi kompetensi nasional (BNSP).',
    'Menghasilkan wirausahawan muda berjiwa inovatif dan mandiri di bidang produk teknik dan kimia.',
    'Menyiapkan peserta didik yang sanggup melanjutkan studi ke perguruan tinggi di jurusan Teknik Industri, Otomasi, maupun Kimia.'
  ]
};

export const MAJORS: Major[] = [
  {
    id: 'toi',
    code: 'TOI',
    name: 'Teknik Otomasi Industri',
    iconName: 'Cpu',
    shortDesc: 'Mempelajari sistem kontrol industri, kelistrikan, sistem pneumatik & hidrolik, PLC (Programmable Logic Controller), dan robotika industri.',
    fullDesc: 'Program Keahlian Teknik Otomasi Industri (TOI) mendidik siswa menjadi ahli dalam mengoperasikan, memelihara, serta merancang sistem otomatisasi berbasis PLC, SCADA, sensor, pneumatik/hidrolik, dan kelistrikan di berbagai pabrik manufaktur modern.',
    keyCompetencies: [
      'Pemrograman PLC (Programmable Logic Controller) & SCADA',
      'Pneumatik & Hidrolik Kontrol Industri',
      'Instalasi Kelistrikan & Panel Kontrol Motor Listrik',
      'Mikrokontroler, Sensor, & Aktuator Industri',
      'Maintenance & Troubleshooting Sistem Otomasi Pabrik'
    ],
    careerProspects: [
      'Teknisi Otomasi & PLC Specialist',
      'Maintenance Engineer Pabrik / Manufaktur',
      'Instrument & Control Technician',
      'System Integrator Automation',
      'Wirausaha Jasa Kelistrikan & Sistem Kontrol'
    ],
    labFacilities: [
      'Lab PLC & Trainer Kit Otomasi Industri',
      'Lab Pneumatik & Hidrolik Kontrol',
      'Bengkel Instalasi Kelistrikan & Panel Kontrol'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tki',
    code: 'TKI',
    name: 'Teknik Kimia Industri',
    iconName: 'FlaskConical',
    shortDesc: 'Mempelajari pengolahan bahan kimia, proses industri kimia, analisis laboratorium, dan pengoperasian peralatan proses kimia modern.',
    fullDesc: 'Program Keahlian Teknik Kimia Industri (TKI) membekali siswa dengan pengetahuan dan keterampilan operasional pabrik kimia, analisis instrumen laboratorium, pengolahan limbah industri, serta keselamatan kerja (K3) industri proses.',
    keyCompetencies: [
      'Operasi Teknik Kimia & Peralatan Proses Kimia',
      'Analisis Kimia Kuantitatif & Kualitatif Laboratorium',
      'Pengolahan Limbah & B3 (Bahan Berbahaya & Beracun)',
      'Kontrol Kualitas Produk (Quality Control & QA)',
      'Penerapan K3LH & Manajemen Operasional Pabrik'
    ],
    careerProspects: [
      'Operator Operasi Proses Pabrik Kimia & Sawit',
      'Analis Laboratorium & Quality Control (QC) Staff',
      'Teknisi Pengolahan Limbah Industri (WTP/WWTP)',
      'Staf Process Engineering Junior',
      'Wirausaha Industri Produk Kimia Kreatif (Sabun, Kosmetik, dll)'
    ],
    labFacilities: [
      'Lab Kimia Analisis & Instrumen Canggih',
      'Lab Operasi Teknik Kimia (OTK)',
      'Unit Pilot Plant & Distilasi Process'
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-2',
    title: 'Laboratorium Otomasi & Kontrol Industri',
    description: 'Laboratorium canggih dengan PLC Trainer, SCADA Simulator, dan perlengkapan kontrol otomatisasi modern.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    iconName: 'Monitor'
  },
  {
    id: 'fac-3',
    title: 'Bengkel TOI & Lab Kimia Industri',
    description: 'Bengkel Praktik TOI seluas 800 m² dan Lab Kimia Industri lengkap berstandar K3LH resmi.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
    iconName: 'Wrench'
  },
  {
    id: 'fac-4',
    title: 'Perpustakaan Digital & Reading Corner',
    description: 'Koleksi ribuan buku fisik, e-book, jurnal kejuruan, dan area membaca yang tenang.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600',
    iconName: 'BookOpen'
  },
  {
    id: 'fac-5',
    title: 'Lapangan Olahraga Multifungsi',
    description: 'Sarana olahraga lengkap untuk bola basket, bola voli, futsal, dan bulutangkis.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600',
    iconName: 'Trophy'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Gedung Utama SMK Negeri 1 Bandar',
    category: 'Gedung & Fasilitas',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800',
    description: 'Tampak depan gedung utama SMKN 1 Bandar yang megah dan asri.',
    date: '2026-05-10'
  },
  {
    id: 'gal-2',
    title: 'Praktik Pemrograman PLC & Otomasi Industri (TOI)',
    category: 'KBM & Praktik',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    description: 'Siswa jurusan TOI sedang melakukan pemrograman kontrol PLC dan pengujian trainer otomasi.',
    date: '2026-04-18'
  },
  {
    id: 'gal-3',
    title: 'Praktik Laboratorium Analisis Kimia (TKI)',
    category: 'KBM & Praktik',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    description: 'Siswa Kimia Industri melakukan pengujian sampel kimia dan analisis kuantitatif.',
    date: '2026-03-22'
  },
  {
    id: 'gal-4',
    title: 'Praktik Sistem Pneumatik & Hidrolik TOI',
    category: 'KBM & Praktik',
    image: 'https://i.ibb.co/ynHnBLTv/Whats-App-Image-2026-08-07-at-13-41-23.jpg',
    description: 'Simulasi dan Perakitan Sistem Pneumatik Kontrol Industri.',
    date: '2026-02-14'
  },
  {
    id: 'gal-5',
    title: 'Upacara Bendera Hari Pendidikan',
    category: 'Prestasi & Event',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&q=80&w=800',
    description: 'Pelaksanaan upacara bendera diikuti oleh seluruh civitas akademika.',
    date: '2026-05-02'
  },
  {
    id: 'gal-6',
    title: 'Kegiatan Ekstrakurikuler Paskibra',
    category: 'Ekstrakurikuler',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
    description: 'Latihan rutin Paskibraka SMKN 1 Bandar persiapan lomba tingkat kabupaten.',
    date: '2026-03-11'
  },
  {
    id: 'gal-7',
    title: 'Juara 1 LKS Tingkat Provinsi Sumatera Utara',
    category: 'Prestasi & Event',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
    description: 'Tim SMKN 1 Bandar meraih Juara 1 LKS Bidang Industrial Automation & Applied Chemistry.',
    date: '2026-01-25'
  },
  {
    id: 'gal-8',
    title: 'Praktik Pengolahan Industri Proses (TKI)',
    category: 'KBM & Praktik',
    image: 'https://i.ibb.co/WvmrMPcS/Whats-App-Image-2026-07-31-at-15-04-04.jpg',
    description: 'Uji coba instrumen distilasi dan pembuatan produk formulasi kimia.',
    date: '2026-04-05'
  },
  {
    id: 'gal-9',
    title: 'Pramuka Penegak Bantara SMKN 1 Bandar',
    category: 'Ekstrakurikuler',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    description: 'Kegiatan perkemahan dan pelantikan Bantara di alam terbuka.',
    date: '2026-02-28'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Informasi Pendaftaran',
    question: 'Kapan Pendaftaran Peserta Didik Baru dibuka?',
    answer: 'Pendaftaran siswa baru SMK Negeri 1 Bandar dibuka secara online mulai bulan Mei hingga Juni setiap tahunnya. Informasi jadwal pasti dan syarat pendaftaran diumumkan di situs resmi dan akun media sosial sekolah.'
  },
  {
    category: 'Informasi Pendaftaran',
    question: 'Apa saja jurusan / program keahlian yang tersedia di SMKN 1 Bandar?',
    answer: 'SMK Negeri 1 Bandar memiliki 2 Program Keahlian unggulan berstandar industri: 1) Teknik Otomasi Industri (TOI) dan 2) Teknik Kimia Industri (TKI).'
  },
  {
    category: 'Pembelajaran & Magang',
    question: 'Apakah sekolah menyediakan program Prakerin / Magang Industri?',
    answer: 'Ya, seluruh siswa wajib mengikuti Praktik Kerja Lapangan (PKL/Prakerin) selama 6 bulan di kelas XI/XII pada perusahaan manufaktur, industri otomasi, dan pabrik olahan kimia mitra DUDI.'
  },
  {
    category: 'Fasilitas & Beasiswa',
    question: 'Apakah tersedia program beasiswa bagi siswa berprestasi atau kurang mampu?',
    answer: 'Tersedia berbagai program beasiswa seperti Program Indonesia Pintar (PIP), Beasiswa Prestasi Akademik, Beasiswa DUDI Mitra, serta keringanan biaya pendidikan bagi siswa kurang mampu.'
  },
  {
    category: 'Ekstrakurikuler',
    question: 'Apa saja kegiatan ekstrakurikuler yang ada di sekolah?',
    answer: 'Tersedia lebih dari 15 ekskul, antara lain: Pramuka (Wajib), Paskibra, PMR, Rohis, Basket, Voli, Futsal, Robotics & Automation Club, Science Club, Seni Tari, Pencak Silat, dan Band.'
  }
];

