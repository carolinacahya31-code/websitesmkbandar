export interface Major {
  id: string;
  code: string;
  name: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  keyCompetencies: string[];
  careerProspects: string[];
  labFacilities: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gedung & Fasilitas' | 'KBM & Praktik' | 'Ekstrakurikuler' | 'Prestasi & Event';
  image: string;
  description: string;
  date?: string;
}

export interface SchoolStat {
  label: string;
  value: string | number;
  iconName?: string;
  suffix?: string;
  description: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
