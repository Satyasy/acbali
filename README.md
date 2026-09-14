# Jawara Teknik - Landing Page Servis AC Bali

Landing page modern dan mobile-first dengan konversi tinggi ke WhatsApp dan optimasi Local SEO Bali untuk **Jawara Teknik** (Jasa Servis & Cuci AC Panggilan Cepat di Bali).

## 🚀 Fitur Utama

- **Framework & Performa**: Dibangun dengan **Astro 5** dan **Tailwind CSS**, static site generasi baru dengan skor Lighthouse tinggi dan loading instan.
- **Tipografi & Desain**: Menggunakan font **Plus Jakarta Sans** dengan palet warna:
  - Deep Tech Navy (`#0F4C81`)
  - Slate White (`#F8FAFC`)
  - Ice Blue (`#0284C7`)
  - WhatsApp Green (`#25D366`) khusus CTA buttons dengan efek pulse.
- **Konversi WhatsApp Dinamis**: Setiap tombol (cuci, overhaul, freon, perbaikan, paket villa) otomatis mengisi template pesan WhatsApp sesuai kebutuhan pengunjung.
- **Jam Layanan & Respon Cepat**: Buka setiap hari **06.00 – 23.00 WITA** dengan respon cepat **60 Menit**.
- **Struktur 9 Bagian Lengkap + FAQ**:
  1. Top Bar: Info jadwal siaga 06.00 – 23.00 WITA & tombol darurat 60 menit.
  2. Hero Section: Headline, sub-headline, CTA WhatsApp, CTA tarif, dan 3 trust badges (Garansi 30 Hari, Multi-Merek, Tanpa Biaya Tersembunyi).
  3. Pain Points Grid: 4 kendala umum AC (Bocor, Tidak Dingin, Bau Apek, Bising/Getar) dengan direct action.
  4. Transparent Pricing Catalog: Daftar tarif transparan & pasti di awal.
  5. B2B Commercial Highlight: Paket pemeliharaan villa, kafe & homestay dengan invoice resmi.
  6. Local Service Area Coverage: Denpasar, Badung, Gianyar & Tabanan.
  7. How to Order: 3 langkah pemesanan via WhatsApp.
  8. FAQ Section: 5 tanya jawab seputar garansi 30 hari, AC inverter, freon, & kecepatan tiba.
  9. Floating Sticky WhatsApp CTA: Tombol mengambang di mobile dengan pulse animation.
  10. Footer & NAP Integration: Informasi lengkap bisnis, kontak, dan embed Google Maps.
- **Local SEO & Schema.org**: JSON-LD `LocalBusiness` & `HVACBusiness` markup lengkap dengan koordinat geo, opening hours, area served, dan breadcrumbs.

---

## 🛠️ Cara Menjalankan Project

### 1. Mode Development
```bash
npm run dev
```
Buka browser di `http://localhost:4321`.

### 2. Build untuk Produksi
```bash
npm run build
```
Output HTML & CSS statis yang siap di-deploy ke server apa saja (Vercel, Netlify, Cloudflare Pages, cPanel, Nginx) akan berada di folder `dist/`.

### 3. Preview Hasil Build
```bash
npm run preview
```

---

## ⚙️ Cara Mengubah Data Kontak & WhatsApp

Buka file [`src/config/site.ts`](file:///src/config/site.ts):
- Ubah `phoneRaw` untuk nomor WhatsApp (format internasional tanpa tanda `+`, contoh: `6281234567890`).
- Ubah `phone` untuk tampilan teks nomor telepon.
- Ubah jam operasional, alamat, atau tarif langsung di file tersebut. Semua komponen halaman akan otomatis terupdate!
