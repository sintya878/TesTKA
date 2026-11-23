import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika — Lingkup Materi: Materi TKA Kelas 6
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Materi TKA Kelas 6 Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah operasi hitung campuran bilangan cacah dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan soal cerita persediaan, penjualan, dan penambahan stok buku tulis di koperasi, peserta didik dapat menentukan banyak buku tulis akhir.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyatakan bagian pecahan dari representasi gambar ke dalam bentuk persen.',
    indikatorSoal:
      'Disajikan gambar lingkaran yang dibagi menjadi 8 juring sama besar dengan 5 juring diarsir, peserta didik dapat mengubah nilai bagian diarsir ke bentuk persen.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan konsep Kelipatan Persekutuan Terkecil (KPK) untuk menyelesaikan masalah jadwal berulang.',
    indikatorSoal:
      'Disajikan jadwal latihan menari dua siswa yang berbeda interval harinya beserta tanggal awal bersama, peserta didik dapat menentukan tanggal latihan bersama berikutnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan konsep Faktor Persekutuan Terbesar (FPB) untuk pembagian kelompok yang sama banyak.',
    indikatorSoal:
      'Disajikan jumlah dua jenis barang bantuan sosial, peserta didik dapat menentukan jumlah penerima terbanyak agar setiap anak mendapat bagian sama rata.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi hitung pengurangan pecahan campuran, desimal, dan pecahan biasa.',
    indikatorSoal:
      'Disajikan berat awal tepung terigu dalam pecahan campuran dan pemakaian dalam desimal serta pecahan biasa, peserta didik dapat menentukan sisa tepung.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan berbagai bentuk pecahan (biasa, desimal, dan persen).',
    indikatorSoal:
      'Disajikan gambar empat kartu bilangan (3/4, 0,85, 65%, dan 4/5), peserta didik dapat mengurutkan nilainya dari terkecil ke terbesar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perbandingan rasio menggunakan diagram model pita (bar model).',
    indikatorSoal:
      'Disajikan gambar model pita Pita A (3 bagian) dan Pita B (5 bagian) beserta panjang totalnya, peserta didik dapat menentukan panjang Pita B.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai variabel yang belum diketahui pada kalimat matematika kesetaraan.',
    indikatorSoal:
      'Disajikan gambar neraca timbangan seimbang dengan dua kotak bermassa n dan pemberat yang diketahui, peserta didik dapat menentukan nilai n.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi dan melanjutkan pola bilangan berdasarkan konfigurasi objek gambar.',
    indikatorSoal:
      'Disajikan gambar pola noktah ke-1 sampai ke-4, peserta didik dapat menentukan banyak noktah pada pola ke-7.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat mengonversi dan menjumlahkan berbagai satuan berat baku (ton, kuintal, dan kilogram).',
    indikatorSoal:
      'Disajikan berat tiga jenis muatan hasil panen dalam satuan ton, kuintal, dan kg, peserta didik dapat menghitung berat total muatan dalam kilogram.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual yang berkaitan dengan kecepatan, jarak, dan waktu tempuh.',
    indikatorSoal:
      'Disajikan jarak tempuh, waktu berangkat, dan kecepatan rata-rata kendaraan, peserta didik dapat menentukan waktu tiba di tujuan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung luas daerah gabungan dua bangun datar sederhana.',
    indikatorSoal:
      'Disajikan gambar gabungan persegi panjang dan segitiga siku-siku beserta ukurannya, peserta didik dapat menghitung luas total bangun gabungan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan volume air pada bangun ruang balok dalam satuan liter.',
    indikatorSoal:
      'Disajikan gambar akuarium berbentuk balok dengan ukuran p, l, t yang diisi 3/4 bagian, peserta didik dapat menghitung volume air dalam liter.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan besar sudut yang dibentuk oleh kedua jarum jam pada waktu tertentu.',
    indikatorSoal:
      'Disajikan gambar jam dinding yang menunjukkan pukul 04.00, peserta didik dapat menentukan besar sudut terkecil antara jarum pendek dan jarum panjang.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan sifat jumlah sudut pada segitiga untuk menentukan besar sudut yang belum diketahui.',
    indikatorSoal:
      'Disajikan besar sudut puncak sebuah segitiga sama kaki, peserta didik dapat menghitung besar masing-masing sudut alasnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan sisi yang saling berhadapan pada jaring-jaring kubus.',
    indikatorSoal:
      'Disajikan gambar jaring-jaring kubus pola 1-4-1 dengan satu sisi ditandai sebagai alas, peserta didik dapat menentukan nomor sisi tutup kubus.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah yang berkaitan dengan nilai rata-rata (mean) sekumpulan data.',
    indikatorSoal:
      'Disajikan nilai 4 kali tes ulangan dan target nilai rata-rata 5 kali tes, peserta didik dapat menentukan nilai yang harus diraih pada tes ke-5.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menafsirkan diagram lingkaran berbentuk persentase untuk menentukan frekuensi suatu kategori.',
    indikatorSoal:
      'Disajikan diagram lingkaran hobi 40 siswa kelas VI, peserta didik dapat menghitung banyak siswa pada kategori yang persentasenya belum tercantum.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ukuran denah berskala untuk menentukan ukuran sebenarnya dan keliling bangun datar.',
    indikatorSoal:
      'Disajikan gambar denah taman sekolah berskala 1 : 300 dan 3 pilihan pernyataan, peserta didik dapat memilih semua pernyataan benar tentang ukuran dan keliling.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan faktor prima, FPB, dan KPK dari dua bilangan asli.',
    indikatorSoal:
      'Disajikan dua bilangan asli (24 dan 36) dan 3 pilihan pernyataan, peserta didik dapat memilih semua pernyataan benar terkait FPB, KPK, dan faktor prima.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menafsirkan diagram batang untuk menghitung rata-rata serta rasio antar kategori data.',
    indikatorSoal:
      'Disajikan diagram batang koleksi buku pojok baca dan 3 pilihan pernyataan, peserta didik dapat memilih semua pernyataan benar terkait rata-rata dan rasio.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ciri-ciri, volume, dan luas permukaan bangun ruang kubus.',
    indikatorSoal:
      'Disajikan gambar kubus berukuran rusuk 12 cm, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan tentang rusuk/sisi, volume, dan luas permukaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah aritmetika sosial yang melibatkan potongan harga (diskon) dalam persen.',
    indikatorSoal:
      'Disajikan gambar label harga tas Rp160.000,00 dengan diskon 25%, peserta didik dapat menilai kebenaran (Benar/Salah) 3 pernyataan besar diskon, harga bayar, dan kembalian.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan harga satuan dua paket barang dari informasi visual untuk menentukan pilihan yang lebih hemat.',
    indikatorSoal:
      'Disajikan gambar daftar dua paket harga pensil koperasi, peserta didik dapat menilai kebenaran (Benar/Salah) 3 pernyataan harga satuan dan selisih kehematan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan konsep debit aliran air untuk menghitung volume dan waktu pengisian wadah.',
    indikatorSoal:
      'Disajikan gambar ilustrasi kran air (15 liter/3 menit) dan galon 20 liter, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan tentang debit, volume, dan waktu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan jarak sebenarnya dan rasio jarak antar kota dari peta berskala.',
    indikatorSoal:
      'Disajikan gambar peta jalur tiga kota beserta skala 1 : 1.500.000, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan jarak sebenarnya dan rasio jarak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan keliling, luas, dan menganalisis sifat sudut bangun datar belah ketupat.',
    indikatorSoal:
      'Disajikan ukuran sisi dan kedua diagonal belah ketupat PQRS, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan keliling, luas, dan sifat sudutnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah operasi penjumlahan, pengurangan, dan selisih bilangan bulat negatif.',
    indikatorSoal:
      'Disajikan data suhu ruang pendingin negatif dan suhu ruang dapur positif, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan perubahan dan selisih suhu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan modus, median, dan jangkauan dari sekumpulan data tunggal.',
    indikatorSoal:
      'Disajikan data nilai ulangan 9 siswa, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan mengenai modus, median, dan selisih nilai ekstrem.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan peluang kejadian sederhana dan mengidentifikasi kejadian mustahil pada percobaan acak.',
    indikatorSoal:
      'Disajikan gambar kantong berisi 10 kelereng (5 merah, 3 biru, 2 kuning), peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan peluang terambilnya warna kelereng.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('skala') || t.includes('debit') || t.includes('satuan') || t.includes('kecepatan') || t.includes('luas') || t.includes('volume')) {
    return 'Pengukuran';
  }
  if (t.includes('sudut') || t.includes('jaring') || t.includes('bangun') || t.includes('denah') || t.includes('kubus') || t.includes('ketupat')) {
    return 'Geometri';
  }
  if (t.includes('diagram') || t.includes('data') || t.includes('rata-rata') || t.includes('modus') || t.includes('peluang')) {
    return 'Analisis Data dan Peluang';
  }
  if (t.includes('bilangan') || t.includes('pecahan') || t.includes('kpk') || t.includes('fpb') || t.includes('diskon') || t.includes('suhu')) {
    return 'Bilangan';
  }
  return 'Aljabar';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
