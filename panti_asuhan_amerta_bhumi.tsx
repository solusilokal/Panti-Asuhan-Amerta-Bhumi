import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Share, 
  Copy, 
  Check, 
  Heart, 
  Info, 
  History, 
  BookOpen, 
  Users, 
  MessageSquareQuote, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Gift 
} from 'lucide-react';
import profileImg from './src/assets/profile.png';
import heroImg from './src/assets/hero.jpg';
import programOrangTuaAsuhImg from './src/assets/program-orang-tua-asuh.webp';
import bantuanPendidikanImg from './src/assets/bantuan-pendidikan.webp';
import panganSembakoImg from './src/assets/pangan-sembako.webp';
import karyaAnakAsuhImg from './src/assets/karya-anak-asuh.webp';

const Instagram = ({ size = 24, className = '', ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, className = '', ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const pageData = {
  name: "Panti Asuhan Amerta Bhumi",
  shortName: "Amerta Bhumi",
  phone: "6289529605601", // Ganti dengan nomor asli
  address: "Jl. Kasih Sayang No. 12, Kota Damai, Indonesia",
  title: "Mewujudkan Masa Depan Cerah untuk Anak Bangsa",
  description: "Amerta Bhumi adalah rumah penuh cinta bagi anak-anak yatim dan dhuafa. Kami berdedikasi untuk memberikan pendidikan, perlindungan, dan bekal masa depan yang lebih baik.",
  profileImg: profileImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Kota+Palangka+Raya,+Kalimantan+Tengah/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id",
    facebook: "https://facebook.com/", 
    website: "https://example.com/" 
  },
  about: "Berawal dari kepedulian terhadap anak-anak yang kehilangan tempat bernaung, Panti Asuhan Amerta Bhumi hadir sebagai pilar harapan. 'Amerta' berarti abadi, dan 'Bhumi' adalah tempat kita berpijak. Kami percaya setiap anak berhak mendapatkan kasih sayang tanpa batas dan pijakan kuat untuk meraih cita-cita mereka.",
  history: [
    { year: "2015", event: "Pendirian Yayasan Panti Asuhan Amerta Bhumi dengan 5 anak asuh pertama." },
    { year: "2018", event: "Pembangunan asrama putri dan fasilitas ruang belajar mandiri." },
    { year: "2021", event: "Peluncuran program Beasiswa Pendidikan Terpadu tingkat SMA." },
    { year: "Sekarang", event: "Menaungi lebih dari 80 anak asuh dengan beragam program kemandirian." }
  ],
  catalog: [
    { 
      title: "Program Orang Tua Asuh", 
      desc: "Bantu penuhi kebutuhan pendidikan dan hidup anak asuh secara rutin setiap bulan.",
      img: programOrangTuaAsuhImg
    },
    { 
      title: "Bantuan Pendidikan", 
      desc: "Donasi untuk perlengkapan sekolah, buku, dan biaya penunjang pendidikan.",
      img: bantuanPendidikanImg
    },
    { 
      title: "Pangan & Sembako", 
      desc: "Distribusi bahan makanan sehat dan bergizi untuk operasional panti sehari-hari.",
      img: panganSembakoImg
    },
    { 
      title: "Karya Anak Asuh", 
      desc: "Dukung kemandirian anak dengan membeli hasil karya kerajinan tangan mereka.",
      img: karyaAnakAsuhImg
    }
  ],
  faq: [
    {
      q: "Bagaimana cara menyalurkan donasi?",
      a: "Anda dapat berdonasi melalui transfer bank ke rekening resmi yayasan atau menghubungi admin kami via formulir/WhatsApp di halaman ini."
    },
    {
      q: "Apakah saya bisa berkunjung ke panti asuhan?",
      a: "Tentu! Kami sangat terbuka untuk kunjungan silaturahmi. Mohon informasikan kedatangan Anda H-2 agar kami dapat mempersiapkan penyambutan."
    },
    {
      q: "Bentuk donasi selain uang tunai apa saja yang diterima?",
      a: "Kami menerima pakaian layak pakai, buku bacaan, sembako, dan alat tulis. Anda bisa mengirimkannya langsung ke alamat panti kami."
    }
  ],
  testimonials: [
    { name: "Bapak Budi & Keluarga", text: "Sangat terharu melihat semangat anak-anak di Amerta Bhumi. Pengurusnya sangat amanah dan transparan dalam melaporkan penyaluran dana." },
    { name: "Komunitas Berbagi Kasih", text: "Kegiatan bakti sosial di sini selalu menyenangkan. Fasilitasnya bersih dan anak-anaknya diajarkan kemandirian yang luar biasa." },
    { name: "Ibu Rahma", text: "Program orang tua asuh sangat terorganisir. Saya selalu mendapat update tentang perkembangan nilai dan kesehatan anak asuh saya." }
  ]
};

export default function AmertaBhumi() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const intent = formData.get('intent');
    const notes = formData.get('notes');
    
    let textIntent = "";
    if(intent === "donasi") textIntent = "ingin melakukan konfirmasi donasi";
    else if(intent === "kunjungan") textIntent = "ingin menjadwalkan kunjungan";
    else textIntent = "memiliki pertanyaan/info lainnya";

    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20${textIntent}.%0A%0ACatatan:%0A${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <>
      {}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #f8fafc;
          color: #132C45;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-[#132C45]">
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#132C45]/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-[#132C45]/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#132C45] via-[#132C45]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-32 h-32 rounded-full p-1 bg-white/10 backdrop-blur-md mb-6 shadow-2xl border border-white/20">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-slate-200 font-medium text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.title}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              <a 
                href={pageData.links.instagram} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a 
                href={pageData.links.tiktok} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
              <a 
                href={pageData.links.maps} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium col-span-2"
              >
                <MapPin size={18} /> Kunjungi Panti Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#9E6B3F] text-white rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#865933] transition-all shadow-lg shadow-[#9E6B3F]/30"
            >
              <Heart size={18} className="fill-current" />
              Bantu Mereka Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="pt-12 pb-8 px-6 bg-slate-50">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
              <Info size={100} className="text-[#132C45]" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-[#517B58]/10 rounded-lg">
                  <Info className="text-[#517B58]" size={20} />
                </div>
                <h2 className="text-xl font-extrabold text-[#132C45] tracking-tight">Tentang Kami</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {pageData.about}
              </p>
            </div>
          </div>
        </section>

        {}
        <section className="py-8 px-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-[#517B58]/10 rounded-lg">
              <History className="text-[#517B58]" size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-[#132C45] tracking-tight">Sejarah Perjalanan</h2>
          </div>
          
          <div className="relative border-l-2 border-[#517B58]/20 ml-4 pl-6 flex flex-col gap-6">
            {pageData.history.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute w-4 h-4 bg-[#517B58] rounded-full -left-[33px] top-1 border-4 border-white shadow-sm"></div>
                <h3 className="text-sm font-extrabold text-[#132C45] mb-1">{item.year}</h3>
                <p className="text-slate-600 text-[13px] leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 bg-[#132C45] text-white rounded-t-[2.5rem]">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-[#1A3D5D] rounded-lg">
                <Gift className="text-[#9E6B3F]" size={20} />
              </div>
              <h2 className="text-xl font-extrabold tracking-tight">Katalog Program</h2>
            </div>
            <p className="text-slate-300 text-xs">Pilih program kebaikan yang ingin Anda dukung.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[260px] rounded-[1.5rem] overflow-hidden relative group bg-[#1A3D5D] border border-[#1A3D5D]/50 shadow-lg flex flex-col"
              >
                <div className="w-full h-[180px] overflow-hidden" onClick={() => openLightbox(pageData.catalog.map(c=>c.img), idx)}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col gap-2">
                  <h3 className="font-bold text-[15px] text-[#9E6B3F] leading-tight">{item.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                  
                  <button 
                    onClick={scrollToForm}
                    className="mt-auto w-full py-2.5 bg-[#517B58] hover:bg-[#426447] text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Dukung Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-slate-50">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#517B58]/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#517B58]" size={28} />
              </div>
              <h2 className="text-lg font-extrabold text-[#132C45] mb-2">Lokasi Panti</h2>
              <p className="text-slate-600 text-sm mb-6">{pageData.address}</p>
              
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-[#517B58] text-white rounded-xl font-bold text-sm hover:bg-[#426447] transition-colors shadow-sm flex justify-center items-center gap-2"
              >
                <Globe size={18} /> Buka di Google Maps
              </a>
            </div>
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-white border-y border-slate-50">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-[#517B58]/10 rounded-lg">
              <MessageCircle className="text-[#517B58]" size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-[#132C45] tracking-tight">Tanya Jawab (FAQ)</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((item, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openFaqIndex === idx ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-100 hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-sm text-[#132C45] pr-4">{item.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="text-[#517B58] shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400 shrink-0" size={20} />
                  )}
                </button>
                <div 
                  className={`px-5 pb-4 text-[13px] text-slate-600 leading-relaxed transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'block opacity-100' : 'hidden opacity-0'}`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-slate-50">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#517B58]/10 rounded-lg">
                <MessageSquareQuote className="text-[#517B58]" size={20} />
              </div>
              <h2 className="text-xl font-extrabold text-[#132C45] tracking-tight">Kata Mereka</h2>
            </div>
            <p className="text-slate-500 text-xs ml-11">Pengalaman donatur & relawan Amerta Bhumi.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
                <Heart size={20} className="fill-[#9E6B3F] text-[#9E6B3F]" />
                <p className="text-slate-600 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#132C45] flex items-center justify-center text-white font-extrabold text-sm border border-slate-200">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-[#132C45]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="contact-form" className="py-12 px-6 bg-white">
          <div className="bg-[#132C45] border border-[#1A3D5D] rounded-[2rem] p-8 shadow-xl relative overflow-hidden text-white">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1A3D5D] rounded-full pointer-events-none opacity-50"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#1A3D5D] rounded-full pointer-events-none opacity-50"></div>
            
            <div className="relative z-10 mb-8 text-center">
              <h2 className="text-2xl font-extrabold text-white mb-2">Hubungi Pengurus</h2>
              <p className="text-slate-300 text-sm leading-relaxed">Punya niat baik untuk berdonasi atau berkunjung? Silakan hubungi kami melalui WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#9E6B3F] uppercase tracking-wide ml-1">Nama Lengkap / Instansi</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama Anda"
                  className="w-full bg-white/10 border border-[#1A3D5D] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#9E6B3F] focus:ring-1 focus:ring-[#9E6B3F] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#9E6B3F] uppercase tracking-wide ml-1">Tujuan</label>
                <select 
                  name="intent" 
                  required
                  className="w-full bg-white/10 border border-[#1A3D5D] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#9E6B3F] focus:ring-1 focus:ring-[#9E6B3F] transition-all appearance-none [&>option]:bg-[#132C45]"
                >
                  <option value="">Pilih Tujuan...</option>
                  <option value="donasi">Konfirmasi Donasi</option>
                  <option value="kunjungan">Jadwal Kunjungan</option>
                  <option value="lainnya">Pertanyaan Umum / Lainnya</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#9E6B3F] uppercase tracking-wide ml-1">Pesan / Catatan Tambahan</label>
                <textarea 
                  name="notes" 
                  rows="3"
                  placeholder="Ceritakan detail niat baik Anda disini..."
                  className="w-full bg-white/10 border border-[#1A3D5D] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#9E6B3F] focus:ring-1 focus:ring-[#9E6B3F] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-[#9E6B3F] text-white font-extrabold text-[14px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#865933] transition-colors shadow-lg"
              >
                Kirim via WhatsApp
                <MessageCircle size={20} className="fill-current" />
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-4 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#132C45] text-[15px]">{pageData.name}</span>
            <span className="max-w-[280px] text-slate-500 leading-relaxed mt-1">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[11px] mt-8 font-medium">
            © {new Date().getFullYear()} {pageData.shortName}. All rights reserved.
          </p>
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-slate-700 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#9E6B3F] backdrop-blur-xl border border-[#865933] rounded-2xl text-white shadow-[0_10px_40px_rgba(158,107,63,0.4)] hover:bg-[#865933] active:scale-[0.98] transition-all"
          >
            <span className="font-extrabold text-[15px] tracking-wide">Salurkan Bantuan</span>
            <div className="bg-[#132C45] text-white p-2 rounded-xl">
              <Heart size={20} className="fill-current" />
            </div>
          </button>
        </div>

      </main>

      {}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#132C45] font-extrabold text-[16px]">Bagikan Informasi Kebaikan</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border-2 border-slate-200 mb-4 object-cover" />
              <h4 className="text-[#132C45] font-bold text-lg text-center tracking-tight">@{pageData.shortName.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-[#517B58] text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4 justify-center">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-[#517B58]" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-bold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Link'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToFacebook}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-bold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-bold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-100 mb-4 mt-2"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-[#132C45] font-extrabold text-[13px] mb-1">Ikuti Kegiatan Kami</h5>
              <p className="text-slate-500 text-[12px] mb-4">Update harian mengenai penyaluran donasi & kegiatan anak-anak.</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3.5 bg-[#132C45] text-white text-sm font-bold rounded-xl hover:bg-[#1A3D5D] transition-colors flex justify-center items-center gap-2">
                <Instagram size={18} /> Instagram Panti
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}