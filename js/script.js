// -------------------- Image Slider --------------------
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

slides[currentSlide].classList.add('active');
setInterval(showNextSlide, 5000);

// -------------------- Image Compare --------------------
const imageBox = document.querySelector(".imageBox");
const imageWrap = document.querySelector(".imageWrap");
const originalImage = imageWrap.querySelector("img");
const line = imageBox.querySelector("span");
let isDragging = false;

// Initial setup
function setupCompare() {
    const boxWidth = imageBox.offsetWidth;
    // overlay width at 50%
    imageWrap.style.width = boxWidth / 2 + "px";

    // line setup
    line.style.position = "absolute";
    line.style.top = 0;
    line.style.height = "100%";
    line.style.cursor = "ew-resize";
    line.style.display = "block";

    const lineWidth = line.offsetWidth || 20; // default if zero
    line.style.left = boxWidth / 2 - lineWidth / 2 + "px";

    // ensure overlay image fills container
    originalImage.style.width = boxWidth + "px";
    imageWrap.style.overflow = "hidden";
}

// Call on load and resize
setupCompare();
window.addEventListener("resize", setupCompare);

// Move divider function
function moveDivider(pageX) {
    const rect = imageBox.getBoundingClientRect();
    const boxLeft = rect.left + window.scrollX;
    const boxWidth = rect.width;

    let newWidth = pageX - boxLeft;
    if (newWidth < 0) newWidth = 0;
    if (newWidth > boxWidth) newWidth = boxWidth;

    imageWrap.style.width = newWidth + "px";

    const lineWidth = line.offsetWidth || 20;
    let linePos = newWidth - lineWidth / 2;
    if (linePos < 0) linePos = 0;
    if (linePos > boxWidth - lineWidth) linePos = boxWidth - lineWidth;
    line.style.left = linePos + "px";
}

// Mouse events
line.addEventListener("mousedown", e => { e.preventDefault(); isDragging = true; });
document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("mousemove", e => { if (isDragging) moveDivider(e.pageX); });

// Touch events
line.addEventListener("touchstart", e => { e.preventDefault(); isDragging = true; });
document.addEventListener("touchend", () => isDragging = false);
document.addEventListener("touchmove", e => { if (isDragging) moveDivider(e.touches[0].pageX); });



// -------------------- Login Popup --------------------
const loginIcon = document.querySelector('.navigationBar i');
const loginPopup = document.querySelector('.popupModal');
const closeBtn = document.querySelector('.closeBtn');

loginIcon.addEventListener('click', () => loginPopup.style.display = 'block');
closeBtn.addEventListener('click', () => loginPopup.style.display = 'none');
window.addEventListener('click', e => { if (e.target === loginPopup) loginPopup.style.display = 'none'; });

// -------------------- Translations --------------------
const translations = {
    en: {
        MogorcheHomePage: "Mogorche Home Page",
        info: "Info",
        geoHisNav: "Geographical & Historical Facts",
        mogInNumbersNav: "Mogorche in Numbers",
        whoWeAreNav: "Who We Are",
        otherCategories: "Other Categories",
        aboutUs: "About Us",
        contact: "Contact",
        welcomeMsg: "Welcome to Mogorche",
        welcomeToMogorche: "Mogorče (Macedonian: Могорче) is a village in the municipality of Debar, in the area of Mala Reka, North Macedonia. Near the village is the Elen Skok bridge.",
        learnMoreButton: "Learn More",
        glance: "Mogorche at a Glance",
        geoHis: "Geographical & Historical Facts",
        area: "Area: 2 km²",
        elevation: "Elevation: 1024.7 m",
        firstMentioned: "First mentioned: 1467",
        mogInNumbers: "Mogorche in Numbers",
        population: "Population: 2815",
        popTrend: "Population Trend: Slowly decreasing",
        migration: "Migration: Many residents live abroad",
        whoWeAre: "Who We Are",
        ethnic: "Ethnic Groups: Macedonian Muslims, Turks, Albanians",
        religion: "Main Religion: Islam",
        language: "Official Language: Macedonian",
        swipe: "Swipe Across to Compare",
        inSeason: "In Season vs. Rest of the Year",
        inSeasonParagraph: "During wedding season, the football field is full of life and celebration. Off-season, it becomes a quiet space with only a few people around.",
        eventAndFestivities: "Events & Festivities in Mogorche",
        sportsAndRecreational: "Sports & Recreational Events",
        football2025: "Football Tournament 2025",
        pingpong: "Table Tennis Tournament 2024",
        football2024: "Football Tournament 2024",
        weddingsAndEngagements: "Weddings & Engagements",
        findOutWeddings: "Find out when certain weddings/engagements happen, and what traditions are on display",
        sanela: "August 11 2025 - Sanela Islamoska",
        dano: "August 14 2025 - Dano Miftaroski",
        asmer: "August 19 2025 - Asmer Avmedoski",
        sunnahSunet: "Sunnah/Sunet",
        sunet: "Sunet is a traditional Muslim circumcision marking a boy’s religious and cultural initiation.",
        erdin: "August 11 2025 - Erdin Jasharoski",
        benjamin: "August 14 2025 - Benjamin Dileski",
        explore: "Explore Mogorche in Motion",
        videoParagraph: "Take a video tour through Mogorche — starting from the village entrance, passing through the lively center, and winding through our unique neighborhoods and quiet alleyways. See the charm of our village from every angle.",
        videoCredits: "Filmed with help from my friend Alit Sadikoski.",
        comingSoon: "Coming Soon",
        comingSoonParagraph: "Stay tuned — there's more to come from the website!",
        contactInfoHeader: "Contact Info",
        email: "Email: dzekoavmedoski@yahoo.com",
        phone: "Phone: +389 75 945 602",
        address: "Address: Mogorche, Debar, North Macedonia",
        hours: "Hours: Mon–Fri, 09:00–17:00",
        connect: "Connect",
        loginComingSoon: "Login Coming Soon",
        stayTuned: "Stay tuned — we're planning on adding a login section for administrators and users!",
        thisWeekInMogorche: "This Week in Mogorche",
        sphericalMirrorsInstallation: "Installation of Spherical Mirrors for Safer Traffic",
        sphericalMirrors: "On 13.09 in Mogorche, volunteers installed spherical traffic mirrors at key spots around the village. The mirrors improve visibility on sharp turns and narrow streets, making travel safer for drivers and pedestrians.",
        highlightsInstallation: "Football Field Highlights Installed",
        highlights: "On 09.08, highlights were installed in the school football field to improve nighttime visibility during festivities and the football tournament, ensuring a safer and more enjoyable experience for players and spectators.",
        renovation: "Karamanovci Road Renovation",
        karamanovciRenovation: "On 06.08, residents of Karamanovci joined an action to replace old broken bricks with new cement ones, improving the road to the village.",
    },
    mk: {
        MogorcheHomePage: "Могорче Почетна Страница",
        info: "Инфо",
        geoHisNav: "Географски и историски факти",
        mogInNumbersNav: "Могорче во бројки",
        whoWeAreNav: "Кои сме ние",
        otherCategories: "Други категории",
        aboutUs: "За нас",
        contact: "Контакт",
        welcomeMsg: "Добредојдовте во Могорче",
        welcomeToMogorche: "Могорче е село во општина Дебар, во пределот на Мала Река, Северна Македонија. Близу до селото се наоѓа мостот Елен Скок.",
        learnMoreButton: "Дознај повеќе",
        glance: "Могорче на прв поглед",
        geoHis: "Географски и историски факти",
        area: "Површина: 2 км²",
        elevation: "Надморска височина: 1024.7 м",
        firstMentioned: "Првпат споменато: 1467",
        mogInNumbers: "Могорче во бројки",
        population: "Популација: 2815",
        popTrend: "Тренд на популација: Полека опаѓа",
        migration: "Миграција: Многу жители живеат во странство",
        whoWeAre: "Кои сме ние",
        ethnic: "Етнички групи: Македонски муслимани, Турци, Албанци",
        religion: "Главна религија: Ислам",
        language: "Службен јазик: Македонски",
        swipe: "Повлечи за споредба",
        inSeason: "Во сезона против остатокот од годината",
        inSeasonParagraph: "За време на свадбената сезона, фудбалското игралиште е полно со живот и радост. Вон сезона, станува тивко место со само неколку луѓе околу.",
        eventAndFestivities: "Настани и свечености во Могорче",
        sportsAndRecreational: "Спортски и рекреативни настани",
        football2025: "Фудбалски турнир 2025",
        pingpong: "Турнир во пинг-понг 2024",
        football2024: "Фудбалски турнир 2024",
        weddingsAndEngagements: "Свадби и веридби",
        findOutWeddings: "Дознајте кога се одржуваат одредени свадби/веридби и кои традиции се прикажани",
        sanela: "11 август 2025 - Санела Исламоска",
        dano: "14 август 2025 - Дано Мифтароски",
        asmer: "19 август 2025 - Асмер Авмедоски",
        sunnahSunet: "Суна/Сунет",
        sunet: "Сунет е традиционален муслимански обред на кастрација кој го означува религискиот и културниот влез на момчето.",
        erdin: "11 август 2025 - Ердин Јашароски",
        benjamin: "14 август 2025 - Бенџамин Дилески",
        explore: "Истражете го Могорче во движење",
        videoParagraph: "Направете видео турнеја низ Могорче — започнувајќи од влезот на селото, минувајќи низ живописниот центар и низ нашите уникатни населби и тивки улички. Видете го шармот на нашето село од секој агол.",
        videoCredits: "Снимено со помош од мојот пријател Алит Садикоски.",
        comingSoon: "Доаѓа наскоро",
        comingSoonParagraph: "Следете не — има уште содржини на веб-страницата!",
        contactInfoHeader: "Контакт информации",
        email: "Е-пошта: dzekoavmedoski@yahoo.com",
        phone: "Телефон: +389 75 945 602",
        address: "Адреса: Могорче, Дебар, Северна Македонија",
        hours: "Работно време: Пон–Пет, 09:00–17:00",
        connect: "Поврзи се",
        loginComingSoon: "Логирањето наскоро",
        stayTuned: "Следете не — планираме да додадеме логирање за администратори и корисници!",
        thisWeekInMogorche: "Оваа недела во Могорче",
        sphericalMirrorsInstallation: "Инсталирање на сферични огледала за побезбеден сообраќај",
        sphericalMirrors: "На 13.09 во Могорче, волонтери поставија сферични сообраќајни огледала на клучни места во селото. Огледалата ја подобруваат видливоста на остри свиоци и тесни улици, правејќи го патувањето побезбедно за возачите и пешаците.",
        highlightsInstallation: "Поставени осветлувања на фудбалското игралиште",
        highlights: "На 09.08, во училишното фудбалско игралиште беа поставени осветлувања за подобра видливост навечер за време на свечености и фудбалски турнир, обезбедувајќи побезбедно и поинтересно искуство за играчите и гледачите.",
        renovation: "Реновирање на патот до Карамановци",
        karamanovciRenovation: "На 06.08, жителите на Карамановци учествуваа во акција за замена на старите оштетени тули со нови цементни, подобрувајќи го патот до селото.",
    },
    sq: {
        MogorcheHomePage: "Faqja Kryesore e Mogorche",
        info: "Info",
        geoHisNav: "Fakte Gjeografike & Historike",
        mogInNumbersNav: "Mogorche në Numra",
        whoWeAreNav: "Kush Jemi",
        otherCategories: "Kategoria Tjera",
        aboutUs: "Rreth Nesh",
        contact: "Kontakti",
        welcomeMsg: "Mirë se vini në Mogorche",
        welcomeToMogorche: "Mogorche është një fshat në komunën e Debarit, në zonën e Mala Reka, Maqedonia e Veriut. Afër fshatit ndodhet ura Elen Skok.",
        learnMoreButton: "Mëso më shumë",
        glance: "Mogorche në Përmbledhje",
        geoHis: "Fakte Gjeografike & Historike",
        area: "Sipërfaqe: 2 km²",
        elevation: "Lartësi: 1024.7 m",
        firstMentioned: "E përmendur për herë të parë: 1467",
        mogInNumbers: "Mogorche në Numra",
        population: "Popullsia: 2815",
        popTrend: "Trendi i popullsisë: Ulje e ngadaltë",
        migration: "Migrimi: Shumë banorë jetojnë jashtë",
        whoWeAre: "Kush Jemi",
        ethnic: "Grupet Etnike: Myslimanë maqedonas, Turq, Shqiptarë",
        religion: "Feja Kryesore: Islame",
        language: "Gjuha Zyrtare: Maqedonase",
        swipe: "Tërhiq për të krahasuar",
        inSeason: "Në Sezon vs Pjesa tjetër e Vitit",
        inSeasonParagraph: "Gjatë sezonit të dasmave, fusha e futbollit është e gjallë dhe e festuar. Jashtë sezonit, bëhet një vend i qetë me pak njerëz rreth e rrotull.",
        eventAndFestivities: "Ngjarje & Festivitetet në Mogorche",
        sportsAndRecreational: "Ngjarje Sportive & Rekreative",
        football2025: "Turneu i Futbollit 2025",
        pingpong: "Turneu i Ping-Pong 2024",
        football2024: "Turneu i Futbollit 2024",
        weddingsAndEngagements: "Dasma & Fejesa",
        findOutWeddings: "Zbuloni kur ndodhin dasma/fejesa të caktuara dhe cilat tradita shfaqen",
        sanela: "11 Gusht 2025 - Sanela Islamoska",
        dano: "14 Gusht 2025 - Dano Miftaroski",
        asmer: "19 Gusht 2025 - Asmer Avmedoski",
        sunnahSunet: "Sunnah/Sunet",
        sunet: "Sunet është një rreth musliman tradicional që shënon iniciimin fetar dhe kulturor të një djali.",
        erdin: "11 Gusht 2025 - Erdin Jasharoski",
        benjamin: "14 Gusht 2025 - Benjamin Dileski",
        explore: "Eksploro Mogorche në Lëvizje",
        videoParagraph: "Merrni një tur video përmes Mogorche — duke filluar nga hyrja e fshatit, duke kaluar përmes qendrës së gjallë dhe duke u shtrirë përmes lagjeve tona unike dhe rrugicave të qeta. Shikoni magjinë e fshatit tonë nga çdo kënd.",
        videoCredits: "Filmuar me ndihmën e mikut tim Alit Sadikoski.",
        comingSoon: "Së shpejti",
        comingSoonParagraph: "Qëndroni të lidhur — ka më shumë në faqen e internetit!",
        contactInfoHeader: "Informacione Kontakti",
        email: "Email: dzekoavmedoski@yahoo.com",
        phone: "Telefon: +389 75 945 602",
        address: "Adresa: Mogorche, Debar, Maqedonia e Veriut",
        hours: "Orari: Hën–Prem, 09:00–17:00",
        connect: "Lidhu",
        loginComingSoon: "Hyrja së shpejti",
        stayTuned: "Qëndroni të lidhur — po planifikojmë të shtojmë hyrje për administratorë dhe përdorues!",
        thisWeekInMogorche: "Këtë Javë në Mogorche",
        sphericalMirrorsInstallation: "Instalimi i pasqyrave sferike për trafikun më të sigurt",
        sphericalMirrors: "Më 13.09 në Mogorche, vullnetarët vendosën pasqyra sferike trafikuese në vendet kyçe rreth fshatit. Pasqyrat përmirësojnë dukshmërinë në kthesa të mprehta dhe rrugë të ngushta, duke e bërë udhëtimin më të sigurt për shoferët dhe këmbësorët.",
        highlightsInstallation: "Instalimi i ndriçimit në fushën e futbollit",
        highlights: "Më 09.08, në fushën e futbollit të shkollës u instalua ndriçim për të përmirësuar dukshmërinë gjatë natës gjatë festimeve dhe turneut të futbollit, duke siguruar një përvojë më të sigurt dhe më të këndshme për lojtarët dhe spektatorët.",
        renovation: "Rinovimi i rrugës Karamanovci",
        karamanovciRenovation: "Më 06.08, banorët e Karamanovcit morën pjesë në një aksion për të zëvendësuar tullat e vjetra të thyer me tullat e reja prej çimentoje, duke përmirësuar rrugën drejt fshatit.",
    }
};

// Apply translations
function applyTranslations(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        const text = translations[lang][key];
        if (!text) return;

        if (el.tagName === "TITLE") {
            document.title = text;
        } else if (el.tagName === "BUTTON") {
            const icon = el.querySelector("i");
            el.textContent = text;
            if (icon) el.appendChild(icon);
        } else {
            el.textContent = text;
        }
    });
}

// -------------------- Language Selector --------------------
const customSelect = document.getElementById("customSelect");
const selected = customSelect.querySelector(".selected");
const options = customSelect.querySelector(".options");
const optionItems = customSelect.querySelectorAll(".options li");

// Load saved language or default to English
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  applyTranslations(savedLang);

  const activeOption = [...optionItems].find(opt => opt.dataset.value === savedLang);
  if (activeOption) selected.innerHTML = activeOption.innerHTML;
});

// Toggle dropdown
selected.addEventListener("click", () => options.classList.toggle("show"));

// Select option
optionItems.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.dataset.value;
    selected.innerHTML = option.innerHTML;
    options.classList.remove("show");

    localStorage.setItem("lang", lang);
    applyTranslations(lang);
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", e => {
  if (!customSelect.contains(e.target)) options.classList.remove("show");
});
