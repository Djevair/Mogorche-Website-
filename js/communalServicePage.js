// -------------------- Diary Entries --------------------
const diaryEntries = [
    {
        date: "2025-08-13",
        title: {
            en: "Installation of Spherical Mirrors",
            mk: "Инсталација на сферични огледала",
            sq: "Vendosja e Pasqyrave Sferike"
        },
        category: {
            en: "Traffic",
            mk: "Сообраќај",
            sq: "Trafik"
        },
        description: {
            en: "Volunteers installed spherical mirrors at key spots in the village to improve visibility on sharp turns and narrow streets.",
            mk: "Волонтери инсталираа сферични огледала на клучни точки во селото за подобра видливост на остри свиоци и тесни улици.",
            sq: "Vullnetarët vendosën pasqyra sferike në pika kyçe të fshatit për të përmirësuar dukshmërinë në kthesa të mprehta dhe rrugë të ngushta."
        },
        image: "../images/sphericalMirror.jpg"
    },
    {
        date: "2025-08-09",
        title: {
            en: "Football Field Highlights Installed",
            mk: "Инсталирани рефлектори на фудбалското игралиште",
            sq: "Instalimi i Ndriçimit në Fushën e Futbollit"
        },
        category: {
            en: "Sports",
            mk: "Спорт",
            sq: "Sport"
        },
        description: {
            en: "Highlights were installed in the school football field to improve nighttime visibility during festivities and football tournaments.",
            mk: "Рефлектори беа инсталирани на фудбалското игралиште во училиште за подобра видливост навечер за време на свечености и турнири.",
            sq: "Ndriçimi u instalua në fushën e futbollit të shkollës për të përmirësuar dukshmërinë natën gjatë festimeve dhe turneve të futbollit."
        },
        image: "../images/stadium.jpg"
    },
    {
        date: "2025-08-06",
        title: {
            en: "Karamanovci Road Renovation",
            mk: "Реконструкција на патот до Карамановци",
            sq: "Rinovimi i Rrugës së Karamanovcit"
        },
        category: {
            en: "Renovation",
            mk: "Реконструкција",
            sq: "Rinovim"
        },
        description: {
            en: "Residents of Karamanovci replaced old broken bricks with new cement ones, improving the road to the village.",
            mk: "Жителите на Карамановци ги замениле старите скршени цигли со нови цементни, подобрувајќи го патот до селото.",
            sq: "Banorët e Karamanovcit zëvendësuan tullat e vjetra të thyera me tulla të reja prej çimentosh, duke përmirësuar rrugën për në fshat."
        },
        image: "../images/cement.jpg"
    }
];

let currentIndex = 0;
const contentDiv = document.getElementById("content");

// -------------------- Render Diary Entry --------------------
function renderEntry(index, lang) {
    const entry = diaryEntries[index];
    contentDiv.innerHTML = `
        <div class="diaryEntry">
            <h2 class="entryDate">${entry.date}</h2>
            <h3 class="entryTitle">${entry.title[lang]}</h3>
            <p class="entryCategory"><strong>${translations[lang].categoryLabel}:</strong> ${entry.category[lang]}</p>
            <img src="${entry.image}" alt="${entry.title[lang]}" class="entryImage">
            <p class="entryDescription">${entry.description[lang]}</p>
            <div class="navigationButtons">
                <button id="prevBtn" ${index === 0 ? "disabled" : ""}><i class="fa-solid fa-arrow-left"></i> ${translations[lang].previous}</button>
                <button id="nextBtn" ${index === diaryEntries.length - 1 ? "disabled" : ""}>${translations[lang].next} <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    `;

    document.getElementById("prevBtn")?.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderEntry(currentIndex, lang);
        }
    });

    document.getElementById("nextBtn")?.addEventListener("click", () => {
        if (currentIndex < diaryEntries.length - 1) {
            currentIndex++;
            renderEntry(currentIndex, lang);
        }
    });
}

// -------------------- Translations --------------------
const translations = {
    en: {
        home: "Home",
        aboutUs: "About Us",
        contact: "Contact",
        backToHome: "Back to Home",
        communalServiceTitle: "Communal Service",
        communalServiceIntro: "Here you can explore updates and diary-style records of communal service activities in Mogorche — from road maintenance and installations to other improvements that benefit the community.",
        contactInfoHeader: "Contact Info",
        email: "Email: dzekoavmedoski@yahoo.com",
        phone: "Phone: +389 75 945 602",
        address: "Address: Mogorche, Debar, North Macedonia",
        hours: "Hours: Mon–Fri, 09:00–17:00",
        connect: "Connect",
        loginComingSoon: "Login Coming Soon",
        stayTuned: "Stay tuned — we're planning on adding a login section for administrators and users!",
        previous: "Previous",
        next: "Next",
        categoryLabel: "Category"
    },
    mk: {
        home: "Дома",
        aboutUs: "За нас",
        contact: "Контакт",
        backToHome: "Назад кон почетна",
        communalServiceTitle: "Комунална Служба",
        communalServiceIntro: "Тука можете да ги разгледате ажурирањата и дневничките записи на активности на комуналната служба во Могорче — од одржување на патишта и инсталации до други подобрувања што ги користат заедницата.",
        contactInfoHeader: "Контакт информации",
        email: "Е-пошта: dzekoavmedoski@yahoo.com",
        phone: "Телефон: +389 75 945 602",
        address: "Адреса: Могорче, Дебар, Северна Македонија",
        hours: "Работно време: Пон–Пет, 09:00–17:00",
        connect: "Поврзи се",
        loginComingSoon: "Логирањето наскоро",
        stayTuned: "Следете не — планираме да додадеме логирање за администратори и корисници!",
        previous: "Претходно",
        next: "Следно",
        categoryLabel: "Категорија"
    },
    sq: {
        home: "Ballina",
        aboutUs: "Rreth Nesh",
        contact: "Kontakti",
        backToHome: "Kthehu te Ballina",
        communalServiceTitle: "Shërbimi Komunal",
        communalServiceIntro: "Këtu mund të eksploroni përditësimet dhe regjistrimet në stil ditari të aktiviteteve të shërbimit komunal në Mogorche — nga mirëmbajtja e rrugëve dhe instalimet deri te përmirësimet e tjera që përfitojnë komunitetin.",
        contactInfoHeader: "Informacione Kontakti",
        email: "Email: dzekoavmedoski@yahoo.com",
        phone: "Telefon: +389 75 945 602",
        address: "Adresa: Mogorche, Debar, Maqedonia e Veriut",
        hours: "Orari: Hën–Prem, 09:00–17:00",
        connect: "Lidhu",
        loginComingSoon: "Hyrja së shpejti",
        stayTuned: "Qëndroni të lidhur — po planifikojmë të shtojmë hyrje për administratorë dhe përdorues!",
        previous: "I mëparshëm",
        next: "Tjetër",
        categoryLabel: "Kategori"
    }
};

// -------------------- Language Selector --------------------
let currentLang = localStorage.getItem("lang") || "en";

const customSelect = document.getElementById("customSelect");
const selected = customSelect.querySelector(".selected");
const options = customSelect.querySelector(".options");
const optionItems = customSelect.querySelectorAll(".options li");

// Toggle dropdown
selected.addEventListener("click", () => options.classList.toggle("show"));

// Select option
optionItems.forEach(option => {
    option.addEventListener("click", () => {
        currentLang = option.dataset.value;
        selected.innerHTML = option.innerHTML;
        options.classList.remove("show");
        localStorage.setItem("lang", currentLang);
        applyTranslations(currentLang);
        renderEntry(currentIndex, currentLang);
    });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) options.classList.remove("show");
});

// -------------------- Apply Translations --------------------
function applyTranslations(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    // Translate back button
    const backBtn = document.querySelector(".backButton a");
    if (backBtn) backBtn.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = " " + translations[lang].backToHome;
    });

    // Translate dynamic diary entry if already rendered
    if (contentDiv.innerHTML) renderEntry(currentIndex, lang);

    // Translate login popup
    const popup = document.querySelector(".popupModal");
    if (popup) {
        popup.querySelector("h2").textContent = translations[lang].loginComingSoon;
        popup.querySelector("p").textContent = translations[lang].stayTuned;
    }
}

// -------------------- Login Popup --------------------
const loginBtn = document.querySelector(".fa-circle-user");
const popup = document.querySelector(".popupModal");
if (loginBtn && popup) {
    const closeBtn = popup.querySelector(".closeBtn");
    loginBtn.addEventListener("click", () => popup.style.display = "block");
    closeBtn.addEventListener("click", () => popup.style.display = "none");
    window.addEventListener("click", e => { if (e.target === popup) popup.style.display = "none"; });
}

// -------------------- Initialize --------------------
document.addEventListener("DOMContentLoaded", () => {
    // Set language dropdown to saved language
    const activeOption = [...optionItems].find(opt => opt.dataset.value === currentLang);
    if (activeOption) selected.innerHTML = activeOption.innerHTML;

    applyTranslations(currentLang);
    renderEntry(currentIndex, currentLang);
});
