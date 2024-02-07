/*

export const animalflashcardsData = [
    {
      question: "Nombre de este animal:",
      answer: 'Achoki',
      imageName: '/images/AnimalsORKuinitu/Achoki.jpg',
      choices: ['Akuitse', 'Achoki', 'Xarari', 'Parákata'],
    },
    {
        question: "Nombre de este animal:",
        answer: 'Akuitse',
        imageName: '/images/AnimalsORKuinitu/Akuitse.jpg',
        choices: ['Karíche', 'Tukuru', 'Akuitse', 'Parákata'],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Axúni',
        imageName: '/images/AnimalsORKuinitu/Axúni.jpg',
        choices: [ 'Xarari', 'Tukuru', 'Sinku', 'Axúni'],
      },
      {
        question: "Nombre de este animal:",
        answer: "Ch'piri Etetsï",
        imageName: "/images/AnimalsORKuinitu/Ch'piriEtetsï.jpg",
        choices: ["Ch'piri Etetsï, 'Jiuatsï', 'K'upu' , Jaiáki" ],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Chochu',
        imageName: '/images/AnimalsORKuinitu/Chochu.jpg',
        choices: ['Karíche', 'Chochu', 'Sinku', 'Achoki'],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Echekuri',
        imageName: '/images/AnimalsORKuinitu/Echekuri.jpg',
        choices: [ 'Axúni', 'Tukuru', 'Echekuri', 'Xarari' ],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Jaiáki',
        imageName: '/images/AnimalsORKuinitu/Jaiáki.jpg',
        choices: ['Parákata', 'Achoki', 'Xarari', 'Jaiáki'],
      },
      {
        question: "Nombre de este animal:",
        answer: "Jepúnhe",
        imageName: "/images/AnimalsORKuinitu/Jepúnhe.jpg",
        choices: [ "Jepúnhe, 'Jiuatsï', 'Ch'piriEtetsï' , Uspi" ],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Jiuatsï',
        imageName: '/images/AnimalsORKuinitu/Jiuatsï.jpg',
        choices: [ 'Echekuri', 'Jiuatsï', 'Sinku', 'Tíndu'],
      },
      {
        question: "Nombre de este animal:",
        answer: "K'uáki",
        imageName: "/images/AnimalsORKuinitu/K'uáki.jpg",
        choices: [ "Axúni', 'Uáuapu', 'K'uáki', 'Xarari" ],
      },
      {
        question: "Nombre de este animal:",
        answer: "K'uanhásï",
        imageName: "/images/AnimalsORKuinitu/K'uanhásï.jpg",
        choices: [ 'Karíche', 'Tukuru', 'Echekuri', "K'uanhásï" ],
      },
      {
        question: "Nombre de este animal:",
        answer: "K'uarápu",
        imageName: "/images/AnimalsORKuinitu/K'uarápu.jpg",
        choices: [ "K'uarápu", 'Jepúnhe', 'Sinku', 'Axúni'],
      },
      {
        question: "Nombre de este animal:",
        answer: "K'ui Iusï", 'Uakusï',
        imageName: "/images/AnimalsORKuinitu/K'uiIusïORUakusï.jpg",
        choices: [ 'Echekuri', "K'ui Iusï", 'Sinku', 'Uakusï'],
      },
      {
        question: "Nombre de este animal:",
        answer: "K'uitsíki",
        imageName: "/images/AnimalsORKuinitu/K'uitsíki.jpg",
        choices: [ "K'uitsíki, 'Jiuatsï', 'Ch'piriEtetsï' , Uspi" ],
      },
      {
        question: "Nombre de este animal:",
        answer: "K'utú",
        imageName: "/images/AnimalsORKuinitu/K'utú.jpg",
        choices: [ "K'upu', 'Uáuapu', 'K'utú', 'Xarari" ],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Kakátsï',
        imageName: '/images/AnimalsORKuinitu/Kakátsï.jpg',
        choices: ['Parákata', 'Kakátsï', 'Místu', 'Jaiáki'],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Karíche',
        imageName: '/images/AnimalsORKuinitu/Karíche.jpg',
        choices: [ 'Karíche', 'Tukuru', 'Echekuri', 'Uspi' ],
      },
      {
        question: "Nombre de este animal:",
        answer: "Kirhíki",
        imageName: "/images/AnimalsORKuinitu/Kirhíki.jpg",
        choices: [ "K'uarápu", 'Kirhíki', 'Tsíkata', 'Kuirisï'],
      },
      {
        question: "Nombre de este animal:",
        answer: "K'uíniki", 'Kuaráki',
        imageName: "/images/AnimalsORKuinitu/KuarákiORK'uíniki.jpg",
        choices: [ 'Echekuri', "K'ui Iusï", "K'uíniki", 'Kuaráki'],
      },
      {
        question: "Nombre de este animal:",
        answer: 'Kúche',
        imageName: '/images/AnimalsORKuinitu/Kúche.jpg',
        choices: [ 'Kúche', 'Tukuru', 'Echekuri', 'Pipichu' ],
      },
      {
        question: "Nombre de este animal:",
        answer: "Ts'itu", 'Kuinitu',
        imageName: "/images/AnimalsORKuinitu/KuinituORts'itu.jpg",
        choices: [ "Ts'itu", "K'ui Iusï", "K'uíniki", 'Kuinitu'],
      },
      {
        question: "Nombre de este animal:",
        answer: "Kuirisï",
        imageName: "/images/AnimalsORKuinitu/Kuirisï.jpg",
        choices: [ 'Karíche', 'Kuirisï', 'Echekuri', "K'uanhásï" ],
      },
      {
        question: "Nombre de este animal:",
        answer: "Kúmu Jiuátsï",
        imageName: "/images/AnimalsORKuinitu/KúmuJiuátsï.jpg",
        choices: [ 'Pipichu', 'Tsíkata', 'Kúmu', "Kúmu Jiuátsï" ],
      },


    // Add more flashcards with 'choices' property as needed
  ];
  */