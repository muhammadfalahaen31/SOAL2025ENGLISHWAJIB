// ==========================================
// DATA SOURCE: TKA BAHASA INGGRIS SMA - NARRATIVE TEXT
// VERBATIM FIDELITY: 100% MATCH TO OFFICIAL SOURCE MODULE
// ==========================================

const TKA_DATA = {
  strategies: [
    {
      id: "topic_main_idea",
      name: "1. TOPIC / MAIN IDEA",
      type: "Topic / Main Idea",
      quickQuestion: "What is this text mostly about?",
      formula: "Cakupan Keseluruhan Alur Teks + Subjek/Konflik Utama = Topik / Ide Pokok",
      questionCharacteristics: [
        "What is the topic of the text?",
        "What is the main idea of the passage?",
        "The text is mainly about..."
      ],
      steps: [
        "Jangan langsung memilih jawaban hanya berdasarkan satu kalimat pembuka.",
        "Perhatikan keseluruhan alur teks dari orientasi hingga resolusi.",
        "Identifikasi siapa tokoh utama atau peristiwa apa yang paling dominan dibahas.",
        "Pilih jawaban yang mencakup keseluruhan alur cerita (komprehensif).",
        "Hindari pilihan yang hanya mengambil satu detail kecil di satu paragraf."
      ],
      distractorTraps: [
        "Pilihan terlalu sempit (hanya membahas satu detail kecil di satu paragraf).",
        "Pilihan terlalu umum melampaui batas konteks teks bacaan.",
        "Pilihan yang berlawanan atau menyimpang dari fakta narasi."
      ]
    },
    {
      id: "detail_information",
      name: "2. DETAIL INFORMATION",
      type: "Detail Information",
      quickQuestion: "What specific fact is explicitly stated?",
      formula: "Kata Kunci Pertanyaan → Scanning & Temukan Bukti Teks → Verifikasi Kesesuaian",
      questionCharacteristics: [
        "According to the text, why did...?",
        "Which of the following is explicitly stated about...?",
        "What happened when...?"
      ],
      steps: [
        "Identifikasi kata kunci (keyword) utama dalam pertanyaan soal.",
        "Lakukan scanning cepat untuk menemukan keyword atau sinonimnya di dalam teks.",
        "Baca 1–2 kalimat sebelum dan sesudah informasi tersebut ditemukan.",
        "Jangan menggunakan asumsi pribadi di luar data eksplisit teks.",
        "Pilih jawaban yang secara eksplisit didukung oleh bukti kalimat narasi."
      ],
      distractorTraps: [
        "Pengecoh kata serupa (memakai kata yang persis sama dari teks namun maknanya diputarbalikkan).",
        "Informasi yang tampak logis di dunia nyata tetapi tidak pernah disebutkan di dalam teks."
      ]
    },
    {
      id: "inference",
      name: "3. INFERENCE",
      type: "Inference",
      quickQuestion: "What logical conclusion can be drawn from clues?",
      formula: "Petunjuk Teks (Text Clues) + Penalaran Logis = Kesimpulan Tersirat Sahih",
      questionCharacteristics: [
        "What can be inferred from the text?",
        "It can be concluded that...?",
        "The passage implies that...?"
      ],
      steps: [
        "Temukan fakta-fakta kunci dan petunjuk tersirat di dalam narasi teks.",
        "Hubungkan keterkaitan logis sebab-akibat antarfakta tersebut.",
        "Tarik kesimpulan tersirat yang paling masuk akal dan beralasan.",
        "Hindari memilih kesimpulan yang terlalu berlebihan, ekstrem, atau spekulatif.",
        "Pastikan kesimpulan tetap memiliki fondasi rujukan tekstual yang kuat."
      ],
      distractorTraps: [
        "Opsi spekulatif liar yang tidak memiliki bukti pendukung di dalam teks.",
        "Opsi yang hanya mengulang fakta eksplisit secara mentah tanpa penalaran tersirat.",
        "Opsi yang melebih-lebihkan kepribadian, emosi, atau niat tokoh."
      ]
    },
    {
      id: "pronoun_reference",
      name: "4. PRONOUN REFERENCE",
      type: "Pronoun Reference",
      quickQuestion: "Which noun is replaced by this pronoun?",
      formula: "Identifikasi Pronoun → Scan Kata Benda Sebelumnya → Cek Kesesuaian Jumlah/Gender & Makna",
      questionCharacteristics: [
        "The word 'He/She/It/They' in paragraph X refers to...",
        "What does the underlined pronoun refer to?"
      ],
      steps: [
        "Identifikasi kata ganti (pronoun) yang ditanyakan beserta nomor paragrafnya.",
        "Lihat 1–2 klausa atau kalimat persis sebelum posisi pronoun tersebut berada.",
        "Cari kata benda (noun/noun phrase) kandidat yang paling logis.",
        "Pastikan kecocokan jumlah (singular/plural) dan gender/kategori benda.",
        "Gantikan pronoun dengan kata kandidat dan baca ulang untuk menguji keutuhan maknanya."
      ],
      distractorTraps: [
        "Memilih kata benda terdekat yang secara gramatikal hanyalah objek pelengkap minor.",
        "Terkecoh antara kata ganti jamak (they/them) dengan kata benda tunggal (it/he/she)."
      ]
    },
    {
      id: "vocabulary_in_context",
      name: "5. VOCABULARY IN CONTEXT",
      type: "Vocabulary in Context",
      quickQuestion: "What is the contextual synonym in this situation?",
      formula: "Kata Target → Petunjuk Konteks Kalimat → Sinonim Kontekstual Paling Tepat",
      questionCharacteristics: [
        "The word '...' is closest in meaning to...",
        "What is the meaning of the word '...' in paragraph X?"
      ],
      steps: [
        "Jangan langsung menerjemahkan kata secara terpisah dari kalimatnya.",
        "Baca kalimat utuh tempat kata tersebut berada secara mendalam.",
        "Perhatikan situasi cerita, nuansa rasa (positif/negatif), dan kata-kata di sekitarnya.",
        "Pilih sinonim yang paling selaras menggantikan kata tersebut dalam alur cerita.",
        "Eliminasi pilihan yang merupakan lawan kata (antonim) atau keluar konteks."
      ],
      distractorTraps: [
        "Arti kamus umum yang tidak sesuai dengan konteks situasi spesifik cerita.",
        "Pilihan kata yang justru merupakan lawan kata (antonim) dari target kata."
      ]
    },
    {
      id: "true_false",
      name: "6. TRUE / FALSE",
      type: "True / False",
      quickQuestion: "Does each statement strictly match the text facts?",
      formula: "Klaim Pernyataan → Verifikasi Bukti Teks Ketat → Benar (True) / Salah (False)",
      questionCharacteristics: [
        "Decide whether the following statements are True or False based on the text.",
        "Put a tick (✓) on (T) or (F)!"
      ],
      steps: [
        "Baca setiap butir pernyataan dan tandai poin klaim utamanya.",
        "Lakukan pencocokan langsung dengan bukti kalimat di dalam teks.",
        "Periksa apakah ada perubahan pada pelaku, urutan waktu, atau akibat kejadian.",
        "Perhatikan kata pembatas ekstrem: always, only, never, entirely, immediately.",
        "Satu detail kecil yang tidak sesuai langsung menjadikan pernyataan bernilai FALSE."
      ],
      distractorTraps: [
        "Pernyataan yang 90% benar namun disisipi satu kata pembatas palsu.",
        "Pernyataan yang tampak logis secara akal sehat tetapi tidak ada faktanya di teks."
      ]
    },
    {
      id: "multi_select",
      name: "7. MULTIPLE-SELECT",
      type: "Multiple-Select",
      quickQuestion: "Which multiple statements are supported by the passage?",
      formula: "Evaluasi Setiap Pilihan Secara Mandiri → Konfirmasi Bukti Teks → Centang Semua yang Benar",
      questionCharacteristics: [
        "Which of the following statements reflect...?",
        "There is more than one correct answer. Choose every correct answer!"
      ],
      steps: [
        "Ingat bahwa jawaban benar berjumlah lebih dari satu opsi.",
        "Evaluasi setiap opsi satu per satu secara mandiri layaknya soal True/False mini.",
        "Cari bukti rujukan kalimat tekstual untuk setiap opsi pilihan.",
        "Centang semua opsi yang terbukti didukung kuat oleh teks bacaan.",
        "Jangan berhenti hanya saat menemukan satu opsi yang dirasa benar."
      ],
      distractorTraps: [
        "Hanya memilih satu jawaban karena terbiasa dengan sistem pilihan ganda biasa.",
        "Memilih pernyataan yang terkesan bijak tetapi bertentangan dengan fakta teks."
      ]
    },
    {
      id: "tone",
      name: "8. TONE",
      type: "Tone",
      quickQuestion: "How does the writer make the reader feel?",
      formula: "Pilihan Kata (Diksi) Penulis + Atmosfer Cerita = Nada Penulis (Author's Tone)",
      questionCharacteristics: [
        "What is the tone of the passage?",
        "The author's attitude toward the event is described as..."
      ],
      steps: [
        "Perhatikan pilihan kata sifat dan kata kerja (diksi) yang digunakan penulis.",
        "Rasakan atmosfer suasana cerita (menegangkan, haru, suram, penuh kekaguman, reflektif).",
        "Identifikasi sikap penulis terhadap konflik dan nasib para tokoh narasi.",
        "Simpulkan overall tone (Reflective, Sympathetic, Critical, Sarcastic, dll.)."
      ],
      distractorTraps: [
        "Menyamakan perasaan sesaat dari salah satu tokoh dengan nada penutur keseluruhan teks.",
        "Terkecoh satu adegan komedi kecil padahal nuansa keseluruhan cerita adalah tragedi."
      ]
    },
    {
      id: "purpose",
      name: "9. PURPOSE",
      type: "Purpose",
      quickQuestion: "Why did the author write this narrative?",
      formula: "Genre Teks Narasi + Pesan Inti Cerita = Tujuan Komunikatif Penulis",
      questionCharacteristics: [
        "What is the purpose of the text?",
        "The writer wrote the text in order to..."
      ],
      steps: [
        "Kenali karakteristik genre teks (Narrative: To entertain, amuse, or teach a lesson).",
        "Perhatikan pesan inti atau peristiwa unik yang diceritakan oleh penulis.",
        "Pilih kata kerja tujuan komunikatif yang paling tepat (To narrate, To entertain, To teach).",
        "Pastikan tujuan mencakup keseluruhan esensi cerita."
      ],
      distractorTraps: [
        "Memilih tujuan teks ilmiah faktual (To explain scientific process / To inform news) untuk teks dongeng fiksi.",
        "Memilih tujuan persuasif/promosi yang tidak relevan."
      ]
    },
    {
      id: "moral_value",
      name: "10. MORAL VALUE",
      type: "Moral Value",
      quickQuestion: "What universal life lesson does the narrative teach?",
      formula: "Tindakan Tokoh → Konflik & Konsekuensi Resolusi → Nilai Moral Universal",
      questionCharacteristics: [
        "What is the moral value of the story?",
        "What lesson can be learned from the text?"
      ],
      steps: [
        "Perhatikan tindakan moral atau kekhilafan para tokoh utama cerita.",
        "Lihat akibat atau ganjaran dari tindakan tersebut dalam komplikasi dan resolusi.",
        "Tarik pelajaran hidup universal yang dapat dipetik oleh pembaca.",
        "Pilih pesan moral yang paling selaras dengan akhir alur cerita."
      ],
      distractorTraps: [
        "Pilihan nasihat yang membenarkan kecurangan atau keegoisan tokoh jahat.",
        "Pilihan yang hanya meringkas alur cerita tanpa mengandung nilai etika/moral universal."
      ]
    },
    {
      id: "conclusion",
      name: "11. CONCLUSION",
      type: "Conclusion",
      quickQuestion: "What overall summary wraps up the entire story?",
      formula: "Orientasi + Komplikasi Puncak + Resolusi Akhir = Kesimpulan Lengkap",
      questionCharacteristics: [
        "What can be concluded from the text?",
        "The conclusion of the story is that..."
      ],
      steps: [
        "Gabungkan poin-poin penting dari awal orientasi, puncak konflik, hingga resolusi akhir.",
        "Fokus pada nasib akhir tokoh dan penyelesaian masalah utama cerita.",
        "Pilih kesimpulan komprehensif yang didasari oleh seluruh isi teks narasi.",
        "Hindari kesimpulan yang memasukkan asumsi baru yang tidak pernah terjadi di teks."
      ],
      distractorTraps: [
        "Kesimpulan sepihak yang hanya mengambil dari satu paragraf awal.",
        "Menyimpulkan hal baru yang tidak pernah terjadi di akhir alur cerita."
      ]
    },
    {
      id: "categorization",
      name: "12. CATEGORIZATION",
      type: "Categorization",
      quickQuestion: "Which character or entity matches each specific trait/action?",
      formula: "Pernyataan Sifat/Tindakan → Scanning Kemunculan Tokoh → Pencocokan Tepat",
      questionCharacteristics: [
        "Categorize each action or trait to the correct character.",
        "Complete the table by matching the statements with the correct categories."
      ],
      steps: [
        "Identifikasi kata kunci pada setiap baris tindakan atau karakteristik.",
        "Cari kemunculan nama tokoh atau entitas yang terkait di dalam narasi teks.",
        "Cocokkan dengan bukti kalimat di dalam teks untuk memvalidasi kepemilikan tindakan.",
        "Tentukan kategori yang benar untuk setiap baris satu per satu.",
        "Lakukan pengecekan silang agar tidak ada baris yang tertukar antartokoh."
      ],
      distractorTraps: [
        "Menukar tindakan antara dua tokoh yang sering muncul bersamaan dalam satu adegan.",
        "Mengelompokkan berdasarkan dugaan pribadi alih-alih bukti kalimat narasi teks."
      ]
    }
  ],

  texts: [
    {
      id: 1,
      number: "Text 1",
      title: "The Legend of Naka Cave & King U-Lue",
      questionRange: "Questions 1–6",
      sourceCitation: "(adapted from https://thailand.go.th)",
      paragraphs: [
        "Long ago, King U-Lue was a divine ruler of a magnificent city called Rattaphan Nakhon, located near the Mekong River. In this golden age, the human world and the mystical Naga kingdom were deeply connected. The city's prosperity was legendary, but its downfall began when King U-Lue's grandson, Prince Fa Rung, fell in love with a beautiful Naga princess named Nakkhrinthrani. Despite the ancient laws forbidding the union of different species, the two were married, and for three years, the kingdom celebrated their love.",
        "However, the joy turned into a dark mystery when the princess failed to conceive an heir. She fell into a deep, wasting sickness that weakened her magical veil. One day, a royal servant peeked into her chambers and was horrified to see a giant, shimmering serpent resting on the bed instead of a woman. Word of this \"deceit\" spread like wildfire, reaching King U-Lue. Enraged and feeling insulted by the presence of a beast in his palace, the King banished the princess and sent a harsh letter to her father, the Naga King, demanding he take his daughter back.",
        "The Naga King, heartbroken by his daughter's humiliation and the King's lack of compassion, rose from the depths with a vengeful army. That very night, a catastrophic flood swept through Rattaphan Nakhon, tearing down its golden walls and swallowing its people. The Naga King spared no one, transforming the once-vibrant city into a vast, silent lake known today as Bueng Khong Long. But for King U-Lue, the Naga King reserved a punishment far worse than death.",
        "As the waters receded, the gods placed a heavy curse on King U-Lue for failing to lead with wisdom and mercy. His body began to stiffen and stretch, his skin turning into cold, grey stone scales. He was transformed into a giant serpent, eternally bound to the Phu Langka mountains. The curse decreed that he would remain petrified until his lost city was reborn or the land reached a state of perfect virtue. Today, his silent remains form the Naka Cave, where his scales and weary head stand as a permanent monument to a fallen kingdom."
      ],
      vocabulary: [
        {
          word: "divine",
          pos: "adjective",
          meaning: "bersifat ketuhanan / suci / agung",
          context: "Long ago, King U-Lue was a divine ruler of a magnificent city...",
          contextualMeaning: "Menggambarkan sosok raja yang memiliki status kedewaan, agung, dan sangat dihormati.",
          pronunciation: "/dɪˈvaɪn/",
          example: "The ancient temple was dedicated to a divine protector."
        },
        {
          word: "magnificent",
          pos: "adjective",
          meaning: "sangat indah / megah / luar biasa",
          context: "...a magnificent city called Rattaphan Nakhon, located near the Mekong River.",
          contextualMeaning: "Menjelaskan kemegahan dan keindahan arsitektur kota kuno yang makmur.",
          pronunciation: "/mæɡˈnɪfɪsnt/",
          example: "The king built a magnificent palace overlooking the river."
        },
        {
          word: "mystical",
          pos: "adjective",
          meaning: "mistis / gaib / berhubungan dengan kekuatan gaib",
          context: "...the human world and the mystical Naga kingdom were deeply connected.",
          contextualMeaning: "Kekuatan atau kerajaan makhluk mitologis yang memiliki sihir dan keajaiban.",
          pronunciation: "/ˈmɪstɪkl/",
          example: "Legends say the forest is protected by mystical creatures."
        },
        {
          word: "prosperity",
          pos: "noun",
          meaning: "kemakmuran / kesejahteraan / kekayaan",
          context: "The city's prosperity was legendary...",
          contextualMeaning: "Kondisi ekonomi dan kemakmuran kota yang sangat kaya raya dan berjaya.",
          pronunciation: "/prɒˈspɛrɪti/",
          example: "Hard work and peace brought great prosperity to the realm."
        },
        {
          word: "forbidding",
          pos: "verb (participle) / adjective",
          meaning: "melarang / mencegah secara tegas",
          context: "Despite the ancient laws forbidding the union of different species...",
          contextualMeaning: "Aturan adat kuno yang secara tegas mengharamkan pernikahan antardua spesies.",
          pronunciation: "/fəˈbɪdɪŋ/",
          example: "The strict law forbidding trade with strangers was maintained for centuries."
        },
        {
          word: "conceive",
          pos: "verb",
          meaning: "mengandung / hamil / membuahkan keturunan",
          context: "...when the princess failed to conceive an heir.",
          contextualMeaning: "Ketidakmampuan sang putri untuk melahirkan calon pewaris tahta kerajaan.",
          pronunciation: "/kənˈsiːv/",
          example: "The royal couple prayed daily to conceive a child."
        },
        {
          word: "wasting sickness",
          pos: "noun phrase",
          meaning: "penyakit yang menggerogoti tubuh / penyakit parah",
          context: "She fell into a deep, wasting sickness that weakened her magical veil.",
          contextualMeaning: "Kondisi fisik yang melemah drastis sehingga merusak samaran wujud manusianya.",
          pronunciation: "/ˈweɪstɪŋ ˈsɪknəs/",
          example: "The mysterious wasting sickness drained all her physical strength."
        },
        {
          word: "weakened",
          pos: "verb (past)",
          meaning: "melemahkan / membuat tidak berdaya",
          context: "...that weakened her magical veil.",
          contextualMeaning: "Mengikis kekuatan sihir penyamaran putri naga hingga wujud aslinya tampak.",
          pronunciation: "/ˈwiːkənd/",
          example: "The harsh fever weakened the warrior's endurance."
        },
        {
          word: "deception",
          pos: "noun",
          meaning: "penipuan / tipu muslihat",
          context: "Word of this \"deceit\" spread like wildfire, reaching King U-Lue.",
          contextualMeaning: "Anggapan bahwa wujud naga sang putri adalah kebohongan dan penipuan terhadap istana.",
          pronunciation: "/dɪˈsɛpʃn/",
          example: "He could not forgive the deception plotted by his former ally."
        },
        {
          word: "banished",
          pos: "verb (past)",
          meaning: "mengasingkan / mengusir dari kerajaan",
          context: "...the King banished the princess and sent a harsh letter to her father...",
          contextualMeaning: "Mengusir secara paksa keluar dari istana dan wilayah kerajaan karena murka.",
          pronunciation: "/ˈbænɪʃt/",
          example: "The traitor was banished to a desolate island across the sea."
        },
        {
          word: "compassion",
          pos: "noun",
          meaning: "belas kasih / rasa iba",
          context: "The Naga King, heartbroken by his daughter's humiliation and the King's lack of compassion...",
          contextualMeaning: "Ketiadaan rasa empati atau rasa iba dari Raja U-Lue saat mengusir sang putri yang sedang sakit.",
          pronunciation: "/kəmˈpæʃn/",
          example: "A wise ruler always treats his people with fairness and compassion."
        },
        {
          word: "vengeful",
          pos: "adjective",
          meaning: "penuh dendam / ingin membalas dendam",
          context: "...rose from the depths with a vengeful army.",
          contextualMeaning: "Pasukan yang bangkit dengan tekad bulat untuk membalas penghinaan dan kezaliman.",
          pronunciation: "/ˈvɛndʒfl/",
          example: "The vengeful dragon attacked the castle that stole its egg."
        },
        {
          word: "catastrophic",
          pos: "adjective",
          meaning: "dahsyat / bersifat malapetaka besar",
          context: "...a catastrophic flood swept through Rattaphan Nakhon...",
          contextualMeaning: "Banjir bandang raksasa yang menimbulkan kehancuran total dan memusnahkan kota.",
          pronunciation: "/ˌkætəˈstrɒfɪk/",
          example: "The catastrophic storm leveled every wooden house in the valley."
        },
        {
          word: "petrified",
          pos: "adjective / verb (participle)",
          meaning: "membatu / mengeras menjadi batu",
          context: "The curse decreed that he would remain petrified until his lost city was reborn...",
          contextualMeaning: "Tubuh hidup yang dikutuk menjadi wujud patung batu beku tanpa batas waktu.",
          pronunciation: "/ˈpɛtrɪfaɪd/",
          example: "The ancient tree trunk became petrified after thousands of years."
        },
        {
          word: "virtue",
          pos: "noun",
          meaning: "kebajikan / kemurnian moral / kebaikan luhur",
          context: "...or the land reached a state of perfect virtue.",
          contextualMeaning: "Kondisi moral dan spiritual masyarakat yang mencapai puncak kebaikan dan keadilan.",
          pronunciation: "/ˈvɜːtʃuː/",
          example: "Honesty and generosity are signs of noble virtue."
        }
      ]
    },
    {
      id: 2,
      number: "Text 2",
      title: "The Miller's Daughter & The Silver Hands",
      questionRange: "Questions 7–12",
      sourceCitation: "(adapted from https://sites.pitt.edu)",
      paragraphs: [
        "In a quiet village near a dense forest, a hardworking miller lived with his beautiful daughter. One day, the miller was tricked by a mysterious dark figure into a deal: great wealth in exchange for whatever stood behind his mill. Unknowingly, he had promised his daughter to the stranger, who was actually a sorcerer. The girl was so pure and kind that the sorcerer could not touch her. To protect herself further, she spent her days washing her hands until they shone like pearls, frustrating the sorcerer's attempts to claim her. Angered by his inability to seize her, the sorcerer commanded the miller to cut off his daughter's hands, threatening to destroy the entire village if he refused. Heartbroken, the miller obeyed, but the girl did not lose hope.",
        "She continued to weep, and her tears kept her stumps clean and holy. Eventually, she fled into the royal gardens, where she lived off the fruit that hung low from the trees. Her resilience in the face of such cruelty drew the attention of the young king, who resided in the castle nearby. The king was moved by her tragic story and her unwavering spirit. He ordered his finest smiths to craft a pair of beautiful silver hands for her. They were married soon after, and for a time, they lived in peace. However, the sorcerer's malice was not yet exhausted. While the king was away at war, the sorcerer intercepted letters and manipulated messages to make the king believe his wife and newborn child were monsters.",
        "Forced into exile once more, the girl fled into the mountains with her infant, seeking refuge in a hidden hermitage. In the solitude of the mountains, a miracle occurred. Because of her patience and goodness, her hands began to grow back, fleshy and real. Years later, the king, who had been searching for her tirelessly, found the hermitage. He did not recognize her at first because of her restored hands, but the silver ones she had kept as a reminder proved her identity. They returned to the kingdom together, the sorcerer's curse finally broken by a love that was stronger than any silver or steel. The daughter, once a victim of a dark bargain, became a symbol of purity that could not be tarnished by evil."
      ],
      vocabulary: [
        {
          word: "mysterious",
          pos: "adjective",
          meaning: "misterius / penuh rahasia / tidak dikenal",
          context: "...the miller was tricked by a mysterious dark figure into a deal...",
          contextualMeaning: "Sosok asing yang mencurigakan dan menyembunyikan identitas aslinya sebagai penyihir jahat.",
          pronunciation: "/mɪˈstɪəriəs/",
          example: "A mysterious stranger arrived at the gate at midnight."
        },
        {
          word: "exchange",
          pos: "noun / verb",
          meaning: "pertukaran / barter",
          context: "...great wealth in exchange for whatever stood behind his mill.",
          contextualMeaning: "Perjanjian pertukaran kekayaan materi dengan sesuatu yang ada di belakang kincir.",
          pronunciation: "/ɪksˈtʃeɪndʒ/",
          example: "The merchant offered gold in exchange for rare spices."
        },
        {
          word: "unknowingly",
          pos: "adverb",
          meaning: "tanpa disadari / tanpa sepengetahuan",
          context: "Unknowingly, he had promised his daughter to the stranger...",
          contextualMeaning: "Tindakan sang ayah menyetujui perjanjian tanpa mengetahui bahwa putrinya sedang berdiri di sana.",
          pronunciation: "/ʌnˈnəʊɪŋli/",
          example: "She unknowingly dropped her keys on the pathway."
        },
        {
          word: "sorcerer",
          pos: "noun",
          meaning: "penyihir laki-laki / tukang sihir jahat",
          context: "...to the stranger, who was actually a sorcerer.",
          contextualMeaning: "Tokoh antagonis berilmu sihir gelap yang berusaha merebut sang gadis.",
          pronunciation: "/ˈsɔːsərə(r)/",
          example: "The wicked sorcerer cast a spell upon the silent kingdom."
        },
        {
          word: "frustrating",
          pos: "verb (participle) / adjective",
          meaning: "menggagalkan / membuat putus asa / menjengkelkan",
          context: "...frustrating the sorcerer's attempts to claim her.",
          contextualMeaning: "Membuat usaha jahat penyihir selalu kandas karena kesucian sang gadis.",
          pronunciation: "/frʌˈstreɪtɪŋ/",
          example: "The continuous rain was frustrating our outdoor plans."
        },
        {
          word: "seize",
          pos: "verb",
          meaning: "merebut / menangkap / menculik paksa",
          context: "Angered by his inability to seize her...",
          contextualMeaning: "Upaya paksa menangkap dan membawa lari sang putri ke dalam kekuasaan kegelapan.",
          pronunciation: "/siːz/",
          example: "The guards attempted to seize the runaway suspect."
        },
        {
          word: "threatening",
          pos: "verb (participle) / adjective",
          meaning: "mengancam",
          context: "...threatening to destroy the entire village if he refused.",
          contextualMeaning: "Mengintimidasi sang penggiling dengan ancaman pemusnahan seluruh warga desa.",
          pronunciation: "/ˈθrɛtnɪŋ/",
          example: "Dark clouds were threatening a severe thunderstorm."
        },
        {
          word: "resilience",
          pos: "noun",
          meaning: "ketangguhan / daya tahan menghadapi kesulitan",
          context: "Her resilience in the face of such cruelty drew the attention of the young king...",
          contextualMeaning: "Kemampuan mental sang gadis untuk tetap bertahan dan tidak berputus asa di tengah cobaan.",
          pronunciation: "/rɪˈzɪliəns/",
          example: "Her emotional resilience helped her overcome severe hardship."
        },
        {
          word: "unwavering",
          pos: "adjective",
          meaning: "tidak goyah / teguh / kokoh",
          context: "...moved by her tragic story and her unwavering spirit.",
          contextualMeaning: "Semangat dan kemurnian hati yang tidak pernah luntur meskipun disiksa dan difitnah.",
          pronunciation: "/ʌnˈweɪvərɪŋ/",
          example: "The doctor showed unwavering dedication to saving lives."
        },
        {
          word: "intercepted",
          pos: "verb (past)",
          meaning: "mencegat / menyadap di tengah jalan",
          context: "...the sorcerer intercepted letters and manipulated messages...",
          contextualMeaning: "Mengambil surat resmi kerajaan secara sembunyi-sembunyi sebelum sampai ke tangan raja.",
          pronunciation: "/ˌɪntəˈsɛptɪd/",
          example: "The scout intercepted the courier before he reached the frontier."
        },
        {
          word: "manipulated",
          pos: "verb (past)",
          meaning: "memanipulasi / mengubah isi untuk menipu",
          context: "...and manipulated messages to make the king believe his wife and newborn child were monsters.",
          contextualMeaning: "Memalsukan isi surat untuk menciptakan fitnah keji dan kecurigaan.",
          pronunciation: "/məˈnɪpjʊleɪtɪd/",
          example: "He manipulated the data to present a false impression."
        },
        {
          word: "exile",
          pos: "noun / verb",
          meaning: "pengasingan / terusir dari tempat tinggal",
          context: "Forced into exile once more, the girl fled into the mountains...",
          contextualMeaning: "Perjalanan melarikan diri menjauh dari istana untuk kedua kalinya demi keselamatan bayinya.",
          pronunciation: "/ˈɛksaɪl/",
          example: "The defeated general lived in solitary exile for ten years."
        },
        {
          word: "refuge",
          pos: "noun",
          meaning: "tempat perlindungan / suaka",
          context: "...seeking refuge in a hidden hermitage.",
          contextualMeaning: "Mencari tempat aman untuk bersembunyi dari bahaya dan fitnah jahat.",
          pronunciation: "/ˈrɛfjuːdʒ/",
          example: "The refugees found safe refuge inside the monastery."
        },
        {
          word: "hermitage",
          pos: "noun",
          meaning: "tempat pertapaan / pondok terpencil",
          context: "...seeking refuge in a hidden hermitage.",
          contextualMeaning: "Pondok pertapaan yang sunyi dan tersembunyi jauh di dalam pegunungan.",
          pronunciation: "/ˈhɜːmɪtɪdʒ/",
          example: "The monk spent twenty peaceful years in a mountain hermitage."
        },
        {
          word: "tarnished",
          pos: "verb (past) / adjective",
          meaning: "ternoda / dirusak kehormatannya",
          context: "...became a symbol of purity that could not be tarnished by evil.",
          contextualMeaning: "Kesucian jiwa yang tidak dapat dikotori atau dihancurkan oleh kejahatan apa pun.",
          pronunciation: "/ˈtɑːnɪʃt/",
          example: "Her noble reputation remained untarnished despite the rumours."
        }
      ]
    },
    {
      id: 3,
      number: "Text 3",
      title: "The Nightingale, the Owl, and the Falcon",
      questionRange: "Questions 13–18",
      sourceCitation: "(adapted from https://www.britannica.com)",
      paragraphs: [
        "Deep within a shadowy grove, a Nightingale sat upon a branch, pouring her heart into a melody that echoed through the trees. Her song was intricate and sweet, a celebration of the coming spring. Nearby, a Great Horned Owl sat in the hollow of an oak, blinking his large eyes in annoyance. He found the Nightingale's music disruptive to his quiet contemplation and sleep. To the Owl, the complexity of the song was nothing more than a chaotic noise that lacked the solemnity of the night. He believed that the world should remain silent and orderly, viewing the Nightingale's artistic expression as a frivolous waste of energy that served no practical purpose in the forest.",
        "The Owl finally called out, challenging the Nightingale to a debate about the value of their respective voices. He argued that his deep, steady hooting was far superior because it represented wisdom and the seriousness of life. \"Your song is flighty and serves no purpose but to distract,\" the Owl hooted sternly. The Nightingale, unfazed, replied that music was not meant to be a lecture but an expression of the soul's joy. She believed that beauty itself was a form of wisdom that the Owl was too rigid to understand. The forest animals gathered to listen, intrigued by the clash between the stern guardian of the night and the vibrant singer of the morning.",
        "As the argument grew heated, a passing Falcon was asked to judge between them. The Falcon listened as the Owl spoke of tradition and the Nightingale sang of inspiration. The Owl insisted that only things that are useful and predictable have value. Meanwhile, the Nightingale argued that the world would be a dull place if every creature only produced sounds that were functional. The Falcon looked at both birds, noting that they were trying to measure two different things with the same ruler. He saw that the Owl valued structure and silence, while the Nightingale valued creativity and movement. Both birds were convinced of their own superiority, refusing to see the merit in the other's perspective.",
        "Ultimately, the Falcon refused to declare a winner, choosing instead to honor the distinct nature of their contributions. He explained that the Owl's deep, steady call served to announce the presence and gravity of the night, while the Nightingale's intricate song heralded the awakening beauty of the day. Recognizing that neither could truly eclipse the other, the Owl and the Nightingale eventually returned to their respective roles within the grove. The forest remained a harmonious sanctuary where both the solemnity of silence and the vibrancy of song held their rightful, respected place in the grand design."
      ],
      vocabulary: [
        {
          word: "grove",
          pos: "noun",
          meaning: "hutan kecil / rimbun pepohonan",
          context: "Deep within a shadowy grove, a Nightingale sat upon a branch...",
          contextualMeaning: "Area pepohonan yang rindang dan teduh tempat burung-burung tinggal.",
          pronunciation: "/ɡrəʊv/",
          example: "They gathered under the shade of the olive grove."
        },
        {
          word: "intricate",
          pos: "adjective",
          meaning: "rumit / terperinci / penuh nada halus",
          context: "Her song was intricate and sweet, a celebration of the coming spring.",
          contextualMeaning: "Lagu burung bulbul yang memiliki nada-nada rumit, indah, dan berkesenian tinggi.",
          pronunciation: "/ˈɪntrɪkət/",
          example: "The woodcarver created an intricate pattern on the oak door."
        },
        {
          word: "melody",
          pos: "noun",
          meaning: "alunan nada / melodi yang merdu",
          context: "...pouring her heart into a melody that echoed through the trees.",
          contextualMeaning: "Alunan suara nyanyian merdu yang menggema di seluruh penjuru hutan.",
          pronunciation: "/ˈmɛlədi/",
          example: "A sweet flute melody drifted through the quiet evening air."
        },
        {
          word: "disruptive",
          pos: "adjective",
          meaning: "mengganggu / merusak ketenangan",
          context: "He found the Nightingale's music disruptive to his quiet contemplation and sleep.",
          contextualMeaning: "Suara nyanyian yang dianggap burung hantu merusak suasana hening untuk merenung.",
          pronunciation: "/dɪsˈrʌptɪv/",
          example: "Loud machinery can be very disruptive in a library."
        },
        {
          word: "contemplation",
          pos: "noun",
          meaning: "perenungan / pemikiran mendalam",
          context: "...disruptive to his quiet contemplation and sleep.",
          contextualMeaning: "Keadaan hening saat burung hantu merenung dan berpikir mendalam di malam hari.",
          pronunciation: "/ˌkɒntɛmˈpleɪʃn/",
          example: "The philosopher spent the dawn in quiet contemplation."
        },
        {
          word: "solemnity",
          pos: "noun",
          meaning: "kesungguhan / kekhidmatan / keseriusan",
          context: "...a chaotic noise that lacked the solemnity of the night.",
          contextualMeaning: "Sifat malam yang tenang, berwibawa, khidmat, dan penuh keseriusan.",
          pronunciation: "/səˈlɛmnɪti/",
          example: "The ceremony was conducted with great solemnity and respect."
        },
        {
          word: "frivolous",
          pos: "adjective",
          meaning: "sia-sia / sepele / tidak berguna",
          context: "...viewing the Nightingale's artistic expression as a frivolous waste of energy...",
          contextualMeaning: "Anggapan burung hantu bahwa seni menyanyi adalah pemborosan energi yang tidak memiliki nilai guna.",
          pronunciation: "/ˈfrɪvələs/",
          example: "He considered spending money on trinkets to be frivolous."
        },
        {
          word: "unfazed",
          pos: "adjective",
          meaning: "tidak gentar / tenang / tidak terganggu",
          context: "The Nightingale, unfazed, replied that music was not meant to be a lecture...",
          contextualMeaning: "Sikap burung bulbul yang tetap tenang dan percaya diri menghadapi kritik pedas burung hantu.",
          pronunciation: "/ʌnˈfeɪzd/",
          example: "The veteran speaker remained unfazed by the sudden power failure."
        },
        {
          word: "intrigued",
          pos: "verb (past) / adjective",
          meaning: "tertarik / penasaran ingin tahu",
          context: "The forest animals gathered to listen, intrigued by the clash...",
          contextualMeaning: "Hewan-hewan hutan merasa penasaran dan tertarik menyaksikan perdebatan kedua burung.",
          pronunciation: "/ɪnˈtriːɡd/",
          example: "The scientist was intrigued by the unusual mineral samples."
        },
        {
          word: "respective",
          pos: "adjective",
          meaning: "masing-masing",
          context: "...a debate about the value of their respective voices.",
          contextualMeaning: "Menunjuk pada karakteristik suara milik burung hantu dan suara milik burung bulbul secara individual.",
          pronunciation: "/rɪˈspɛktɪv/",
          example: "The students returned to their respective classrooms after the bell."
        },
        {
          word: "superiority",
          pos: "noun",
          meaning: "keunggulan / merasa lebih hebat",
          context: "Both birds were convinced of their own superiority...",
          contextualMeaning: "Keyakinan sepihak masing-masing burung bahwa suara dan sudut pandangnya jauh lebih hebat.",
          pronunciation: "/suːˌpɪəriˈɒrɪti/",
          example: "True humility means not boasting about one's intellectual superiority."
        },
        {
          word: "merit",
          pos: "noun",
          meaning: "manfaat / kebaikan / nilai kelayakan",
          context: "...refusing to see the merit in the other's perspective.",
          contextualMeaning: "Nilai positif dan kebenaran yang terkandung dalam sudut pandang pihak lain.",
          pronunciation: "/ˈmɛrɪt/",
          example: "Every proposal submitted to the council has its own merit."
        },
        {
          word: "eclipse",
          pos: "verb",
          meaning: "mengungguli / menutupi / menenggelamkan",
          context: "Recognizing that neither could truly eclipse the other...",
          contextualMeaning: "Tidak ada satu pihak yang dapat sepenuhnya mengalahkan atau meniadakan peran pihak lain.",
          pronunciation: "/ɪˈklɪps/",
          example: "The bright morning sun eclipsed the faint glow of the stars."
        },
        {
          word: "harmonious",
          pos: "adjective",
          meaning: "harmonis / selaras / rukun",
          context: "The forest remained a harmonious sanctuary...",
          contextualMeaning: "Kondisi hutan yang damai di mana berbagai perbedaan suara dapat hidup berdampingan secara indah.",
          pronunciation: "/hɑːˈməʊniəs/",
          example: "The choir delivered a harmonious blend of diverse voices."
        },
        {
          word: "sanctuary",
          pos: "noun",
          meaning: "tempat perlindungan / suaka damai",
          context: "The forest remained a harmonious sanctuary where both...",
          contextualMeaning: "Hutan sebagai tempat suaka suci yang damai dan menampung seluruh keberagaman makhluk.",
          pronunciation: "/ˈsæŋktʃuəri/",
          example: "The wildlife sanctuary provides safety for rare bird species."
        }
      ]
    },
    {
      id: 4,
      number: "Text 4",
      title: "Inanna's Descent to the Underworld",
      questionRange: "Questions 19–25",
      sourceCitation: "(adapted from https://thedecisionlab.com)",
      paragraphs: [
        "In the ancient lands of Sumer, Inanna, the Queen of Heaven, decided to visit the Great Below, the underworld ruled by her sister Ereshkigal. Inanna knew the journey was perilous, for no one who entered the land of no return was ever permitted to leave. Before she departed, she instructed her faithful servant, Ninshubur, to seek help from the gods if she did not return within three days. Armed with her seven divine powers and dressed in her royal robes, Inanna approached the first of the seven gates of the underworld. She was determined to witness the mysteries of death, even if it meant risking her immortal status among the gods.",
        "At each gate, the gatekeeper Neti demanded an offering. To pass through the first gate, she had to remove her crown. At the second, she gave up her lapis beads, and at each subsequent gate, she surrendered another piece of jewelry. By the time she reached the throne of Ereshkigal, Inanna was stripped of all her earthly power and stood humbled and defenseless. Her sister, consumed by bitterness and grief, turned Inanna into a corpse and hung her from a hook on the wall, symbolizing the ultimate loss of ego. The Queen of Heaven had become a mere shadow, her vibrant light extinguished by the cold laws of the subterranean realm.",
        "When Inanna failed to return, Ninshubur pleaded with the gods. Most refused to interfere with the laws of the underworld, but Enki, the god of wisdom, took pity. He created two genderless beings who could slip unnoticed into the realm of death. They reached Ereshkigal and showed her empathy for her eternal suffering. Grateful for their compassion, Ereshkigal offered them a gift, and they chose the body of Inanna. They sprinkled her with the food and water of life, and the Queen of Heaven slowly began to breathe again. Her revival was a testament to the power of wisdom and the importance of empathy even in the darkest places.",
        "Inanna's ascent from the subterranean realm was not without a price; she was required to find a substitute to take her place in the shadows. Upon her return to the upper world, she found her husband, Dumuzi, dressed in his shining garments and celebrating her absence rather than mourning her descent. In her cold anger, Inanna looked upon him with the eye of death and allowed the demons of the underworld to seize him. This transition established the eternal cycle of the seasons, as Dumuzi was decreed to spend half the year in the Great Below, bringing the barren cold of winter, and return to the earth for the other half, bringing the vibrant rebirth of spring."
      ],
      vocabulary: [
        {
          word: "perilous",
          pos: "adjective",
          meaning: "sangat berbahaya / penuh risiko maut",
          context: "Inanna knew the journey was perilous, for no one who entered the land of no return...",
          contextualMeaning: "Perjalanan ke dunia bawah yang mematikan dan nyaris mustahil untuk kembali dengan selamat.",
          pronunciation: "/ˈpɛrələs/",
          example: "Climbing the steep icy mountain was a perilous venture."
        },
        {
          word: "immortal",
          pos: "adjective / noun",
          meaning: "abadi / tidak dapat mati",
          context: "...even if it meant risking her immortal status among the gods.",
          contextualMeaning: "Kedudukan dewa-dewi yang kekal abadi namun terancam hilang saat memasuki alam maut.",
          pronunciation: "/ɪˈmɔːtl/",
          example: "In ancient myths, gods drank nectar to remain immortal."
        },
        {
          word: "departed",
          pos: "verb (past)",
          meaning: "berangkat / meninggalkan tempat",
          context: "Before she departed, she instructed her faithful servant...",
          contextualMeaning: "Momen sebelum Inanna berangkat memulai perjalanan spiritual menuju dunia bawah tanah.",
          pronunciation: "/dɪˈpɑːtɪd/",
          example: "The ship departed from the harbor at first light."
        },
        {
          word: "gatekeeper",
          pos: "noun",
          meaning: "penjaga gerbang",
          context: "At each gate, the gatekeeper Neti demanded an offering.",
          contextualMeaning: "Penjaga pintu dunia bawah yang bertugas menuntut pelepasan atribut duniawi setiap pengunjung.",
          pronunciation: "/ˈɡeɪtkiːpə(r)/",
          example: "The castle gatekeeper inspected every cart entering the city."
        },
        {
          word: "demanded",
          pos: "verb (past)",
          meaning: "menuntut / meminta dengan tegas",
          context: "...the gatekeeper Neti demanded an offering.",
          contextualMeaning: "Mengharuskan Inanna menyerahkan perhiasan kerajaan sebagai syarat mutlak membuka gerbang.",
          pronunciation: "/dɪˈmɑːndɪd/",
          example: "The teacher demanded complete honesty from all students."
        },
        {
          word: "subsequent",
          pos: "adjective",
          meaning: "berikutnya / setelah itu",
          context: "...and at each subsequent gate, she surrendered another piece of jewelry.",
          contextualMeaning: "Gerbang-gerbang berikutnya dari total tujuh gerbang dunia bawah yang harus dilalui.",
          pronunciation: "/ˈsʌbsɪkwənt/",
          example: "The initial discovery led to subsequent archaeological excavations."
        },
        {
          word: "surrendered",
          pos: "verb (past)",
          meaning: "menyerahkan / melepaskan secara pasrah",
          context: "...she surrendered another piece of jewelry.",
          contextualMeaning: "Melepaskan mahkota dan perhiasan lambang ego kebesarannya satu demi satu.",
          pronunciation: "/səˈrɛndəd/",
          example: "The defeated forces surrendered their weapons at dawn."
        },
        {
          word: "humbled",
          pos: "adjective / verb (past)",
          meaning: "direndahkan hatinya / ditundukkan keangkuhannya",
          context: "...Inanna was stripped of all her earthly power and stood humbled and defenseless.",
          contextualMeaning: "Kondisi hilangnya seluruh kebanggaan dan kekuasaan duniawi di hadapan maut.",
          pronunciation: "/ˈhʌmbld/",
          example: "The proud champion was humbled by the unexpected defeat."
        },
        {
          word: "defenseless",
          pos: "adjective",
          meaning: "tanpa perlindungan / tak berdaya",
          context: "...and stood humbled and defenseless.",
          contextualMeaning: "Tidak memiliki senjata, sihir, atau perlindungan apa pun saat menghadap Ereshkigal.",
          pronunciation: "/dɪˈfɛnsləs/",
          example: "The baby birds were left defenseless in the high nest."
        },
        {
          word: "subterranean",
          pos: "adjective",
          meaning: "bawah tanah / alam bawah",
          context: "...by the cold laws of the subterranean realm.",
          contextualMeaning: "Alam kematian atau dunia bawah tanah yang dingin, kaku, dan tak kenal kompromi.",
          pronunciation: "/ˌsʌbtəˈreɪniən/",
          example: "The expedition explored a massive subterranean cavern system."
        },
        {
          word: "empathy",
          pos: "noun",
          meaning: "empati / kemampuan merasakan penderitaan orang lain",
          context: "...showed her empathy for her eternal suffering.",
          contextualMeaning: "Sikap makhluk utusan Enki yang memahami dan turut merasakan kesedihan mendalam Ereshkigal.",
          pronunciation: "/ˈɛmpəθi/",
          example: "A great counselor always listens with deep empathy."
        },
        {
          word: "compassion",
          pos: "noun",
          meaning: "belas kasih / kepedulian tulus",
          context: "Grateful for their compassion, Ereshkigal offered them a gift...",
          contextualMeaning: "Rasa kepedulian yang berhasil meluluhkan hati beku penguasa dunia bawah tanah.",
          pronunciation: "/kəmˈpæʃn/",
          example: "She showed boundless compassion to the homeless shelter."
        },
        {
          word: "revival",
          pos: "noun",
          meaning: "kebangkitan kembali / pemulihan hidup",
          context: "Her revival was a testament to the power of wisdom...",
          contextualMeaning: "Peristiwa hidupnya kembali Inanna dari kematian setelah diperciki air kehidupan.",
          pronunciation: "/rɪˈvaɪvl/",
          example: "The spring rains brought about the revival of the dry desert flora."
        },
        {
          word: "ascent",
          pos: "noun",
          meaning: "pendakian / perjalanan naik kembali",
          context: "Inanna's ascent from the subterranean realm was not without a price...",
          contextualMeaning: "Perjalanan Inanna naik kembali dari dunia bawah menuju alam dunia atas.",
          pronunciation: "/əˈsɛnt/",
          example: "The mountain climbers began their steep ascent at dawn."
        },
        {
          word: "decreed",
          pos: "verb (past)",
          meaning: "ditetapkan / diputuskan secara resmi / ditakdirkan",
          context: "...Dumuzi was decreed to spend half the year in the Great Below...",
          contextualMeaning: "Keputusan takdir kosmis bahwa Dumuzi harus berada di alam maut selama enam bulan setiap tahun.",
          pronunciation: "/dɪˈkriːd/",
          example: "The king decreed a nationwide holiday to celebrate victory."
        }
      ]
    }
  ],

  questions: [
    // ==========================================
    // TEXT 1: QUESTIONS 1 - 6
    // ==========================================
    {
      id: 1,
      textId: 1,
      number: 1,
      type: "Topic / Main Idea",
      questionTypeKey: "topic_main_idea",
      format: "multiple_choice",
      question: "What is the topic of the text?",
      options: [
        { key: "A", text: "The geological process of sun cracking in Thailand" },
        { key: "B", text: "A historical account of the Mekong River's floods" },
        { key: "C", text: "The tragic legend behind the formation of Naka Cave" },
        { key: "D", text: "A romance between two noble families in ancient Thailand" },
        { key: "E", text: "The architectural grandeur of the Rattaphan Nakhon city" }
      ],
      officialAnswer: "C",
      officialAnswerText: "(C) The tragic legend behind the formation of Naka Cave",
      officialExplanation: "Ide utama teks adalah tentang legenda tragis di balik asal-usul Gua Naka di Thailand. Hal ini didukung oleh keseluruhan isi teks yang menceritakan asal-usul kutukan Raja U-Lue hingga tubuhnya berubah menjadi batu.",
      textualEvidence: "Paragraf 4 kalimat terakhir: \"Today, his silent remains form the Naka Cave, where his scales and weary head stand as a permanent monument to a fallen kingdom.\"",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "Today, his silent remains form the Naka Cave, where his scales and weary head stand as a permanent monument to a fallen kingdom.",
      distractorAnalysis: [
        { option: "A", analysis: "Salah — Teks ini adalah legenda naratif mistis (mitos/cerita rakyat), bukan artikel ilmiah tentang proses retakan matahari atau geologi bumi." },
        { option: "B", analysis: "Salah — Peristiwa banjir Sungai Mekong hanyalah bagian dari latar klimaks cerita, bukan laporan sejarah dokumenter." },
        { option: "D", analysis: "Salah — Pernikahan antara pangeran dan putri Naga hanyalah pemantik awal (orientasi), sedangkan fokus utama narasi mencakup kemarahan, kehancuran kota, hingga pembentukan Gua Naka." },
        { option: "E", analysis: "Salah — Kemegahan kota Rattaphan Nakhon hanya disebutkan sekilas sebagai latar awal sebelum dihancurkan banjir." }
      ]
    },
    {
      id: 2,
      textId: 1,
      number: 2,
      type: "Inference",
      questionTypeKey: "inference",
      format: "multiple_choice",
      question: "What can be inferred from the text?",
      options: [
        { key: "A", text: "The Naka Cave was built by the people of Rattaphan Nakhon as a tomb." },
        { key: "B", text: "The princess intentionally deceived the King by hiding her serpent form." },
        { key: "C", text: "King U-Lue was a merciful leader who prioritized his grandson's happiness." },
        { key: "D", text: "The Naga King attacked the city because he wanted to expand his territory." },
        { key: "E", text: "The forbidden marriage was the primary catalyst for the kingdom's destruction." }
      ],
      officialAnswer: "E",
      officialAnswerText: "(E) The forbidden marriage was the primary catalyst for the kingdom's destruction.",
      officialExplanation: "Dari teks dapat disimpulkan bahwa pernikahan terlarang antara manusia dan Naga adalah pemicu utama kehancuran kerajaan tersebut. Hal ini tersirat pada paragraf ke-1.",
      textualEvidence: "Paragraf 1: \"...its downfall began when King U-Lue's grandson, Prince Fa Rung, fell in love with a beautiful Naga princess named Nakkhrinthrani. Despite the ancient laws forbidding the union of different species, the two were married...\"",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "its downfall began when King U-Lue's grandson, Prince Fa Rung, fell in love with a beautiful Naga princess named Nakkhrinthrani. Despite the ancient laws forbidding the union of different species, the two were married",
      distractorAnalysis: [
        { option: "A", analysis: "Salah — Gua Naka bukan bangunan makam buatan manusia, melainkan formasi batu dari sisa tubuh Raja U-Lue yang dikutuk dewa." },
        { option: "B", analysis: "Salah — Putri Naga tidak sengaja menipu; wujud aslinya tampak karena ia terserang penyakit parah yang melemahkan sihir penyamarannya." },
        { option: "C", analysis: "Salah — Raja U-Lue justru bersikap sangat arogan, marah, dan tidak memiliki belas kasih saat mengusir sang putri." },
        { option: "D", analysis: "Salah — Raja Naga menyerang murni karena sakit hati atas penghinaan putrinya, bukan karena ambisi politik memperluas wilayah." }
      ]
    },
    {
      id: 3,
      textId: 1,
      number: 3,
      type: "Pronoun Reference",
      questionTypeKey: "pronoun_reference",
      format: "multiple_choice",
      question: "\"He was transformed into a giant serpent, eternally bound to the Phu Langka mountains.\"\nThe word \"He\" in the sentence refers to",
      options: [
        { key: "A", text: "the Prince." },
        { key: "B", text: "the Naga King." },
        { key: "C", text: "A royal servant." },
        { key: "D", text: "King U-Lue." },
        { key: "E", text: "the grandson." }
      ],
      officialAnswer: "D",
      officialAnswerText: "(D) King U-Lue.",
      officialExplanation: "Kata \"He\" pada kalimat tersebut merujuk pada King U-Lue, yang disebutkan pada subjek sebelumnya.",
      textualEvidence: "Paragraf 4 kalimat 1-3: \"...the gods placed a heavy curse on King U-Lue for failing to lead with wisdom and mercy. His body began to stiffen and stretch... He was transformed into a giant serpent...\"",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "the gods placed a heavy curse on King U-Lue for failing to lead with wisdom and mercy. His body began to stiffen and stretch, his skin turning into cold, grey stone scales. He was transformed into a giant serpent",
      distractorAnalysis: [
        { option: "A, B, C, E", analysis: "Opsi (A), (B), (C), dan (E) salah karena subjek tunggal laki-laki yang sedang dibahas perilakunya, menerima kutukan dewa, dan berubah tubuhnya menjadi ular batu adalah Raja U-Lue." }
      ]
    },
    {
      id: 4,
      textId: 1,
      number: 4,
      type: "True / False",
      questionTypeKey: "true_false",
      format: "true_false",
      question: "Decide whether the following statements are True or False based on the text. Put a tick (✓) on (T) or (F)!",
      statements: [
        {
          id: "s1",
          text: "The marriage between Prince Fa Rung and Nakkhrinthrani lasted for three years.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-1: \"Despite the ancient laws forbidding the union of different species, the two were married, and for three years, the kingdom celebrated their love.\""
        },
        {
          id: "s2",
          text: "The princess was banished because the King felt insulted by her true form.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-2: \"Enraged and feeling insulted by the presence of a beast in his palace, the King banished the princess and sent a harsh letter to her father, the Naga King, demanding he take his daughter back.\""
        },
        {
          id: "s3",
          text: "Bueng Khong Long was once a vibrant city before it became a lake.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-3: \"The Naga King spared no one, transforming the once-vibrant city into a vast, silent lake known today as Bueng Khong Long.\""
        },
        {
          id: "s4",
          text: "King U-Lue was killed immediately by the Naga King during the flood.",
          key: "F",
          explanation: "False (F): Pernyataan ini tidak sesuai dengan kalimat pada paragraf ke-3: \"But for King U-Lue, the Naga King reserved a punishment far worse than death.\" Raja tidak langsung dibunuh saat banjir, melainkan dibiarkan hidup untuk menerima hukuman kutukan membatu dari para dewa."
        },
        {
          id: "s5",
          text: "The curse on the King will last until the land reaches a state of perfect virtue.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-4: \"The curse decreed that he would remain petrified until his lost city was reborn or the land reached a state of perfect virtue.\""
        }
      ],
      officialAnswerText: "T - T - T - F - T",
      officialExplanation: "Pembahasan Detail Sesuai Buku & Bukti Teks:\n1. True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-1: \"Despite the ancient laws forbidding the union of different species, the two were married, and for three years, the kingdom celebrated their love.\"\n2. True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-2: \"Enraged and feeling insulted by the presence of a beast in his palace, the King banished the princess and sent a harsh letter to her father, the Naga King, demanding he take his daughter back.\"\n3. True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-3: \"The Naga King spared no one, transforming the once-vibrant city into a vast, silent lake known today as Bueng Khong Long.\"\n4. False (F): Pernyataan ini tidak sesuai dengan kalimat pada paragraf ke-3: \"But for King U-Lue, the Naga King reserved a punishment far worse than death.\" Raja tidak langsung dibunuh saat banjir, melainkan dibiarkan hidup untuk menerima hukuman kutukan membatu dari para dewa.\n5. True (T): Pernyataan ini sesuai dengan kalimat pada paragraf ke-4: \"The curse decreed that he would remain petrified until his lost city was reborn or the land reached a state of perfect virtue.\"",
      textualEvidence: "Paragraf 1–4 menyajikan kronologi pernikahan (3 tahun), pengusiran, pembentukan danau Bueng Khong Long, hukuman kutukan Raja U-Lue, dan syarat berakhirnya kutukan.",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "But for King U-Lue, the Naga King reserved a punishment far worse than death."
    },
    {
      id: 5,
      textId: 1,
      number: 5,
      type: "Multiple-Select",
      questionTypeKey: "multi_select",
      format: "multi_select",
      question: "Which of the following statements reflect the moral lessons from the text?\nThere is more than one correct answer. Choose every correct answer!",
      options: [
        { key: "1", text: "Breaking sacred laws always leads to a happy ending.", isCorrect: false },
        { key: "2", text: "Wealth is the only thing that can save a kingdom from a curse.", isCorrect: false },
        { key: "3", text: "Harmony is easily destroyed when pride and prejudice take over.", isCorrect: true },
        { key: "4", text: "Leaders should lead with wisdom and compassion rather than anger.", isCorrect: true },
        { key: "5", text: "Actions taken in rage can lead to catastrophic consequences for many.", isCorrect: true }
      ],
      officialAnswer: ["3", "4", "5"],
      officialAnswerText: "Pernyataan 3, Pernyataan 4, Pernyataan 5",
      officialExplanation: "Pembahasan Detail Sesuai Buku:\n• [✓] Harmony is easily destroyed when pride and prejudice take over. (Kesombongan dan prasangka Raja U-Lue terhadap putri Naga menyebabkan pengusirannya, yang menghancurkan kedamaian antara manusia dan Naga serta memicu kehancuran.)\n• [✓] Leaders should lead with wisdom and compassion rather than anger. (Teks secara eksplisit menyatakan bahwa para dewa mengutuk Raja U-Lue \"karena gagal memimpin dengan kebijaksanaan dan belas kasih,\" menyoroti ini sebagai pelajaran penting.)\n• [✓] Actions taken in rage can lead to catastrophic consequences for many. (Reaksi marah Raja yang mengusir sang putri dan menghina Raja Naga secara langsung memicu banjir balas dendam yang menghancurkan seluruh kota dan rakyatnya.)",
      textualEvidence: "Paragraf 4: \"...the gods placed a heavy curse on King U-Lue for failing to lead with wisdom and mercy...\" dan Paragraf 2-3 mengenai dampak kemarahan.",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "the gods placed a heavy curse on King U-Lue for failing to lead with wisdom and mercy.",
      distractorAnalysis: [
        { option: "Pernyataan 1", analysis: "\"Breaking sacred laws always leads to a happy ending\" : Salah — Melanggar hukum sakral antarsubspesies dalam cerita ini justru berujung pada malapetaka besar." },
        { option: "Pernyataan 2", analysis: "\"Wealth is the only thing that can save a kingdom from a curse\" : Salah — Kemakmuran dan kekayaan legendaris kota terbukti tidak berdaya menyelamatkan mereka dari kutukan dan banjir." }
      ]
    },
    {
      id: 6,
      textId: 1,
      number: 6,
      type: "Vocabulary in Context",
      questionTypeKey: "vocabulary_in_context",
      format: "multiple_choice",
      question: "\"The city's prosperity was legendary...\"\nWhat is the closest meaning of the word \"prosperity\"?",
      options: [
        { key: "A", text: "Poverty" },
        { key: "B", text: "Suffering" },
        { key: "C", text: "Wealth" },
        { key: "D", text: "Diversity" },
        { key: "E", text: "Disaster" }
      ],
      officialAnswer: "C",
      officialAnswerText: "(C) Wealth",
      officialExplanation: "Kata prosperity 'kemakmuran' memiliki makna yang sama secara kontekstual dengan kata wealth.",
      textualEvidence: "Paragraf 1: \"In this golden age, the human world and the mystical Naga kingdom were deeply connected. The city's prosperity was legendary...\"",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "In this golden age, the human world and the mystical Naga kingdom were deeply connected. The city's prosperity was legendary",
      distractorAnalysis: [
        { option: "A", analysis: "Poverty : Kemiskinan (merupakan lawan kata / antonim)." },
        { option: "B", analysis: "Suffering : Penderitaan." },
        { option: "D", analysis: "Diversity : Keberagaman." },
        { option: "E", analysis: "Disaster : Bencana / malapetaka." }
      ]
    },

    // ==========================================
    // TEXT 2: QUESTIONS 7 - 12
    // ==========================================
    {
      id: 7,
      textId: 2,
      number: 7,
      type: "Topic / Main Idea",
      questionTypeKey: "topic_main_idea",
      format: "multiple_choice",
      question: "What is the main idea of the text?",
      options: [
        { key: "A", text: "A miller's daughter survives various hardships through her unwavering purity and resilience." },
        { key: "B", text: "A powerful sorcerer successfully destroys a village after a miller fails to keep his promise." },
        { key: "C", text: "A young king travels to the mountains to find a miraculous cure for his wife's disability." },
        { key: "D", text: "The craftsmanship of silver hands becomes the most famous legend in a royal kingdom." },
        { key: "E", text: "The story compares the simple life of a miller to the complex struggles of a royal family." }
      ],
      officialAnswer: "A",
      officialAnswerText: "(A) A miller's daughter survives various hardships through her unwavering purity and resilience.",
      officialExplanation: "Ide utama teks naratif ini adalah tentang keteguhan hati dan kemurnian jiwa seorang anak penggiling gandum yang mampu melewati berbagai penderitaan, mulai dari pengkhianatan ayahnya, kehilangan tangan, hingga fitnah penyihir sampai akhirnya ia mendapatkan kebahagiaannya kembali. Hal ini didukung oleh keseluruhan isi teks.",
      textualEvidence: "Paragraf 3 kalimat terakhir: \"The daughter, once a victim of a dark bargain, became a symbol of purity that could not be tarnished by evil.\"",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "The daughter, once a victim of a dark bargain, became a symbol of purity that could not be tarnished by evil.",
      distractorAnalysis: [
        { option: "B", analysis: "Salah — Penyihir tidak menghancurkan desa karena sang ayah akhirnya menuruti perintah memotong tangan putrinya." },
        { option: "C", analysis: "Salah — Raja pergi ke gunung bukan mencari obat disabilitas, melainkan mencari sang istri yang diasingkan karena fitnah." },
        { option: "D", analysis: "Salah — Tangan perak hanyalah simbol pendukung dalam alur cerita, bukan fokus utama teks." },
        { option: "E", analysis: "Salah — Teks ini bukan teks perbandingan sosiologis kehidupan desa vs istana." }
      ]
    },
    {
      id: 8,
      textId: 2,
      number: 8,
      type: "Detail Information",
      questionTypeKey: "detail_information",
      format: "multiple_choice",
      question: "According to the text, why could the sorcerer not initially touch the girl?",
      options: [
        { key: "A", text: "She was protected by a powerful spell from her father." },
        { key: "B", text: "She kept herself pure and constantly washed her hands." },
        { key: "C", text: "The miller had hidden her behind a secret wall in the mill." },
        { key: "D", text: "She possessed a pair of silver hands that repelled evil." },
        { key: "E", text: "The king's soldiers were guarding her day and night." }
      ],
      officialAnswer: "B",
      officialAnswerText: "(B) She kept herself pure and constantly washed her hands.",
      officialExplanation: "Penyihir tidak bisa menyentuh gadis tersebut karena ia sangat suci. Ia memperkuat perlindungan dirinya dengan mencuci tangannya hingga bersih dan bersinar seperti mutiara. Informasi ini dapat ditemukan pada paragraf ke-1.",
      textualEvidence: "Paragraf 1: \"The girl was so pure and kind that the sorcerer could not touch her. To protect herself further, she spent her days washing her hands until they shone like pearls, frustrating the sorcerer's attempts to claim her.\"",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "The girl was so pure and kind that the sorcerer could not touch her. To protect herself further, she spent her days washing her hands until they shone like pearls, frustrating the sorcerer's attempts to claim her.",
      distractorAnalysis: [
        { option: "A", analysis: "Tidak ada mantra perlindungan dari ayahnya." },
        { option: "C", analysis: "Ayahnya tidak menyembunyikannya di balik dinding rahasia." },
        { option: "D", analysis: "Tangan perak baru dibuat di babak berikutnya oleh pandai besi kerajaan, bukan di awal cerita." },
        { option: "E", analysis: "Prajurit raja belum mengenalnya di awal cerita." }
      ]
    },
    {
      id: 9,
      textId: 2,
      number: 9,
      type: "Multiple-Select",
      questionTypeKey: "multi_select",
      format: "multi_select",
      question: "Which of the following are challenges faced by the girl in the story?\nThere is more than one correct answer. Choose every correct answer!",
      options: [
        { key: "1", text: "Her hands were cut off due to the sorcerer's threat.", isCorrect: true },
        { key: "2", text: "She was forced into exile twice during her life.", isCorrect: true },
        { key: "3", text: "She had to fight the sorcerer in a physical battle.", isCorrect: false },
        { key: "4", text: "Her letters to the king were manipulated by the sorcerer.", isCorrect: true },
        { key: "5", text: "She was rejected by the king because of her physical disability.", isCorrect: false }
      ],
      officialAnswer: ["1", "2", "4"],
      officialAnswerText: "Pernyataan 1, Pernyataan 2, Pernyataan 4",
      officialExplanation: "Pembahasan Detail Sesuai Buku:\n• [✓] Her hands were cut off due to the sorcerer's threat. (Penyihir memerintahkan ayah gadis itu untuk memotong tangannya dengan ancaman menghancurkan seluruh desa. Dengan berat hati, sang ayah menuruti perintah tersebut, sehingga gadis ini harus menghadapi kehidupan tanpa tangan.)\n• [✓] She was forced into exile twice during her life. (Pertama, setelah tangannya dipotong, ia melarikan diri ke taman kerajaan. Kedua, setelah pesan-pesan dimanipulasi oleh penyihir, ia \"dipaksa ke pengasingan sekali lagi\" dan lari ke pegunungan bersama bayi yang baru dilahirkannya.)\n• [✓] Her letters to the king were manipulated by the sorcerer. (Saat raja pergi berperang, penyihir menyadap surat dan memanipulasi pesan sehingga raja percaya bahwa istri dan anaknya adalah monster. Hal ini memaksa gadis tersebut menjalani pengasingan kedua dan menjadi tantangan besar baginya.)",
      textualEvidence: "Paragraf 1 (pemotongan tangan), Paragraf 2 (manipulasi surat), dan Paragraf 3 (pengasingan kedua ke pegunungan).",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "While the king was away at war, the sorcerer intercepted letters and manipulated messages to make the king believe his wife and newborn child were monsters.",
      distractorAnalysis: [
        { option: "Pernyataan 3", analysis: "\"She had to fight the sorcerer in a physical battle\" : Salah — Gadis tersebut bertahan melalui kemurnian hati dan ketabahan spiritual, bukan lewat duel fisik." },
        { option: "Pernyataan 5", analysis: "\"She was rejected by the king because of her physical disability\" : Salah — Raja justru sangat tersentuh oleh kisahnya dan membuatkan tangan perak serta menikahinya." }
      ]
    },
    {
      id: 10,
      textId: 2,
      number: 10,
      type: "Vocabulary in Context",
      questionTypeKey: "vocabulary_in_context",
      format: "multiple_choice",
      question: "\"...seeking refuge in a hidden hermitage.\"\nWhat is the closest meaning of the word \"hermitage\"?",
      options: [
        { key: "A", text: "Palace" },
        { key: "B", text: "Marketplace" },
        { key: "C", text: "Secluded retreat" },
        { key: "D", text: "Busy harbor" },
        { key: "E", text: "Military camp" }
      ],
      officialAnswer: "C",
      officialAnswerText: "(C) Secluded retreat",
      officialExplanation: "Kata hermitage 'tempat pertapaan' memiliki makna yang sama secara kontekstual dengan kata secluded retreat.",
      textualEvidence: "Paragraf 3: \"Forced into exile once more, the girl fled into the mountains with her infant, seeking refuge in a hidden hermitage. In the solitude of the mountains, a miracle occurred.\"",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "Forced into exile once more, the girl fled into the mountains with her infant, seeking refuge in a hidden hermitage. In the solitude of the mountains, a miracle occurred.",
      distractorAnalysis: [
        { option: "A", analysis: "Palace : Istana megah." },
        { option: "B", analysis: "Marketplace : Pasar." },
        { option: "D", analysis: "Busy harbor : Pelabuhan yang sibuk." },
        { option: "E", analysis: "Military camp : Perkemahan militer." }
      ]
    },
    {
      id: 11,
      textId: 2,
      number: 11,
      type: "Pronoun Reference",
      questionTypeKey: "pronoun_reference",
      format: "multiple_choice",
      question: "\"He ordered his finest smiths to craft a pair of beautiful silver hands for her.\"\nThe word \"He\" in the sentence refers to",
      options: [
        { key: "A", text: "The miller." },
        { key: "B", text: "The sorcerer." },
        { key: "C", text: "The dark figure." },
        { key: "D", text: "The young king." },
        { key: "E", text: "The infant child." }
      ],
      officialAnswer: "D",
      officialAnswerText: "(D) The young king.",
      officialExplanation: "Kata \"He\" pada kalimat tersebut merujuk pada subjek yang sedang diceritakan tindakannya dalam membantu tokoh utama, yaitu raja muda (the young king).",
      textualEvidence: "Paragraf 2: \"The king was moved by her tragic story and her unwavering spirit. He ordered his finest smiths to craft a pair of beautiful silver hands for her.\"",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "The king was moved by her tragic story and her unwavering spirit. He ordered his finest smiths to craft a pair of beautiful silver hands for her.",
      distractorAnalysis: [
        { option: "A, B, C, E", analysis: "Subjek yang tergerak hatinya oleh keteguhan gadis dan memesan tangan perak ke pandai besi kerajaan adalah sang raja muda (the young king)." }
      ]
    },
    {
      id: 12,
      textId: 2,
      number: 12,
      type: "True / False",
      questionTypeKey: "true_false",
      format: "true_false",
      question: "Decide whether the following statements are True or False based on the text. Put a tick (✓) on (T) or (F)!",
      statements: [
        {
          id: "s1",
          text: "The miller knew from the start that he was bargaining with a sorcerer.",
          key: "F",
          explanation: "False (F): Pernyataan ini salah karena penggiling gandum tidak tahu dia berurusan dengan penyihir sejak awal. Informasi ini sesuai dengan kalimat pada paragraf ke-1: \"Unknowingly, he had promised his daughter to the stranger, who was actually a sorcerer.\""
        },
        {
          id: "s2",
          text: "The girl's hands miraculously grew back while she was in the mountains.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan isi paragraf ke-3 yang menjelaskan bahwa karena kesabaran dan kebaikannya, tangan aslinya tumbuh kembali secara nyata: \"Because of her patience and goodness, her hands began to grow back, fleshy and real.\""
        },
        {
          id: "s3",
          text: "The sorcerer manipulated the king's letters to cause a conflict.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan informasi pada akhir paragraf ke-2 di mana penyihir mencegat dan memanipulasi pesan selama raja berperang: \"...the sorcerer intercepted letters and manipulated messages to make the king believe his wife and newborn child were monsters.\""
        },
        {
          id: "s4",
          text: "The king recognized his wife immediately because of her silver hands.",
          key: "F",
          explanation: "False (F): Pernyataan ini salah karena raja awalnya tidak mengenali istrinya karena tangannya sudah kembali normal, bukan karena tangan peraknya. Informasi ini terdapat pada paragraf ke-3: \"He did not recognize her at first because of her restored hands...\""
        },
        {
          id: "s5",
          text: "The story suggests that internal virtue can act as a shield against evil.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan pesan moral utama yang ditegaskan pada paragraf penutup mengenai kekuatan kebajikan dalam diri bahwa kebajikan hati adalah perisai yang tidak dapat dihancurkan oleh kejahatan."
        }
      ],
      officialAnswerText: "F - T - T - F - T",
      officialExplanation: "Pembahasan Detail Sesuai Buku & Bukti Teks:\n1. False (F): Pernyataan ini salah karena penggiling gandum tidak tahu dia berurusan dengan penyihir sejak awal. Informasi ini sesuai dengan kalimat pada paragraf ke-1: \"Unknowingly, he had promised his daughter to the stranger, who was actually a sorcerer.\"\n2. True (T): Pernyataan ini sesuai dengan isi paragraf ke-3 yang menjelaskan bahwa karena kesabaran dan kebaikannya, tangan aslinya tumbuh kembali secara nyata: \"Because of her patience and goodness, her hands began to grow back, fleshy and real.\"\n3. True (T): Pernyataan ini sesuai dengan informasi pada akhir paragraf ke-2 di mana penyihir mencegat dan memanipulasi pesan selama raja berperang: \"...the sorcerer intercepted letters and manipulated messages to make the king believe his wife and newborn child were monsters.\"\n4. False (F): Pernyataan ini salah karena raja awalnya tidak mengenali istrinya karena tangannya sudah kembali normal, bukan karena tangan peraknya. Informasi ini terdapat pada paragraf ke-3: \"He did not recognize her at first because of her restored hands...\"\n5. True (T): Pernyataan ini sesuai dengan pesan moral utama yang ditegaskan pada paragraf penutup mengenai kekuatan kebajikan dalam diri bahwa kebajikan hati adalah perisai yang tidak dapat dihancurkan oleh kejahatan.",
      textualEvidence: "Paragraf 1–3 mengulas ketidaktahuan sang ayah, pemulihan tangan di pegunungan, pemalsuan surat oleh penyihir, raja yang sempat tidak mengenali istri, dan kekuatan kesucian.",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "Because of her patience and goodness, her hands began to grow back, fleshy and real."
    },

    // ==========================================
    // TEXT 3: QUESTIONS 13 - 18
    // ==========================================
    {
      id: 13,
      textId: 3,
      number: 13,
      type: "Moral Value",
      questionTypeKey: "moral_value",
      format: "multiple_choice",
      question: "What is the moral value of the story?",
      options: [
        { key: "A", text: "Wisdom is only found in traditional and functional ways of living." },
        { key: "B", text: "True wisdom lies in recognizing that different forms of beauty can coexist." },
        { key: "C", text: "Competition is necessary to determine which talents are superior to others." },
        { key: "D", text: "Creativity should be avoided if it does not serve a practical, daily purpose." },
        { key: "E", text: "Silence is always more valuable than artistic expression in the natural world." }
      ],
      officialAnswer: "B",
      officialAnswerText: "(B) True wisdom lies in recognizing that different forms of beauty can coexist.",
      officialExplanation: "Nilai moral dari cerita ini ditemukan pada resolusi di paragraf terakhir, di mana Falcon menjelaskan bahwa setiap suara memiliki peran uniknya sendiri. Kebijaksanaan sejati dijelaskan sebagai kemampuan untuk menghargai bahwa berbagai bentuk keindahan dapat hidup berdampingan tanpa harus bersaing.",
      textualEvidence: "Paragraf 4: \"Recognizing that neither could truly eclipse the other... The forest remained a harmonious sanctuary where both the solemnity of silence and the vibrancy of song held their rightful, respected place in the grand design.\"",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "Recognizing that neither could truly eclipse the other, the Owl and the Nightingale eventually returned to their respective roles within the grove. The forest remained a harmonious sanctuary where both the solemnity of silence and the vibrancy of song held their rightful, respected place in the grand design.",
      distractorAnalysis: [
        { option: "A, C, D, E", analysis: "(A), (C), (D), dan (E) bertentangan secara langsung dengan inti pesan toleransi dan keberagaman yang disampaikan oleh burung Falcon." }
      ]
    },
    {
      id: 14,
      textId: 3,
      number: 14,
      type: "Tone",
      questionTypeKey: "tone",
      format: "multiple_choice",
      question: "What is the tone of the text?",
      options: [
        { key: "A", text: "Humorous" },
        { key: "B", text: "Reflective" },
        { key: "C", text: "Indifferent" },
        { key: "D", text: "Sarcastic" },
        { key: "E", text: "Critical" }
      ],
      officialAnswer: "B",
      officialAnswerText: "(B) Reflective",
      officialExplanation: "Laras (tone) dari teks tersebut adalah reflektif karena narasi mengajak pembaca untuk merenungkan makna filosofis di balik perbedaan karakter Owl dan Nightingale, bukan sekadar memberikan informasi faktual atau humor.",
      textualEvidence: "Paragraf 3-4 yang menghadirkan dialog filosofis mengenai sudut pandang nilai dan harmoni alam.",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "The Falcon looked at both birds, noting that they were trying to measure two different things with the same ruler.",
      distractorAnalysis: [
        { option: "A", analysis: "Humorous : Lucu/jenaka (teks ini serius dan filosofis)." },
        { option: "C", analysis: "Indifferent : Netral/tidak peduli." },
        { option: "D", analysis: "Sarcastic : Sinis/menyindir." },
        { option: "E", analysis: "Critical : Kritis/menghujat satu pihak (teks justru menghargai kedua burung)." }
      ]
    },
    {
      id: 15,
      textId: 3,
      number: 15,
      type: "Purpose",
      questionTypeKey: "purpose",
      format: "multiple_choice",
      question: "What is the purpose of the text?",
      options: [
        { key: "A", text: "To teach readers the importance of diversity in expression" },
        { key: "B", text: "To explain the technical history of animal fables in literature" },
        { key: "C", text: "To criticize the Nightingale for being too loud during the night" },
        { key: "D", text: "To persuade readers to protect the habitats of endangered birds" },
        { key: "E", text: "To describe the biological differences between owls and falcons" }
      ],
      officialAnswer: "A",
      officialAnswerText: "(A) To teach readers the importance of diversity in expression",
      officialExplanation: "Tujuan utama teks ini adalah untuk menyampaikan pesan moral atau pelajaran hidup. Dalam konteks ini, teks bertujuan mengajarkan pentingnya keberagaman dan saling menghargai perbedaan dalam berekspresi. Hal ini didukung oleh ide pokok dari keseluruhan isi teks.",
      textualEvidence: "Paragraf 4: Falcon menyelesaikan sengketa dengan menegaskan pentingnya kedua suara dalam grand design alam.",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "The forest remained a harmonious sanctuary where both the solemnity of silence and the vibrancy of song held their rightful, respected place in the grand design.",
      distractorAnalysis: [
        { option: "B", analysis: "Salah — Bukan teks akademis tentang sejarah genre fabel." },
        { option: "C", analysis: "Salah — Teks tidak menyalahkan nyanyian burung Nightingale." },
        { option: "D", analysis: "Salah — Bukan teks persuasif advokasi satwa liar." },
        { option: "E", analysis: "Salah — Bukan teks deskriptif ilmiah biologi." }
      ]
    },
    {
      id: 16,
      textId: 3,
      number: 16,
      type: "Conclusion",
      questionTypeKey: "conclusion",
      format: "multiple_choice",
      question: "What can be concluded from the text?",
      options: [
        { key: "A", text: "The Falcon found it easy to decide who was the superior bird in the forest." },
        { key: "B", text: "The Nightingale changed her song to make it more functional for the Owl." },
        { key: "C", text: "The forest animals preferred the Owl's wisdom over the Nightingale's joy." },
        { key: "D", text: "The Owl eventually admitted that the Nightingale's song was better than his call." },
        { key: "E", text: "Value is subjective, and different perspectives can both hold merit simultaneously." }
      ],
      officialAnswer: "E",
      officialAnswerText: "(E) Value is subjective, and different perspectives can both hold merit simultaneously.",
      officialExplanation: "Dapat disimpulkan bahwa nilai adalah sesuatu yang subjektif, di mana keteraturan Owl dan kreativitas Nightingale keduanya memiliki kegunaan dan tempatnya masing-masing. Hal ini didukung oleh paragraf ke-4 pada teks yang menunjukkan sikap Falcon yang menolak menentukan pemenang.",
      textualEvidence: "Paragraf 3 & 4: \"The Falcon looked at both birds, noting that they were trying to measure two different things with the same ruler... Ultimately, the Falcon refused to declare a winner, choosing instead to honor the distinct nature of their contributions.\"",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "The Falcon looked at both birds, noting that they were trying to measure two different things with the same ruler.",
      distractorAnalysis: [
        { option: "A", analysis: "Falcon justru menolak memilih pemenang karena keduanya setara." },
        { option: "B", analysis: "Nightingale tidak mengubah nyanyiannya." },
        { option: "C", analysis: "Hewan hutan tidak memihak burung hantu." },
        { option: "D", analysis: "Burung hantu tidak mengakui kalah, melainkan menerima perannya kembali." }
      ]
    },
    {
      id: 17,
      textId: 3,
      number: 17,
      type: "Multiple-Select",
      questionTypeKey: "multi_select",
      format: "multi_select",
      question: "Which of the following were arguments or perspectives held by the Owl?\nThere is more than one correct answer. Choose every correct answer!",
      options: [
        { key: "1", text: "Beauty is a form of wisdom that is often misunderstood.", isCorrect: false },
        { key: "2", text: "The world should remain silent, orderly, and predictable.", isCorrect: true },
        { key: "3", complexity: true, text: "Complexity in music is a chaotic noise that lacks solemnity.", isCorrect: true },
        { key: "4", text: "Artistic expression is an essential celebration of the soul's joy.", isCorrect: false },
        { key: "5", text: "Only things that are useful and serve a practical purpose have value.", isCorrect: true }
      ],
      officialAnswer: ["2", "3", "5"],
      officialAnswerText: "Pernyataan 2, Pernyataan 3, Pernyataan 5",
      officialExplanation: "Pembahasan Detail Sesuai Buku:\n• [✓] The world should remain silent, orderly, and predictable. (Sesuai dengan paragraf pertama dan ketiga, ia percaya bahwa dunia seharusnya tetap diam, teratur, dan tertata.)\n• [✓] Complexity in music is a chaotic noise that lacks solemnity. (Ia menganggap kerumitan lagu Nightingale hanyalah kebisingan yang kacau dan tidak memiliki keseriusan — Paragraf 1.)\n• [✓] Only things that are useful and serve a practical purpose have value. (Ia bersikeras bahwa hanya hal-hal yang berguna, praktis, dan dapat diprediksi yang memiliki nilai dalam kehidupan di hutan — Paragraf 1 & 3.)",
      textualEvidence: "Paragraf 1 & 3 yang menguraikan pandangan Owl tentang ketertiban dan fungsi praktis.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "To the Owl, the complexity of the song was nothing more than a chaotic noise that lacked the solemnity of the night. He believed that the world should remain silent and orderly, viewing the Nightingale's artistic expression as a frivolous waste of energy that served no practical purpose in the forest.",
      distractorAnalysis: [
        { option: "Pernyataan Nightingale", analysis: "\"Beauty is a form of wisdom that is often misunderstood\" dan \"Artistic expression is an essential celebration of the soul's joy\" adalah argumen yang disampaikan oleh Nightingale (Paragraf 2)." }
      ]
    },
    {
      id: 18,
      textId: 3,
      number: 18,
      type: "Categorization",
      questionTypeKey: "categorization",
      format: "categorization",
      question: "Categorize the following characteristics based on the bird they describe according to the text! Put a tick (✓) on Nightingale or Owl!",
      categories: ["Nightingale", "Owl"],
      items: [
        {
          id: "item1",
          statement: "valued creativity, movement, and inspiration",
          text: "valued creativity, movement, and inspiration",
          correctCategory: "Nightingale"
        },
        {
          id: "item2",
          statement: "believed the world should remain silent and orderly",
          text: "believed the world should remain silent and orderly",
          correctCategory: "Owl"
        },
        {
          id: "item3",
          statement: "argued that music is an expression of the soul's joy",
          text: "argued that music is an expression of the soul's joy",
          correctCategory: "Nightingale"
        },
        {
          id: "item4",
          statement: "represented tradition, structure, and seriousness",
          text: "represented tradition, structure, and seriousness",
          correctCategory: "Owl"
        },
        {
          id: "item5",
          statement: "viewed the other's voice as a frivolous waste of energy",
          text: "viewed the other's voice as a frivolous waste of energy",
          correctCategory: "Owl"
        }
      ],
      officialAnswerText: "Nightingale, Owl, Nightingale, Owl, Owl (N, O, N, O, O)",
      officialExplanation: "Pembahasan Detail Sesuai Buku:\n• Nightingale: Karakteristik ini merujuk pada argumennya di paragraf kedua dan ketiga mengenai musik sebagai bentuk ekspresi jiwa dan keindahan sebagai bentuk kebijaksanaan.\n• Owl: Karakteristik ini didasarkan pada paragraf pertama dan kedua, di mana ia digambarkan sebagai \"penjaga malam yang kaku\" yang memprioritaskan ketertiban, tradisi, dan fungsi praktis di atas segalanya.",
      textualEvidence: "Paragraf 1–3 membedakan secara kontras argumen seni dan jiwa (Nightingale) vs ketertiban dan tradisi (Owl).",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "He saw that the Owl valued structure and silence, while the Nightingale valued creativity and movement."
    },

    // ==========================================
    // TEXT 4: QUESTIONS 19 - 25
    // ==========================================
    {
      id: 19,
      textId: 4,
      number: 19,
      type: "Topic / Main Idea",
      questionTypeKey: "topic_main_idea",
      format: "multiple_choice",
      question: "What is the text primary concerned with?",
      options: [
        { key: "A", text: "The romantic relationship between Inanna and her husband Dumuzi" },
        { key: "B", text: "The technical process of how ancient gods created genderless beings" },
        { key: "C", text: "The physical geography and gates of the ancient Sumerian underworld" },
        { key: "D", text: "The administrative laws governing the subterranean realm of Ereshkigal" },
        { key: "E", text: "The journey of Inanna to the underworld and the resulting cycle of seasons" }
      ],
      officialAnswer: "E",
      officialAnswerText: "(E) The journey of Inanna to the underworld and the resulting cycle of seasons",
      officialExplanation: "Ide utama teks ini mencakup keseluruhan narasi mitologi Sumeria tersebut, mulai dari motif perjalanan Inanna ke dunia bawah hingga dampak akhir yang menjelaskan terciptanya siklus musim.",
      textualEvidence: "Paragraf 1 (awal perjalanan Inanna) dan Paragraf 4 (terciptanya siklus musim abadi karena pertukaran Dumuzi).",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "This transition established the eternal cycle of the seasons, as Dumuzi was decreed to spend half the year in the Great Below, bringing the barren cold of winter, and return to the earth for the other half, bringing the vibrant rebirth of spring.",
      distractorAnalysis: [
        { option: "A", analysis: "Salah — Hubungan Inanna dan suaminya Dumuzi bukan kisah romantis, melainkan konflik di akhir cerita saat Dumuzi justru bersuka ria atas kepergian Inanna." },
        { option: "B", analysis: "Salah — Penciptaan makhluk tanpa gender oleh Enki hanyalah bagian kecil dalam plot resolusi." },
        { option: "C & D", analysis: "Salah — Gerbang dan hukum dunia bawah hanyalah latar dan mekanisme cerita, bukan fokus utama teks." }
      ]
    },
    {
      id: 20,
      textId: 4,
      number: 20,
      type: "Purpose",
      questionTypeKey: "purpose",
      format: "multi_select",
      question: "What is the purpose of the text?\nThere is more than one correct answer. Choose every correct answer!",
      options: [
        { key: "1", text: "To provide a scientific report on the geological changes of the seasons", isCorrect: false },
        { key: "2", text: "To persuade readers to follow the ancient laws of the Sumerian gatekeepers", isCorrect: false },
        { key: "3", text: "To teach a lesson about the necessity of humility and the power of empathy", isCorrect: true },
        { key: "4", text: "To tell the story of Inanna's transformation and her encounter with Ereshkigal", isCorrect: true },
        { key: "5", text: "To entertain readers with a dramatic myth about the Queen of Heaven's descent", isCorrect: true }
      ],
      officialAnswer: ["3", "4", "5"],
      officialAnswerText: "Pernyataan 3, Pernyataan 4, Pernyataan 5",
      officialExplanation: "Pembahasan Detail Sesuai Buku: Sesuai dengan karakteristik teks naratif/mitologi, tujuan teks ini adalah:\n• [✓] To teach a lesson about the necessity of humility and the power of empathy: (Memberikan pelajaran tentang pentingnya kerendahan hati saat menghadapi maut dan kekuatan empati.)\n• [✓] To tell the story of Inanna's transformation and her encounter with Ereshkigal: (Menceritakan rangkaian peristiwa pertemuan Inanna dengan penguasa dunia bawah.)\n• [✓] To entertain readers with a dramatic myth about the Queen of Heaven's descent: (Menghibur pembaca melalui kisah dramatis Inanna yang mempertaruhkan status abadinya.)",
      textualEvidence: "Struktur teks naratif mitos Sumeria yang memadukan hiburan sastra, alur transformasi Inanna, dan nilai moral empati.",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "Her revival was a testament to the power of wisdom and the importance of empathy even in the darkest places.",
      distractorAnalysis: [
        { option: "Pernyataan 1", analysis: "\"To provide a scientific report...\" : Salah — Ini adalah mitologi fiksi kuno, bukan laporan ilmiah geologis pergantian musim." },
        { option: "Pernyataan 2", analysis: "\"To persuade readers to follow ancient laws...\" : Salah — Teks ini bukan teks eksposisi/hukum untuk mendoktrin pembaca agar menuruti penjaga gerbang Sumeria." }
      ]
    },
    {
      id: 21,
      textId: 4,
      number: 21,
      type: "Inference",
      questionTypeKey: "inference",
      format: "multiple_choice",
      question: "What can be concluded about Inanna's revival based on the third paragraph?",
      options: [
        { key: "A", text: "She was brought back to life because she managed to defeat Ereshkigal in battle." },
        { key: "B", text: "Her return was made possible through the cleverness of Enki and the power of empathy." },
        { key: "C", text: "The other gods were very eager to help Ninshubur rescue Inanna from the underworld." },
        { key: "D", text: "Inanna's revival was a gift from Ereshkigal because she missed her sister's company." },
        { key: "E", text: "She breathed again because she consumed the food and water of the underworld's king." }
      ],
      officialAnswer: "B",
      officialAnswerText: "(B) Her return was made possible through the cleverness of Enki and the power of empathy.",
      officialExplanation: "Berdasarkan paragraf ke-3, kebangkitan Inanna dimungkinkan karena strategi Enki (dewa kebijaksanaan) yang menciptakan makhluk untuk menunjukkan empati kepada Ereshkigal, sehingga ia luluh dan memberikan tubuh Inanna.",
      textualEvidence: "Paragraf 3: \"Her revival was a testament to the power of wisdom and the importance of empathy even in the darkest places.\"",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "Her revival was a testament to the power of wisdom and the importance of empathy even in the darkest places.",
      distractorAnalysis: [
        { option: "A", analysis: "Inanna tidak melawan atau mengalahkan Ereshkigal dalam pertarungan." },
        { option: "C", analysis: "Dewa-dewa lain justru menolak campur tangan (\"Most refused to interfere...\")." },
        { option: "D", analysis: "Ereshkigal tidak merindukan saudarinya, melainkan tersentuh oleh rasa empati makhluk Enki." },
        { option: "E", analysis: "Tubuh Inanna diperciki air dan makanan kehidupan oleh makhluk utusan Enki, bukan mengonsumsi makanan raja dunia bawah." }
      ]
    },
    {
      id: 22,
      textId: 4,
      number: 22,
      type: "Topic / Main Idea",
      questionTypeKey: "topic_main_idea",
      format: "multiple_choice",
      question: "What is the main idea of the 2nd paragraph?",
      options: [
        { key: "A", text: "Neti is the most powerful gatekeeper in the Sumerian underworld." },
        { key: "B", text: "Inanna lost her lapis beads because she was not careful during her journey." },
        { key: "C", text: "The cold laws of the subterranean realm are more important than royal jewelry." },
        { key: "D", text: "Inanna was gradually stripped of her power and ego as she descended to her sister." },
        { key: "E", text: "Ereshkigal was happy to see Inanna standing naked and humble before her throne." }
      ],
      officialAnswer: "D",
      officialAnswerText: "(D) Inanna was gradually stripped of her power and ego as she descended to her sister.",
      officialExplanation: "Paragraf ke-2 berfokus pada proses penurunan ego Inanna secara bertahap. Ia harus menanggalkan simbol kekuasaan dunianya satu per satu di setiap gerbang hingga ia berdiri rendah hati di hadapan takhta saudarinya.",
      textualEvidence: "Paragraf 2: \"At each gate, the gatekeeper Neti demanded an offering... By the time she reached the throne of Ereshkigal, Inanna was stripped of all her earthly power and stood humbled and defenseless... symbolizing the ultimate loss of ego.\"",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "At each gate, the gatekeeper Neti demanded an offering. To pass through the first gate, she had to remove her crown. At the second, she gave up her lapis beads, and at each subsequent gate, she surrendered another piece of jewelry. By the time she reached the throne of Ereshkigal, Inanna was stripped of all her earthly power and stood humbled and defenseless... symbolizing the ultimate loss of ego.",
      distractorAnalysis: [
        { option: "A, B, C, E", analysis: "(A), (B), (C), dan (E) hanya merupakan detail minor atau pernyataan yang salah konteks." }
      ]
    },
    {
      id: 23,
      textId: 4,
      number: 23,
      type: "Multiple-Select",
      questionTypeKey: "multi_select",
      format: "multi_select",
      question: "Which of the following were consequences of Inanna's visit to the underworld?\nThere is more than one correct answer. Choose every correct answer!",
      options: [
        { key: "1", text: "Inanna gained new divine powers from her sister Ereshkigal.", isCorrect: false },
        { key: "2", text: "The world experienced a permanent state of spring and rebirth.", isCorrect: false },
        { key: "3", text: "Inanna had to be stripped of her earthly symbols of power and ego.", isCorrect: true },
        { key: "4", text: "Dumuzi had to spend half of every year in the shadows of the underworld.", isCorrect: true },
        { key: "5", text: "The establishment of a cycle that explains the presence of winter and spring.", isCorrect: true }
      ],
      officialAnswer: ["3", "4", "5"],
      officialAnswerText: "Pernyataan 3, Pernyataan 4, Pernyataan 5",
      officialExplanation: "Pembahasan Detail Sesuai Buku: Berdasarkan teks, konsekuensi dari perjalanan tersebut adalah:\n• [✓] Inanna had to be stripped of her earthly symbols of power and ego. (Di setiap gerbang dunia bawah, penjaga Neti menuntut Inanna menyerahkan salah satu atributnya. Ia melepaskan mahkota, manik-manik, dan perhiasannya satu per satu. Ketika tiba di hadapan Ereshkigal, Inanna telah kehilangan semua kekuatannya dan berdiri dalam keadaan rendah hati serta tak berdaya.)\n• [✓] Dumuzi had to spend half of every year in the shadows of the underworld. (Setelah Inanna bangkit kembali, ia menemukan suaminya, Dumuzi, merayakan ketidakhadirannya alih-alih berduka. Dalam kemarahannya, Inanna mengizinkan iblis dunia bawah menangkap Dumuzi. Ia kemudian ditetapkan untuk menghabiskan separuh tahun di dunia bawah dan separuhnya lagi di bumi.)\n• [✓] The establishment of a cycle that explains the presence of winter and spring. (Teks secara eksplisit menyatakan bahwa peristiwa ini \"menetapkan siklus abadi musim\", di mana Dumuzi membawa musim dingin yang tandus saat berada di dunia bawah, dan membawa kebangkitan musim semi saat kembali ke bumi.)",
      textualEvidence: "Paragraf 2 (penanggalan atribut dan ego) dan Paragraf 4 (pengasingan Dumuzi & penetapan siklus musim).",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "This transition established the eternal cycle of the seasons, as Dumuzi was decreed to spend half the year in the Great Below, bringing the barren cold of winter, and return to the earth for the other half, bringing the vibrant rebirth of spring.",
      distractorAnalysis: [
        { option: "Pernyataan 1", analysis: "\"Inanna gained new divine powers...\" : Salah — Inanna tidak memperoleh kekuatan baru dari saudarinya." },
        { option: "Pernyataan 2", analysis: "\"The world experienced a permanent state of spring...\" : Salah — Dunia mengalami siklus pergantian musim dingin (tandus) dan musim semi (subur), bukan musim semi abadi." }
      ]
    },
    {
      id: 24,
      textId: 4,
      number: 24,
      type: "True / False",
      questionTypeKey: "true_false",
      format: "true_false",
      question: "Decide whether the following statements are True or False based on the text. Put a tick (✓) on (T) or (F)!",
      statements: [
        {
          id: "s1",
          text: "Ninshubur was instructed to seek help from the gods only if Inanna had not returned within three days.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan instruksi Inanna kepada pelayannya yang setia pada paragraf ke-1, yaitu untuk mencari bantuan dari para dewa jika ia tidak kembali dalam tiga hari (\"she instructed her faithful servant, Ninshubur, to seek help from the gods if she did not return within three days.\")"
        },
        {
          id: "s2",
          text: "Inanna was allowed to keep her crown and royal robes when she finally stood before Ereshkigal's throne.",
          key: "F",
          explanation: "False (F): Pernyataan ini salah karena Inanna harus melepaskan mahkota dan perhiasannya di setiap gerbang yang ia lalui hingga ia berdiri rendah hati di depan takhta. Informasi ini sesuai dengan kalimat pada paragraf ke-2 (\"By the time she reached the throne of Ereshkigal, Inanna was stripped of all her earthly power...\")"
        },
        {
          id: "s3",
          text: "The other gods refused to interfere with the underworld's laws.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai dengan informasi pada awal paragraf ke-3 di mana sebagian besar dewa menolak untuk campur tangan karena mereka tidak ingin melanggar hukum dunia bawah yang kaku (\"Most refused to interfere with the laws of the underworld...\")"
        },
        {
          id: "s4",
          text: "Ereshkigal gave Inanna's body back because she was moved by the empathy shown by Enki's genderless beings.",
          key: "T",
          explanation: "True (T): Pernyataan ini sesuai karena Ereshkigal mengembalikan tubuh Inanna karena ia merasa berterima kasih atas empati dan belas kasih yang ditunjukkan oleh makhluk ciptaan Enki. Informasi ini terdapat pada paragraf ke-3 (\"Grateful for their compassion, Ereshkigal offered them a gift, and they chose the body of Inanna.\")"
        },
        {
          id: "s5",
          text: "Dumuzi was sent to the underworld for the entire year to compensate for Inanna's revival.",
          key: "F",
          explanation: "False (F): Pernyataan ini salah karena Dumuzi tidak dikirim untuk sepanjang tahun, melainkan hanya untuk setengah tahun. Informasi ini sesuai dengan kalimat pada paragraf ke-4 (\"Dumuzi was decreed to spend half the year in the Great Below...\")"
        }
      ],
      officialAnswerText: "T - F - T - T - F",
      officialExplanation: "Pembahasan Detail Sesuai Buku & Bukti Teks:\n1. True (T): Pernyataan ini sesuai dengan instruksi Inanna kepada pelayannya yang setia pada paragraf ke-1, yaitu untuk mencari bantuan dari para dewa jika ia tidak kembali dalam tiga hari (\"she instructed her faithful servant, Ninshubur, to seek help from the gods if she did not return within three days.\")\n2. False (F): Pernyataan ini salah karena Inanna harus melepaskan mahkota dan perhiasannya di setiap gerbang yang ia lalui hingga ia berdiri rendah hati di depan takhta. Informasi ini sesuai dengan kalimat pada paragraf ke-2 (\"By the time she reached the throne of Ereshkigal, Inanna was stripped of all her earthly power...\")\n3. True (T): Pernyataan ini sesuai dengan informasi pada awal paragraf ke-3 di mana sebagian besar dewa menolak untuk campur tangan karena mereka tidak ingin melanggar hukum dunia bawah yang kaku (\"Most refused to interfere with the laws of the underworld...\")\n4. True (T): Pernyataan ini sesuai karena Ereshkigal mengembalikan tubuh Inanna karena ia merasa berterima kasih atas empati dan belas kasih yang ditunjukkan oleh makhluk ciptaan Enki. Informasi ini terdapat pada paragraf ke-3 (\"Grateful for their compassion, Ereshkigal offered them a gift, and they chose the body of Inanna.\")\n5. False (F): Pernyataan ini salah karena Dumuzi tidak dikirim untuk sepanjang tahun, melainkan hanya untuk setengah tahun. Informasi ini sesuai dengan kalimat pada paragraf ke-4 (\"Dumuzi was decreed to spend half the year in the Great Below...\")",
      textualEvidence: "Paragraf 1–4 memuat rincian pesan 3 hari Ninshubur, pelepasan mahkota, penolakan dewa lain, empati makhluk Enki, dan masa 6 bulan Dumuzi.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "she instructed her faithful servant, Ninshubur, to seek help from the gods if she did not return within three days."
    },
    {
      id: 25,
      textId: 4,
      number: 25,
      type: "Categorization",
      questionTypeKey: "categorization",
      format: "categorization",
      question: "Categorize the following actions and descriptions based on whether they refer to Inanna or Ereshkigal according to the text! Put a tick (✓) on Inanna or Ereshkigal!",
      categories: ["Inanna", "Ereshkigal"],
      items: [
        {
          id: "item1",
          statement: "The Queen of Heaven who decided to witness the mysteries of death",
          text: "The Queen of Heaven who decided to witness the mysteries of death",
          correctCategory: "Inanna"
        },
        {
          id: "item2",
          statement: "Consumed by bitterness and grief while ruling the Great Below",
          text: "Consumed by bitterness and grief while ruling the Great Below",
          correctCategory: "Ereshkigal"
        },
        {
          id: "item3",
          statement: "Stripped of all royal garments and stood humbled before the throne",
          text: "Stripped of all royal garments and stood humbled before the throne",
          correctCategory: "Inanna"
        },
        {
          id: "item4",
          statement: "Turned her own sister into a corpse and hung her from a wall hook",
          text: "Turned her own sister into a corpse and hung her from a wall hook",
          correctCategory: "Ereshkigal"
        },
        {
          id: "item5",
          statement: "Felt gratitude for the empathy shown by Enki's genderless beings",
          text: "Felt gratitude for the empathy shown by Enki's genderless beings",
          correctCategory: "Ereshkigal"
        }
      ],
      officialAnswerText: "Inanna, Ereshkigal, Inanna, Ereshkigal, Ereshkigal (I, E, I, E, E)",
      officialExplanation: "Pembahasan Detail Sesuai Buku:\n• Inanna: Karakteristik ini merujuk pada identitasnya di paragraf pertama sebagai penguasa langit yang berani mempertaruhkan status abadinya demi menyaksikan misteri kematian, serta pengalamannya di paragraf kedua di mana ia secara bertahap menanggalkan simbol kekuasaannya hingga berdiri rendah hati di depan takhta.\n• Ereshkigal: Karakteristik ini didasarkan pada paragraf kedua dan ketiga, di mana ia digambarkan sebagai penguasa dunia bawah yang kaku dan penuh kepahitan, yang menghukum saudarinya sendiri, namun pada akhirnya mampu merasakan rasa syukur dan luluh oleh empati yang ditunjukkan oleh utusan Enki.",
      textualEvidence: "Paragraf 1–3 menjabarkan peran Inanna (Ratu Langit, penanggalan pakaian) dan Ereshkigal (penguasa dunia bawah yang berduka, menggantung Inanna, terharu atas empati utusan Enki).",
      evidenceParagraphIndex: 1,
      evidenceSnippet: "Her sister, consumed by bitterness and grief, turned Inanna into a corpse and hung her from a hook on the wall"
    }
  ]
};
