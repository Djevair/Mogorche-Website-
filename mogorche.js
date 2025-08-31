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
        stayTuned: "Stay tuned — we're planning on adding a login section for administrators and users!"
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
        stayTuned: "Следете не — планираме да додадеме логирање за администратори и корисници!"
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
        stayTuned: "Qëndroni të lidhur — po planifikojmë të shtojmë hyrje për administratorë dhe përdorues!"
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

// Event listener for language selection
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations("en"); // default language
    document.getElementById("languageSelect").addEventListener("change", e => {
        applyTranslations(e.target.value);
    });
});
//Update flag
const languageSelect = document.getElementById("languageSelect");

function updateFlag() {
    const selectedOption = languageSelect.selectedOptions[0];
    const flag = selectedOption.getAttribute("data-flag");
    languageSelect.style.backgroundImage = `url('${flag}')`;
}

// Initialize on page load
updateFlag();

// Update when user changes language
languageSelect.addEventListener("change", e => {
    updateFlag();
    applyTranslations(e.target.value); // your translation function
});
