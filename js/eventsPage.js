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
        introText: "Explore all the events and celebrations in Mogorche! Click on any date in the calendar below to see what’s happening in the village — from festivals and sports to weddings and cultural gatherings.",
        noEventSelected: "Select a date to see event details.",
        loginComingSoon: "Login Coming Soon",
        stayTuned: "Stay tuned — we're planning on adding a login section for administrators and users!",
        contactInfoHeader: "Contact Info",
        email: "Email: dzekoavmedoski@yahoo.com",
        phone: "Phone: +389 75 945 602",
        address: "Address: Mogorche, Debar, North Macedonia",
        hours: "Hours: Mon–Fri, 09:00–17:00",
        connect: "Connect",
        months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        past: "Past Event",
        upcoming: "Upcoming Event",
        today: "Today",
        eventsTitle: "Events & Festivities in Mogorche",
        pastEvent: "Past Event",
        upcomingEvent: "Upcoming Event",
        todayEvent: "Today",
    },
    mk: {
        home: "Дома",
        aboutUs: "За нас",
        contact: "Контакт",
        introText: "Истражете ги сите настани и прослави во Могорче! Кликнете на било кој датум во календарот подолу за да видите што се случува во селото — од фестивали и спорт до свадби и културни настани.",
        noEventSelected: "Изберете датум за да ги видите деталите за настанот.",
        loginComingSoon: "Логирањето наскоро",
        stayTuned: "Следете не — планираме да додадеме логирање за администратори и корисници!",
        contactInfoHeader: "Контакт информации",
        email: "Е-пошта: dzekoavmedoski@yahoo.com",
        phone: "Телефон: +389 75 945 602",
        address: "Адреса: Могорче, Дебар, Северна Македонија",
        hours: "Работно време: Пон–Пет, 09:00–17:00",
        connect: "Поврзи се",
        months: ["Јануари","Февруари","Март","Април","Мај","Јуни","Јули","Август","Септември","Октомври","Ноември","Декември"],
        past: "Минат настан",
        upcoming: "Идни настан",
        today: "Денес",
        eventsTitle: "Настани и Прослави во Могорче",
        pastEvent: "Минат Настан",
        upcomingEvent: "Идни Настани",
        todayEvent: "Денес",
    },
    sq: {
        home: "Ballina",
        aboutUs: "Rreth Nesh",
        contact: "Kontakti",
        introText: "Eksploroni të gjitha ngjarjet dhe festat në Mogorche! Klikoni mbi çdo datë në kalendar më poshtë për të parë se çfarë po ndodh në fshat — nga festivalet dhe sportet deri tek dasmat dhe ngjarjet kulturore.",
        noEventSelected: "Zgjidhni një datë për të parë detajet e ngjarjes.",
        loginComingSoon: "Hyrja së shpejti",
        stayTuned: "Qëndroni të lidhur — po planifikojmë të shtojmë hyrje për administratorë dhe përdorues!",
        contactInfoHeader: "Informacione Kontakti",
        email: "Email: dzekoavmedoski@yahoo.com",
        phone: "Telefon: +389 75 945 602",
        address: "Adresa: Mogorche, Debar, Maqedonia e Veriut",
        hours: "Orari: Hën–Prem, 09:00–17:00",
        connect: "Lidhu",
        months: ["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],
        past: "Ngjarje e kaluar",
        upcoming: "Ngjarje e ardhshme",
        today: "Sot",
        eventsTitle: "Ngjarjet & Festimet në Mogorche",
        pastEvent: "Ngjarje e Kalur",
        upcomingEvent: "Ngjarje e Ardhshme",
        todayEvent: "Sot",  

    }
};

// -------------------- Events with translations --------------------
const events = {
  "2025-08-12": {
    title: { 
      en: "Village Festival", 
      mk: "Селски фестивал", 
      sq: "Festivali i Fshatit" 
    },
    desc: { 
      en: "Celebration with music and food in Mogorche.", 
      mk: "Прослава со музика и храна во Могорче.", 
      sq: "Festë me muzikë dhe ushqim në Mogorche." 
    }
  },
  "2025-09-13": {
    title: { 
      en: "Mirror Installation", 
      mk: "Инсталација на огледала", 
      sq: "Instalim i pasqyrave" 
    },
    desc: { 
      en: "Traffic safety mirrors installed in the village.", 
      mk: "Инсталирани огледала за сообраќајна безбедност во селото.", 
      sq: "Instalimi i pasqyrave të sigurisë rrugore në fshat." 
    }
  },
  "2025-09-06": {
    title: { 
      en: "Road Repair Action", 
      mk: "Акција за поправка на пат", 
      sq: "Veprim për riparimin e rrugës" 
    },
    desc: { 
      en: "Residents helped fix the road to Karamanovci.", 
      mk: "Жителите помогнаа да се поправи патот до Карамaновци.", 
      sq: "Banorët ndihmuan në riparimin e rrugës për Karamanovci." 
    }
  },
  "2026-08-11": {
    title: { 
      en: "Football Tournament Day 1", 
      mk: "Ден 1 на Фудбалскиот турнир", 
      sq: "Dita 1 e Turneut të Futbollit" 
    },
    desc: { 
      en: "First day of the football tournament, group stage matches will be played from 15:00h until 21:00h in the schools stadium",
      mk: "Првиот ден од фудбалскиот турнир, натпревари од групната фаза ќе се играат од 15:00 до 21:00 часот на школскиот стадион.", 
      sq: "Dita e parë e turneut të futbollit, ndeshjet e fazës së grupeve do të zhvillohen nga ora 15:00 deri në 21:00 në stadiumin e shkollës." 
    }
  },
  "2026-08-12": {
    title: { 
      en: "Football Tournament Day 2", 
      mk: "Ден 2 на Фудбалскиот турнир", 
      sq: "Dita 2 e Turneut të Futbollit" 
    },
    desc: { 
      en: "Second day of the football tournament, group stage matches will be played from 15:00h until 21:00h in the schools stadium",
      mk: "Вториот ден од фудбалскиот турнир, натпревари од групната фаза ќе се играат од 15:00 до 21:00 часот на школскиот стадион.", 
      sq: "Dita e dytë e turneut të futbollit, ndeshjet e fazës së grupeve do të zhvillohen nga ora 15:00 deri në 21:00 në stadiumin e shkollës." 
    }
  },
  "2026-08-13": {
    title: { 
      en: "Football Tournament Day 3 - Knockout rounds and Final", 
      mk: "Ден 3 на Фудбалскиот турнир", 
      sq: "Dita 3 e Turneut të Futbollit" 
    },
    desc: { 
      en: "Third and Final day of the football tournament, where the knockout phase and Final will be played",
      mk: "Третиот и последен ден од фудбалскиот турнир, кога ќе се играат натпреварите од нокаут фазата и финалето.", 
      sq: "Dita e tretë dhe finale e turneut të futbollit, ku do të zhvillohen ndeshjet e fazës së eliminimit dhe finalja." 
    }
  }
};

// -------------------- Language Setup --------------------
let currentLang = localStorage.getItem("lang") || "en";

// Language select dropdown
const customSelect = document.getElementById("customSelect");
const selected = customSelect.querySelector(".selected");
const options = customSelect.querySelector(".options");
const optionItems = customSelect.querySelectorAll(".options li");

selected.addEventListener("click", () => options.classList.toggle("show"));
optionItems.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerHTML = option.innerHTML;
        options.classList.remove("show");
        applyTranslations(option.dataset.value);
    });
});
document.addEventListener("click", e => { if (!customSelect.contains(e.target)) options.classList.remove("show"); });

// -------------------- Calendar --------------------
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const eventDetails = document.getElementById("eventDetails");
const monthSelect = document.getElementById("monthSelect");

function loadCalendar(month, year) {
  monthYear.textContent = `${translations[currentLang].months[month]} ${year}`;
  calendarDays.innerHTML = "";

  monthSelect.innerHTML = "";
  translations[currentLang].months.forEach((m, idx) => {
    const option = document.createElement("option");
    option.value = idx;
    option.textContent = m;
    if (idx === month) option.selected = true;
    monthSelect.appendChild(option);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = firstDay === 0 ? 6 : firstDay - 1;

  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    calendarDays.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = d;

    const todayStr = new Date().toISOString().split("T")[0];
    if (dateStr === todayStr) dayCell.classList.add("today");

    if (events[dateStr]) {
      const eventDate = new Date(dateStr);
      const today = new Date(todayStr);
      dayCell.classList.add("has-event", eventDate < today ? "past" : "upcoming");
    }

    dayCell.addEventListener("click", () => showEvent(dateStr));
    calendarDays.appendChild(dayCell);
  }
}

function showEvent(dateStr) {
  if (events[dateStr]) {
    eventDetails.innerHTML = `
      <h3>${events[dateStr].title[currentLang]}</h3>
      <p>${events[dateStr].desc[currentLang]}</p>
    `;
  } else {
    eventDetails.innerHTML = `<p>${translations[currentLang].noEventSelected}</p>`;
  }
}

// Navigation buttons
document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  loadCalendar(currentMonth, currentYear);
  showEvent(null);
});
document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  loadCalendar(currentMonth, currentYear);
  showEvent(null);
});
monthSelect.addEventListener("change", () => {
  currentMonth = parseInt(monthSelect.value);
  loadCalendar(currentMonth, currentYear);
  showEvent(null);
});

// -------------------- Apply Translations --------------------
function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Static elements
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  // Reload calendar
  loadCalendar(currentMonth, currentYear);
  showEvent(null);
}

// -------------------- Initialize --------------------
document.addEventListener("DOMContentLoaded", () => {
  const activeOption = [...optionItems].find(opt => opt.dataset.value === currentLang);
  if (activeOption) selected.innerHTML = activeOption.innerHTML;

  applyTranslations(currentLang);
});
