import { Question } from './types';

export const QUESTION_POOL: Question[] = [
  // --- Basic Concepts & Algorithm ---
  {
    id: 1,
    question: "Apa itu 'Algoritma'?",
    options: [
      "Lagu untuk menari",
      "Langkah-langkah instruksi untuk menyelesaikan tugas",
      "Nama robot pintar",
      "Jenis komputer baru"
    ],
    correctAnswer: 1,
    explanation: "Algoritma adalah urutan langkah-langkah atau instruksi untuk menyelesaikan suatu masalah."
  },
  {
    id: 2,
    question: "Apa peran 'Input' pada komputer?",
    options: [
      "Memproses data",
      "Menampilkan gambar",
      "Memasukkan informasi ke komputer",
      "Menyimpan file"
    ],
    correctAnswer: 2,
    explanation: "Input adalah informasi atau perintah yang kita berikan ke komputer, misalnya lewat keyboard."
  },
  {
    id: 3,
    question: "Bagaimana urutan kerja komputer yang benar?",
    options: [
      "Output → Input → Proses",
      "Proses → Output → Input",
      "Input → Proses → Output",
      "Input → Output → Proses"
    ],
    correctAnswer: 2,
    explanation: "Komputer menerima Input, melakukan Proses (berpikir), lalu menghasilkan Output."
  },
  {
    id: 4,
    question: "Apa fungsi tombol 'Space' (Spasi) pada keyboard?",
    options: [
      "Menghapus tulisan",
      "Pindah baris baru",
      "Membuat jarak antar kata",
      "Keluar dari program"
    ],
    correctAnswer: 2,
    explanation: "Tombol Spasi adalah tombol paling panjang yang digunakan untuk memberi jarak antar kata."
  },
  {
    id: 5,
    question: "Apa fungsi tombol 'Enter' pada keyboard?",
    options: [
      "Pindah ke baris baru",
      "Menghapus huruf",
      "Membuat jarak",
      "Mematikan komputer"
    ],
    correctAnswer: 0,
    explanation: "Tombol Enter digunakan untuk memindahkan kursor ke baris baru atau mengirim perintah."
  },
  
  // --- Hardware (CPU, RAM, ROM, GPU) ---
  {
    id: 6,
    question: "CPU sering disebut sebagai apa bagi komputer?",
    options: [
      "Wajah komputer",
      "Otak komputer",
      "Tangan komputer",
      "Kaki komputer"
    ],
    correctAnswer: 1,
    explanation: "CPU (Central Processing Unit) adalah otak komputer yang memproses semua perintah."
  },
  {
    id: 7,
    question: "Apa kepanjangan dari CPU?",
    options: [
      "Central Power Unit",
      "Computer Personal Unit",
      "Central Processing Unit",
      "Control Panel Unit"
    ],
    correctAnswer: 2,
    explanation: "CPU singkatan dari Central Processing Unit atau Unit Pemrosesan Pusat."
  },
  {
    id: 8,
    question: "Apa tugas utama GPU?",
    options: [
      "Menyimpan data permanen",
      "Mengatur suara",
      "Menentukan warna dan kecerahan piksel di layar",
      "Mengetik huruf"
    ],
    correctAnswer: 2,
    explanation: "GPU (Graphics Processing Unit) bertugas mengolah gambar dan tampilan visual di layar."
  },
  {
    id: 9,
    question: "Apa itu RAM?",
    options: [
      "Tempat penyimpanan sementara",
      "Tempat penyimpanan permanen",
      "Alat untuk mencetak",
      "Kabel listrik"
    ],
    correctAnswer: 0,
    explanation: "RAM (Random Access Memory) menyimpan data sementara dan akan hilang saat komputer mati."
  },
  {
    id: 10,
    question: "Apa perbedaan RAM dan ROM?",
    options: [
      "RAM untuk game, ROM untuk belajar",
      "RAM data sementara, ROM data permanen/penting",
      "RAM di luar, ROM di dalam",
      "Tidak ada bedanya"
    ],
    correctAnswer: 1,
    explanation: "Data di RAM bisa hilang, sedangkan ROM (Read-Only Memory) menyimpan instruksi penting yang tidak hilang meski komputer mati."
  },
  {
    id: 11,
    question: "Manakah yang termasuk perangkat Output?",
    options: [
      "Mouse",
      "Keyboard",
      "Monitor (Layar)",
      "Kamera"
    ],
    correctAnswer: 2,
    explanation: "Monitor adalah perangkat output karena menampilkan hasil proses komputer kepada kita."
  },
  {
    id: 12,
    question: "Speaker termasuk perangkat apa?",
    options: [
      "Input",
      "Proses",
      "Output",
      "Penyimpanan"
    ],
    correctAnswer: 2,
    explanation: "Speaker mengeluarkan suara hasil olahan komputer, jadi termasuk Output."
  },
  {
    id: 13,
    question: "Mouse digunakan untuk apa?",
    options: [
      "Mengetik huruf",
      "Menggerakkan penunjuk (kursor) di layar",
      "Mencetak kertas",
      "Mendengarkan musik"
    ],
    correctAnswer: 1,
    explanation: "Mouse adalah alat input untuk menggerakkan kursor dan mengklik objek di layar."
  },
  {
    id: 14,
    question: "Apa itu Motherboard?",
    options: [
      "Papan sirkuit utama tempat komponen terhubung",
      "Papan ketik",
      "Layar komputer",
      "Kabel internet"
    ],
    correctAnswer: 0,
    explanation: "Motherboard adalah papan sirkuit utama yang menghubungkan CPU, RAM, dan komponen lainnya."
  },
  {
    id: 15,
    question: "Apa yang terjadi pada data di RAM saat komputer dimatikan?",
    options: [
      "Tersimpan selamanya",
      "Hilang atau terhapus",
      "Dicetak ke kertas",
      "Dikirim ke internet"
    ],
    correctAnswer: 1,
    explanation: "RAM adalah memori volatil, artinya datanya hilang jika tidak ada aliran listrik."
  },

  // --- Software & OS ---
  {
    id: 16,
    question: "Apa itu Sistem Operasi (SO)?",
    options: [
      "Mesin komputer",
      "Program kapten yang mengatur komputer",
      "Video game",
      "Alat pembersih virus"
    ],
    correctAnswer: 1,
    explanation: "Sistem Operasi seperti Windows atau Android adalah 'kapten' yang mengatur semua aplikasi dan perangkat keras."
  },
  {
    id: 17,
    question: "Manakah yang merupakan Sistem Operasi untuk ponsel?",
    options: [
      "Windows",
      "macOS",
      "Android",
      "PowerPoint"
    ],
    correctAnswer: 2,
    explanation: "Android dan iOS adalah contoh sistem operasi populer untuk smartphone."
  },
  {
    id: 18,
    question: "Apa bedanya Hardware dan Software?",
    options: [
      "Hardware bisa disentuh, Software tidak bisa",
      "Software bisa disentuh, Hardware tidak bisa",
      "Hardware itu game, Software itu alat",
      "Sama saja"
    ],
    correctAnswer: 0,
    explanation: "Hardware adalah perangkat keras fisik, sedangkan Software adalah perangkat lunak (program/aplikasi)."
  },
  {
    id: 19,
    question: "Game yang kamu mainkan termasuk jenis apa?",
    options: [
      "Hardware",
      "Software",
      "Brainware",
      "Tupperware"
    ],
    correctAnswer: 1,
    explanation: "Game adalah aplikasi atau program komputer, jadi termasuk Software."
  },
  {
    id: 20,
    question: "Linux dan Ubuntu adalah contoh dari...",
    options: [
      "Merek Laptop",
      "Sistem Operasi",
      "Jenis Mouse",
      "Game online"
    ],
    correctAnswer: 1,
    explanation: "Linux dan Ubuntu adalah contoh Sistem Operasi komputer, sama seperti Windows dan macOS."
  },

  // --- Binary & Units ---
  {
    id: 21,
    question: "Sistem bilangan biner hanya terdiri dari angka?",
    options: [
      "1 sampai 10",
      "0 dan 1",
      "1, 2, 3",
      "A dan B"
    ],
    correctAnswer: 1,
    explanation: "Biner adalah bahasa mesin yang hanya menggunakan dua simbol: 0 dan 1."
  },
  {
    id: 22,
    question: "Dalam biner, angka 1 biasanya berarti...",
    options: [
      "Mati / Off",
      "Menyala / On",
      "Rusak",
      "Kosong"
    ],
    correctAnswer: 1,
    explanation: "Dalam sistem saklar digital, 1 berarti arus mengalir (Menyala/On) dan 0 berarti Mati/Off."
  },
  {
    id: 23,
    question: "Unit terkecil informasi dalam komputer disebut?",
    options: [
      "Byte",
      "Bit",
      "Mega",
      "Kilo"
    ],
    correctAnswer: 1,
    explanation: "Bit (Binary Digit) adalah unit terkecil, hanya berupa 0 atau 1."
  },
  {
    id: 24,
    question: "Berapa bit dalam 1 Byte?",
    options: [
      "4 bit",
      "8 bit",
      "10 bit",
      "16 bit"
    ],
    correctAnswer: 1,
    explanation: "Komputer menggabungkan 8 bit menjadi satu kesatuan yang disebut 1 Byte."
  },
  {
    id: 25,
    question: "Apa itu Piksel?",
    options: [
      "Titik warna terkecil pada layar",
      "Kabel monitor",
      "Tombol keyboard",
      "Suara komputer"
    ],
    correctAnswer: 0,
    explanation: "Piksel adalah titik-titik kecil yang menyusun gambar di layar monitor."
  },
  {
    id: 26,
    question: "Kode standar untuk mengubah huruf menjadi angka biner disebut?",
    options: [
      "ABC",
      "ASCII",
      "QWERTY",
      "HTML"
    ],
    correctAnswer: 1,
    explanation: "ASCII adalah sistem standar yang memberi kode angka untuk setiap huruf dan simbol."
  },

  // --- History ---
  {
    id: 27,
    question: "Siapa penemu konsep algoritma?",
    options: [
      "Al-Khawarizmi",
      "Albert Einstein",
      "Thomas Edison",
      "Alexander Graham Bell"
    ],
    correctAnswer: 0,
    explanation: "Al-Khawarizmi, ilmuwan Persia, adalah orang yang mengembangkan konsep algoritma dan aljabar."
  },
  {
    id: 28,
    question: "Siapa programmer komputer pertama di dunia?",
    options: [
      "Bill Gates",
      "Steve Jobs",
      "Ada Lovelace",
      "Alan Turing"
    ],
    correctAnswer: 2,
    explanation: "Ada Lovelace menulis algoritma pertama untuk mesin Analytical Engine pada abad ke-19."
  },
  {
    id: 29,
    question: "Siapa penemu World Wide Web (WWW)?",
    options: [
      "Tim Berners-Lee",
      "Mark Zuckerberg",
      "Elon Musk",
      "Charles Babbage"
    ],
    correctAnswer: 0,
    explanation: "Tim Berners-Lee menciptakan WWW pada tahun 1990-an di CERN."
  },
  {
    id: 30,
    question: "Mesin 'Analytical Engine' dirancang oleh siapa?",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "Tim Berners-Lee",
      "Al-Khawarizmi"
    ],
    correctAnswer: 1,
    explanation: "Charles Babbage merancang Analytical Engine yang dianggap sebagai nenek moyang komputer mekanik."
  },
  {
    id: 31,
    question: "Apa nama komputer besar pertama di tahun 1940-an?",
    options: [
      "LAPTOP",
      "ENIAC",
      "IPHONE",
      "ANDROID"
    ],
    correctAnswer: 1,
    explanation: "ENIAC adalah salah satu komputer elektronik pertama yang ukurannya sangat besar hingga memenuhi ruangan."
  },
  {
    id: 32,
    question: "Apa kontribusi Alan Turing?",
    options: [
      "Menemukan Mouse",
      "Konsep 'Mesin Turing' sebagai dasar komputer modern",
      "Membuat Game pertama",
      "Menciptakan Internet"
    ],
    correctAnswer: 1,
    explanation: "Alan Turing mengemukakan konsep komputasi modern melalui ide 'Mesin Turing'."
  },

  // --- Modern Computer & Safety ---
  {
    id: 33,
    question: "Apa itu Komputasi Awan (Cloud Computing)?",
    options: [
      "Komputer yang terbang di langit",
      "Menyimpan data di internet, bukan di hard drive lokal",
      "Komputer bertenaga angin",
      "Ramalan cuaca digital"
    ],
    correctAnswer: 1,
    explanation: "Komputasi awan memungkinkan kita menyimpan foto dan file di internet (server) agar bisa diakses di mana saja."
  },
  {
    id: 34,
    question: "Apa itu AI (Akal Imitasi / Kecerdasan Buatan)?",
    options: [
      "Robot mainan",
      "Komputer yang bisa belajar dan berpikir sendiri",
      "Aplikasi menggambar",
      "Video lucu"
    ],
    correctAnswer: 1,
    explanation: "AI (Artificial Intelligence) adalah teknologi yang membuat komputer bisa belajar, mengenali wajah, dll."
  },
  {
    id: 35,
    question: "Komputer super cepat masa depan disebut?",
    options: [
      "Komputer Kuantum",
      "Komputer Super",
      "Komputer Roket",
      "Komputer Kilat"
    ],
    correctAnswer: 0,
    explanation: "Komputer Kuantum sedang dikembangkan untuk menyelesaikan masalah yang sangat rumit dengan sangat cepat."
  },
  {
    id: 36,
    question: "Ponsel cerdas (Smartphone) termasuk jenis komputer apa?",
    options: [
      "Komputer Raksasa",
      "Komputer Mikro",
      "Komputer Lama",
      "Bukan komputer"
    ],
    correctAnswer: 1,
    explanation: "Smartphone adalah bentuk komputer mikro yang sangat canggih dan portabel."
  },
  {
    id: 37,
    question: "Apa aturan aman 'Pikir Sebelum Klik'?",
    options: [
      "Klik semua tombol yang ada",
      "Jangan sembarangan klik tautan yang mencurigakan",
      "Klik dengan mata tertutup",
      "Klik dua kali dengan cepat"
    ],
    correctAnswer: 1,
    explanation: "Kita harus waspada karena beberapa tautan bisa berisi virus atau penipuan."
  },
  {
    id: 38,
    question: "Apa yang harus dilakukan agar kata sandi (password) kuat?",
    options: [
      "Gunakan tanggal lahir",
      "Gunakan nama sendiri",
      "Gunakan kombinasi huruf besar, kecil, angka, dan simbol",
      "Gunakan '123456'"
    ],
    correctAnswer: 2,
    explanation: "Kombinasi karakter yang rumit membuat kata sandi sulit ditebak oleh orang jahat."
  },
  {
    id: 39,
    question: "Bolehkah membagikan kata sandi kepada teman?",
    options: [
      "Boleh, asal teman baik",
      "Boleh, kalau dipaksa",
      "Tidak boleh, itu rahasia",
      "Boleh, di media sosial"
    ],
    correctAnswer: 2,
    explanation: "Kata sandi adalah rahasia pribadi untuk menjaga keamanan akunmu. Jangan bagikan ke siapapun kecuali orang tua."
  },
  {
    id: 40,
    question: "Apa yang harus dilakukan jika ingin mengunduh aplikasi?",
    options: [
      "Langsung unduh saja",
      "Tanya dan minta izin orang tua/dewasa",
      "Sembunyi-sembunyi",
      "Matikan internet"
    ],
    correctAnswer: 1,
    explanation: "Selalu minta izin orang dewasa untuk memastikan aplikasi tersebut aman dan sesuai umur."
  },
  {
    id: 41,
    question: "Kenapa kita harus istirahat sejenak dari layar komputer?",
    options: [
      "Agar komputer tidak meledak",
      "Agar mata tidak lelah dan tubuh tetap sehat",
      "Agar listrik hemat",
      "Agar tidak dimarahi"
    ],
    correctAnswer: 1,
    explanation: "Terlalu lama menatap layar bisa membuat mata lelah, jadi penting untuk istirahat teratur."
  },
  {
    id: 42,
    question: "Bolehkah membagikan foto pribadi atau alamat ke orang asing di internet?",
    options: [
      "Boleh",
      "Tidak boleh, itu berbahaya",
      "Boleh kalau orangnya ramah",
      "Boleh kalau dapat hadiah"
    ],
    correctAnswer: 1,
    explanation: "Informasi pribadi seperti alamat dan foto tidak boleh dibagikan sembarangan untuk keamanan diri."
  },

  // --- Process & Fun Facts ---
  {
    id: 43,
    question: "Saat menonton video, bagian mana yang menentukan warna gambar?",
    options: [
      "Keyboard",
      "GPU",
      "Speaker",
      "Mouse"
    ],
    correctAnswer: 1,
    explanation: "GPU mengolah setiap frame video dan menentukan warna serta gambar yang muncul di layar."
  },
  {
    id: 44,
    question: "Apa yang dilakukan komputer saat kita mengklik file video?",
    options: [
      "Langsung tidur",
      "Input diubah jadi kode biner lalu diproses CPU",
      "Menghapus video",
      "Mematikan layar"
    ],
    correctAnswer: 1,
    explanation: "Klik (input) diubah menjadi sinyal listrik/biner, diproses CPU, lalu diteruskan ke aplikasi pemutar video."
  },
  {
    id: 45,
    question: "Apa itu 'Smarthome'?",
    options: [
      "Rumah yang bisa berjalan",
      "Rumah pintar dengan teknologi yang bisa dikendalikan",
      "Rumah dari balok lego",
      "Rumah pohon"
    ],
    correctAnswer: 1,
    explanation: "Smarthome menggunakan komputer mikro (seperti lampu pintar) yang bisa dikendalikan lewat HP atau suara."
  },
  {
    id: 46,
    question: "Komputer pertama ENIAC ukurannya sebesar apa?",
    options: [
      "Sebesar koper",
      "Sebesar HP",
      "Sebesar ruangan",
      "Sebesar meja"
    ],
    correctAnswer: 2,
    explanation: "ENIAC sangat besar hingga memenuhi seluruh ruangan, berbeda jauh dengan komputer sekarang."
  },
  {
    id: 47,
    question: "Apa itu Transistor?",
    options: [
      "Saklar kecil di dalam prosesor",
      "Nama robot",
      "Jenis baterai",
      "Layar monitor"
    ],
    correctAnswer: 0,
    explanation: "Transistor adalah saklar kecil yang menyala/mati (1/0) miliaran kali di dalam chip komputer."
  },
  {
    id: 48,
    question: "Di toko, komputer digunakan untuk apa?",
    options: [
      "Memasak makanan",
      "Mesin kasir dan scan barcode",
      "Mencuci baju",
      "Menyetir mobil"
    ],
    correctAnswer: 1,
    explanation: "Di toko, komputer dipakai di mesin kasir (Point of Sale) untuk menghitung harga dan stok."
  },
  {
    id: 49,
    question: "Huruf 'A' kapital dalam kode biner ASCII adalah...",
    options: [
      "01000001",
      "00000000",
      "11111111",
      "12345678"
    ],
    correctAnswer: 0,
    explanation: "Sesuai tabel ASCII di buku, A adalah 01000001 (Desimal 65)."
  },
  {
    id: 50,
    question: "Bita adalah karakter berupa...",
    options: [
      "Kucing",
      "Komputer yang cekatan",
      "Robot",
      "Buku"
    ],
    correctAnswer: 1,
    explanation: "Bita adalah karakter komputer yang menemani kita berpetualang di buku ini."
  }
];