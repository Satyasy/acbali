export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  operatingHours: string;
  operatingHoursShort: string;
  responseTime: string;
  warranty: string;
  address: {
    street: string;
    subDistrict: string;
    city: string;
    province: string;
    postalCode: string;
    full: string;
    geo: {
      latitude: number;
      longitude: number;
    };
  };
  mapsEmbedUrl: string;
  mapsDirectUrl: string;
  mapsSearchUrl: string;
  googleKgmid: string;
  heroImage: string;
}

export const siteConfig: SiteConfig = {
  name: "Jawara Teknik",
  legalName: "Jawara Teknik Servis AC Bali",
  tagline: "Jasa Servis & Cuci AC Panggilan Cepat di Denpasar, Badung, dan Sekitarnya",
  description: "Layanan jasa servis, cuci, isi freon, perbaikan AC panggilan di Denpasar, Badung, Canggu, Seminyak, Sanur & seluruh Bali. Buka setiap hari 06.00 – 23.00 WITA. Bergaransi 30 hari & teknisi respon cepat 60 menit.",
  phone: "+62 812-3456-7890",
  phoneRaw: "6281234567890",
  operatingHours: "Melayani Setiap Hari (Termasuk Hari Libur): 06.00 – 23.00 WITA",
  operatingHoursShort: "Buka Setiap Hari (06.00 – 23.00 WITA)",
  responseTime: "Respon Cepat 60 Menit",
  warranty: "Garansi 30 Hari",
  heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1280&q=75",
  address: {
    street: "Jl. Teuku Umar No. 88",
    subDistrict: "Dauh Puri Klod, Denpasar Barat",
    city: "Kota Denpasar",
    province: "Bali",
    postalCode: "80113",
    full: "Jl. Teuku Umar No. 88, Dauh Puri Klod, Denpasar Barat, Bali 80113",
    geo: {
      latitude: -8.6728,
      longitude: 115.2078,
    },
  },
  mapsDirectUrl: "https://share.google/o71TdKbJKVI2qBnsW",
  mapsSearchUrl: "https://www.google.com/search?kgmid=/g/11zfhw7q03&q=Service+AC+panggilan+Jawara+Teknik",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Service+AC+panggilan+Jawara+Teknik+Bali&t=&z=14&ie=UTF8&iwloc=&output=embed",
  googleKgmid: "/g/11zfhw7q03",
};

export function createWhatsAppLink(params?: {
  service?: string;
  notes?: string;
}): string {
  const base = `https://wa.me/${siteConfig.phoneRaw}`;
  const serviceText = params?.service ? params.service : "(Cuci / Bocor Air / Tidak Dingin)";
  const additionalNotes = params?.notes ? `\n- Catatan Khusus: ${params.notes}` : "";

  const message = `Halo Admin Jawara Teknik, saya ingin jadwalkan servis AC:\n\n- Nama: \n- Lokasi/Area: \n- Kendala: ${serviceText}\n- Jumlah Unit: \n- Waktu Kunjungan: ${additionalNotes}`;

  return `${base}?text=${encodeURIComponent(message)}`;
}

export const painPoints = [
  {
    id: "bocor-air",
    title: "AC Bocor / Menetes Air",
    description: "Tuntas atasi lendir, lumut, dan sumbatan pada pipa drainase pembuangan air secara higienis tanpa merusak plafon.",
    badge: "Sering Terjadi",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Teknisi memperbaiki kebocoran pipa drainase AC di Denpasar Bali",
  },
  {
    id: "kurang-dingin",
    title: "Angin Keluar Panas / Kurang Dingin",
    description: "Pengecekan mendalam sistem tekanan kompresor, volume freon, kapasitor, dan kelistrikan modul inverter.",
    badge: "Solusi Cepat",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pengecekan tekanan freon dan kompresor AC panggilan Bali",
  },
  {
    id: "bau-apek",
    title: "Bau Apek & Berdebu",
    description: "Cuci total evaporator & blower dengan cairan antijamur/kuman standar medis, mengembalikan udara segar dan sehat.",
    badge: "Higienis",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pembersihan total evaporator AC basmi jamur dan bakteri",
  },
  {
    id: "bising-getar",
    title: "Suara Bising & Bergetar",
    description: "Kalibrasi blower indoor, balancing dinamo fan, peredaman getaran dudukan braket outdoor, dan kencangkan baut pengunci.",
    badge: "Presisi",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Kalibrasi dan perbaikan getaran unit AC outdoor di Bali",
  },
];

export const pricingList = [
  {
    name: "Cuci AC Standar (0.5 – 1 PK)",
    price: "Rp 75.000",
    unit: "/ unit",
    highlight: false,
    badge: "Paling Populer",
    description: "Cuci filter, cover indoor, talang air, evaporator steam, dan pembersihan kisi-kisi kondensor outdoor.",
    serviceQuery: "Cuci AC Standar 0.5 - 1 PK",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Jasa cuci AC split 0.5 PK sampai 1 PK di Bali",
  },
  {
    name: "Cuci AC Besar (1.5 – 2 PK)",
    price: "Rp 85.000",
    unit: "/ unit",
    highlight: false,
    badge: "Hemat",
    description: "Pembersihan menyeluruh unit kapasitas besar, cek tekanan freon, dan cek arus ampere listrik.",
    serviceQuery: "Cuci AC Besar 1.5 - 2 PK",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Servis cuci AC kapasitas besar 2 PK di Denpasar",
  },
  {
    name: "Cuci Unit AC Inverter",
    price: "Rp 100.000 – 130.000",
    unit: "/ unit",
    highlight: true,
    badge: "Rekomendasi Ahli",
    description: "Perawatan khusus modul PCB elektrikal sensitif, chemical wash aman sensor, dan kalibrasi motor inverter.",
    serviceQuery: "Cuci Unit AC Inverter",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Spesialis cuci unit AC Inverter Daikin Panasonic Bali",
  },
  {
    name: "Pengecekan & Diagnosis",
    price: "Rp 60.000",
    unit: "(Gratis jika lanjut servis)",
    highlight: false,
    badge: "Garansi Jujur",
    description: "Inspeksi digital menyeluruh sumber kerusakan AC mati, bocor, atau berisik sebelum tindakan perbaikan.",
    serviceQuery: "Pengecekan & Diagnosis Kerusakan",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Inspeksi dan cek kerusakan sistem AC dengan alat digital",
  },
  {
    name: "Cuci Total / Overhaul",
    price: "Mulai Rp 375.000",
    unit: "/ unit",
    highlight: false,
    badge: "Turun Unit",
    description: "Pembersihan total dengan menurunkan unit indoor dari dinding, cuci kerak hitam pekat, dan ganti seal.",
    serviceQuery: "Cuci Total / Overhaul (Turun Unit)",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Cuci total overhaul turun unit AC split di Badung Bali",
  },
  {
    name: "Tambah Freon R32 / R410a",
    price: "Rp 200.000",
    unit: "/ unit",
    highlight: false,
    badge: "Freon Murni",
    description: "Pengisian freon ramah lingkungan tipe R32 atau R410a hingga tekanan standar pabrik (140-160 PSI).",
    serviceQuery: "Tambah Freon R32 / R410a",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Isi dan tambah freon R32 R410a resmi bergaransi",
  },
  {
    name: "Isi Freon dari Nol (Vakum)",
    price: "Mulai Rp 350.000",
    unit: "/ unit",
    highlight: false,
    badge: "Vakum Total",
    description: "Proses flushing, uji kebocoran pipa tembaga, vakum total sistem dengan mesin, dan pengisian full freon baru.",
    serviceQuery: "Isi Freon dari Nol (Vakum Total)",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Vakum total sistem kompresor AC dan pengisian freon baru",
  },
];

export const coverageAreas = [
  {
    regency: "Kota Denpasar",
    badge: "Pusat Teknisi Siaga",
    districts: [
      {
        name: "Denpasar Selatan",
        sub: ["Sanur", "Renon", "Sesetan", "Panjer", "Sidakarya"],
      },
      {
        name: "Denpasar Barat",
        sub: ["Pemecutan", "Dauh Puri", "Padangsambian", "Teuku Umar"],
      },
      {
        name: "Denpasar Utara",
        sub: ["Gatsu Barat/Timur", "Tonja", "Ubung", "Peguyangan"],
      },
      {
        name: "Denpasar Timur",
        sub: ["Kesiman", "Sumerta", "Penatih", "Tohpati"],
      },
    ],
  },
  {
    regency: "Kabupaten Badung",
    badge: "Prioritas Villa & Turis",
    districts: [
      {
        name: "Kuta Utara",
        sub: ["Canggu", "Tibubeneng", "Pererenan", "Seminyak", "Kerobokan", "Dalung"],
      },
      {
        name: "Kuta",
        sub: ["Kuta Kota", "Legian", "Tuban"],
      },
      {
        name: "Kuta Selatan",
        sub: ["Jimbaran", "Nusa Dua", "Pecatu", "Ungasan"],
      },
      {
        name: "Mengwi",
        sub: ["Kapal", "Sading", "Lukluk", "Mengwitani"],
      },
    ],
  },
  {
    regency: "Kabupaten Gianyar & Tabanan",
    badge: "Jangkauan Luas",
    districts: [
      {
        name: "Gianyar",
        sub: ["Ubud", "Sukawati", "Batubulan", "Celuk", "Blahbatuh"],
      },
      {
        name: "Tabanan",
        sub: ["Kediri", "Tabanan Kota", "Nyitdah", "Abiantuwung"],
      },
    ],
  },
];

export const orderingSteps = [
  {
    step: "01",
    title: "Kirim Pesan via WhatsApp & Ceritakan Keluhan",
    description: "Klik tombol WhatsApp, sampaikan keluhan AC Anda (bocor, tidak dingin, bau), alamat, serta estimasi waktu kedatangan yang diinginkan.",
    actionText: "Chat Admin Sekarang",
  },
  {
    step: "02",
    title: "Teknisi Meluncur ke Lokasi Sesuai Jadwal",
    description: "Tim teknisi bersertifikat Jawara Teknik tiba tepat waktu membawa peralatan lengkap, terpal pelindung dinding, dan plastik cuci steril.",
    actionText: "Respon Cepat 60 Menit",
  },
  {
    step: "03",
    title: "Pengerjaan Tuntas, Cek Kedinginan & Nota Garansi 30 Hari",
    description: "Uji performa suhu dengan thermometer laser digital, pembayaran fleksibel tunai/transfer QRIS, dan penyerahan nota bergaransi 30 hari.",
    actionText: "Garansi Resmi 30 Hari",
  },
];

export const faqs = [
  {
    question: "Berapa lama garansi yang diberikan dan apa saja syaratnya?",
    answer: "Jawara Teknik memberikan Garansi 30 Hari penuh untuk perbaikan dan penggantian sparepart. Jika AC mengalami kendala yang sama dalam masa garansi, teknisi kami akan datang kembali untuk perbaikan tanpa biaya tambahan sepeser pun. Cukup simpan bukti nota fisik atau digital yang kami berikan.",
  },
  {
    question: "Apakah aman mencuci AC jenis Inverter?",
    answer: "Sangat aman. Teknisi kami terlatih khusus untuk unit AC Inverter (Daikin, Panasonic, Gree, LG, Sharp). Kami menggunakan cover isolasi pelindung khusus pada modul PCB elektrikal indoor dan outdoor agar komponen elektronik tidak terkena air steam.",
  },
  {
    question: "Kapan saya tahu bahwa AC saya kekurangan atau kehabisan freon?",
    answer: "Tanda-tanda AC kurang freon antara lain: hembusan angin tidak terasa dingin meski suhu diset 16°C, muncul bunga es/salju pada pipa tembaga nepel outdoor, dan kompresor bekerja terus menerus tanpa henti. Kami selalu mengukur tekanan freon dengan manifold gauge di depan Anda sebelum mengisi.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan teknisi untuk sampai ke lokasi saya?",
    answer: "Untuk area Denpasar dan Kuta/Canggu, teknisi siaga kami umumnya tiba dalam 30 hingga 60 menit setelah konfirmasi pesanan (layanan darurat). Anda juga bisa memesan jadwal kunjungan lebih awal sesuai waktu luang Anda.",
  },
  {
    question: "Apakah ada kontrak berkala untuk Villa, Kafe, dan Guest House?",
    answer: "Ya, kami menyediakan paket B2B Kontrak Pemeliharaan Rutin per 2-3 bulan dengan harga spesial, pelaporan servis berkala, invoice resmi bertanda tangan, serta prioritas panggilan cepat 24/7 jika ada komplain dari tamu villa Anda.",
  },
];
