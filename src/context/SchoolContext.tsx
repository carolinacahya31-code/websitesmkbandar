import React, { createContext, useContext, useState, useEffect } from 'react';
import { Major, GalleryItem, SchoolStat, Facility, FaqItem, ContactFormData } from '../types';
import {
  SCHOOL_INFO as DEFAULT_SCHOOL_INFO,
  SCHOOL_STATS as DEFAULT_SCHOOL_STATS,
  VISI_MISI as DEFAULT_VISI_MISI,
  MAJORS as DEFAULT_MAJORS,
  FACILITIES as DEFAULT_FACILITIES,
  GALLERY_ITEMS as DEFAULT_GALLERY_ITEMS,
  FAQS as DEFAULT_FAQS
} from '../data/schoolData';

export interface SchoolInfoType {
  name: string;
  logoUrl: string;
  logoPageUrl: string;
  tagline: string;
  subTagline: string;
  accreditation: string;
  npsn: string;
  foundedYear: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  operatingHours: string;
  principal: {
    name: string;
    title: string;
    message: string;
    avatar: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
}

export interface VisiMisiType {
  visi: string;
  misi: string[];
  tujuan: string[];
}

export interface ContactMessageItem extends ContactFormData {
  id: string;
  date: string;
  read?: boolean;
}

interface SchoolContextType {
  // Data state
  schoolInfo: SchoolInfoType;
  schoolStats: SchoolStat[];
  visiMisi: VisiMisiType;
  majors: Major[];
  facilities: Facility[];
  galleryItems: GalleryItem[];
  faqs: FaqItem[];
  contactMessages: ContactMessageItem[];

  // Updates
  updateSchoolInfo: (data: Partial<SchoolInfoType>) => void;
  updatePrincipal: (data: Partial<SchoolInfoType['principal']>) => void;
  updateVisiMisi: (data: Partial<VisiMisiType>) => void;
  updateSchoolStats: (stats: SchoolStat[]) => void;
  
  // Majors CRUD
  updateMajors: (majors: Major[]) => void;
  addMajor: (major: Major) => void;
  editMajor: (id: string, major: Partial<Major>) => void;
  deleteMajor: (id: string) => void;

  // Facilities CRUD
  updateFacilities: (facilities: Facility[]) => void;
  addFacility: (facility: Facility) => void;
  editFacility: (id: string, facility: Partial<Facility>) => void;
  deleteFacility: (id: string) => void;

  // Gallery CRUD
  updateGalleryItems: (items: GalleryItem[]) => void;
  addGalleryItem: (item: GalleryItem) => void;
  editGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;

  // FAQ CRUD
  updateFaqs: (faqs: FaqItem[]) => void;
  addFaq: (faq: FaqItem) => void;
  editFaq: (index: number, faq: Partial<FaqItem>) => void;
  deleteFaq: (index: number) => void;

  // Contact Submissions
  addContactMessage: (msg: ContactFormData) => void;
  deleteContactMessage: (id: string) => void;
  clearAllContactMessages: () => void;

  // Global Actions
  resetToDefault: () => void;
  exportDataToJson: () => string;
  importDataFromJson: (jsonString: string) => boolean;

  // Auth & View state
  isAdminLoggedIn: boolean;
  loginAdmin: (username: string, pass: string) => boolean;
  logoutAdmin: () => void;
  currentView: 'website' | 'admin';
  setCurrentView: (view: 'website' | 'admin') => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

const STORAGE_KEYS = {
  INFO: 'smkn1_school_info_v2',
  STATS: 'smkn1_school_stats_v2',
  VISI: 'smkn1_visi_misi_v2',
  MAJORS: 'smkn1_majors_v2',
  FACILITIES: 'smkn1_facilities_v2',
  GALLERY: 'smkn1_gallery_v2',
  FAQS: 'smkn1_faqs_v2',
  MESSAGES: 'smkn1_contact_messages_v2',
  AUTH: 'smkn1_admin_auth_v2',
};

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize States with LocalStorage fallback
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfoType>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INFO);
      return saved ? JSON.parse(saved) : DEFAULT_SCHOOL_INFO;
    } catch {
      return DEFAULT_SCHOOL_INFO;
    }
  });

  const [schoolStats, setSchoolStats] = useState<SchoolStat[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STATS);
      return saved ? JSON.parse(saved) : DEFAULT_SCHOOL_STATS;
    } catch {
      return DEFAULT_SCHOOL_STATS;
    }
  });

  const [visiMisi, setVisiMisi] = useState<VisiMisiType>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.VISI);
      return saved ? JSON.parse(saved) : DEFAULT_VISI_MISI;
    } catch {
      return DEFAULT_VISI_MISI;
    }
  });

  const [majors, setMajors] = useState<Major[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MAJORS);
      return saved ? JSON.parse(saved) : DEFAULT_MAJORS;
    } catch {
      return DEFAULT_MAJORS;
    }
  });

  const [facilities, setFacilities] = useState<Facility[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FACILITIES);
      return saved ? JSON.parse(saved) : DEFAULT_FACILITIES;
    } catch {
      return DEFAULT_FACILITIES;
    }
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return saved ? JSON.parse(saved) : DEFAULT_GALLERY_ITEMS;
    } catch {
      return DEFAULT_GALLERY_ITEMS;
    }
  });

  const [faqs, setFaqs] = useState<FaqItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAQS);
      return saved ? JSON.parse(saved) : DEFAULT_FAQS;
    } catch {
      return DEFAULT_FAQS;
    }
  });

  const [contactMessages, setContactMessages] = useState<ContactMessageItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : [
        {
          id: 'msg-init-1',
          name: 'Budi Santoso (Orang Tua)',
          email: 'budi.santoso@gmail.com',
          phone: '081298765432',
          subject: 'Pertanyaan Pendaftaran PPDB Jurusan Otomasi',
          message: 'Selamat pagi, mohon informasi mengenai syarat pendaftaran dan apakah ada kuota beasiswa untuk jalur prestasi kejuruan TOI? Terima kasih.',
          date: '2026-08-15 10:30'
        }
      ];
    } catch {
      return [];
    }
  });

  // Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch {
      return false;
    }
  });

  const [currentView, setCurrentView] = useState<'website' | 'admin'>('website');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Sync to LocalStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INFO, JSON.stringify(schoolInfo));
  }, [schoolInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(schoolStats));
  }, [schoolStats]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.VISI, JSON.stringify(visiMisi));
  }, [visiMisi]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MAJORS, JSON.stringify(majors));
  }, [majors]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(facilities));
  }, [facilities]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(contactMessages));
  }, [contactMessages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTH, isAdminLoggedIn ? 'true' : 'false');
  }, [isAdminLoggedIn]);

  // Handler Functions
  const updateSchoolInfo = (data: Partial<SchoolInfoType>) => {
    setSchoolInfo(prev => ({ ...prev, ...data }));
  };

  const updatePrincipal = (data: Partial<SchoolInfoType['principal']>) => {
    setSchoolInfo(prev => ({
      ...prev,
      principal: { ...prev.principal, ...data }
    }));
  };

  const updateVisiMisi = (data: Partial<VisiMisiType>) => {
    setVisiMisi(prev => ({ ...prev, ...data }));
  };

  const updateSchoolStats = (stats: SchoolStat[]) => {
    setSchoolStats(stats);
  };

  // Majors
  const updateMajors = (newMajors: Major[]) => {
    setMajors(newMajors);
  };

  const addMajor = (major: Major) => {
    setMajors(prev => [...prev, major]);
  };

  const editMajor = (id: string, updated: Partial<Major>) => {
    setMajors(prev => prev.map(m => m.id === id ? { ...m, ...updated } : m));
  };

  const deleteMajor = (id: string) => {
    setMajors(prev => prev.filter(m => m.id !== id));
  };

  // Facilities
  const updateFacilities = (newFacilities: Facility[]) => {
    setFacilities(newFacilities);
  };

  const addFacility = (facility: Facility) => {
    setFacilities(prev => [...prev, facility]);
  };

  const editFacility = (id: string, updated: Partial<Facility>) => {
    setFacilities(prev => prev.map(f => f.id === id ? { ...f, ...updated } : f));
  };

  const deleteFacility = (id: string) => {
    setFacilities(prev => prev.filter(f => f.id !== id));
  };

  // Gallery
  const updateGalleryItems = (items: GalleryItem[]) => {
    setGalleryItems(items);
  };

  const addGalleryItem = (item: GalleryItem) => {
    setGalleryItems(prev => [item, ...prev]);
  };

  const editGalleryItem = (id: string, updated: Partial<GalleryItem>) => {
    setGalleryItems(prev => prev.map(g => g.id === id ? { ...g, ...updated } : g));
  };

  const deleteGalleryItem = (id: string) => {
    setGalleryItems(prev => prev.filter(g => g.id !== id));
  };

  // FAQs
  const updateFaqs = (newFaqs: FaqItem[]) => {
    setFaqs(newFaqs);
  };

  const addFaq = (faq: FaqItem) => {
    setFaqs(prev => [...prev, faq]);
  };

  const editFaq = (index: number, updated: Partial<FaqItem>) => {
    setFaqs(prev => prev.map((f, i) => i === index ? { ...f, ...updated } : f));
  };

  const deleteFaq = (index: number) => {
    setFaqs(prev => prev.filter((_, i) => i !== index));
  };

  // Contact Messages
  const addContactMessage = (msg: ContactFormData) => {
    const newMsg: ContactMessageItem = {
      ...msg,
      id: `msg-${Date.now()}`,
      date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      read: false
    };
    setContactMessages(prev => [newMsg, ...prev]);
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
  };

  const clearAllContactMessages = () => {
    setContactMessages([]);
  };

  // Global Actions
  const resetToDefault = () => {
    setSchoolInfo(DEFAULT_SCHOOL_INFO);
    setSchoolStats(DEFAULT_SCHOOL_STATS);
    setVisiMisi(DEFAULT_VISI_MISI);
    setMajors(DEFAULT_MAJORS);
    setFacilities(DEFAULT_FACILITIES);
    setGalleryItems(DEFAULT_GALLERY_ITEMS);
    setFaqs(DEFAULT_FAQS);
    localStorage.removeItem(STORAGE_KEYS.INFO);
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.VISI);
    localStorage.removeItem(STORAGE_KEYS.MAJORS);
    localStorage.removeItem(STORAGE_KEYS.FACILITIES);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.FAQS);
  };

  const exportDataToJson = () => {
    const data = {
      schoolInfo,
      schoolStats,
      visiMisi,
      majors,
      facilities,
      galleryItems,
      faqs,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  };

  const importDataFromJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.schoolInfo) setSchoolInfo(parsed.schoolInfo);
      if (parsed.schoolStats) setSchoolStats(parsed.schoolStats);
      if (parsed.visiMisi) setVisiMisi(parsed.visiMisi);
      if (parsed.majors) setMajors(parsed.majors);
      if (parsed.facilities) setFacilities(parsed.facilities);
      if (parsed.galleryItems) setGalleryItems(parsed.galleryItems);
      if (parsed.faqs) setFaqs(parsed.faqs);
      return true;
    } catch {
      return false;
    }
  };

  // Auth
  const loginAdmin = (username: string, pass: string): boolean => {
    if (username.trim() === 'admin' && pass === 'admin123') {
      setIsAdminLoggedIn(true);
      setCurrentView('admin');
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    setCurrentView('website');
  };

  return (
    <SchoolContext.Provider
      value={{
        schoolInfo,
        schoolStats,
        visiMisi,
        majors,
        facilities,
        galleryItems,
        faqs,
        contactMessages,
        updateSchoolInfo,
        updatePrincipal,
        updateVisiMisi,
        updateSchoolStats,
        updateMajors,
        addMajor,
        editMajor,
        deleteMajor,
        updateFacilities,
        addFacility,
        editFacility,
        deleteFacility,
        updateGalleryItems,
        addGalleryItem,
        editGalleryItem,
        deleteGalleryItem,
        updateFaqs,
        addFaq,
        editFaq,
        deleteFaq,
        addContactMessage,
        deleteContactMessage,
        clearAllContactMessages,
        resetToDefault,
        exportDataToJson,
        importDataFromJson,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        currentView,
        setCurrentView,
        isLoginModalOpen,
        setIsLoginModalOpen
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchoolContent = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchoolContent must be used within a SchoolProvider');
  }
  return context;
};
