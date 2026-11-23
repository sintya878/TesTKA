/**
 * Ilustrasi Vektor SVG Presisi untuk Soal Tes Sumatif Matematika
 * Lingkup Materi: Materi TKA Kelas 6 (Kurikulum Merdeka Fase C)
 * Setiap ukuran, jumlah objek, sudut, dan label dibuat akurat 100% sesuai narasi soal.
 */

export const TKA_ILLUSTRATIONS = {
  // Soal 2 (PG): Lingkaran 8 juring sama besar (5 diarsir biru, 3 putih)
  q2_pecahan_lingkaran: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 210" width="560" height="210">
  <rect width="560" height="210" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Model Pecahan Lingkaran (8 Bagian Sama Besar)</text>
  <!-- Lingkaran pusat (170, 118), r = 72 -->
  <g stroke="#1e293b" stroke-width="2">
    <!-- Sektor 1 (-90 to -45) Diarsir -->
    <path d="M170,118 L170,46 A72,72 0 0,1 220.9,67.1 Z" fill="#2563eb"/>
    <!-- Sektor 2 (-45 to 0) Diarsir -->
    <path d="M170,118 L220.9,67.1 A72,72 0 0,1 242,118 Z" fill="#2563eb"/>
    <!-- Sektor 3 (0 to 45) Diarsir -->
    <path d="M170,118 L242,118 A72,72 0 0,1 220.9,168.9 Z" fill="#2563eb"/>
    <!-- Sektor 4 (45 to 90) Diarsir -->
    <path d="M170,118 L220.9,168.9 A72,72 0 0,1 170,190 Z" fill="#2563eb"/>
    <!-- Sektor 5 (90 to 135) Diarsir -->
    <path d="M170,118 L170,190 A72,72 0 0,1 119.1,168.9 Z" fill="#2563eb"/>
    <!-- Sektor 6 (135 to 180) Putih -->
    <path d="M170,118 L119.1,168.9 A72,72 0 0,1 98,118 Z" fill="#ffffff"/>
    <!-- Sektor 7 (180 to 225) Putih -->
    <path d="M170,118 L98,118 A72,72 0 0,1 119.1,67.1 Z" fill="#ffffff"/>
    <!-- Sektor 8 (225 to 270) Putih -->
    <path d="M170,118 L119.1,67.1 A72,72 0 0,1 170,46 Z" fill="#ffffff"/>
  </g>
  <!-- Legenda -->
  <rect x="290" y="64" width="235" height="106" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="308" y="88" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Keterangan Gambar:</text>
  <rect x="308" y="102" width="18" height="18" rx="4" fill="#2563eb" stroke="#1e293b" stroke-width="1.5"/>
  <text x="334" y="116" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Bagian Diarsir Biru (5 bagian)</text>
  <rect x="308" y="132" width="18" height="18" rx="4" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
  <text x="334" y="146" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#475569">Bagian Putih (3 bagian)</text>
</svg>`,

  // Soal 6 (PG): 4 Kartu Bilangan Berbagai Bentuk
  q6_kartu_bilangan: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 165" width="560" height="165">
  <rect width="560" height="165" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Empat Kartu Bilangan Pecahan, Desimal, dan Persen</text>
  <!-- Kartu 1: 3/4 -->
  <g transform="translate(32, 48)">
    <rect x="0" y="0" width="108" height="92" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="54" y="22" font-family="Arial" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">KARTU I</text>
    <text x="54" y="50" font-family="Arial" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">3</text>
    <line x1="36" y1="56" x2="72" y2="56" stroke="#0f172a" stroke-width="2.5"/>
    <text x="54" y="78" font-family="Arial" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">4</text>
  </g>
  <!-- Kartu 2: 0,85 -->
  <g transform="translate(161, 48)">
    <rect x="0" y="0" width="108" height="92" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="54" y="22" font-family="Arial" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">KARTU II</text>
    <text x="54" y="64" font-family="Arial" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">0,85</text>
  </g>
  <!-- Kartu 3: 65% -->
  <g transform="translate(290, 48)">
    <rect x="0" y="0" width="108" height="92" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
    <text x="54" y="22" font-family="Arial" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">KARTU III</text>
    <text x="54" y="64" font-family="Arial" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">65%</text>
  </g>
  <!-- Kartu 4: 4/5 -->
  <g transform="translate(419, 48)">
    <rect x="0" y="0" width="108" height="92" rx="12" fill="#fdf2f8" stroke="#ec4899" stroke-width="2"/>
    <text x="54" y="22" font-family="Arial" font-size="10" font-weight="bold" fill="#be185d" text-anchor="middle">KARTU IV</text>
    <text x="54" y="50" font-family="Arial" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">4</text>
    <line x1="36" y1="56" x2="72" y2="56" stroke="#0f172a" stroke-width="2.5"/>
    <text x="54" y="78" font-family="Arial" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">5</text>
  </g>
</svg>`,

  // Soal 7 (PG): Model Pita Perbandingan (3 bagian vs 5 bagian, total 64 cm)
  q7_model_pita: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 190" width="560" height="190">
  <rect width="560" height="190" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Diagram Model Pita Perbandingan Panjang Pita A dan Pita B</text>
  <text x="30" y="72" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">Pita A</text>
  <g transform="translate(95, 50)">
    <rect x="0" y="0" width="70" height="34" fill="#3b82f6" stroke="#1e40af" stroke-width="2" rx="4"/>
    <rect x="70" y="0" width="70" height="34" fill="#3b82f6" stroke="#1e40af" stroke-width="2" rx="4"/>
    <rect x="140" y="0" width="70" height="34" fill="#3b82f6" stroke="#1e40af" stroke-width="2" rx="4"/>
    <text x="35" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
    <text x="105" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
    <text x="175" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
  </g>
  <text x="30" y="124" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#047857">Pita B</text>
  <g transform="translate(95, 102)">
    <rect x="0" y="0" width="70" height="34" fill="#10b981" stroke="#065f46" stroke-width="2" rx="4"/>
    <rect x="70" y="0" width="70" height="34" fill="#10b981" stroke="#065f46" stroke-width="2" rx="4"/>
    <rect x="140" y="0" width="70" height="34" fill="#10b981" stroke="#065f46" stroke-width="2" rx="4"/>
    <rect x="210" y="0" width="70" height="34" fill="#10b981" stroke="#065f46" stroke-width="2" rx="4"/>
    <rect x="280" y="0" width="70" height="34" fill="#10b981" stroke="#065f46" stroke-width="2" rx="4"/>
    <text x="35" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
    <text x="105" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
    <text x="175" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
    <text x="245" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
    <text x="315" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1 bag</text>
  </g>
  <path d="M460 52 L472 52 L472 134 L460 134" fill="none" stroke="#334155" stroke-width="2"/>
  <text x="480" y="90" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Total:</text>
  <text x="480" y="108" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">64 cm</text>
  <text x="280" y="168" font-family="Arial, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Setiap kotak bernilai sama panjang</text>
</svg>`,

  // Soal 8 (PG): Timbangan Seimbang Aljabar (2n + 250g = 850g)
  q8_timbangan_aljabar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 205" width="560" height="205">
  <rect width="560" height="205" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Neraca Timbangan dalam Keadaan Seimbang</text>
  <!-- Alas & Tumpuan -->
  <rect x="210" y="176" width="140" height="12" rx="4" fill="#334155"/>
  <polygon points="280,126 254,176 306,176" fill="#64748b"/>
  <!-- Lengan Timbangan Horisontal -->
  <rect x="90" y="120" width="380" height="8" rx="4" fill="#1e293b"/>
  <!-- Piringan Kiri -->
  <line x1="145" y1="120" x2="145" y2="106" stroke="#334155" stroke-width="3"/>
  <rect x="52" y="100" width="186" height="8" rx="4" fill="#475569"/>
  <!-- Beban Kiri: 2 kotak n + 250 g -->
  <rect x="64" y="60" width="44" height="40" rx="6" fill="#2563eb" stroke="#1e40af" stroke-width="2"/>
  <text x="86" y="85" font-family="Arial" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">n</text>
  <rect x="114" y="60" width="44" height="40" rx="6" fill="#2563eb" stroke="#1e40af" stroke-width="2"/>
  <text x="136" y="85" font-family="Arial" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">n</text>
  <rect x="166" y="54" width="60" height="46" rx="6" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
  <text x="196" y="82" font-family="Arial" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">250 g</text>
  <!-- Piringan Kanan -->
  <line x1="415" y1="120" x2="415" y2="106" stroke="#334155" stroke-width="3"/>
  <rect x="332" y="100" width="166" height="8" rx="4" fill="#475569"/>
  <!-- Beban Kanan: 850 g -->
  <rect x="370" y="48" width="90" height="52" rx="8" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <text x="415" y="79" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">850 g</text>
  <text x="145" y="156" font-family="Arial" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Sisi Kiri: 2 kotak n + 250 g</text>
  <text x="415" y="156" font-family="Arial" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">Sisi Kanan: 850 g</text>
</svg>`,

  // Soal 9 (PG): Pola Noktah (2, 5, 8, 11)
  q9_pola_noktah: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 185" width="560" height="185">
  <rect width="560" height="185" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Pola Susunan Noktah (Pola ke-1 s.d. Pola ke-4)</text>
  <!-- Pola 1: 2 noktah -->
  <rect x="24" y="42" width="102" height="122" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="62" cy="100" r="8" fill="#2563eb"/><circle cx="88" cy="100" r="8" fill="#2563eb"/>
  <text x="75" y="152" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Pola 1 (2)</text>

  <!-- Pola 2: 5 noktah -->
  <rect x="142" y="42" width="114" height="122" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="174" cy="86" r="8" fill="#2563eb"/><circle cx="199" cy="86" r="8" fill="#2563eb"/><circle cx="224" cy="86" r="8" fill="#2563eb"/>
  <circle cx="186" cy="112" r="8" fill="#2563eb"/><circle cx="212" cy="112" r="8" fill="#2563eb"/>
  <text x="199" y="152" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Pola 2 (5)</text>

  <!-- Pola 3: 8 noktah -->
  <rect x="272" y="42" width="128" height="122" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="298" cy="76" r="7.5" fill="#2563eb"/><circle cx="322" cy="76" r="7.5" fill="#2563eb"/><circle cx="346" cy="76" r="7.5" fill="#2563eb"/><circle cx="370" cy="76" r="7.5" fill="#2563eb"/>
  <circle cx="298" cy="102" r="7.5" fill="#2563eb"/><circle cx="322" cy="102" r="7.5" fill="#2563eb"/><circle cx="346" cy="102" r="7.5" fill="#2563eb"/><circle cx="370" cy="102" r="7.5" fill="#2563eb"/>
  <text x="336" y="152" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Pola 3 (8)</text>

  <!-- Pola 4: 11 noktah -->
  <rect x="416" y="42" width="122" height="122" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="441" cy="68" r="7" fill="#2563eb"/><circle cx="465" cy="68" r="7" fill="#2563eb"/><circle cx="489" cy="68" r="7" fill="#2563eb"/><circle cx="513" cy="68" r="7" fill="#2563eb"/>
  <circle cx="441" cy="92" r="7" fill="#2563eb"/><circle cx="465" cy="92" r="7" fill="#2563eb"/><circle cx="489" cy="92" r="7" fill="#2563eb"/><circle cx="513" cy="92" r="7" fill="#2563eb"/>
  <circle cx="453" cy="116" r="7" fill="#2563eb"/><circle cx="477" cy="116" r="7" fill="#2563eb"/><circle cx="501" cy="116" r="7" fill="#2563eb"/>
  <text x="477" y="152" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Pola 4 (11)</text>
</svg>`,

  // Soal 12 (PG): Gabungan Persegi Panjang (16 x 10) + Segitiga Siku-siku (6 x 10)
  q12_bangun_gabungan: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 205" width="560" height="205">
  <rect width="560" height="205" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Gabungan Bangun Datar Persegi Panjang dan Segitiga Siku-Siku</text>
  <!-- Persegi panjang (x=120..328, y=50..150 -> w=208, h=100) + Segitiga (x=328..406, y=50..150 -> alas=78) -->
  <rect x="120" y="50" width="208" height="100" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
  <polygon points="328,50 406,150 328,150" fill="#bbf7d0" stroke="#15803d" stroke-width="2.5"/>
  <!-- Tanda Siku-Siku -->
  <polyline points="328,136 342,136 342,150" fill="none" stroke="#15803d" stroke-width="2"/>
  <polyline points="120,136 134,136 134,150" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <!-- Label Dimensi -->
  <text x="224" y="105" font-family="Arial" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Persegi Panjang</text>
  <text x="224" y="170" font-family="Arial" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">16 cm</text>
  <text x="367" y="170" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">6 cm</text>
  <text x="90" y="105" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">10 cm</text>
  <text x="280" y="192" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">Tinggi bangun = 10 cm, panjang persegi panjang = 16 cm, alas segitiga = 6 cm</text>
</svg>`,

  // Soal 13 (PG): Akuarium Balok (80 cm x 50 cm x 60 cm) terisi 3/4 bagian
  q13_akuarium_balok: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" width="560" height="220">
  <rect width="560" height="220" rx="16" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">Akuarium Berbentuk Balok (Diisi Air 3/4 Tinggi Akuarium)</text>
  <!-- Balok 3D sederhana: depan (130, 75, 220x105), offset (+48, -32) -->
  <!-- Air 3/4 bagian (tinggi air ~78px dari dasar y=180 -> y=102) -->
  <polygon points="130,102 350,102 398,70 178,70" fill="#bae6fd" opacity="0.8"/>
  <rect x="130" y="102" width="220" height="78" fill="#38bdf8" opacity="0.55"/>
  <polygon points="350,102 398,70 398,148 350,180" fill="#0284c7" opacity="0.45"/>
  <!-- Kerangka Balok -->
  <polygon points="130,75 178,43 398,43 350,75" fill="none" stroke="#0f172a" stroke-width="2"/>
  <rect x="130" y="75" width="220" height="105" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polygon points="350,75 398,43 398,148 350,180" fill="none" stroke="#0f172a" stroke-width="2"/>
  <!-- Garis tersembunyi -->
  <line x1="178" y1="43" x2="178" y2="148" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="130" y1="180" x2="178" y2="148" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="178" y1="148" x2="398" y2="148" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <!-- Label Dimensi -->
  <text x="240" y="198" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">p = 80 cm</text>
  <text x="394" y="174" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a">l = 50 cm</text>
  <text x="415" y="100" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a">t = 60 cm</text>
  <text x="240" y="145" font-family="Arial" font-size="12" font-weight="bold" fill="#0c4a6e" text-anchor="middle">Air = 3/4 Bagian</text>
</svg>`,

  // Soal 14 (PG): Jam Dinding Pukul 04.00 (Sudut 120 derajat)
  q14_jam_sudut: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 215" width="560" height="215">
  <rect width="560" height="215" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Jam Dinding Menunjukkan Pukul 04.00</text>
  <!-- Wajah Jam (cx=280, cy=120, r=76) -->
  <circle cx="280" cy="120" r="76" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
  <!-- Sektor sudut 120 derajat (12 ke 4: -90 deg ke +30 deg, r=36) -->
  <path d="M280,120 L280,84 A36,36 0 0,1 311.2,138 Z" fill="#fef08a" stroke="#ea580c" stroke-width="1.5"/>
  <!-- Angka Jam -->
  <text x="280" y="59" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">12</text>
  <text x="313" y="68" font-family="Arial" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">1</text>
  <text x="336" y="91" font-family="Arial" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">2</text>
  <text x="345" y="124" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">3</text>
  <text x="336" y="157" font-family="Arial" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">4</text>
  <text x="313" y="180" font-family="Arial" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">5</text>
  <text x="280" y="189" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">6</text>
  <text x="247" y="180" font-family="Arial" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">7</text>
  <text x="224" y="157" font-family="Arial" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">8</text>
  <text x="215" y="124" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">9</text>
  <text x="224" y="91" font-family="Arial" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">10</text>
  <text x="247" y="68" font-family="Arial" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">11</text>
  <!-- Jarum Panjang ke 12 -->
  <line x1="280" y1="120" x2="280" y2="63" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Jarum Pendek ke 4 (sudut +30 deg, panjang 46 -> dx=39.8, dy=23) -->
  <line x1="280" y1="120" x2="320" y2="143" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>
  <circle cx="280" cy="120" r="4.5" fill="#0f172a"/>
  <text x="415" y="116" font-family="Arial" font-size="12" font-weight="bold" fill="#9a3412">Sudut terkecil</text>
  <text x="415" y="134" font-family="Arial" font-size="12" font-weight="bold" fill="#9a3412">antara jarum = ?</text>
</svg>`,

  // Soal 16 (PG): Jaring-jaring Kubus Pola 1-4-1 (3 sebagai alas, tutup = 5)
  q16_jaring_kubus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 205" width="560" height="205">
  <rect width="560" height="205" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Jaring-Jaring Kubus (Persegi 3 = Sisi Alas)</text>
  <!-- Grid persegi 46x46 mulai x=188, y=42 -->
  <g transform="translate(188, 42)" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">
    <!-- Baris 1: 1 (col 2) -->
    <rect x="46" y="0" width="46" height="46" fill="#e0f2fe" stroke="#1e293b" stroke-width="2"/>
    <text x="69" y="28" fill="#0f172a">1</text>
    <!-- Baris 2: 2, 3 (ALAS), 4, 5 -->
    <rect x="0" y="46" width="46" height="46" fill="#e0f2fe" stroke="#1e293b" stroke-width="2"/>
    <text x="23" y="74" fill="#0f172a">2</text>
    <rect x="46" y="46" width="46" height="46" fill="#2563eb" stroke="#1e293b" stroke-width="2"/>
    <text x="69" y="69" fill="#ffffff">3</text>
    <text x="69" y="84" font-size="9" fill="#dbeafe">ALAS</text>
    <rect x="92" y="46" width="46" height="46" fill="#e0f2fe" stroke="#1e293b" stroke-width="2"/>
    <text x="115" y="74" fill="#0f172a">4</text>
    <rect x="138" y="46" width="46" height="46" fill="#e0f2fe" stroke="#1e293b" stroke-width="2"/>
    <text x="161" y="74" fill="#0f172a">5</text>
    <!-- Baris 3: 6 (col 3) -->
    <rect x="92" y="92" width="46" height="46" fill="#e0f2fe" stroke="#1e293b" stroke-width="2"/>
    <text x="115" y="120" fill="#0f172a">6</text>
  </g>
</svg>`,

  // Soal 18 (PG): Diagram Lingkaran Hobi 40 Siswa (35%, 25%, 25%, Melukis ?%)
  q18_diagram_lingkaran: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" width="560" height="220">
  <rect width="560" height="220" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Diagram Lingkaran Kegemaran 40 Siswa Kelas VI</text>
  <!-- Pie Chart pusat (155, 122), r = 74 -->
  <g stroke="#ffffff" stroke-width="2">
    <!-- Sepak Bola 35% (126 deg: -90 to 36) -->
    <path d="M155,122 L155,48 A74,74 0 0,1 214.9,165.5 Z" fill="#2563eb"/>
    <!-- Membaca 25% (90 deg: 36 to 126) -->
    <path d="M155,122 L214.9,165.5 A74,74 0 0,1 111.5,181.9 Z" fill="#10b981"/>
    <!-- Tari Bali 25% (90 deg: 126 to 216) -->
    <path d="M155,122 L111.5,181.9 A74,74 0 0,1 95.1,78.5 Z" fill="#f59e0b"/>
    <!-- Melukis 15% (54 deg: 216 to 270) -->
    <path d="M155,122 L95.1,78.5 A74,74 0 0,1 155,48 Z" fill="#ec4899"/>
  </g>
  <!-- Label Persentase di Sektor -->
  <text x="196" y="106" font-family="Arial" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">35%</text>
  <text x="160" y="170" font-family="Arial" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">25%</text>
  <text x="108" y="132" font-family="Arial" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">25%</text>
  <text x="132" y="80" font-family="Arial" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">?%</text>
  <!-- Legenda Kanan -->
  <rect x="285" y="54" width="240" height="136" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="303" y="76" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a">Keterangan (Total: 40 Siswa)</text>
  <rect x="303" y="90" width="14" height="14" rx="3" fill="#2563eb"/>
  <text x="325" y="102" font-family="Arial" font-size="12" font-weight="bold" fill="#1e3a8a">Sepak Bola (35%)</text>
  <rect x="303" y="114" width="14" height="14" rx="3" fill="#10b981"/>
  <text x="325" y="126" font-family="Arial" font-size="12" font-weight="bold" fill="#065f46">Membaca (25%)</text>
  <rect x="303" y="138" width="14" height="14" rx="3" fill="#f59e0b"/>
  <text x="325" y="150" font-family="Arial" font-size="12" font-weight="bold" fill="#92400e">Tari Bali (25%)</text>
  <rect x="303" y="162" width="14" height="14" rx="3" fill="#ec4899"/>
  <text x="325" y="174" font-family="Arial" font-size="12" font-weight="bold" fill="#9d174d">Melukis (Sisa Bagian)</text>
</svg>`,

  // Soal 19 (PGK): Denah Taman Sekolah 8 cm x 5 cm, Skala 1 : 300
  q19_denah_taman: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 205" width="560" height="205">
  <rect width="560" height="205" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Denah Taman Sekolah (Skala 1 : 300)</text>
  <rect x="130" y="45" width="240" height="115" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="2.5"/>
  <text x="250" y="108" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#14532d" text-anchor="middle">TAMAN SEKOLAH</text>
  <line x1="130" y1="175" x2="370" y2="175" stroke="#0f172a" stroke-width="1.5"/>
  <line x1="130" y1="169" x2="130" y2="181" stroke="#0f172a" stroke-width="1.5"/>
  <line x1="370" y1="169" x2="370" y2="181" stroke="#0f172a" stroke-width="1.5"/>
  <text x="250" y="192" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Panjang pada denah = 8 cm</text>
  <line x1="390" y1="45" x2="390" y2="160" stroke="#0f172a" stroke-width="1.5"/>
  <line x1="384" y1="45" x2="396" y2="45" stroke="#0f172a" stroke-width="1.5"/>
  <line x1="384" y1="160" x2="396" y2="160" stroke="#0f172a" stroke-width="1.5"/>
  <text x="404" y="100" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Lebar denah</text>
  <text x="404" y="116" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">= 5 cm</text>
</svg>`,

  // Soal 21 (PGK): Diagram Batang Buku Pojok Baca (Fiksi 24, Sains 16, Komik Edukasi 12, Ensiklopedia 8)
  q21_diagram_buku: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 225" width="560" height="225">
  <rect width="560" height="225" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Diagram Batang Koleksi Buku Pojok Baca Kelas VI</text>
  <line x1="75" y1="45" x2="75" y2="178" stroke="#475569" stroke-width="2"/>
  <line x1="75" y1="178" x2="515" y2="178" stroke="#475569" stroke-width="2"/>
  <line x1="75" y1="148" x2="515" y2="148" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="75" y1="118" x2="515" y2="118" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="75" y1="88" x2="515" y2="88" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="75" y1="58" x2="515" y2="58" stroke="#e2e8f0" stroke-width="1"/>
  <text x="65" y="182" font-family="Arial" font-size="10" fill="#475569" text-anchor="end">0</text>
  <text x="65" y="152" font-family="Arial" font-size="10" fill="#475569" text-anchor="end">6</text>
  <text x="65" y="122" font-family="Arial" font-size="10" fill="#475569" text-anchor="end">12</text>
  <text x="65" y="92" font-family="Arial" font-size="10" fill="#475569" text-anchor="end">18</text>
  <text x="65" y="62" font-family="Arial" font-size="10" fill="#475569" text-anchor="end">24</text>
  <rect x="105" y="58" width="64" height="120" rx="4" fill="#2563eb"/>
  <text x="137" y="52" font-family="Arial" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">24</text>
  <text x="137" y="198" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Fiksi</text>
  <rect x="210" y="98" width="64" height="80" rx="4" fill="#10b981"/>
  <text x="242" y="92" font-family="Arial" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">16</text>
  <text x="242" y="198" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Sains</text>
  <rect x="315" y="118" width="64" height="60" rx="4" fill="#f59e0b"/>
  <text x="347" y="112" font-family="Arial" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">12</text>
  <text x="347" y="198" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Komik Edukasi</text>
  <rect x="420" y="138" width="64" height="40" rx="4" fill="#8b5cf6"/>
  <text x="452" y="132" font-family="Arial" font-size="12" font-weight="bold" fill="#5b21b6" text-anchor="middle">8</text>
  <text x="452" y="198" font-family="Arial" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Ensiklopedia</text>
</svg>`,

  // Soal 22 (PGK Kategori): Kubus panjang rusuk s = 12 cm
  q22_kubus_rusuk: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 205" width="560" height="205">
  <rect width="560" height="205" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Bangun Ruang Kubus (Panjang Rusuk s = 12 cm)</text>
  <!-- Kubus sisi depan 96x96 (x=205..301, y=72..168), offset (+38, -28) -->
  <polygon points="205,72 243,44 339,44 301,72" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
  <rect x="205" y="72" width="96" height="96" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
  <polygon points="301,72 339,44 339,140 301,168" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
  <!-- Garis tersembunyi -->
  <line x1="243" y1="44" x2="243" y2="140" stroke="#1e3a8a" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="205" y1="168" x2="243" y2="140" stroke="#1e3a8a" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="243" y1="140" x2="339" y2="140" stroke="#1e3a8a" stroke-width="1.5" stroke-dasharray="4 4"/>
  <!-- Label Dimensi -->
  <text x="253" y="187" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">12 cm</text>
  <text x="358" y="160" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a">12 cm</text>
  <text x="366" y="96" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a">12 cm</text>
</svg>`,

  // Soal 23 (PGK Kategori): Promo Diskon Tas Sekolah (Rp160.000, Diskon 25%)
  q23_diskon_tas: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 180" width="560" height="180">
  <rect width="560" height="180" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#9f1239" text-anchor="middle">Label Promo Toko Alat Tulis Sekolah</text>
  <!-- Ilustrasi Tas Sederhana -->
  <g transform="translate(80, 48)">
    <path d="M35,16 C35,4 65,4 65,16" fill="none" stroke="#1e40af" stroke-width="4"/>
    <rect x="18" y="16" width="64" height="86" rx="14" fill="#2563eb" stroke="#1e3a8a" stroke-width="2.5"/>
    <rect x="28" y="54" width="44" height="36" rx="8" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
    <line x1="28" y1="64" x2="72" y2="64" stroke="#1e3a8a" stroke-width="2"/>
  </g>
  <!-- Info Harga & Diskon -->
  <rect x="215" y="46" width="285" height="110" rx="12" fill="#ffffff" stroke="#fecdd3" stroke-width="2"/>
  <text x="235" y="74" font-family="Arial" font-size="12" font-weight="bold" fill="#475569">Tas Ransel Sekolah</text>
  <text x="235" y="102" font-family="Arial" font-size="14" font-weight="bold" fill="#64748b">Harga Awal: Rp160.000,00</text>
  <rect x="235" y="114" width="145" height="28" rx="8" fill="#e11d48"/>
  <text x="307.5" y="133" font-family="Arial" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">DISKON 25%</text>
</svg>`,

  // Soal 24 (PGK Kategori): Promo 2 Paket Pensil
  q24_paket_pensil: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 185" width="560" height="185">
  <rect width="560" height="185" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Daftar Paket Harga Pensil di Koperasi Sekolah</text>
  <rect x="30" y="44" width="235" height="120" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="147.5" y="72" font-family="Arial" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">PAKET A</text>
  <text x="147.5" y="102" font-family="Arial" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">Isi: 5 Batang Pensil</text>
  <rect x="65" y="118" width="165" height="30" rx="8" fill="#1d4ed8"/>
  <text x="147.5" y="138" font-family="Arial" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Harga: Rp12.500,00</text>
  <rect x="295" y="44" width="235" height="120" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="412.5" y="72" font-family="Arial" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">PAKET B</text>
  <text x="412.5" y="102" font-family="Arial" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">Isi: 8 Batang Pensil</text>
  <rect x="330" y="118" width="165" height="30" rx="8" fill="#059669"/>
  <text x="412.5" y="138" font-family="Arial" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Harga: Rp18.400,00</text>
</svg>`,

  // Soal 25 (PGK Kategori): Debit Kran Air (15 liter dalam 3 menit) + Galon 20 liter
  q25_kran_galon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 190" width="560" height="190">
  <rect width="560" height="190" rx="16" fill="#ecfeff" stroke="#67e8f9" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#155e75" text-anchor="middle">Ilustrasi Pengukuran Debit Kran Air Sekolah</text>
  <!-- Kran & Wadah Ukur Kiri -->
  <g transform="translate(55, 46)">
    <rect x="0" y="0" width="220" height="122" rx="12" fill="#ffffff" stroke="#06b6d4" stroke-width="2"/>
    <path d="M25,22 L75,22 L75,40" fill="none" stroke="#475569" stroke-width="8" stroke-linecap="round"/>
    <line x1="75" y1="45" x2="75" y2="75" stroke="#38bdf8" stroke-width="4" stroke-dasharray="4 3"/>
    <rect x="46" y="64" width="58" height="44" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
    <text x="155" y="54" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Volume: 15 Liter</text>
    <text x="155" y="76" font-family="Arial" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">Waktu: 3 Menit</text>
    <text x="155" y="98" font-family="Arial" font-size="10" fill="#475569" text-anchor="middle">(Aliran stabil)</text>
  </g>
  <!-- Galon Kanan -->
  <g transform="translate(315, 46)">
    <rect x="0" y="0" width="190" height="122" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <rect x="44" y="18" width="22" height="12" rx="3" fill="#0369a1"/>
    <rect x="28" y="30" width="54" height="72" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="55" y="70" font-family="Arial" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">GALON</text>
    <text x="135" y="58" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Kapasitas:</text>
    <text x="135" y="78" font-family="Arial" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">20 Liter</text>
  </g>
</svg>`,

  // Soal 26 (PGK Kategori): Peta Jalur Denpasar - Negara - Gilimanuk
  q26_peta_jalur: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 180" width="560" height="180">
  <rect width="560" height="180" rx="16" fill="#fefce8" stroke="#fde047" stroke-width="2"/>
  <text x="280" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#854d0e" text-anchor="middle">Peta Jalur Darat (Skala 1 : 1.500.000)</text>
  <line x1="70" y1="95" x2="310" y2="95" stroke="#2563eb" stroke-width="4"/>
  <line x1="310" y1="95" x2="470" y2="95" stroke="#dc2626" stroke-width="4"/>
  <circle cx="70" cy="95" r="9" fill="#1d4ed8" stroke="#ffffff" stroke-width="2"/>
  <text x="70" y="125" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Denpasar</text>
  <circle cx="310" cy="95" r="9" fill="#059669" stroke="#ffffff" stroke-width="2"/>
  <text x="310" y="125" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Negara</text>
  <circle cx="470" cy="95" r="9" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
  <text x="470" y="125" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Gilimanuk</text>
  <rect x="145" y="60" width="90" height="24" rx="6" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="190" y="76" font-family="Arial" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">6 cm</text>
  <rect x="345" y="60" width="90" height="24" rx="6" fill="#fee2e2" stroke="#ef4444"/>
  <text x="390" y="76" font-family="Arial" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">3 cm</text>
  <text x="280" y="158" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">Jarak pada peta: Denpasar–Negara = 6 cm, Negara–Gilimanuk = 3 cm</text>
</svg>`,

  // Soal 30 (PGK Kategori): Kantong Peluang (5 Merah, 3 Biru, 2 Kuning = 10 Kelereng)
  q30_kantong_peluang: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 205" width="560" height="205">
  <rect width="560" height="205" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Kantong Berisi 10 Butir Kelereng (Pengambilan Acak)</text>
  <!-- Kantong Kiri -->
  <path d="M105,54 L185,54 L205,168 C207,180 198,186 186,186 L104,186 C92,186 83,180 85,168 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
  <rect x="108" y="42" width="74" height="14" rx="5" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
  <!-- 5 Kelereng Merah -->
  <circle cx="114" cy="116" r="11" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
  <circle cx="144" cy="116" r="11" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
  <circle cx="174" cy="116" r="11" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
  <circle cx="129" cy="92" r="11" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
  <circle cx="161" cy="92" r="11" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
  <!-- 3 Kelereng Biru -->
  <circle cx="114" cy="144" r="11" fill="#2563eb" stroke="#1e40af" stroke-width="1.5"/>
  <circle cx="144" cy="144" r="11" fill="#2563eb" stroke="#1e40af" stroke-width="1.5"/>
  <circle cx="174" cy="144" r="11" fill="#2563eb" stroke="#1e40af" stroke-width="1.5"/>
  <!-- 2 Kelereng Kuning -->
  <circle cx="129" cy="168" r="11" fill="#eab308" stroke="#a16207" stroke-width="1.5"/>
  <circle cx="161" cy="168" r="11" fill="#eab308" stroke="#a16207" stroke-width="1.5"/>
  <!-- Legenda Kanan -->
  <rect x="255" y="54" width="265" height="128" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="275" y="78" font-family="Arial" font-size="12" font-weight="bold" fill="#0f172a">Isi Kantong (Total 10 Kelereng):</text>
  <circle cx="285" cy="102" r="8" fill="#dc2626"/><text x="303" y="106" font-family="Arial" font-size="12" font-weight="bold" fill="#991b1b">5 Kelereng Merah</text>
  <circle cx="285" cy="128" r="8" fill="#2563eb"/><text x="303" y="132" font-family="Arial" font-size="12" font-weight="bold" fill="#1e40af">3 Kelereng Biru</text>
  <circle cx="285" cy="154" r="8" fill="#eab308"/><text x="303" y="158" font-family="Arial" font-size="12" font-weight="bold" fill="#854d0e">2 Kelereng Kuning</text>
</svg>`,
};
