// ==========================================================================
// DATA SOURCE: BANK SOAL & PEMBAHASAN TKA BAHASA INGGRIS SMA 2025 (WAJIB)
// VERBATIM FIDELITY: 100% MATCH TO OFFICIAL SOURCE MODULE (TEXTS 1–4 | QUESTIONS 1–20)
// ==========================================================================

const TKA_DATA = {
  meta: {
    title: "MPI TKA BAHASA INGGRIS SMA 2025 (WAJIB)",
    subtitle: "Modul Latihan 20 Soal TKA, Penalaran Siswa, Vocab Lab & Strategi Cepat",
    developer: "Muhammad Falahaen Jiddan, M.Pd. Gr.",
    school: "SMA Plus PGRI Cibinong",
    totalQuestions: 20,
    uiLanguage: "English",
    contentLanguage: "Bahasa Indonesia & English"
  },

  // ==========================================================================
  // STRATEGI PENGERJAAN CEPAT BERBASIS 4 PILAR HOTS
  // Pilar 1: ⚡ Formula Emas (Rumus Cepat)
  // Pilar 2: 📌 Ciri Khas Bentuk Pertanyaan Soal
  // Pilar 3: 📋 Langkah Sistematis Menjawab
  // Pilar 4: ⚠️ Waspada Pengecoh (Distractor Trap Analysis)
  // ==========================================================================
  strategies: [
    {
      id: "summarizing_narrative",
      name: "1. SUMMARIZING NARRATIVE TEXT",
      type: "Menyusun Poin Utama / Rangkuman Naratif",
      category: "Narrative Text",
      formula: "Orientation (Pengenalan) + Complication (Konflik) + Resolution (Penyelesaian) + Moral Value = Accurate Summary",
      quickQuestion: "Which option best summarizes the story? / Which statement best reflects the whole plot?",
      steps: [
        "Identifikasi 4 elemen kunci teks naratif: Tokoh & latar di awal (Orientation), Masalah utama (Complication), Solusi di akhir (Resolution), dan Pesan moral (Moral/Coda).",
        "Lakukan teknik Skimming cepat dari paragraf 1 sampai paragraf terakhir untuk menangkap kronologi cerita.",
        "Eliminasi opsi yang memuat alur cerita fiktif, terbalik urutan peristiwanya, atau fakta yang bertentangan dengan teks bacaan.",
        "Pilih rangkuman komprehensif yang mencakup keseluruhan alur secara seimbang, bukan hanya penggalan satu adegan."
      ],
      trapWarning: "Waspadai opsi pengecoh yang menceritakan detail menarik namun hanya terjadi di satu paragraf saja, atau opsi yang memuat fakta karangan yang tidak pernah terjadi di dalam teks (misal: tikus mencari makan, pohon tumbang karena badai)."
    },
    {
      id: "moral_message",
      name: "2. MORAL MESSAGE / NILAI KEBAJIKAN",
      type: "Menyimpulkan Pesan Moral & Amanat Cerita",
      category: "Narrative Text",
      formula: "Character Action → Consequence → Universal Moral Lesson (Amanat Universal)",
      quickQuestion: "What can we learn from the story? / Which statement best conveys the message of the story?",
      steps: [
        "Fokuskan perhatian pada 1–2 paragraf terakhir (Coda/Resolusi) di mana konsekuensi tindakan tokoh dinyatakan secara eksplisit maupun implisit.",
        "Tarik simpulan nilai kebajikan universal (misal: saling menolong, kerendahan hati, kerjasama, kesetiaan).",
        "Bedakan amanat moral filosofis mendalam dari kesimpulan harfiah yang sempit atau opini subjektif.",
        "Pada soal Multi-Select (MCMA), pilih SEMUA pernyataan kebajikan yang relevan dan didukung langsung oleh fakta cerita."
      ],
      trapWarning: "Waspadai pilihan yang berupa kesimpulan harfiah/primitif (contoh: 'Jangan bangunkan hewan tidur' atau 'Singa itu hewan berbahaya') yang bukan merupakan pesan moral filosofis kehidupan."
    },
    {
      id: "cause_effect",
      name: "3. CAUSE AND EFFECT / INFERENCE",
      type: "Menafsirkan Hubungan Sebab-Akibat & Motif Tokoh",
      category: "Narrative & Expository",
      formula: "Question Keyword Clue → Scan Paragraph → Character Motive / Logical Trigger = Correct Cause",
      quickQuestion: "Why did [Character] decide to [Action]? / What made [Character] do ...?",
      steps: [
        "Temukan kata kunci tindakan/peristiwa yang ditanyakan dalam soal.",
        "Lakukan scanning untuk menemukan lokasi kalimat dan paragraf kejadian tersebut.",
        "Baca 1 kalimat sebelum dan 1 kalimat sesudah kejadian untuk menemukan motif emosional (misal: terhibur, kasihan, berterima kasih) atau pemicu logis.",
        "Pilih jawaban yang paling sesuai dengan apa yang dirasakan atau dipikirkan tokoh pada saat kejadian tersebut."
      ],
      trapWarning: "Waspadai asumsi pribadi yang tampak masuk akal di dunia nyata tetapi sama sekali tidak didukung atau bahkan bertentangan dengan isi teks (misal: singa merasa lelah, singa takut ada yang datang)."
    },
    {
      id: "predicting_ending",
      name: "4. PREDICTING STORY ENDING",
      type: "Memprediksi Kelanjutan / Akhir Cerita Fabel",
      category: "Narrative Text",
      formula: "Fable Moral Convention + Character Bond/Debt = Positive Reciprocal Outcome",
      quickQuestion: "As you read [part of story], which ending do you anticipate? / What will likely happen next?",
      steps: [
        "Pahami konvensi fabel klasik anak: perbuatan baik tokoh utama hampir selalu berbuah kebaikan timbal balik, kesetiaan, atau penyelamatan di masa depan.",
        "Perhatikan janji atau ikatan emosional antar tokoh di awal cerita.",
        "Eliminasi opsi yang bernuansa negatif, dendam, atau pesimistis yang bertentangan dengan etika sastra fabel anak.",
        "Pada soal MCMA, pilih kombinasi prediksi positif yang logis berdasarkan karakter tokoh."
      ],
      trapWarning: "Waspadai opsi yang menggambarkan pengkhianatan atau akhir yang tragis (misal: tokoh melupakan janjinya, tokoh menjadi jahat kepada hewan lain) yang melanggar hukum konvensi fabel."
    },
    {
      id: "character_portrayal",
      name: "5. CHARACTER PORTRAYAL & TRAIT EVALUATION",
      type: "Menganalisis Karakter & Watak Tokoh",
      category: "Narrative Text",
      formula: "Direct Speech / Reaction to Conflict / Emotional Response → Verified Character Trait",
      quickQuestion: "Which sentences from the story help you understand [Character]'s personality?",
      steps: [
        "Pilah antara kalimat deskripsi fisik/latar belakang biasa dengan kalimat yang mengekspresikan sikap, ucapan, emosi, atau keputusan tokoh.",
        "Identifikasi bukti watak: ucapan marah/tegas menunjukkan sifat berwibawa, rasa geli/terhibur menunjukkan rasa humor & pemaaf, ucapan terima kasih menunjukkan kerendahan hati.",
        "Verifikasi apakah kalimat yang dipilih secara langsung mendeskripsikan tokoh yang dimaksud, bukan tindakan tokoh lawan."
      ],
      trapWarning: "Waspadai kalimat yang hanya menggambarkan kebiasaan fisik (misal: tidur siang di bawah pohon) atau kalimat tindakan tokoh lain (misal: tikus menggigit jaring) yang disangka menggambarkan watak tokoh utama."
    },
    {
      id: "explicit_detail",
      name: "6. EXPLICIT DETAIL IN INFOGRAPHICS / TEXT",
      type: "Mengidentifikasi Informasi Rinci Eksplisit",
      category: "Infographic / Procedure",
      formula: "Question Keyword → Exact Point Scanning → Verbatim / Synonym Match",
      quickQuestion: "Based on the information given, we can ... by? / According to the text, which ...?",
      steps: [
        "Garisbawahi kata kunci pada pertanyaan (misal: 'keep mind focused and fresh').",
        "Pindai (scan) poin bernomor atau subjudul pada infografis yang memuat kata kunci yang sama atau sinonimnya.",
        "Baca tuntas isi poin tersebut untuk mencocokkan tindakan yang tepat (misal: Pomodoro = 25 min study + 5 min break).",
        "Pilih jawaban yang secara harfiah dan langsung menjawab pertanyaan tanpa perlu membuat asumsi tambahan."
      ],
      trapWarning: "Waspadai opsi yang menyebutkan teknik belajar yang memang ada di dalam teks tetapi memiliki fungsi atau tujuan yang berbeda dari apa yang secara spesifik ditanyakan dalam soal."
    },
    {
      id: "categorization_strategy",
      name: "7. CATEGORIZATION & CLASSIFICATION",
      type: "Mengelompokkan Informasi Berdasarkan Kategori",
      category: "Infographic / HOTS Classification",
      formula: "Activity Nature: External Time/Schedule Tracking (Time Mgmt) vs Internal Emotional/Mental Discipline (Self Mgmt)",
      quickQuestion: "Determine whether each item is categorized as Category A or Category B.",
      steps: [
        "Pahami definisi operasional kedua kategori:",
        "• Time Management: Berfokus pada kuantitas jam, interval belajar-istirahat (Pomodoro), jadwal harian, dan ketepatan waktu.",
        "• Self Management: Berfokus pada sikap mental, kesabaran, ketekunan, pengelolaan stres/emosi, motivasi, dan pengendalian diri.",
        "Evaluasi setiap butir pernyataan satu per satu dan masukkan ke kategori yang paling dominan."
      ],
      trapWarning: "Waspadai kerancuan pada aktivitas belajar yang membutuhkan disiplin pribadi (seperti ketekunan), jangan keliru memasukkannya ke manajemen waktu hanya karena dilakukan saat belajar."
    },
    {
      id: "sequence_points",
      name: "8. SEQUENCE OF KEY POINTS",
      type: "Menyusun Rantai Kronologis Poin Utama",
      category: "Infographic / Procedure",
      formula: "Step 1 (Orientation/Style) → Step 2 (Schedule) → Step 3 (Practice) → Step 4 (Tools) → Coherent Linear Flow",
      quickQuestion: "Choose the sequence that best reflects the information in the infographic.",
      steps: [
        "Periksa urutan kronologis langkah dari poin 1 hingga poin terakhir pada teks.",
        "Lakukan pencocokan pola rantai (A → B → C → D) pada setiap pilihan jawaban.",
        "Eliminasi pilihan yang menyisipkan langkah-langkah fiktif atau kegiatan yang tidak pernah disebutkan dalam infografis asli."
      ],
      trapWarning: "Waspadai pilihan yang menambahkan kegiatan umum sehari-hari (misal: makan makanan bergizi, mendengarkan musik santai, tidur siang) yang terlihat baik tetapi sebenarnya tidak ada dalam naskah infografis."
    },
    {
      id: "authors_purpose",
      name: "9. AUTHOR'S PURPOSE & COMMUNICATIVE GOAL",
      type: "Menyimpulkan Tujuan Komunikatif Penulis",
      category: "All Genres",
      formula: "Target Reader + Text Content + Educational Value = Author's Core Purpose",
      quickQuestion: "Which statements best reflect the author's purpose in writing the text?",
      steps: [
        "Tanyakan pada diri: 'Mengapa penulis membuat infografis/teks ini untuk siswa?'",
        "Identifikasi kata kerja tujuan: memberi panduan praktis (to guide), memotivasi/mendorong kebiasaan baik (to encourage), menunjukkan cara mengatur waktu (to show time management).",
        "Eliminasi opsi yang menyebutkan tujuan non-edukatif, keliru audiens, atau bermakna destruktif/pesimistis.",
        "Pada soal Multi-Select, pilih semua tujuan konstruktif yang didukung penuh oleh teks."
      ],
      trapWarning: "Waspadai opsi yang menyebutkan tujuan sepele yang tidak sesuai esensi teks (misal: memberi ide bermain setelah belajar) atau yang bernada negatif (misal: menjelaskan mengapa belajar itu sulit bagi siswa)."
    },
    {
      id: "chronological_summary",
      name: "10. CHRONOLOGICAL NARRATIVE FLOW",
      type: "Menyusun Urutan Peristiwa Naratif",
      category: "Narrative Text",
      formula: "Beginning Status → Inciting Incident (Konflik Awal) → Climax (Puncak Masalah) → Falling Action → Resolution",
      quickQuestion: "Which statement provides the most accurate chronological summary of the story's main events?",
      steps: [
        "Catat tonggak peristiwa per paragraf: (1) Watak Hera & Shero → (2) Serangan kawanan Hyena → (3) Respon Hera & kekonyolan Shero → (4) Hyena tertawa & pergi → (5) Shero menemukan peran istimewanya.",
        "Cocokkan anak panah urutan (→) pada pilihan jawaban dari awal sampai akhir.",
        "Pastikan tidak ada peristiwa awal yang ditukar dengan peristiwa akhir."
      ],
      trapWarning: "Waspadai opsi yang memutarbalikkan fakta dramatis (misal: Shero bertarung melawan Hera, hyena membantu singa, atau Shero menjadi raja baru menggantikan Hera)."
    },
    {
      id: "contextual_phrase",
      name: "11. CONTEXTUAL & FIGURATIVE MEANING",
      type: "Menafsirkan Makna Frasa Kontekstual & Kiasan",
      category: "Descriptive Text",
      formula: "Literal Words + Surrounding Imagery + Tone of Wonder = Nuanced Contextual Meaning",
      quickQuestion: "What does the phrase [...] most likely mean in the context of the passage?",
      steps: [
        "Jangan menerjemahkan kata demi kata secara harfiah (literal translation trap).",
        "Baca kalimat lengkap tempat frasa tersebut berada dan perhatikan suasana (imagery) yang dibangun di paragraf itu (keindahan bawah laut, cahaya matahari, warna-warni ikan).",
        "Pahami bahwa frasa seperti 'a different world under the sea' mengekspresikan suasana yang luar biasa tenang, mempesona, dan unik berbeda dari dunia daratan."
      ],
      trapWarning: "Waspadai opsi yang menafsirkan frasa secara sains-fiksi/harfiah (misal: tempat tinggal manusia di bawah air) atau opsi yang menyatakan pemandangannya sama persis seperti di daratan."
    },
    {
      id: "implied_main_idea",
      name: "12. IMPLIED MAIN IDEA & ECOLOGICAL VALUE",
      type: "Menyimpulkan Gagasan Utama Tersirat & Nilai Ekologis",
      category: "Descriptive Text",
      formula: "Physical Wonders + Biodiversity + Coast Protection = Invaluable Natural Treasure (Must be Conserved)",
      quickQuestion: "Which of the following best represents the main idea implied by the text?",
      steps: [
        "Sintesiskan dua dimensi utama teks deskriptif: (1) Keindahan visual yang memukau dan (2) Fungsi ekologis vital (rumah biota laut & pelindung garis pantai dari badai/gelombang besar).",
        "Tarik kesimpulan filosofis tingkat tinggi bahwa kawasan tersebut adalah warisan alam tak ternilai yang mutlak harus dijaga kelestariannya.",
        "Pilih opsi yang merangkul kedua nilai tersebut secara utuh."
      ],
      trapWarning: "Waspadai opsi reduksionistis yang hanya memandang objek alam sebagai komoditas industri/ekonomi semata (misal: hanya berguna untuk penangkapan ikan komersial atau pelayaran kapal)."
    }
  ],

  // ==========================================================================
  // BANK 4 TEKS RESMI BACAAN TKA
  // ==========================================================================
  texts: [
    // --------------------------------------------------------------------------
    // TEKS 1: NARRATIVE TEXT (FABLE)
    // --------------------------------------------------------------------------
    {
      id: 1,
      number: "Text 1 (Narrative)",
      genre: "Narrative Text (Fable)",
      title: "The Lion and the Mouse",
      questionRange: "Questions 1 – 5",
      sourceCitation: "Source: https://www.vedantu.com/stories/the-lion-and-the-mouse",
      paragraphs: [
        "Once upon a time, in a thick jungle in Africa, there lived a strong and fierce lion. Every afternoon, the lion would rest under the cool shade of a big tree after walking through the forest.",
        "One day, while he was sleeping, a playful little mouse passed by. The mouse saw the lion's thick mane and was curious. He climbed up and began to jump around on the lion's head, playing in his mane.",
        "The lion woke up suddenly and was not happy at all. He quickly caught the mouse in his big paw and roared, \"Who dares to wake me up?\" He was very angry and almost killed the mouse.",
        "Scared and shaking, the mouse begged the lion, \"Please don't kill me! I didn't mean to bother you. If you let me go, I promise I'll help you one day.\"",
        "The lion laughed loudly. \"You? Help me? That's funny.\" But the lion was feeling kind, so he let the mouse go free.",
        "A few days later, the lion was walking through the jungle again when he fell into a trap. A net set by hunters caught him, and he couldn't escape. He tried to bite and tear the ropes, but they were too strong. The lion roared loudly, hoping someone would come.",
        "The mouse heard the roar and ran to help. He saw the lion trapped and quickly started to chew the ropes with his sharp teeth. After some time, the net broke, and the lion was free.",
        "The lion looked at the mouse with surprise and said, \"Thank you! You really saved my life.\"",
        "The mouse smiled and said, \"I told you I would help you one day.\"",
        "From that moment on, the lion and the mouse became close friends. The lion learned that even small creatures can do great things, and we all need help sometimes."
      ],
      vocabulary: [
        {
          word: "fierce",
          pos: "adjective",
          meaning: "garang / buas / gagah perkasa",
          context: "Once upon a time, in a thick jungle in Africa, there lived a strong and fierce lion.",
          pronunciation: "/fɪəs/",
          example: "The fierce lion protected his pride from intruders."
        },
        {
          word: "mane",
          pos: "noun",
          meaning: "surai leher singa / rambut tebal di sekitar kepala singa",
          context: "The mouse saw the lion's thick mane and was curious.",
          pronunciation: "/meɪn/",
          example: "The male lion had a majestic dark mane."
        },
        {
          word: "curious",
          pos: "adjective",
          meaning: "penasaran / ingin tahu",
          context: "The mouse saw the lion's thick mane and was curious.",
          pronunciation: "/ˈkjʊəriəs/",
          example: "The curious child asked many questions about nature."
        },
        {
          word: "roared",
          pos: "verb (past)",
          meaning: "mengaum keras / bersuara menggelegar",
          context: "He quickly caught the mouse in his big paw and roared, \"Who dares to wake me up?\"",
          pronunciation: "/rɔːd/",
          example: "The tiger roared loudly across the river valley."
        },
        {
          word: "begged",
          pos: "verb (past)",
          meaning: "memohon dengan sangat / mengiba",
          context: "Scared and shaking, the mouse begged the lion, \"Please don't kill me!\"",
          pronunciation: "/bɛɡd/",
          example: "The prisoner begged for mercy before the king."
        },
        {
          word: "bother",
          pos: "verb",
          meaning: "mengganggu / merepotkan",
          context: "\"I didn't mean to bother you. If you let me go, I promise I'll help you one day.\"",
          pronunciation: "/ˈbɒðə(r)/",
          example: "Please do not bother your sister while she is studying."
        },
        {
          word: "trap",
          pos: "noun",
          meaning: "perangkap / jeratan pemburu",
          context: "...the lion was walking through the jungle again when he fell into a trap.",
          pronunciation: "/træp/",
          example: "The rabbit narrowly avoided the hidden trap."
        },
        {
          word: "hunters",
          pos: "noun",
          meaning: "para pemburu satwa liar",
          context: "A net set by hunters caught him, and he couldn't escape.",
          pronunciation: "/ˈhʌntəz/",
          example: "The hunters tracked the wild animals through the forest."
        },
        {
          word: "chew",
          pos: "verb",
          meaning: "mengunyah / mengerat / menggigit putus",
          context: "...and quickly started to chew the ropes with his sharp teeth.",
          pronunciation: "/tʃuː/",
          example: "The puppy likes to chew on wooden sticks."
        },
        {
          word: "creatures",
          pos: "noun",
          meaning: "makhluk hidup / satwa ciptaan",
          context: "The lion learned that even small creatures can do great things...",
          pronunciation: "/ˈkriːtʃəz/",
          example: "The ocean is home to millions of extraordinary creatures."
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TEKS 2: INFOGRAPHIC / PROCEDURE TEXT
    // --------------------------------------------------------------------------
    {
      id: 2,
      number: "Text 2 (Infographic)",
      genre: "Infographic / Procedure Text",
      title: "Effective Study Techniques (Infographic)",
      questionRange: "Questions 6 – 10",
      sourceCitation: "Rangkuman Elemen & Poin Infografis 'Effective Study Techniques'",
      paragraphs: [
        "1. Know Your Learning Style: Understand whether you learn best by reading, listening, or watching.",
        "2. Set a Consistent Study Schedule: Study at the same time every day. Regularity helps build strong habits.",
        "3. Create a Comfortable Study Space: Find a quiet, well-lit, and distraction-free area. Have all your materials ready.",
        "4. Use the Pomodoro Technique: Study for 25 minutes, then take a 5-minute break. This keeps your mind fresh and focused.",
        "5. Take Effective Notes: Write key points using methods like mind maps or tables to help remember important information.",
        "6. Practice and Repeat: Regularly review your material and do practice-questions to deepen understanding and improve retention.",
        "7. Join a Study Group: Discuss topics with friends to gain new insights and solve problems together.",
        "8. Leverage Technology: Use apps and websites for flashcards, video lessons, and online quizzes to support your study routine.",
        "9. Get Enough Sleep: Aim for 7-8 hours of restful sleep every night to consolidate your memory.",
        "10. Be Patient and Persistent: Learning takes time. Consistent daily effort produces long-term mastery."
      ],
      vocabulary: [
        {
          word: "consistent",
          pos: "adjective",
          meaning: "konsisten / teratur / ajeg",
          context: "Set a Consistent Study Schedule: Study at the same time every day.",
          pronunciation: "/kənˈsɪstənt/",
          example: "Consistent effort is the key to academic achievement."
        },
        {
          word: "distraction-free",
          pos: "adjective",
          meaning: "bebas dari gangguan",
          context: "Create a Comfortable Study Space: Find a quiet, well-lit, and distraction-free area.",
          pronunciation: "/dɪˈstrækʃn friː/",
          example: "Turn off notifications to maintain a distraction-free environment."
        },
        {
          word: "Pomodoro Technique",
          pos: "noun phrase",
          meaning: "Teknik Pomodoro (25 menit belajar intensif, 5 menit istirahat)",
          context: "Use the Pomodoro Technique: Study for 25 minutes, then take a 5-minute break.",
          pronunciation: "/ˌpɒməˈdɔːrəʊ tɛkˈniːk/",
          example: "The Pomodoro Technique prevented mental burnout during exam week."
        },
        {
          word: "retention",
          pos: "noun",
          meaning: "daya ingat / retensi pemahaman",
          context: "...do practice-questions to deepen understanding and improve retention.",
          pronunciation: "/rɪˈtɛnʃn/",
          example: "Spaced repetition significantly improves long-term memory retention."
        },
        {
          word: "insights",
          pos: "noun (plural)",
          meaning: "wawasan mendalam / sudut pandang baru",
          context: "Discuss topics with friends to gain new insights and solve problems together.",
          pronunciation: "/ˈɪnsaɪts/",
          example: "Group discussions provided fresh insights on the essay topic."
        },
        {
          word: "leverage",
          pos: "verb",
          meaning: "memanfaatkan secara optimal / memberdayakan",
          context: "Leverage Technology: Use apps and websites for flashcards, video lessons...",
          pronunciation: "/ˈliːvərɪdʒ/",
          example: "Smart learners leverage digital tools to speed up their revision."
        },
        {
          word: "persistent",
          pos: "adjective",
          meaning: "gigih / ulet / pantang menyerah",
          context: "Be Patient and Persistent: Learning takes time.",
          pronunciation: "/pəˈsɪstənt/",
          example: "Persistent practice is required to master fluent speaking."
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TEKS 3: NARRATIVE TEXT (FABLE)
    // --------------------------------------------------------------------------
    {
      id: 3,
      number: "Text 3 (Narrative)",
      genre: "Narrative Text (Fable)",
      title: "Hera and Shero: The Two Lion Kings",
      questionRange: "Questions 11 – 15",
      sourceCitation: "Cerita Fabel Edukasi Karakter 'The Tale of Two Lion Kings'",
      paragraphs: [
        "Once upon a time, in Africa, there lived two lion kings. One was named Hera and the other was Shero. Hera was very strong and handsome. All the animals loved and respected him because he always protected them. Shero, on the other hand, was playful and liked to pretend to be a great king. He often copied Hera's roar, but it made the other animals laugh.",
        "One sunny day, a group of troublesome hyenas came to the savannah. They started causing problems near the river, scaring the deer and taking food from the smaller animals. The animals ran to Hera and Shero for help.",
        "Hera walked proudly toward the river and gave a mighty roar. The ground shook, and the hyenas became frightened. Shero also tried to roar, but his voice was high and silly. The hyenas laughed at him. Their leader, Hank the Hyena, made jokes about Shero.",
        "Shero felt embarrassed, but he didn't give up. He decided to do something different. He jumped on a rock, made funny faces, and did a silly dance. Hank the Hyena laughed so hard that he tripped and fell into the muddy river. The other hyenas laughed at their leader and forgot about fighting. Hera then roared once more, and all the hyenas ran away in confusion.",
        "The savannah animals cheered loudly. Hera smiled at Shero and said, \"Your strength isn't in your roar, Shero. It's in making others happy and finding smart solutions.\" Shero felt proud. He realized he didn't need to be just like Hera to be helpful.",
        "From that day on, Hera was the protector of the kingdom, and Shero was the royal entertainer. The animals learned that both power and fun are important in life, and that working together makes everyone stronger."
      ],
      vocabulary: [
        {
          word: "savannah",
          pos: "noun",
          meaning: "sabana / padang rumput tropis yang luas",
          context: "One sunny day, a group of troublesome hyenas came to the savannah.",
          pronunciation: "/səˈvænə/",
          example: "Zebras grazed peacefully across the vast African savannah."
        },
        {
          word: "troublesome",
          pos: "adjective",
          meaning: "suka berbuat onar / menimbulkan kekacauan",
          context: "...a group of troublesome hyenas came to the savannah.",
          pronunciation: "/ˈtrʌblsəm/",
          example: "The troublesome hyenas disrupted the peaceful waterhole."
        },
        {
          word: "frightened",
          pos: "adjective",
          meaning: "sangat ketakutan / gentar",
          context: "The ground shook, and the hyenas became frightened.",
          pronunciation: "/ˈfraɪtnd/",
          example: "The frightened animals sought shelter during the storm."
        },
        {
          word: "embarrassed",
          pos: "adjective",
          meaning: "malu / tersipu canggung",
          context: "Shero felt embarrassed, but he didn't give up.",
          pronunciation: "/ɪmˈbærəst/",
          example: "He was embarrassed when his voice cracked in front of the class."
        },
        {
          word: "tripped",
          pos: "verb (past)",
          meaning: "tersandung hingga jatuh",
          context: "Hank the Hyena laughed so hard that he tripped and fell into the muddy river.",
          pronunciation: "/trɪpt/",
          example: "The runner tripped on an uneven root along the trail."
        },
        {
          word: "entertainer",
          pos: "noun",
          meaning: "penghibur / pelawak yang menceriakan suasana",
          context: "Hera was the protector of the kingdom, and Shero was the royal entertainer.",
          pronunciation: "/ˌɛntəˈteɪnə(r)/",
          example: "The comedian was a talented entertainer loved by all ages."
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TEKS 4: DESCRIPTIVE TEXT
    // --------------------------------------------------------------------------
    {
      id: 4,
      number: "Text 4 (Descriptive)",
      genre: "Descriptive Text",
      title: "The Great Barrier Reef",
      questionRange: "Questions 16 – 20",
      sourceCitation: "Naskah Bacaan Deskriptif Konservasi Bahari Australia",
      paragraphs: [
        "The Great Barrier Reef is the largest coral reef system in the world. It is located in the Pacific Ocean, near the northeast coast of Australia. This giant structure is so big that it can even be seen from outer space. It is made of billions of tiny organisms called coral polyps.",
        "The reef is home to thousands of different marine creatures. There are many kinds of colorful fish, sea turtles, dolphins, and even sharks living around the corals. The crystal-clear waters make the corals look like an underwater garden of bright pink, yellow, blue, and purple. People can see this beauty by swimming, diving, or joining a boat tour.",
        "When the sun shines, the reef looks bright and full of light. It feels like a different world under the sea. The gentle movement of the ocean waves and the lively marine creatures create a very calm and magical environment.",
        "The reef is not only beautiful, but also very important. It helps protect the coast from big waves and storms. It is a home for sea animals and a place where plants can grow. Without the reef, the ocean would not be the same. The reef is a natural treasure that must be cared for so future generations can enjoy it."
      ],
      vocabulary: [
        {
          word: "coral polyps",
          pos: "noun phrase",
          meaning: "polip karang (organisme kecil pembentuk terumbu karang)",
          context: "It is made of billions of tiny organisms called coral polyps.",
          pronunciation: "/ˈkɒrəl ˈpɒlɪps/",
          example: "Microscopic coral polyps build massive calcium carbonate reefs."
        },
        {
          word: "crystal-clear",
          pos: "adjective",
          meaning: "sangat jernih seperti kristal",
          context: "The crystal-clear waters make the corals look like an underwater garden...",
          pronunciation: "/ˌkrɪstl ˈklɪə(r)/",
          example: "The crystal-clear water allowed divers to see the sea floor clearly."
        },
        {
          word: "treasure",
          pos: "noun",
          meaning: "harta karun berharga / warisan alam tak ternilai",
          context: "The reef is a natural treasure that must be cared for.",
          pronunciation: "/ˈtrɛʒə(r)/",
          example: "Tropical rainforests are an irreplaceable natural treasure."
        },
        {
          word: "persuasive",
          pos: "adjective",
          meaning: "persuasif / meyakinkan / memikat daya tarik",
          context: "Pengalaman langsung menyelam merupakan daya tarik wisata paling persuasif.",
          pronunciation: "/pəˈsweɪsɪv/",
          example: "She gave a persuasive presentation on marine conservation."
        }
      ]
    }
  ],

  // ==========================================================================
  // BANK 20 SOAL RESMI TKA BESERTA KUNCI, BUKTI TEKS & ANALISIS PENGEOH
  // ==========================================================================
  questions: [
    // --------------------------------------------------------------------------
    // TEKS 1 (SOAL 1 - 5)
    // --------------------------------------------------------------------------
    {
      id: 1,
      textId: 1,
      number: 1,
      indicator: "Indikator 1: Menyusun poin-poin utama dari narrative text (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPTXI03SU-250027-0083",
      type: "Summarizing Narrative Text",
      format: "multiple_choice",
      question: "Which option best summarizes the story?",
      options: [
        { key: "1", text: "Beginning: A lion was walking through the jungle.\nProblem: The mouse got lost and couldn't find food.\nSolution: The lion gave food to the mouse.\nLesson: Always be generous to those in need." },
        { key: "2", text: "Beginning: A mouse accidentally disturbed a sleeping lion.\nProblem: The lion was caught in a hunter's net.\nSolution: The mouse chewed through the net and set the lion free.\nLesson: Even the smallest creature can be a great help." },
        { key: "3", text: "Beginning: The lion and mouse were best friends.\nProblem: The lion got hurt in a fight.\nSolution: The mouse helped him find water.\nLesson: Friendship is built on adventure." },
        { key: "4", text: "Beginning: A mouse was building a home near a tree.\nProblem: A storm destroyed the tree and trapped the lion.\nSolution: The mouse called for help from the jungle.\nLesson: Teamwork solves big problems." },
        { key: "5", text: "Beginning: A lion was hungry and searching for food.\nProblem: He couldn't catch any prey.\nSolution: The mouse helped him find food.\nLesson: Hunger teaches humility." }
      ],
      officialAnswer: "2",
      officialAnswerText: "Opsi 2 (Beginning: A mouse accidentally disturbed a sleeping lion...)",
      officialExplanation: "Ringkasan pada Opsi 2 secara sempurna memuat struktur generik teks naratif (Orientasi, Komplikasi, Resolusi, dan Nilai Moral).",
      textualEvidence: "• Orientasi: \"One day, while he was sleeping, a playful little mouse passed by... jumped around on the lion's head.\"\n• Komplikasi: \"...fell into a trap. A net set by hunters caught him...\"\n• Resolusi: \"...quickly started to chew the ropes with his sharp teeth. After some time, the net broke, and the lion was free.\"\n• Koda/Moral: \"...learned that even small creatures can do great things, and we all need help sometimes.\"",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "One day, while he was sleeping, a playful little mouse passed by. The mouse saw the lion's thick mane and was curious.",
      distractorAnalysis: [
        { option: "Opsi 1, 3, 4, 5", analysis: "Opsi 1, 3, 4, dan 5 menyajikan alur fiktif yang bertentangan dengan isi teks (misal: tikus mencari makan, singa terluka, pohon tumbang karena badai, dsb.)." }
      ]
    },
    {
      id: 2,
      textId: 1,
      number: 2,
      indicator: "Indikator 2: Menyimpulkan pesan moral narrative text (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAPINI07SU-250027-0056",
      type: "Moral Message",
      format: "multi_select",
      question: "Which of the following statements best conveys the message of the story?\nThere is more than one answer. Click on every correct answer!",
      options: [
        { key: "1", text: "We should never wake up a sleeping animal", isCorrect: false },
        { key: "2", text: "Even the small and weak can help the strong", isCorrect: true },
        { key: "3", text: "It's always good to ask for help when we need it", isCorrect: true },
        { key: "4", text: "Lions are dangerous animals and should be avoided", isCorrect: false },
        { key: "5", text: "Never trust anyone who plays with your hair", isCorrect: false }
      ],
      officialAnswer: ["2", "3"],
      officialAnswerText: "[✓] Opsi 2 & [✓] Opsi 3",
      officialExplanation: "Pernyataan Benar:\n• [✓] Even the small and weak can help the strong: Sesuai dengan kalimat penutup: \"The lion learned that even small creatures can do great things...\".\n• [✓] It's always good to ask for help when we need it: Sesuai dengan pesan bahwa semua makhluk membutuhkan pertolongan (\"...and we all need help sometimes\").",
      textualEvidence: "Paragraf 10: \"The lion learned that even small creatures can do great things, and we all need help sometimes.\"",
      evidenceParagraphIndex: 9,
      evidenceSnippet: "The lion learned that even small creatures can do great things, and we all need help sometimes.",
      distractorAnalysis: [
        { option: "Opsi 1, 4, 5", analysis: "\"We should never wake up a sleeping animal\" / \"Lions are dangerous animals...\" / \"Never trust anyone who plays with your hair\" adalah kesimpulan harfiah/pribadi yang bukan merupakan amanat moral filosofis cerita." }
      ]
    },
    {
      id: 3,
      textId: 1,
      number: 3,
      indicator: "Indikator 3: Menafsirkan hubungan sebab-akibat / tindakan dalam narrative text (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPINI10SU-250027-0098",
      type: "Cause and Effect / Inference",
      format: "multiple_choice",
      question: "Why did the lion trust the mouse and decide to let him go instead of eating him?",
      options: [
        { key: "1", text: "The lion was too tired to eat the mouse" },
        { key: "2", text: "The mouse told the lion he might help him one day" },
        { key: "3", text: "The lion was feeling happy to see the mouse" },
        { key: "4", text: "The lion heard someone coming and got scared" },
        { key: "5", text: "The mouse promised to bring food for the lion" }
      ],
      officialAnswer: "2",
      officialAnswerText: "Opsi 2 (The mouse told the lion he might help him one day)",
      officialExplanation: "Singa merasa terhibur/lucu dengan janji tikus kecil yang berniat menolongnya suatu saat nanti sehingga melunakkan hatinya untuk melepaskannya.",
      textualEvidence: "Paragraf 4 & 5: \"If you let me go, I promise I'll help you one day.\" The lion laughed loudly. \"You? Help me? That's funny.\" But the lion was feeling kind, so he let the mouse go free.",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "If you let me go, I promise I'll help you one day.",
      distractorAnalysis: [
        { option: "Opsi 1, 4, 5", analysis: "Singa tidak lelah (Opsi 1), tidak takut (Opsi 4), dan tikus tidak menjanjikan makanan (Opsi 5)." }
      ]
    },
    {
      id: 4,
      textId: 1,
      number: 4,
      indicator: "Indikator 4: Memprediksi akhir cerita (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAPINI12SU-250027-0079",
      type: "Predicting Story Ending",
      format: "multi_select",
      question: "As you read the part where the lion let the mouse go, which of the following endings do you anticipate?\nThere is more than one answer, click on every correct answer!",
      options: [
        { key: "1", text: "The mouse forgets about the lion and never helps him", isCorrect: false },
        { key: "2", text: "The lion gets into trouble and no one helps him", isCorrect: false },
        { key: "3", text: "The lion becomes angry at all small animals", isCorrect: false },
        { key: "4", text: "The mouse spreads the lion's kindness to other animals", isCorrect: true },
        { key: "5", text: "The mouse becomes the lion's loyal assistant", isCorrect: true }
      ],
      officialAnswer: ["4", "5"],
      officialAnswerText: "[✓] Opsi 4 & [✓] Opsi 5",
      officialExplanation: "Dalam logika cerita moralitas klasik/fabel anak, pembaca mengantisipasi bahwa kebaikan singa akan dibalas dengan kesetiaan/bantuan tikus (membagikan kebaikan singa atau menjadi pembantu/sahabat setia singa).",
      textualEvidence: "Paragraf 5: Kebaikan hati singa melepaskan tikus menjadi pemicu antisipasi moral bahwa kebaikan akan dibalas dengan kesetiaan.",
      evidenceParagraphIndex: 4,
      evidenceSnippet: "The lion laughed loudly. \"You? Help me? That's funny.\" But the lion was feeling kind, so he let the mouse go free.",
      distractorAnalysis: [
        { option: "Opsi 1, 2, 3", analysis: "Opsi 1, 2, dan 3 mengasumsikan akhir cerita yang negatif/pesimistis yang bertentangan dengan pola konvensi naratif fabel." }
      ]
    },
    {
      id: 5,
      textId: 1,
      number: 5,
      indicator: "Indikator 5: Menentukan bagian teks yang menggambarkan karakter utama (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAEVAI16SU-250027-0103",
      type: "Character Portrayal",
      format: "multi_select",
      question: "Which of the following sentences from the story help you understand the lion's character?\nThere is more than one answer. Click on every correct answer!",
      options: [
        { key: "1", text: "\"The lion always took his afternoon nap under the shade of a big tree in the bushes.\"", isCorrect: false },
        { key: "2", text: "\"He caught the mouse and questioned him for interrupting his nap.\"", isCorrect: true },
        { key: "3", text: "\"The lion was amused at the mouse's words and decided to spare his life.\"", isCorrect: true },
        { key: "4", text: "\"With his sharp teeth, the mouse nibbled through the net.\"", isCorrect: false },
        { key: "5", text: "\"The lion thanked the mouse immensely for his help.\"", isCorrect: true }
      ],
      officialAnswer: ["2", "3", "5"],
      officialAnswerText: "[✓] Kalimat 2, [✓] Kalimat 3, [✓] Kalimat 5",
      officialExplanation: "Bukti & Penjelasan Kalimat Penggambaran Karakter Singa:\n• [✓] \"He caught the mouse and questioned him for interrupting his nap.\" → Menggambarkan watak singa yang tegas, berwibawa, dan mudah marah.\n• [✓] \"The lion was amused at the mouse's words and decided to spare his life.\" → Menggambarkan singa yang memiliki rasa humor dan sisi pengampun/baik hati.\n• [✓] \"The lion thanked the mouse immensely for his help.\" → Menggambarkan singa yang rendah hati dan tahu berterima kasih.",
      textualEvidence: "Paragraf 3, 5, dan 8 yang merefleksikan karakter singa dari pemarah, pemaaf, hingga berterima kasih.",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "He quickly caught the mouse in his big paw and roared, \"Who dares to wake me up?\"",
      distractorAnalysis: [
        { option: "Kalimat 1 & 4", analysis: "Kalimat 1 hanya setting rutinitas biasa; kalimat 4 menggambarkan tindakan fisik tikus (bukan karakter singa)." }
      ]
    },

    // --------------------------------------------------------------------------
    // TEKS 2 (SOAL 6 - 10)
    // --------------------------------------------------------------------------
    {
      id: 6,
      textId: 2,
      number: 6,
      indicator: "Indikator 6: Mengidentifikasi informasi penting eksplisit (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPTXI01SU-250043-0005",
      type: "Explicit Detail Information",
      format: "multiple_choice",
      question: "Based on the information given, we can keep our mind focused and fresh by ....",
      options: [
        { key: "1", text: "knowing your learning style" },
        { key: "2", text: "using Pomodoro Technique" },
        { key: "3", text: "using online quizzes apps" },
        { key: "4", text: "by reviewing materials" },
        { key: "5", text: "by creating mind maps" }
      ],
      officialAnswer: "2",
      officialAnswerText: "Opsi 2 (using Pomodoro Technique)",
      officialExplanation: "Identifikasi Jenis Teks: Infographic / Procedure Text — Menyajikan langkah-langkah, tips, dan panduan belajar secara visual, ringkas, dan terstruktur.",
      textualEvidence: "Poin 4: \"Use the Pomodoro Technique: Study for 25 minutes, then take a 5-minute break. This keeps your mind fresh and focused.\"",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "Use the Pomodoro Technique: Study for 25 minutes, then take a 5-minute break. This keeps your mind fresh and focused.",
      distractorAnalysis: [
        { option: "Poin 1, 5, 6, 8", analysis: "Poin 1 (Learning style), Poin 5 (Mind maps), Poin 6 (Review materials), dan Poin 8 (Online quizzes) memiliki fungsi eksplisit lain yang berbeda di dalam infografis." }
      ]
    },
    {
      id: 7,
      textId: 2,
      number: 7,
      indicator: "Indikator 7: Mengelompokkan berdasarkan kategori (Pilihan Ganda Kompleks - Kategori)",
      code: "Kode: 25BIGUTAPTX102SU-250043-0077",
      type: "Categorization",
      format: "categorization",
      question: "Based on the infographic, determine whether each study technique listed on the left is categorized as Time Management or Self Management.",
      categories: ["Time Management", "Self Management"],
      items: [
        { id: "item1", statement: "Be patient and persistent", correctCategory: "Self Management" },
        { id: "item2", statement: "Use the Pomodoro technique", correctCategory: "Time Management" },
        { id: "item3", statement: "Set a consistent study schedule", correctCategory: "Time Management" }
      ],
      officialAnswer: { item1: "Self Management", item2: "Time Management", item3: "Time Management" },
      officialAnswerText: "Self Management | Time Management | Time Management",
      officialExplanation: "Pembahasan Pengelompokan:\n1. Be patient and persistent: Masuk ke dalam Self Management (pengelolaan emosi, sikap mental, dan ketekunan diri).\n2. Use the Pomodoro technique: Masuk ke dalam Time Management (pembagian interval waktu belajar 25 menit dan istirahat 5 menit).\n3. Set a consistent study schedule: Masuk ke dalam Time Management (pengaturan jam dan rutinitas jadwal belajar harian).",
      textualEvidence: "Poin 2 (Jadwal konsisten), Poin 4 (Pomodoro 25/5 menit), dan Poin 10 (Sabar dan gigih).",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "Set a Consistent Study Schedule: Study at the same time every day. Regularity helps build strong habits.",
      distractorAnalysis: [
        { option: "Salah Kategori", analysis: "Menukar ketekunan (Self Management) dengan pengaturan waktu (Time Management) adalah kesalahan konsep dasar." }
      ]
    },
    {
      id: 8,
      textId: 2,
      number: 8,
      indicator: "Indikator 8: Menyusun kerangka poin utama (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPINI10SU-250102-0253",
      type: "Sequence of Key Points",
      format: "multiple_choice",
      question: "From the options provided, choose the sequence that best reflects the information in the infographic \"Effective Study Techniques\".",
      options: [
        { key: "1", text: "Set your goal → Watch lessons videos → Sleep well → Have group chat with friends → Eat nutritious meal" },
        { key: "2", text: "Plan study time → Join a study group → Take long breaks → Write a to do list → Write important points" },
        { key: "3", text: "Know your learning style → Find a quiet area → Set a timetable → Use less gadgets → Be patient and persistent" },
        { key: "4", text: "Know your study style → Plan your study time → Practice and repeat → Take a break → Watch lessons videos" },
        { key: "5", text: "Take notes → Join a study groups → Use different medias → Play music you like → Have good meal while studying" }
      ],
      officialAnswer: "4",
      officialAnswerText: "Opsi 4 (Know your study style → Plan your study time → Practice and repeat → Take a break → Watch lessons videos)",
      officialExplanation: "Urutan pada Opsi 4 secara koheren merefleksikan poin-poin infografis (Poin 1: Learning style → Poin 2: Schedule → Poin 6: Practice → Poin 4: Break → Poin 8: Video lessons).",
      textualEvidence: "Urutan logis poin 1, 2, 6, 4, dan 8 pada teks infografis.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "Know Your Learning Style: Understand whether you learn best by reading, listening, or watching.",
      distractorAnalysis: [
        { option: "Opsi 1, 2, 3, 5", analysis: "Opsi 1, 2, 3, dan 5 memasukkan aktivitas yang tidak ada dalam teks (misal: \"Eat nutritious meal\", \"Take long breaks\", \"Play music\", dsb.)." }
      ]
    },
    {
      id: 9,
      textId: 2,
      number: 9,
      indicator: "Indikator 9: Menyimpulkan tujuan penulisan teks (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAPINI07SU-250043-0058",
      type: "Author's Purpose",
      format: "multi_select",
      question: "Which of the following statements best reflect the author's purpose in writing the text?\nThere is more than one correct answer. Click on every correct answer!",
      options: [
        { key: "1", text: "To help students find fun strategies to play after studying", isCorrect: false },
        { key: "2", text: "To offer students guidance on how to learn more efficiently", isCorrect: true },
        { key: "3", text: "To encourage students to use simple habits to improve their learning", isCorrect: true },
        { key: "4", text: "To explain why studying tips is difficult for most students", isCorrect: false },
        { key: "5", text: "To show students that they can manage their time and focus better", isCorrect: true }
      ],
      officialAnswer: ["2", "3", "5"],
      officialAnswerText: "[✓] Pernyataan 2, [✓] Pernyataan 3, [✓] Pernyataan 5",
      officialExplanation: "Pernyataan Benar:\n• [✓] To offer students guidance on how to learn more efficiently (Memberi panduan praktis belajar efektif).\n• [✓] To encourage students to use simple habits to improve their learning (Mendorong pembentukan kebiasaan positif).\n• [✓] To show students that they can manage their time and focus better (Membantu manajemen waktu dan konsentrasi).",
      textualEvidence: "Poin 1–10 infografis yang menyajikan tips praktis manajemen waktu, ruang belajar, dan teknik belajar.",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "Regularity helps build strong habits.",
      distractorAnalysis: [
        { option: "Pernyataan 1 & 4", analysis: "Pernyataan 1 salah (bukan strategi bermain), Pernyataan 4 salah (teks bukan menganalisis mengapa belajar itu sulit)." }
      ]
    },
    {
      id: 10,
      textId: 2,
      number: 10,
      indicator: "Indikator 10: Menentukan aplikasi kehidupan nyata (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAEVA113SU-250043-0040",
      type: "Real-life Practical Application",
      format: "multi_select",
      question: "If you are preparing for an important exam and want to improve your study routine, which of the following techniques do you think can be implemented effectively in your personal study time?\nThere is more than one correct answer. Click on every correct answer!",
      options: [
        { key: "1", text: "Only study when you are in a group discussion with others", isCorrect: false },
        { key: "2", text: "Use technology during all study sessions in or outside class", isCorrect: false },
        { key: "3", text: "Use the Pomodoro Technique to structure your study and break time", isCorrect: true },
        { key: "4", text: "Practice and repeat study material regularly to retain information", isCorrect: true },
        { key: "5", text: "Create a quiet and comfortable study space to improve focus", isCorrect: true }
      ],
      officialAnswer: ["3", "4", "5"],
      officialAnswerText: "[✓] Pernyataan 3, [✓] Pernyataan 4, [✓] Pernyataan 5",
      officialExplanation: "Pernyataan Benar:\n• [✓] Use the Pomodoro Technique to structure your study and break time (Poin 4).\n• [✓] Practice and repeat study material regularly to retain information (Poin 6).\n• [✓] Create a quiet and comfortable study space to improve focus (Poin 3).",
      textualEvidence: "Poin 3, 4, dan 6 infografis.",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "Create a Comfortable Study Space: Find a quiet, well-lit, and distraction-free area.",
      distractorAnalysis: [
        { option: "Pernyataan 1 & 2", analysis: "Pernyataan 1 keliru (\"Only study when in group discussion\" — belajar mandiri tetap esensial). Pernyataan 2 keliru (\"Use technology during all sessions\" — penggunaan teknologi harus bijak/terarah, bukan terus-menerus tanpa henti)." }
      ]
    },

    // --------------------------------------------------------------------------
    // TEKS 3 (SOAL 11 - 15)
    // --------------------------------------------------------------------------
    {
      id: 11,
      textId: 3,
      number: 11,
      indicator: "Indikator 11: Menyusun kronologi peristiwa utama (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPTXI01SU-250043-0005",
      type: "Chronological Summary",
      format: "multiple_choice",
      question: "Which statement provides the most accurate chronological summary of the story's main events?",
      options: [
        { key: "1", text: "Shero falls into the dirt. → The hyenas cause trouble at the river. → Hera tells Shero that he is funny. → Shero copies Hera's roar. → Shero becomes the kingdom's funny helper." },
        { key: "2", text: "Hera is a strong lion king. → Shero likes to pretend to be strong. → The hyenas cause trouble near the river. → Hera scares the hyenas, but Shero makes them laugh. → Shero learns that making others happy is special." },
        { key: "3", text: "Hera and Shero are both strong leaders. → The hyenas come to help the lions. → Shero tells funny stories to the hyenas. → Hera is angry with Shero. → The lions and hyenas become friends." },
        { key: "4", text: "Shero is a strong lion king. → Hera is jealous of Shero. → The hyenas attack the lions. → Shero defeats the hyenas. → Shero becomes the new king." },
        { key: "5", text: "Shero wants to be king and fights Hera. → The hyenas help Shero. → Hera leaves the kingdom. → Shero becomes king. → Hera returns to forgive Shero." }
      ],
      officialAnswer: "2",
      officialAnswerText: "Opsi 2 (Hera is a strong lion king. → Shero likes to pretend to be strong...)",
      officialExplanation: "Identifikasi Jenis Teks: Narrative Text (Fable) — Menceritakan kisah fiksi dua raja singa dengan konflik hyena dan resolusi penemuan jati diri.",
      textualEvidence: "1. Paragraf 1: Hera raja yang kuat, Shero suka berpura-pura kuat.\n2. Paragraf 2: Hyena membuat kekacauan di dekat sungai.\n3. Paragraf 3 & 4: Hera menakuti hyena, auman dan tingkah Shero justru membuat mereka tertawa.\n4. Paragraf 5 & 6: Shero menyadari keistimewaannya dalam membawa tawa dan menjadi pelawak kerajaan.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "Once upon a time, in Africa, there lived two lion kings. One was named Hera and the other was Shero.",
      distractorAnalysis: [
        { option: "Opsi 1, 3, 4, 5", analysis: "Opsi 1 tidak kronologis, Opsi 3, 4, dan 5 memuat peristiwa yang bertentangan dengan isi cerita asli." }
      ]
    },
    {
      id: 12,
      textId: 3,
      number: 12,
      indicator: "Indikator 12: Menyimpulkan pesan moral (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAPINI07SU-250102-0136",
      type: "Moral Message",
      format: "multi_select",
      question: "What can we learn from the story of Hera and Shero?\nThere is more than one answer. Click for every correct answer!",
      options: [
        { key: "1", text: "Everyone has something special to give, even if they are not the leader", isCorrect: true },
        { key: "2", text: "Being funny and making others smile is just as important as being strong", isCorrect: true },
        { key: "3", text: "Good friends will support you and help you see your real strengths", isCorrect: true },
        { key: "4", text: "Working together is better when people use their different talents", isCorrect: true },
        { key: "5", text: "Trying your best to help others is more important than always being perfect", isCorrect: true }
      ],
      officialAnswer: ["1", "2", "3", "4", "5"],
      officialAnswerText: "[✓] Pernyataan 1, [✓] Pernyataan 2, [✓] Pernyataan 3, [✓] Pernyataan 4, [✓] Pernyataan 5 (Semua Benar)",
      officialExplanation: "Pembahasan Detail: Kelima pernyataan merefleksikan pesan moral cerita:\n• Setiap individu punya keunikan masing-masing (Pernyataan 1 & 2).\n• Sahabat yang baik saling mendukung kelebihan masing-masing (Pernyataan 3).\n• Kerjasama tim menjadi sempurna dengan ragam talenta (Pernyataan 4).\n• Usaha terbaik untuk menolong lebih bermakna daripada kesempurnaan (Pernyataan 5).",
      textualEvidence: "Paragraf 5 & 6: \"The animals learned that both power and fun are important in life.\"",
      evidenceParagraphIndex: 5,
      evidenceSnippet: "The animals learned that both power and fun are important in life.",
      distractorAnalysis: [
        { option: "Semua Opsi", analysis: "Kelima pernyataan benar dan didukung oleh tema filosofis cerita." }
      ]
    },
    {
      id: 13,
      textId: 3,
      number: 13,
      indicator: "Indikator 13: Menemukan penyebab tindakan tokoh (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPINI10SU-250102-0253",
      type: "Cause and Effect",
      format: "multiple_choice",
      question: "The hyenas laugh so much when Shero tries to roar like Hera because ....",
      options: [
        { key: "1", text: "Shero tries to roar in a serious way and surprises the hyenas" },
        { key: "2", text: "Shero's roar is funny, which the hyenas think he is joking" },
        { key: "3", text: "Hera tells a joke about Shero to make the hyenas laugh" },
        { key: "4", text: "Shero is acting like Hera, and it's absolutely brilliant" },
        { key: "5", text: "Shero trips and falls when trying to show his strength" }
      ],
      officialAnswer: "2",
      officialAnswerText: "Opsi 2 (Shero's roar is funny, which the hyenas think he is joking)",
      officialExplanation: "Suara auman Shero melengking tinggi dan lucu sehingga dianggap sebagai lelucon oleh para hyena.",
      textualEvidence: "Paragraf 3: \"Shero also tried to roar, but his voice was high and silly. The hyenas laughed at him. Their leader, Hank the Hyena, made jokes about Shero.\"",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "Shero also tried to roar, but his voice was high and silly. The hyenas laughed at him.",
      distractorAnalysis: [
        { option: "Opsi 1, 3, 5", analysis: "Suara Shero melengking lucu (bukan serius di Opsi 1), Hera tidak membuat lelucon (Opsi 3), dan insiden jatuh terjadi di paragraf 4 (Opsi 5)." }
      ]
    },
    {
      id: 14,
      textId: 3,
      number: 14,
      indicator: "Indikator 14: Membuat inferensi pengandaian alur cerita (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAPINI07SU-250043-0058",
      type: "Hypothetical Plot Inference",
      format: "multi_select",
      question: "If in the beginning of the story, Shero is a strong lion with a loud roar, just like Hera. What would happened in the end of the story?\nThere is more than one correct answer. Click for every correct answer!",
      options: [
        { key: "1", text: "Shero and Hera would both scare the hyenas away together", isCorrect: true },
        { key: "2", text: "Shero would become the king, and Hera would leave the savannah", isCorrect: false },
        { key: "3", text: "Shero would get respect from the other animals for his strength", isCorrect: true },
        { key: "4", text: "The hyenas would still laugh at Shero because he is funny", isCorrect: false },
        { key: "5", text: "Shero would try to take Hera's place as the only lion king", isCorrect: false }
      ],
      officialAnswer: ["1", "3"],
      officialAnswerText: "[✓] Pernyataan 1 & [✓] Pernyataan 3",
      officialExplanation: "Penjelasan: Jika sejak awal Shero berbadan kuat dan mengaum keras seperti Hera:\n• [✓] Shero and Hera would both scare the hyenas away together (Keduanya bersama-sama menakuti kawanan hyena).\n• [✓] Shero would get respect from the other animals for his strength (Shero akan dihormati karena kekuatannya, bukan ditertawakan).",
      textualEvidence: "Paragraf 1 dan 3 mengenai dampak fisik dan kekuatan terhadap respon hyena.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "Hera was very strong and handsome. All the animals loved and respected him.",
      distractorAnalysis: [
        { option: "Pernyataan 2, 4, 5", analysis: "Pernyataan 2, 4, dan 5 tidak konsisten dengan premis pengandaian bahwa Shero kuat dan berwibawa." }
      ]
    },
    {
      id: 15,
      textId: 3,
      number: 15,
      indicator: "Indikator 15: Menilai penggambaran watak tokoh (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAEVAI13SU-250043-0040",
      type: "Character Trait Evaluation",
      format: "multi_select",
      question: "Shero is clumsy and funny, this is shown when he ....\nThere is more than one correct answer. Click for every correct answer!",
      options: [
        { key: "1", text: "scares the hyenas away with his loud and powerful roar", isCorrect: false },
        { key: "2", text: "makes the other animals smile by pretending to be a great king", isCorrect: true },
        { key: "3", text: "tries to roar like Hera, but his voice is small and makes the hyenas laugh", isCorrect: true },
        { key: "4", text: "walks with Hera to confront the hyenas, acting as if he is an important king too", isCorrect: false },
        { key: "5", text: "tells the hyenas that he is as mighty as King Hera, even though no one believes him", isCorrect: false }
      ],
      officialAnswer: ["2", "3"],
      officialAnswerText: "[✓] Pernyataan 2 & [✓] Pernyataan 3",
      officialExplanation: "Bukti & Pembahasan:\n• [✓] makes the other animals smile by pretending to be a great king (Paragraf 1: \"...made the other animals laugh\").\n• [✓] tries to roar like Hera, but his voice is small and makes the hyenas laugh (Paragraf 3).",
      textualEvidence: "Paragraf 1 dan 3.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "He often copied Hera's roar, but it made the other animals laugh.",
      distractorAnalysis: [
        { option: "Pernyataan 1, 4, 5", analysis: "Opsi 1 bertentangan dengan fakta teks; Opsi 4 dan 5 mencerminkan kepolosan/keinginan tampil, bukan bukti kekonyolan/kelucuan yang membuat orang tertawa." }
      ]
    },

    // --------------------------------------------------------------------------
    // TEKS 4 (SOAL 16 - 20)
    // --------------------------------------------------------------------------
    {
      id: 16,
      textId: 4,
      number: 16,
      indicator: "Indikator 16: Mengidentifikasi informasi eksplisit (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAPTX101SU-250045-0100",
      type: "Explicit Factual Details",
      format: "multi_select",
      question: "Which of the following descriptions are mentioned clearly in the text?\nThere are more than one correct answer. Click on every correct answer.",
      options: [
        { key: "1", text: "The reef was built by local communities over hundreds of years", isCorrect: false },
        { key: "2", text: "The reef is located in the Pacific Ocean near Australia", isCorrect: true },
        { key: "3", text: "The reef can help protect the coast from big waves", isCorrect: true },
        { key: "4", text: "The reef is home to sea turtles and dolphins", isCorrect: true },
        { key: "5", text: "The reef has more than 10,000 coral islands", isCorrect: false }
      ],
      officialAnswer: ["2", "3", "4"],
      officialAnswerText: "[✓] Pernyataan 2, [✓] Pernyataan 3, [✓] Pernyataan 4",
      officialExplanation: "Identifikasi Jenis Teks: Descriptive Text — Mendeskripsikan karakteristik fisik, lokasi, keanekaragaman hayati, dan fungsi ekologis Great Barrier Reef.\nBukti Tekstual:\n• [✓] Paragraf 1: \"...located in the Pacific Ocean, near the northeast coast of Australia.\"\n• [✓] Paragraf 4: \"It helps protect the coast from big waves and storms.\"\n• [✓] Paragraf 2: \"There are many kinds of colorful fish, sea turtles, dolphins...\"",
      textualEvidence: "Paragraf 1, 2, dan 4.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "It is located in the Pacific Ocean, near the northeast coast of Australia.",
      distractorAnalysis: [
        { option: "Pernyataan 1 & 5", analysis: "Pernyataan 1 salah (terumbu karang adalah bentukan alam, bukan dibangun manusia). Pernyataan 5 salah (angka 10.000 pulau tidak tercantum di teks)." }
      ]
    },
    {
      id: 17,
      textId: 4,
      number: 17,
      indicator: "Indikator 17: Menentukan makna frasa kontekstual (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPINI07SU-250045-0067",
      type: "Contextual Phrase Meaning",
      format: "multiple_choice",
      question: "The author mentioned \"It feels like a different world under the sea\". What does the phrase \"a different world under the sea\" most likely mean?",
      options: [
        { key: "1", text: "A safe place that has bright reef" },
        { key: "2", text: "A peaceful place where people can live under water" },
        { key: "3", text: "A colorful place that looks the same as the land" },
        { key: "4", text: "A shining reef that is quiet" },
        { key: "5", text: "A calm place that looks beautiful and unique" }
      ],
      officialAnswer: "5",
      officialAnswerText: "Opsi 5 (A calm place that looks beautiful and unique)",
      officialExplanation: "Frasa kiasan \"dunia yang berbeda di bawah laut\" menggambarkan suasana bawah air yang luar biasa indah, tenang, dan memiliki keunikan pemandangan berbeda dari daratan.",
      textualEvidence: "Paragraf 3: \"When the sun shines, the reef looks bright and full of light. It feels like a different world under the sea.\"",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "When the sun shines, the reef looks bright and full of light. It feels like a different world under the sea.",
      distractorAnalysis: [
        { option: "Opsi 1, 2, 3, 4", analysis: "Opsi 2 salah (manusia tidak tinggal di bawah air); Opsi 3 salah (pemandangannya berbeda dari darat, bukan sama); Opsi 1 dan 4 tidak menangkap nuansa keunikan 'different world'." }
      ]
    },
    {
      id: 18,
      textId: 4,
      number: 18,
      indicator: "Indikator 18: Menyimpulkan gagasan utama tersirat (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPINI07SU-250045-0072",
      type: "Implied Main Idea",
      format: "multiple_choice",
      question: "Which of the following best represents the main idea implied by the text?",
      options: [
        { key: "1", text: "The reef is useful for fishing and shipping" },
        { key: "2", text: "The reef is large, but not important to people" },
        { key: "3", text: "The reef is a natural treasure that must be cared for" },
        { key: "4", text: "The reef is only for scientists and researchers to explore" },
        { key: "5", text: "The reef is a protected area that should be closed to visitors" }
      ],
      officialAnswer: "3",
      officialAnswerText: "Opsi 3 (The reef is a natural treasure that must be cared for)",
      officialExplanation: "Gagasan utama tersirat adalah Great Barrier Reef merupakan warisan kekayaan alam berharga yang memiliki peran vital bagi ekosistem sehingga wajib dijaga kelestariannya.",
      textualEvidence: "Paragraf 4: \"The reef is not only beautiful, but also very important... Without the reef, the ocean would not be the same.\"",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "The reef is not only beautiful, but also very important. It helps protect the coast from big waves and storms.",
      distractorAnalysis: [
        { option: "Opsi 1, 2, 4, 5", analysis: "Opsi 2, 4, dan 5 bertentangan dengan isi teks; Opsi 1 hanya menangkap satu detail kecil tanpa menyoroti peran ekologis dan keindahannya." }
      ]
    },
    {
      id: 19,
      textId: 4,
      number: 19,
      indicator: "Indikator 19: Menentukan fakta tambahan yang mendukung (Pilihan Ganda)",
      code: "Kode: 25BIGUTAPINI06SU-250045-0060",
      type: "Persuasive Supporting Detail",
      format: "multiple_choice",
      question: "Which detail would best encourage people to visit the Great Barrier Reef?",
      options: [
        { key: "1", text: "Visitors can see an Australian national park" },
        { key: "2", text: "Visitors can stay in hotels around the reef" },
        { key: "3", text: "Visitors can get there by boat or short flights" },
        { key: "4", text: "Visitors can protect the coral and the animals" },
        { key: "5", text: "Visitors can see the coral by diving or swimming" }
      ],
      officialAnswer: "5",
      officialAnswerText: "Opsi 5 (Visitors can see the coral by diving or swimming)",
      officialExplanation: "Pengalaman langsung menyelam dan berenang menyaksikan warna-warni terumbu karang merupakan daya tarik wisata paling persuasif untuk memikat wisatawan.",
      textualEvidence: "Paragraf 2 kalimat terakhir: \"People can see this beauty by swimming, diving, or joining a boat tour.\"",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "People can see this beauty by swimming, diving, or joining a boat tour.",
      distractorAnalysis: [
        { option: "Opsi 1, 2, 3, 4", analysis: "Opsi 1, 2, dan 3 adalah detail logistik/lokasi yang tidak disebutkan di teks; Opsi 4 adalah tindakan konservasi, bukan daya tarik rekreasi langsung." }
      ]
    },
    {
      id: 20,
      textId: 4,
      number: 20,
      indicator: "Indikator 20: Mengevaluasi bagian teks yang mendukung ide utama (Pilihan Ganda Kompleks - MCMA)",
      code: "Kode: 25BIGUTAEVAI16SU-250045-0101",
      type: "Evaluating Supporting Parts",
      format: "multi_select",
      question: "Which parts of the text best support the idea that the Great Barrier Reef is both beautiful and important?\nThere is more than one correct answer. Click on every correct answer!",
      options: [
        { key: "1", text: "The reef helps protect the coast from big waves", isCorrect: true },
        { key: "2", text: "It is home to sea turtles, dolphins, and colorful fish", isCorrect: true },
        { key: "3", text: "The coral reefs grow best in cold, deep water", isCorrect: false },
        { key: "4", text: "Some areas of the reef are damaged by starfish and warm water", isCorrect: false },
        { key: "5", text: "The reef was discovered by sailors in the 1800s", isCorrect: false }
      ],
      officialAnswer: ["1", "2"],
      officialAnswerText: "[✓] Pernyataan 1 & [✓] Pernyataan 2",
      officialExplanation: "Bukti & Pembahasan:\n• [✓] The reef helps protect the coast from big waves: Mendukung aspek pentingnya fungsi fisik terumbu karang (important - Paragraf 4).\n• [✓] It is home to sea turtles, dolphins, and colorful fish: Mendukung aspek keindahan dan kekayaan hayatinya (beautiful & important - Paragraf 2).",
      textualEvidence: "Paragraf 2 & Paragraf 4.",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "It helps protect the coast from big waves and storms. It is a home for sea animals and a place where plants can grow.",
      distractorAnalysis: [
        { option: "Pernyataan 3, 4, 5", analysis: "Pernyataan 3, 4, dan 5 berisi klaim yang salah secara fakta teks atau tidak disebutkan dalam bacaan." }
      ]
    }
  ]
};

// Expose to window globally
if (typeof window !== 'undefined') {
  window.TKA_DATA = TKA_DATA;
}
