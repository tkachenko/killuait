// thx. dou...
var companies = ["SoftServe", "EPAM", "Ciklum", "ELEKS", "GlobalLogic", "Infopulse", "Luxoft", "NIX Solutions Ltd.", "Materialise", "Noosphere", "Miratech", "NetCracker", "Samsung R&D Institute Ukraine", "Plarium Global", "Terrasoft", "Cogniance", "Aquasoft", "Provectus", "DataArt", "Playtika UA", "INTROPRO LLC", "Delphi LLC", "N-iX", "Lohika Systems", "Sigma Software", "Symphony Solutions", "Sitecore", "Lucky Labs", "Astound Commerce", "Maxymiser", "Playtech", "DIO-soft", "Genesis", "Levi9 Ukraine", "GeeksForLess Inc.", "Win Interactive LLC", "Prom.ua", "Dev-Pro.net", "Malkos", "Intecracy Group Consortium", "CyberVision, Inc.", "Depositphotos", "TEAM International Services, Inc.", "Level Up", "ZEO Alliance", "Svitla Systems, Inc.", "iLogos", "Intetics Co", "ISD", "Innovecs", "Wargaming.net", "CloneFish", "CMK", "AltexSoft", "Brightgrove LTD.", "Grammarly", "Epom", "Archer Software", "Trionika", "Netpeak", "Govitall", "Boston Merchant Financial Ltd.", "[bvblogic]", "3Shape Ukraine", "Intego Group", "Daxx BV", "Program-Ace", "TeamDev", "Perfectial", "Yalantis", "BETLAB", "111PIX UA", "Intellias", "Apriorit", "Zfort Group", "Exadel Inc.", "DevelopEx", "Serena Software Ukraine", "Ostware Services", "UNITY-BARS", "LogNet Systems", "Itera", "Nravo", "Intersog", "ABBYY Ukraine", "CHI Software", "AB Soft", "MobiDev", "SoftBistro", "Rokitt", "Anadea Inc.", "Lime Systems", "DB BEST Technologies", "SimCorp", "Nika Entertainment", "Akvelon Ukraine", "Softheme", "EngagePoint", "Comodo Group", "SPD-Ukraine", "Softengi", "Grid Dynamics", "PortaOne", "EpsySoft", "Devellar", "Looksery Inc.", "DEVOLER", "Techery", "The APP Solutions", "Attract Group", "INSART", "VertaMedia", "X1 Group", "PFSOFT", "v-jet", "Light IT", "WIX.com", "Beetroot Resources", "BOOMERS Group", "PrivateDev", "CodeTiburon", "AnvilEight", "A-MTOSS", "Opower Ukraine", "AppliKey Solutions", "ComboApp", "NetEnt", "FFW", "MWDN", "Prophonix", "Appus", "Acceptic", "WEB4PRO", "Swivl", "KeepSolid", "T4web", "MacPaw", "Stanfy", "Clickky Family", "Redwerk", "TechMagic", "Grossum", "Krusche & Company", "GORILLA", "Eastern Peak Software", "Brander", "Qoderoom (formerly known as Dev IQ)", "Apps-O-Rama", "AgileEngine", "PulsarFour", "Binary Studio", "Sloboda studio", "Nitra", "Caspio", "Trust Sourcing", "Waverley Software", "LeoStudio", "JBS", "Miritec", "Paymentwall, Inc.", "SPS Commerce", "InvisibleCRM", "Digicode", "LEZGRO", "", "ArtyGeek", "Bkstg", "Eltrino, LLC", "Abweb", "COAX Software", "Valor Software Solutions", "MLSDev", "Timecode LLC", "IntellectEU", "Pixabit solutions", "UniSender", "Gentleware Ukraine", "SandSIV Group"];

// thx google
var gosdits = [
    'СБУ',
    'МВД',
    'ПЕЧЕРСЬКИЙ РАЙОННИЙ СУД',
    'ЖЕК Соломяньского району',
    'Пожежна охорона',
    'ДПІ у Печерському районі ГУ ДФС у м. Києві',
    'Управління з надзвичайних ситуацій у Шевченуівському районі ГУ ДСНС України у м. Києві',
    'Комітеті з питань запобігання і протидії корупції',
    'св дарницького ру гумвс україни в м. києві',
    'Отдел по борьбе с экономической преступностью'
];

// thx rand()
var poddannya = [
    'Згідно постанови суду днр за рішеням львівської прокуратури - на захист честі компанії моторола...',
    'З IP офісу виконано МС дДОС атаку на сайт президента (3-и одночасні запити)..',
    'Пошук недопалку терориста номер 1 петра, який живе поверхом више..',
    'Пошук нелицензійної копії MS Windows 95 та ME яка десь загубилась...',
    'Пошук нелицензійної копії Tetris',
    'Нелецинзійне відтворення на корпоративі альбому Сердючки  «Alles Gut Mamba»',
    'Незаконний пінг серверу 127.0.0.1',
    'Да на кофе зашли просто, познакомится.. а вы сразу.. ',
    'Звернення громадянина Пижика О.В. за забезпечення авторских прав',
    'Перевірка виконання рішення #23234 від 20/03/2014',
    'На співбеседі образили сина голови... ',
    'Свята скоро, може хлопці - господарі подадуть пятака...',
    'Згідно постанови - постанови, за дорученням доручителя. На виконання закону про закон..',
    'На майдан ходил? "Наших" песнями обижал? Ну мы пришли.. ',
    'Свекруха руководителя открыла ИТСистемсКепитал-2009 а сотрудников на 1400грн не найти.. ',
    'Смузи в ковокинге, да еще и опенспейс.. явно пахнет нарушением',
    'Правительство Польши, Болгарии, Нидерландов и Литвы попросили с развитием их ИТ рынка, помогаем!',

];

function getRandomCompany(){
    var rand = companies[Math.floor(Math.random() * companies.length)];
    return rand;
}
function getRandomGosdit(){
    var rand = gosdits[Math.floor(Math.random() * gosdits.length)];
    return rand;
}
function getRandomMsg(){
    var rand = poddannya[Math.floor(Math.random() * poddannya.length)];
    return rand;
}

function getRandomRandomRandom(){
    $('#from').html('Засівати буде <br><u>'+getRandomGosdit()+'</u>');
    $('#till').html('Ма$$кі шоу будуть в <u>'+getRandomCompany()+'</u>');
    $('#msg').html('<b>Обшук, розбиті двері, арешт обладнання, випитя кави та "загубелні" 2 iPhone на підставі:</b>' +
        ' <br><br>'+ getRandomMsg());

}
