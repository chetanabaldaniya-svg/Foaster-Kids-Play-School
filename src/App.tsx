import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Palette, 
  Music, 
  Heart, 
  ShieldCheck, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  Star,
  Calendar,
  Clock,
  Play,
  Facebook,
  Instagram,
  Twitter,
  Upload,
  Share2,
  Link,
  CheckCircle,
  Trash2
} from 'lucide-react';

const programs = [
  {
    title: 'Toddler Program',
    age: '1.5 - 2.5 Years',
    description: 'A gentle introduction to learning through play, focusing on sensory exploration and social skills.',
    icon: <Heart className="w-8 h-8 text-brand-pink" />,
    color: 'bg-brand-pink/10',
    borderColor: 'border-brand-pink/20'
  },
  {
    title: 'Preschool',
    age: '2.5 - 4 Years',
    description: 'Fostering independence and curiosity with structured activities in arts, language, and early math.',
    icon: <Palette className="w-8 h-8 text-brand-blue" />,
    color: 'bg-brand-blue/10',
    borderColor: 'border-brand-blue/20'
  },
  {
    title: 'Kindergarten',
    age: '4 - 6 Years',
    description: 'Preparing for primary school with a comprehensive curriculum that balances academics and creative play.',
    icon: <BookOpen className="w-8 h-8 text-brand-green" />,
    color: 'bg-brand-green/10',
    borderColor: 'border-brand-green/20'
  }
];

const features = [
  {
    title: 'Safe Environment',
    description: '24/7 security and child-proofed facilities to ensure your little ones are always protected.',
    tooltip: 'CCTV monitored, secure entry, and child-safe materials used throughout the campus.',
    icon: <ShieldCheck className="w-6 h-6 text-brand-dark transition-colors duration-300 group-hover:text-brand-pink" />
  },
  {
    title: 'Expert Teachers',
    description: 'Certified and passionate educators dedicated to early childhood development.',
    tooltip: 'All teachers hold degrees in Early Childhood Education and undergo regular training.',
    icon: <Users className="w-6 h-6 text-brand-dark transition-colors duration-300 group-hover:text-brand-pink" />
  },
  {
    title: 'Creative Learning',
    description: 'A curriculum designed to spark imagination through art, music, and interactive play.',
    tooltip: 'Daily activities include painting, storytelling, music sessions, and hands-on science.',
    icon: <Music className="w-6 h-6 text-brand-dark transition-colors duration-300 group-hover:text-brand-pink" />
  }
];

const teachers = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Lead Preschool Teacher',
    bio: 'With over 10 years of experience, Sarah brings a passion for early literacy and creative arts to her classroom.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Music & Movement Specialist',
    bio: 'Michael uses rhythm and melody to help children develop motor skills and express their emotions joyfully.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Kindergarten Educator',
    bio: 'Emily focuses on STEM for early learners, encouraging curiosity and problem-solving through hands-on play.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Outdoor Play Coordinator',
    bio: 'David believes in the power of nature and physical activity to build resilience and teamwork among kids.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  }
];

const galleryCategories = ['All', 'Classrooms', 'Play Area', 'Events'];

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    category: 'Classrooms',
    alt: 'Colorful classroom environment'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop',
    category: 'Play Area',
    alt: 'Outdoor playground'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
    category: 'Events',
    alt: 'Children group activity'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    category: 'Classrooms',
    alt: 'Kids learning at desks'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=800&auto=format&fit=crop',
    category: 'Play Area',
    alt: 'Indoor play area with toys'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=800&auto=format&fit=crop',
    category: 'Events',
    alt: 'School performance event'
  }
];

const eventTypes = ['All', 'Academic', 'Extracurricular', 'Holiday'];
const eventMonths = ['All', 'April', 'May', 'June'];
const eventAgeGroups = ['All', 'Toddler', 'Preschool', 'Kindergarten'];

const upcomingEvents = [
  {
    id: 1,
    title: 'Spring Art Exhibition',
    date: 'April 15, 2026',
    month: 'April',
    time: '10:00 AM - 2:00 PM',
    type: 'Extracurricular',
    ageGroup: 'All',
    description: 'Join us to celebrate the wonderful artwork created by our little Picassos this spring.',
    color: 'bg-brand-pink/10',
    textColor: 'text-brand-pink'
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting',
    date: 'April 22, 2026',
    month: 'April',
    time: '3:00 PM - 6:00 PM',
    type: 'Academic',
    ageGroup: 'Preschool',
    description: 'Discuss your child\'s progress, milestones, and upcoming goals with their teachers.',
    color: 'bg-brand-blue/10',
    textColor: 'text-brand-blue'
  },
  {
    id: 3,
    title: 'Science Discovery Day',
    date: 'May 10, 2026',
    month: 'May',
    time: '9:00 AM - 1:00 PM',
    type: 'Academic',
    ageGroup: 'Kindergarten',
    description: 'A fun-filled day of interactive science experiments and demonstrations.',
    color: 'bg-brand-blue/10',
    textColor: 'text-brand-blue'
  },
  {
    id: 4,
    title: 'Summer Break Begins',
    date: 'May 28, 2026',
    month: 'May',
    time: 'All Day',
    type: 'Holiday',
    ageGroup: 'All',
    description: 'School will be closed for the summer break. Have a safe and happy summer!',
    color: 'bg-brand-yellow/20',
    textColor: 'text-yellow-600'
  },
  {
    id: 5,
    title: 'Annual Sports Meet',
    date: 'June 05, 2026',
    month: 'June',
    time: '8:00 AM - 12:00 PM',
    type: 'Extracurricular',
    ageGroup: 'Toddler',
    description: 'Cheer for our little athletes as they participate in various fun sports activities.',
    color: 'bg-brand-green/10',
    textColor: 'text-brand-green'
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeEventType, setActiveEventType] = useState('All');
  const [activeEventMonth, setActiveEventMonth] = useState('All');
  const [activeEventAgeGroup, setActiveEventAgeGroup] = useState('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isEventRegisterModalOpen, setIsEventRegisterModalOpen] = useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [shareImage, setShareImage] = useState<{url: string, alt: string} | null>(null);
  const [imageToDelete, setImageToDelete] = useState<number | null>(null);

  const [images, setImages] = useState(() => {
    const savedImages = localStorage.getItem('foaster-gallery-images');
    if (savedImages) {
      return [...galleryImages, ...JSON.parse(savedImages)];
    }
    return galleryImages;
  });
  const [uploadCategory, setUploadCategory] = useState('Classrooms');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmUpload = () => {
    if (!previewImage) return;
    
    const newImage = {
      id: Date.now(),
      url: previewImage,
      category: uploadCategory,
      alt: 'User uploaded photo'
    };
    
    const updatedImages = [...images, newImage];
    setImages(updatedImages);
    
    // Save only user uploaded images to localStorage
    const userImages = updatedImages.filter(img => !galleryImages.find(gImg => gImg.id === img.id));
    localStorage.setItem('foaster-gallery-images', JSON.stringify(userImages));
    
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const cancelUpload = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const confirmDeleteImage = () => {
    if (imageToDelete === null) return;
    
    const updatedImages = images.filter(img => img.id !== imageToDelete);
    setImages(updatedImages);
    
    const userImages = updatedImages.filter(img => !galleryImages.find(gImg => gImg.id === img.id));
    localStorage.setItem('foaster-gallery-images', JSON.stringify(userImages));
    
    setImageToDelete(null);
  };

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const filteredEvents = upcomingEvents.filter(event => {
    const matchType = activeEventType === 'All' || event.type === activeEventType;
    const matchMonth = activeEventMonth === 'All' || event.month === activeEventMonth;
    const matchAgeGroup = activeEventAgeGroup === 'All' || event.ageGroup === activeEventAgeGroup || event.ageGroup === 'All';
    return matchType && matchMonth && matchAgeGroup;
  });

  return (
    <div className="min-h-screen bg-white text-brand-dark font-sans overflow-x-hidden scroll-smooth">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-0 border-b border-gray-100' : 'bg-white/50 backdrop-blur-sm border-b border-transparent py-2'}`}>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center rotate-3">
                <Star className="w-6 h-6 text-brand-dark fill-brand-dark" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Foaster Kids</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#about" className="text-gray-600 hover:text-brand-pink font-medium transition-colors">About</a>
              <a href="#programs" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Programs</a>
              <a href="#features" className="text-gray-600 hover:text-brand-green font-medium transition-colors">Features</a>
              <a href="#gallery" className="text-gray-600 hover:text-brand-yellow font-medium transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-brand-pink font-medium transition-colors">Contact</a>
              <button 
                onClick={() => setIsEnrollModalOpen(true)}
                className="bg-brand-pink text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-pink/90 transition-transform hover:scale-105 active:scale-95 shadow-sm"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-brand-dark"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full left-0"
          >
            <a href="#about" className="block text-gray-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#programs" className="block text-gray-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Programs</a>
            <a href="#features" className="block text-gray-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#gallery" className="block text-gray-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="block text-gray-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsEnrollModalOpen(true);
              }}
              className="w-full bg-brand-pink text-white px-6 py-3 rounded-full font-bold mt-4"
            >
              Enroll Now
            </button>
          </motion.div>
        )}
        </nav>
      </header>

      <main>
      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span>Admissions open for 2026-2027</span>
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-brand-dark">
                Where little minds <span className="text-brand-pink">blossom</span> and grow.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                At Foaster Kids, we provide a nurturing, playful, and safe environment where your child's natural curiosity leads to lifelong learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-blue/90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/30 flex items-center gap-2">
                  Book a Tour <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#about" className="bg-white text-brand-dark border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-dark transition-colors flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-[4/3] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                  alt="Indian play school students smiling and learning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full mix-blend-multiply opacity-80 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-pink rounded-full mix-blend-multiply opacity-80 blur-xl" />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
              >
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-brand-green fill-brand-green" />
                </div>
                <div>
                  <p className="font-bold text-xl text-brand-dark">500+</p>
                  <p className="text-sm text-gray-500 font-medium">Happy Families</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-20 bg-brand-pink/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotate: -180 },
                visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", duration: 1.5 } }
              }}
            >
              <Star className="w-10 h-10 text-brand-pink mx-auto mb-6 fill-current" />
            </motion.div>
            
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight italic mb-8 flex flex-wrap justify-center gap-x-2 md:gap-x-3 gap-y-2">
              {'"Every child is a different kind of flower, and all together, they make this world a beautiful garden."'.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", damping: 12, stiffness: 100 } }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </blockquote>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.5 } }
              }}
              className="text-lg text-brand-pink font-bold uppercase tracking-widest"
            >
              — Our Philosophy
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Our Learning Programs</h2>
            <p className="text-gray-600 text-lg">
              Tailored educational experiences designed for every stage of your child's early development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div 
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 shadow-sm border-2 ${program.borderColor} hover:shadow-xl transition-shadow relative overflow-hidden group`}
              >
                <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {program.icon}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-sm font-bold text-gray-600 mb-4">
                  {program.age}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                <a href="#" className="inline-flex items-center font-bold text-brand-dark hover:text-brand-pink transition-colors">
                  Explore Program <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2069&auto=format&fit=crop" 
                  alt="Diverse group of children playing and learning together in a bright classroom" 
                  className="rounded-3xl w-full h-64 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
                  alt="Preschool children engaged in a creative learning activity" 
                  className="rounded-3xl w-full h-64 object-cover shadow-lg sm:translate-y-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Why Parents Choose Foaster Kids</h2>
              <p className="text-gray-600 text-lg mb-10">
                We believe that every child is unique. Our approach combines structured learning with free play to develop confident, creative, and compassionate individuals.
              </p>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group cursor-default relative"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-brand-yellow/30 relative">
                      {feature.icon}
                      {/* Tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 shadow-xl pointer-events-none text-center">
                        {feature.tooltip}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 transition-colors duration-300 group-hover:text-brand-pink">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Meet Our Teachers</h2>
            <p className="text-gray-600 text-lg">
              Our passionate educators are dedicated to creating a nurturing and inspiring environment where every child can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-brand-dark mb-1">{teacher.name}</h3>
                  <p className="text-brand-pink font-semibold text-sm uppercase tracking-wider mb-4">{teacher.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Our Gallery</h2>
            <p className="text-gray-600 text-lg mb-8">
              Take a peek into the daily adventures, colorful classrooms, and joyous events at Foaster Kids.
            </p>
            
            {/* Category Filter & Upload */}
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                      activeCategory === category
                        ? 'bg-brand-pink text-white shadow-md scale-105'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <select 
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark font-bold focus:outline-none focus:ring-2 focus:ring-brand-pink/50 cursor-pointer"
                >
                  {galleryCategories.filter(c => c !== 'All').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-6 py-2 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-pink transition-colors shadow-sm"
                >
                  <Upload className="w-4 h-4" />
                  Upload Photo
                </button>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="relative group rounded-3xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-2xl hover:scale-105 hover:z-10 transition-all duration-300 bg-gray-100 cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <span className="text-white font-bold text-lg">{image.category}</span>
                    <div className="flex gap-2">
                      {!galleryImages.find(gImg => gImg.id === image.id) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageToDelete(image.id);
                          }}
                          className="p-2 bg-red-500/80 hover:bg-red-500 backdrop-blur-sm rounded-full text-white transition-colors"
                          aria-label="Delete image"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShareImage({ url: image.url, alt: image.alt });
                        }}
                        className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-colors"
                        aria-label="Share image"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section id="tour" className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full mix-blend-screen opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-screen opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Take a Virtual Tour</h2>
            <p className="text-xl text-gray-300">
              Explore our vibrant classrooms, safe play areas, and creative spaces from the comfort of your home.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl group cursor-pointer"
            onClick={() => setIsVideoModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Play virtual tour video"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsVideoModalOpen(true);
              }
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop"
              alt="Video thumbnail showing a bright, colorful preschool classroom"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-brand-dark fill-brand-dark ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-gray-600 text-lg mb-8">
              Mark your calendars! Here are the exciting activities and important dates coming up at Foaster Kids.
            </p>
            
            {/* Event Filters */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Month:</span>
                <select 
                  value={activeEventMonth}
                  onChange={(e) => setActiveEventMonth(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark font-bold focus:outline-none focus:ring-2 focus:ring-brand-pink/50 cursor-pointer"
                >
                  {eventMonths.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Type:</span>
                <select 
                  value={activeEventType}
                  onChange={(e) => setActiveEventType(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark font-bold focus:outline-none focus:ring-2 focus:ring-brand-pink/50 cursor-pointer"
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Age Group:</span>
                <select 
                  value={activeEventAgeGroup}
                  onChange={(e) => setActiveEventAgeGroup(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-brand-dark font-bold focus:outline-none focus:ring-2 focus:ring-brand-pink/50 cursor-pointer"
                >
                  {eventAgeGroups.map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  {/* Date Block */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:border-brand-pink/30 transition-colors">
                    <span className="text-sm font-bold text-brand-pink uppercase tracking-widest">{event.month.substring(0, 3)}</span>
                    <span className="text-3xl font-display font-black text-brand-dark">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                  
                  {/* Event Details */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display text-2xl font-bold text-brand-dark">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.color} ${event.textColor}`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <button
                      onClick={() => {
                        setSelectedEvent(event);
                        setIsEventRegisterModalOpen(true);
                      }}
                      className="px-6 py-2.5 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-pink transition-colors shadow-sm"
                    >
                      Register for Event
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                  <Calendar className="w-10 h-10 text-brand-pink" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-3">No events found</h3>
                <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
                  We couldn't find any events matching your current filters. Try adjusting them to see what else is coming up!
                </p>
                <button
                  onClick={() => {
                    setActiveEventType('All');
                    setActiveEventMonth('All');
                    setActiveEventAgeGroup('All');
                  }}
                  className="px-6 py-3 bg-white border border-gray-200 text-brand-dark font-bold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full mix-blend-screen opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-screen opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6">Ready to join our family?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule a tour today to see our facilities, meet our teachers, and discover how we can help your child thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-block bg-brand-yellow text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-yellow/90 transition-transform hover:scale-105 active:scale-95 shadow-lg">
              Schedule a Tour
            </a>
            <a href="#contact" className="inline-block bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              Have questions about our programs or admissions? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.form 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="How can we help?" required />
              </div>
              <div className="mb-6 flex-grow">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea id="message" className="w-full h-full min-h-[150px] px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors resize-none" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-pink text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-pink/90 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md mt-auto">
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 h-full"
            >
              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-pink/10 text-brand-pink rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                      <p className="text-gray-600">123 Playful Lane, Sunshine District, CA 90210</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                      <p className="text-gray-600">hello@foasterkids.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex-grow rounded-3xl overflow-hidden shadow-sm border border-gray-100 min-h-[300px] bg-gray-100 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.4003563234237!3d34.05123927315759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf129112a8d%3A0x1c3c9e38804961e5!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1710967381234!5m2!1sen!2sus" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center rotate-3">
                  <Star className="w-5 h-5 text-brand-dark fill-brand-dark" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">Foaster Kids</span>
              </div>
              <p className="text-gray-500 mb-6">
                Nurturing young minds through creative play, expert guidance, and a loving environment.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-pink hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-green hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-500 hover:text-brand-pink transition-colors">About Us</a></li>
                <li><a href="#programs" className="text-gray-500 hover:text-brand-pink transition-colors">Our Programs</a></li>
                <li><a href="#contact" className="text-gray-500 hover:text-brand-pink transition-colors">Admissions</a></li>
                <li><a href="#contact" className="text-gray-500 hover:text-brand-pink transition-colors">Parent Portal</a></li>
                <li><a href="#contact" className="text-gray-500 hover:text-brand-pink transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><a href="#programs" className="text-gray-500 hover:text-brand-blue transition-colors">Toddler (1.5 - 2.5 yrs)</a></li>
                <li><a href="#programs" className="text-gray-500 hover:text-brand-blue transition-colors">Preschool (2.5 - 4 yrs)</a></li>
                <li><a href="#programs" className="text-gray-500 hover:text-brand-blue transition-colors">Kindergarten (4 - 6 yrs)</a></li>
                <li><a href="#programs" className="text-gray-500 hover:text-brand-blue transition-colors">Summer Camp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-500">
                  <MapPin className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" />
                  <span>123 Playful Lane, Sunshine District, CA 90210</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <Phone className="w-5 h-5 text-brand-dark shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <Mail className="w-5 h-5 text-brand-dark shrink-0" />
                  <span>hello@foasterkids.com</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center justify-center bg-brand-pink text-white px-6 py-3 rounded-full font-bold hover:bg-brand-pink/90 transition-transform hover:scale-105 active:scale-95 shadow-sm w-full sm:w-auto">
                  Contact Us Form
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Foaster Kids Play School. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close video modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white">
              <Play className="w-16 h-16 text-brand-yellow mb-4 opacity-50" />
              <p className="text-2xl font-bold mb-2">Virtual Tour Video</p>
              <p className="text-gray-400">Interactive video player would load here.</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Enrollment Modal */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm"
            onClick={() => setIsEnrollModalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl z-10 my-8 overflow-hidden"
          >
            <div className="bg-brand-pink p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
              <button 
                onClick={() => setIsEnrollModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close enrollment modal"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="font-display text-3xl font-bold mb-2 relative z-10">Enroll Your Child</h3>
              <p className="text-white/80 relative z-10">Join the Foaster Kids family today! Fill out the form below to start the admission process.</p>
            </div>
            
            <form className="p-8" onSubmit={(e) => { e.preventDefault(); setIsEnrollModalOpen(false); alert('Enrollment request submitted successfully!'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="jane@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="(555) 123-4567" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Child's Age</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors bg-white" required>
                    <option value="">Select age...</option>
                    <option value="1-2">1-2 Years (Toddler)</option>
                    <option value="2-3">2-3 Years (Pre-Nursery)</option>
                    <option value="3-4">3-4 Years (Nursery)</option>
                    <option value="4-5">4-5 Years (Kindergarten)</option>
                  </select>
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2">Program of Interest</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Toddler Program', 'Pre-Nursery', 'Nursery', 'Kindergarten'].map((prog) => (
                    <label key={prog} className="flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="program" value={prog} className="w-4 h-4 text-brand-pink focus:ring-brand-pink border-gray-300" required />
                      <span className="ml-3 text-sm font-medium text-gray-700">{prog}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => setIsEnrollModalOpen(false)}
                  className="px-6 py-3 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold hover:bg-brand-pink/90 transition-transform hover:scale-105 active:scale-95 shadow-md"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Event Registration Modal */}
      <AnimatePresence>
        {isEventRegisterModalOpen && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsEventRegisterModalOpen(false);
                setTimeout(() => setIsRegistrationSuccess(false), 300);
              }}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => {
                  setIsEventRegisterModalOpen(false);
                  setTimeout(() => setIsRegistrationSuccess(false), 300);
                }}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
                aria-label="Close event registration modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-8 md:p-12">
                {isRegistrationSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-brand-dark mb-4">Registration Successful!</h3>
                    <p className="text-gray-600 text-lg mb-8">
                      Thank you for registering for <strong className="text-brand-pink">{selectedEvent.title}</strong>. We have sent a confirmation email with all the details to your inbox.
                    </p>
                    <button 
                      onClick={() => {
                        setIsEventRegisterModalOpen(false);
                        setTimeout(() => setIsRegistrationSuccess(false), 300);
                      }}
                      className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark/90 transition-transform hover:scale-105 active:scale-95 shadow-md"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="font-display text-3xl font-bold text-brand-dark mb-2">Register for Event</h3>
                      <p className="text-gray-600">You are registering for <strong className="text-brand-pink">{selectedEvent.title}</strong> on {selectedEvent.date}.</p>
                    </div>
                    
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsRegistrationSuccess(true); }}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Name</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                          <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="john@example.com" />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                          <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="(555) 123-4567" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Child's Name</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors" placeholder="Jane Doe" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Child's Age</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-colors bg-white">
                          <option value="">Select age</option>
                          <option value="2">2 years</option>
                          <option value="3">3 years</option>
                          <option value="4">4 years</option>
                          <option value="5">5 years</option>
                          <option value="6">6 years</option>
                        </select>
                      </div>
                      
                      <button type="submit" className="w-full bg-brand-pink text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-pink/90 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md">
                        Confirm Registration
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Image Upload Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={cancelUpload}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">Preview Upload</h3>
                <p className="text-gray-600 mb-6">Category: <span className="font-bold text-brand-pink">{uploadCategory}</span></p>
                
                <div className="rounded-2xl overflow-hidden mb-8 aspect-[4/3] bg-gray-100 shadow-inner">
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex justify-end gap-4">
                  <button 
                    onClick={cancelUpload}
                    className="px-6 py-3 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmUpload}
                    className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold hover:bg-brand-pink/90 transition-transform hover:scale-105 active:scale-95 shadow-md"
                  >
                    Confirm Upload
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Share Image Modal */}
      <AnimatePresence>
        {shareImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShareImage(null)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setShareImage(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-4">Share Image</h3>
                <div className="rounded-xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                  <img src={shareImage.url} alt={shareImage.alt} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareImage.url)}`, '_blank')}
                    className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm"><Facebook className="w-5 h-5" /></div>
                    <span className="text-xs font-bold">Facebook</span>
                  </button>
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareImage.url)}&text=${encodeURIComponent('Check out this photo from Foaster Kids!')}`, '_blank')}
                    className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-400 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm"><Twitter className="w-5 h-5" /></div>
                    <span className="text-xs font-bold">Twitter</span>
                  </button>
                  <button 
                    onClick={() => window.location.href = `mailto:?subject=Check out this photo&body=${encodeURIComponent(shareImage.url)}`}
                    className="flex flex-col items-center gap-2 text-gray-600 hover:text-brand-pink transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm"><Mail className="w-5 h-5" /></div>
                    <span className="text-xs font-bold">Email</span>
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(shareImage.url);
                      alert('Link copied to clipboard!');
                    }}
                    className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm"><Link className="w-5 h-5" /></div>
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Delete Image Confirmation Modal */}
      <AnimatePresence>
        {imageToDelete !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setImageToDelete(null)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <div className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">Delete Image?</h3>
                <p className="text-gray-600 mb-8">
                  Are you sure you want to delete this image? This action cannot be undone.
                </p>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => setImageToDelete(null)}
                    className="px-6 py-3 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmDeleteImage}
                    className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-transform hover:scale-105 active:scale-95 shadow-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// End of App component - forcing save state for GitHub export