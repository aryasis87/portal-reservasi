// Data 5 aplikasi reservasi. `halaman` = halaman dalam yang bisa dicoba langsung.
export const templates = [
  {
    kode: 'RSV-001', name: 'Restoran', merek: 'Pawon Lirih', emoji: '🍽️',
    paradigma: 'Pilih meja di denah',
    description: 'Masakan rumahan Jawa di Yogyakarta. Pilih hari, jam, dan jumlah tamu, lalu klik meja yang kosong — lengkap dengan zona dan kapasitas meja.',
    image: '/images/rsv/restoran.webp', url: 'https://reservasi-restoran-gilt.vercel.app',
    detail: { kolom1: ['MEJA', 'T6'], kolom2: ['TAMU', '6'] },
    halaman: [['/menu', 'Menu'], ['/rombongan', 'Rombongan'], ['/reservasi', 'Reservasi saya']],
  },
  {
    kode: 'RSV-002', name: 'Hotel', merek: 'Tanjung Lengkung', emoji: '🛎️',
    paradigma: 'Check-in — check-out',
    description: 'Penginapan kecil di pesisir timur Lombok. Ketersediaan dihitung per malam, tarif akhir pekan terpisah, rincian pajak & layanan jelas.',
    image: '/images/rsv/hotel.webp', url: 'https://reservasi-hotel-kappa.vercel.app',
    detail: { kolom1: ['IN', '14:00'], kolom2: ['OUT', '12:00'] },
    halaman: [['/kamar', 'Kamar & vila'], ['/kamar/vila', 'Vila Kolam'], ['/pesanan', 'Pesanan saya']],
  },
  {
    kode: 'RSV-003', name: 'Klinik', merek: 'Klinik Rumpun Waras', emoji: '🩺',
    paradigma: 'Slot jam praktik dokter',
    description: 'Klinik keluarga. Pilih dokter, lalu tanggal di hari praktiknya dan slot 30 menit yang kosong — dapat nomor urut dan daftar persiapan.',
    image: '/images/rsv/klinik.webp', url: 'https://reservasi-klinik-rose.vercel.app',
    detail: { kolom1: ['POLI', 'ANAK'], kolom2: ['NO.', '04'] },
    halaman: [['/dokter', 'Jadwal dokter'], ['/?dokter=d3', 'Dokter gigi'], ['/janji', 'Janji saya']],
  },
  {
    kode: 'RSV-004', name: 'Futsal', merek: 'Gelanggang Petang', emoji: '⚽',
    paradigma: 'Grid jam × lapangan',
    description: 'Tiga lapangan indoor. Harga sore, jam emas, dan malam tampil di tiap kotak; pilih sampai empat jam sekaligus, atau cari lawan sparring.',
    image: '/images/rsv/futsal.webp', url: 'https://reservasi-futsal.vercel.app',
    detail: { kolom1: ['COURT', 'B'], kolom2: ['SLOT', '19:00'] },
    halaman: [['/harga', 'Harga & aturan'], ['/sparring', 'Cari lawan'], ['/jadwal-saya', 'Jadwal saya']],
  },
  {
    kode: 'RSV-005', name: 'Bioskop', merek: 'Bioskop Kelir', emoji: '🎬',
    paradigma: 'Pilih kursi di studio',
    description: 'Bioskop satu layar dengan 96 kursi. Program tayang harian tanpa jam bertumpuk, lalu pilih kursi baris demi baris.',
    image: '/images/rsv/bioskop.webp', url: 'https://reservasi-bioskop.vercel.app',
    detail: { kolom1: ['STUDIO', '1'], kolom2: ['SEAT', 'E-07'] },
    halaman: [['/film', 'Sedang tayang'], ['/film/gerhana-terakhir', 'Detail film'], ['/tiket', 'Tiket saya']],
  },
];
