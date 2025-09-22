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
      home: "Home",
      aboutUs: "About Us",
      contact: "Contact",
      infoTitle: "Information about Mogorche",
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
      aroundTheVillage: "Around the Village",
      cafes: "Cafés: Ashmet Komerc, Maca Kom, Omer Kom",
      shops: "Shops: Gimi Kom, Baftijar Komerc, Ruzhdija Kom, Asan Kom",
      ambulance: "Ambulance: Mogorche Ambulance",
      funfacts: "Fun Facts",
      waterSources: "Springs & Fountains: Biljanec, Jasika, Kalosici, Belesnica",
      mobileCoverage: "Mobile Coverage: Decent 4G Internet (A1, T-Mobile, Lyca)",
      migrationDestinations: "Migration Destinations: Italy, Germany, Slovenia, Switzerland",
      landMarks: "Landmarks",
      elenSkok: "Elen Skok Bridge: 4-5 km from Mogorche by foot",
      mosque: "Mosque: Kevser Mosque",
      radika: "River: Radika",
      educationYouth: "Education & Youth",
      primarySchool: "Primary School: SOU 'Mirche Acev'",
      highSchool: "High School: '28 Nentori'",
      mekteb: "Theological School: Mekteb",
      economy: "Economy",
      agriculture: "Agriculture: Livestock, Farming",
      localEconomy: "Local Economy: Local Shops",
      livestock: "Livestock: Sheep, Horses, Cows, Chickens",
      legendsandFolklore: "Legends & Folklore",
      elenSkokBridge: "Elen Skok Bridge: Named after the deer that leapt off it (Deep Leap Bridge)",
      mogorche: "Mogorche: Name Origin",
      oldStories: "Old Stories: Ghost stories, Religious tales",
      foodAndCuisine: "Food & Cuisine",
      food: "Traditional Food: Pita, Tiganici, Pastrma",
      drink: "Traditional Beverages: Rose Hip Tea",
      sweets: "Traditional Sweets: Baklava, Trilece, Sejkerpare",
      animalsAndPlants: "Flora & Fauna",
      animals: "Animals: Cats, Dogs, Cows, Horses, Chickens",
      plants: "Plants: Rose Hips, Dogwood, Mogorchanian Pears",
      endemic: "Endemic Species: Mogorchanian Pears",
      architectureAndHomes: "Architecture & Homes",
      architecture: "Architecture: Modern mixed with some older buildings",
      homes: "Homes: Modern homes made by renovating older ones",
      antique: "Antique: Fountains, Mosque, Antique Houses",
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
      home: "Дома",
      aboutUs: "За нас",
      contact: "Контакт",
      infoTitle: "Информации за Могорче",
      geoHis: "Географски и Историски Податоци",
      area: "Површина: 2 км²",
      elevation: "Надморска височина: 1024.7 м",
      firstMentioned: "Прво споменато: 1467",
      mogInNumbers: "Могорче во бројки",
      population: "Популација: 2815",
      popTrend: "Тренд на популација: Се намалува бавно",
      migration: "Миграција: Многу жители живеат во странство",
      whoWeAre: "Кои сме ние",
      ethnic: "Етнички групи: Македонски муслимани, Турци, Албанци",
      religion: "Главна религија: Ислам",
      language: "Службен јазик: Македонски",
      aroundTheVillage: "Околу селото",
      cafes: "Кафулиња: Ashmet Komerc, Maca Kom, Omer Kom",
      shops: "Продавници: Gimi Kom, Baftijar Komerc, Ruzhdija Kom, Asan Kom",
      ambulance: "Амбуланта: Могорче Амбуланта",
      funfacts: "Забавни факти",
      waterSources: "Извори и фонтани: Biljanec, Jasika, Kalosici, Belesnica",
      mobileCoverage: "Мобилно покритие: Добар 4G интернет (A1, T-Mobile, Lyca)",
      migrationDestinations: "Дестинации за миграција: Италија, Германија, Словенија, Швајцарија",
      landMarks: "Знаци",
      elenSkok: "Мост Елн Сок: 4-5 км од Могорче пешки",
      mosque: "Мечет: Кевсер Мечет",
      radika: "Река: Радика",
      educationYouth: "Образование и млади",
      primarySchool: "Основно училиште: СОУ 'Мирче Ацев'",
      highSchool: "Средно училиште: '28 Ноември'",
      mekteb: "Теолошко училиште: Мектеб",
      economy: "Економија",
      agriculture: "Земјоделство: Добиток, Земјоделство",
      localEconomy: "Локална економија: Локални продавници",
      livestock: "Добиток: Овци, Коњи, Крави, Пилешки",
      legendsandFolklore: "Легенди и фолклор",
      elenSkokBridge: "Мост Елн Сок: Името по еленот што скокнал (Длабок Скок Мост)",
      mogorche: "Могорче: Потекло на името",
      oldStories: "Стари приказни: Призрачни приказни, Религиозни приказни",
      foodAndCuisine: "Храна и пијалоци",
      food: "Традиционална храна: Пита, Тиганици, Пастрма",
      drink: "Традиционални пијалоци: Чај од шипки",
      sweets: "Традиционални слатки: Баклава, Треличе, Сејкерпаре",
      animalsAndPlants: "Флора и фауна",
      animals: "Животни: Мачки, Кучиња, Крави, Коњи, Пилешки",
      plants: "Растенија: Шипки, Дрен, Могорчки круши",
      endemic: "Ендемски видови: Могорчки круши",
      architectureAndHomes: "Архитектура и домови",
      architecture: "Архитектура: Модерно мешано со постари згради",
      homes: "Домови: Модерни домови направени со реновирање на постари",
      antique: "Антиквитети: Фонтани, Мечет, Антички куќи",
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
      home: "Ballina",
      aboutUs: "Rreth Nesh",
      contact: "Kontakti",
      infoTitle: "Informacione rreth Mogorche",
      geoHis: "Fakte Gjeografike & Historike",
      area: "Sipërfaqe: 2 km²",
      elevation: "Lartësi: 1024.7 m",
      firstMentioned: "Për herë të parë u përmend: 1467",
      mogInNumbers: "Mogorche në Numra",
      population: "Popullsia: 2815",
      popTrend: "Trend i popullsisë: Po zvogëlohet ngadalë",
      migration: "Migracioni: Shumë banorë jetojnë jashtë",
      whoWeAre: "Kush jemi",
      ethnic: "Grupet etnike: Muslimanë maqedonas, Turq, Shqiptarë",
      religion: "Feja kryesore: Islam",
      language: "Gjuha zyrtare: Maqedonase",
      aroundTheVillage: "Rreth fshatit",
      cafes: "Kafene: Ashmet Komerc, Maca Kom, Omer Kom",
      shops: "Dyqane: Gimi Kom, Baftijar Komerc, Ruzhdija Kom, Asan Kom",
      ambulance: "Ambulancë: Ambulanca e Mogorche",
      funfacts: "Fakte interesante",
      waterSources: "Burime dhe burime uji: Biljanec, Jasika, Kalosici, Belesnica",
      mobileCoverage: "Mbulesa mobile: Internet 4G i mirë (A1, T-Mobile, Lyca)",
      migrationDestinations: "Destinacionet e migracionit: Itali, Gjermani, Slloveni, Zvicër",
      landMarks: "Pika të njohura",
      elenSkok: "Ura Elen Skok: 4-5 km nga Mogorche me këmbë",
      mosque: "Xhamia: Kevser",
      radika: "Lumi: Radika",
      educationYouth: "Arsim & të rinjtë",
      primarySchool: "Shkolla fillore: SOU 'Mirche Acev'",
      highSchool: "Shkolla e mesme: '28 Nentori'",
      mekteb: "Shkolla Teologjike: Mekteb",
      economy: "Ekonomia",
      agriculture: "Bujqësi: Bagëti, Bujqësi",
      localEconomy: "Ekonomia lokale: Dyqane lokale",
      livestock: "Bagëti: Dhelpra, Kuaj, Kafshë, Pulë",
      legendsandFolklore: "Legjenda & Folklor",
      elenSkokBridge: "Ura Elen Skok: Emëruar pas drerit që u hodh (Ura e Thellë)",
      mogorche: "Mogorche: Origjina e emrit",
      oldStories: "Historitë e vjetra: Historitë e fantazmave, Historitë fetare",
      foodAndCuisine: "Ushqim & Pije",
      food: "Ushqim tradicional: Pita, Tiganici, Pastrma",
      drink: "Pije tradicionale: Çaj i frutave të sherebelës",
      sweets: "Embëlsira tradicionale: Bakllava, Trilece, Sejkerpare",
      animalsAndPlants: "Flora & Fauna",
      animals: "Kafshët: Mace, Qen, Kërve, Kuaj, Pulë",
      plants: "Bimët: Sherebelë, Drën, Dardha Mogorçane",
      endemic: "Speciet endemike: Dardha Mogorçane",
      architectureAndHomes: "Arkitektura & Shtëpitë",
      architecture: "Arkitektura: Moderne e përzier me disa ndërtesa të vjetra",
      homes: "Shtëpi: Shtëpi moderne të ndërtuara duke renovuar të vjetrat",
      antique: "Antike: Fontana, Xhami, Shtëpi antike",
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

// -------------------- Language Selector --------------------
const customSelect = document.getElementById("customSelect");
const selected = customSelect.querySelector(".selected");
const options = customSelect.querySelector(".options");
const optionItems = customSelect.querySelectorAll(".options li");

// Load saved language or default to English
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  applyTranslations(savedLang);

  // Set dropdown text to saved language
  const activeOption = [...optionItems].find(opt => opt.dataset.value === savedLang);
  if (activeOption) selected.innerHTML = activeOption.innerHTML;
});

// Toggle dropdown
selected.addEventListener("click", () => {
  options.classList.toggle("show");
});

// Select option
optionItems.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.dataset.value;
    selected.innerHTML = option.innerHTML; // update displayed value
    options.classList.remove("show");

    localStorage.setItem("lang", lang); // save language choice
    applyTranslations(lang);
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    options.classList.remove("show");
  }
});
