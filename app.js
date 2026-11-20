const translations = {
  ar: {
    navHome: "الرئيسية", navMenu: "المنيو", navAbout: "من نحن", navContact: "تواصل معنا",
    reserveTable: "احجز طاولتك", heroEyebrow: "مطبخ إيطالي أصيل",
    heroTitle: "تذوقوا حكاية<br /><em>إيطاليا</em> في كل طبق",
    heroCopy: "نحضر مائدتك بمنتجات موسمية، وصفات عائلية، وشغف نابولي الخالد.",
    exploreMenu: "استكشف المنيو", ourStory: "قصتنا", guestRating: "تقييم ضيوفنا",
    favoritesEyebrow: "مختاراتنا", favoritesTitle: "أطباق يحكي بها<br />الشغف",
    tabPizza: "بيتزا", tabPasta: "باستا", tabDessert: "حلويات", tabDrinks: "مشروبات",
    fullMenu: "عرض المنيو الكامل", since: "منذ 1987", storyEyebrow: "حكايتنا",
    storyTitle: "من مطبخ نابولي<br />إلى قلب المدينة",
    storyCopy: "بدأت رحلتنا في مطبخ صغير بحب الوصفات التقليدية، واليوم نحافظ على روحها ونقدمها بجودة ومذاق يليق بك.",
    experience: "عامًا من الخبرة", dishesOrigin: "أصلًا إيطاليًا", learnMore: "اعرف المزيد",
    bookEyebrow: "احجز الآن", bookTitle: "موعدك على<br />مائدتنا",
    bookCopy: "اجعل مساءك ذكرى نعتز بها مع طعام إيطالي أصيل وضيافة دافئة.",
    nameLabel: "الاسم", namePlaceholder: "اسمك الكريم", phoneLabel: "الهاتف",
    dateLabel: "التاريخ", guestsLabel: "عدد الضيوف", confirm: "تأكيد الحجز",
    formSuccess: "تم استلام طلبك بنجاح — سنتواصل معك لتأكيد الحجز.", whatsapp: "واتساب",
    guest2: "شخصان", guest3: "ثلاثة أشخاص", guest4: "أربعة أشخاص", guest5: "خمسة أشخاص", guest6: "ستة أشخاص",
    footerTagline: "نكهة إيطاليا، بروح عربية دافئة.", footerContact: "التواصل", footerVisit: "الزيارة",
    footerAddress: "طريق التحلية، الرياض", footerHours: "يوميًا: 12 ظهرًا – 12 منتصف الليل",
    copyright: "© 2026 لا تافولا. جميع الحقوق محفوظة."
  },
  en: {
    navHome: "Home", navMenu: "Menu", navAbout: "Our Story", navContact: "Contact",
    reserveTable: "Reserve a Table", heroEyebrow: "Authentic Italian Kitchen",
    heroTitle: "Taste the story<br />of <em>Italy</em> in every bite",
    heroCopy: "Seasonal ingredients, treasured family recipes, and the timeless spirit of Naples.",
    exploreMenu: "Explore Menu", ourStory: "Our Story", guestRating: "Guest Rating",
    favoritesEyebrow: "Our Favorites", favoritesTitle: "Dishes led<br />by passion",
    tabPizza: "Pizza", tabPasta: "Pasta", tabDessert: "Desserts", tabDrinks: "Drinks",
    fullMenu: "View Full Menu", since: "Since 1987", storyEyebrow: "Our Story",
    storyTitle: "From Naples<br />to the heart of the city",
    storyCopy: "Our journey began in a small kitchen with traditional recipes. Today, we preserve that spirit with quality and flavor worthy of every guest.",
    experience: "Years of Experience", dishesOrigin: "Italian Origins", learnMore: "Learn More",
    bookEyebrow: "Book Now", bookTitle: "Your Table<br />is Waiting",
    bookCopy: "Make the evening memorable with authentic Italian cuisine and warm hospitality.",
    nameLabel: "Name", namePlaceholder: "Your full name", phoneLabel: "Phone",
    dateLabel: "Date", guestsLabel: "Guests", confirm: "Confirm Reservation",
    formSuccess: "Your request was received successfully — we will contact you shortly.", whatsapp: "WhatsApp",
    guest2: "Two guests", guest3: "Three guests", guest4: "Four guests", guest5: "Five guests", guest6: "Six guests",
    footerTagline: "The taste of Italy, with warm hospitality.", footerContact: "Contact", footerVisit: "Visit",
    footerAddress: "Tahlia Road, Riyadh", footerHours: "Daily: 12 PM – 12 AM",
    copyright: "© 2026 La Tavola. All rights reserved."
  }
};

let currentLanguage = "ar";

function applyLanguage(language) {
  currentLanguage = language;
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.querySelector(".nav").setAttribute("aria-label", isArabic ? "التنقل الرئيسي" : "Main navigation");
  document.querySelector(".menu-tabs").setAttribute("aria-label", isArabic ? "تصنيف المنيو" : "Menu categories");
  document.getElementById("menuToggle").setAttribute("aria-label", isArabic ? "فتح القائمة" : "Open menu");
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    const key = element.dataset.i18nHtml;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  document.querySelector('input[name="name"]').placeholder = translations[language].namePlaceholder;
  document.querySelectorAll(".reservation-form label").forEach((label, index) => {
    const keys = ["nameLabel", "phoneLabel", "dateLabel", "guestsLabel"];
    const textNode = label.firstChild;
    if (textNode) textNode.textContent = translations[language][keys[index]] + "\n";
  });
  document.querySelector(".reservation-form .button").innerHTML =
    `<b>${translations[language].confirm}</b> <span>${isArabic ? "←" : "→"}</span>`;
  const guestOptions = document.querySelectorAll('select[name="guests"] option');
  ["guest2", "guest3", "guest4", "guest5", "guest6"].forEach((key, index) => {
    guestOptions[index].textContent = translations[language][key];
  });
  document.querySelectorAll(".lang-toggle span").forEach(span => span.classList.remove("lang-active"));
  document.querySelectorAll(".lang-toggle span")[isArabic ? 0 : 1].classList.add("lang-active");
  renderMenu(document.querySelector(".tab.active").dataset.category);
}

const menu = {
  pizza: [
    { name: "مارغريتا دي نابولي", price: "64 ر.س", desc: "صلصة طماطم، موزاريلا دي بوفالا، ريحان وطماطم كرزية", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85" },
    { name: "بيتزا تارتوفاتا", price: "89 ر.س", desc: "كريمة الترف، فطر مشروم، موزاريلا وجبن بارميزان", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85" },
    { name: "كواترو فورماغي", price: "78 ر.س", desc: "أربع أنواع جبن إيطالية مع عسل الزعتر والمكسرات", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85" }
  ],
  pasta: [
    { name: "كاربونارا ترادشنال", price: "72 ر.س", desc: "معكرونة السباغيتي، بيكون، بيض، بارميزان وفلفل أسود", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85" },
    { name: "تاغلياتيلي بوسايولا", price: "84 ر.س", desc: "تاغلياتيلي طازجة، مشروم، كريمة وجبن بيكورينو", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=85" },
    { name: "رافيولي الريكوتا", price: "76 ر.س", desc: "رافيولي طازج، جبن الريكوتا، صوص الطماطم والريحان", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85" }
  ],
  dessert: [
    { name: "تيراميسو كلاسيك", price: "42 ر.س", desc: "مسكربون، قهوة إسبريسو، كاكاو وغمس اللوز", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85" },
    { name: "بانا كوتا الفراولة", price: "38 ر.س", desc: "حلوى الكريمة الإيطالية مع صوص الفراولة الطازجة", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85" },
    { name: "كانولي السيشيلي", price: "36 ر.س", desc: "عجينة مقرمشة بحشوة ريكوتا وفستق حلبي", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=85" }
  ],
  drinks: [
    { name: "ليمونادا باسيليكو", price: "28 ر.س", desc: "ليمون طازج، أوراق ريحان، شراب سكر وثلج", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85" },
    { name: "سبريتز أبريكوت", price: "34 ر.س", desc: "مشروب منعش بمشمس المشمش والحمضيات والليمون", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=85" },
    { name: "آيس لاتيه إيطالي", price: "24 ر.س", desc: "إسبريسو إيطالي، حليب، ثلج ونكهة الفانيليا", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85" }
  ]
};

const englishMenu = {
  pizza: [
    ["Margherita di Napoli", "San Marzano tomato, buffalo mozzarella, basil and cherry tomatoes"],
    ["Tartufata Pizza", "Truffle cream, mushrooms, mozzarella and Parmesan"],
    ["Quattro Formaggi", "Four Italian cheeses with thyme honey and toasted nuts"]
  ],
  pasta: [
    ["Traditional Carbonara", "Spaghetti, guanciale, egg, Parmesan and black pepper"],
    ["Tagliatelle Boscaiola", "Fresh pasta, mushrooms, cream and Pecorino"],
    ["Ricotta Ravioli", "Fresh ravioli, ricotta, tomato sauce and basil"]
  ],
  dessert: [
    ["Classic Tiramisu", "Mascarpone, espresso, cocoa and almond biscuit"],
    ["Strawberry Panna Cotta", "Italian cream dessert with fresh strawberry sauce"],
    ["Sicilian Cannoli", "Crispy pastry filled with ricotta and pistachio"]
  ],
  drinks: [
    ["Basil Lemonade", "Fresh lemon, basil leaves, sugar syrup and ice"],
    ["Apricot Spritz", "A refreshing blend of apricot, citrus and lime"],
    ["Italian Iced Latte", "Italian espresso, milk, ice and vanilla"]
  ]
};

const grid = document.getElementById("menuGrid");

function renderMenu(category) {
  grid.innerHTML = menu[category].map((dish, index) => {
    const english = englishMenu[category][index];
    const name = currentLanguage === "ar" ? dish.name : english[0];
    const description = currentLanguage === "ar" ? dish.desc : english[1];
    return `
    <article class="dish-card">
      <img class="dish-image" src="${dish.image}" alt="${name}" loading="lazy" />
      <div class="dish-info">
        <div class="dish-top">
          <h3>${name}</h3>
          <span class="dish-price">${dish.price}</span>
        </div>
        <p>${description}</p>
      </div>
    </article>
  `}).join("");
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    nav.classList.remove("open");
  });
});

const dateInput = document.querySelector('input[type="date"]');
dateInput.min = new Date().toISOString().split("T")[0];

document.getElementById("reservationForm").addEventListener("submit", event => {
  event.preventDefault();
  const status = document.getElementById("formStatus");
  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  submitButton.disabled = true;
  status.textContent = currentLanguage === "ar" ? "جارٍ تأكيد الحجز..." : "Confirming reservation...";

  fetch("/api/reservations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      guests: formData.get("guests")
    })
  })
    .then(async response => {
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Reservation failed");
      status.textContent = translations[currentLanguage].formSuccess;
      form.reset();
      dateInput.min = new Date().toISOString().split("T")[0];
    })
    .catch(error => {
      status.textContent = currentLanguage === "ar"
        ? "تعذر حفظ الحجز حاليًا. يرجى المحاولة مرة أخرى."
        : "Could not save your reservation. Please try again.";
      console.error(error);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

document.getElementById("langToggle").addEventListener("click", () => {
  applyLanguage(currentLanguage === "ar" ? "en" : "ar");
});

renderMenu("pizza");
