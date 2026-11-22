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
    { name: "مارغريتا دي نابولي", nameEn: "Margherita di Napoli", price: "64 ر.س", priceEn: "SAR 64", desc: "صلصة طماطم، موزاريلا دي بوفالا، ريحان وطماطم كرزية", descEn: "San Marzano tomato, buffalo mozzarella, basil and cherry tomatoes", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85" },
    { name: "بيتزا تارتوفاتا", nameEn: "Tartufata Pizza", price: "89 ر.س", priceEn: "SAR 89", desc: "كريمة الترف، فطر مشروم، موزاريلا وجبن بارميزان", descEn: "Truffle cream, mushrooms, mozzarella and Parmesan", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85" },
    { name: "كواترو فورماغي", nameEn: "Quattro Formaggi", price: "78 ر.س", priceEn: "SAR 78", desc: "أربع أنواع جبن إيطالية مع عسل الزعتر والمكسرات", descEn: "Four Italian cheeses with thyme honey and toasted nuts", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85" },
    { name: "ديابولا", nameEn: "Diavola", price: "82 ر.س", priceEn: "SAR 82", desc: "صلصة طماطم، موزاريلا، ببروني حار وفلفل كالابريزي", descEn: "Tomato sauce, mozzarella, spicy pepperoni and Calabrian chili", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85" },
    { name: "بروشوتو إي روكولا", nameEn: "Prosciutto & Rocket", price: "92 ر.س", priceEn: "SAR 92", desc: "بروشوتو إيطالي، جبن موزاريلا، روكولا وجبن بارميزان", descEn: "Italian prosciutto, mozzarella, rocket and Parmesan", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=85" },
    { name: "بيتزا بورتوبيلو", nameEn: "Portobello Pizza", price: "86 ر.س", priceEn: "SAR 86", desc: "فطر بورتوبيلو، صوص أبيض، ثوم ومزيج الأعشاب", descEn: "Portobello mushroom, white sauce, garlic and herbs", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=85" },
    { name: "كابريسي", nameEn: "Caprese", price: "74 ر.س", priceEn: "SAR 74", desc: "طماطم كرزية، بوفالا، ريحان وزيت زيتون بلسمي", descEn: "Cherry tomato, buffalo mozzarella, basil and balsamic", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85" },
    { name: "بيتزا الخضار المشوية", nameEn: "Grilled Vegetable Pizza", price: "80 ر.س", priceEn: "SAR 80", desc: "خضار موسمية مشوية، زيتون أسود وصلصة طماطم", descEn: "Seasonal grilled vegetables, black olives and tomato sauce", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85" }
  ],
  pasta: [
    { name: "كاربونارا ترادشنال", nameEn: "Traditional Carbonara", price: "72 ر.س", priceEn: "SAR 72", desc: "معكرونة السباغيتي، بيكون، بيض، بارميزان وفلفل أسود", descEn: "Spaghetti, guanciale, egg, Parmesan and black pepper", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85" },
    { name: "تاغلياتيلي بوسايولا", nameEn: "Tagliatelle Boscaiola", price: "84 ر.س", priceEn: "SAR 84", desc: "تاغلياتيلي طازجة، مشروم، كريمة وجبن بيكورينو", descEn: "Fresh pasta, mushrooms, cream and Pecorino", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=85" },
    { name: "رافيولي الريكوتا", nameEn: "Ricotta Ravioli", price: "76 ر.س", priceEn: "SAR 76", desc: "رافيولي طازج، جبن الريكوتا، صوص الطماطم والريحان", descEn: "Fresh ravioli, ricotta, tomato sauce and basil", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85" },
    { name: "بستا ألاماتريتشانا", nameEn: "Pasta all'Amatriciana", price: "68 ر.س", priceEn: "SAR 68", desc: "باستا، صوص طماطم، بجاميا حارة وجبن بيكورينو", descEn: "Pasta, tomato sauce, guanciale and Pecorino", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=85" },
    { name: "لنغوين بإيطارات البحر", nameEn: "Seafood Linguine", price: "98 ر.س", priceEn: "SAR 98", desc: "لنغوين، روبيان، بلح البحر، كركند حمراء وطماطم كرزية", descEn: "Linguine, shrimp, mussels, red prawns and cherry tomato", image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=800&q=85" },
    { name: "بستا أرابياتا", nameEn: "Penne Arrabbiata", price: "64 ر.س", priceEn: "SAR 64", desc: "بيني، صوص طماطم حار، ثوم وفلفل أحمر", descEn: "Penne, spicy tomato sauce, garlic and red chili", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=85" },
    { name: "ليزانيا بولونيز", nameEn: "Lasagna Bolognese", price: "88 ر.س", priceEn: "SAR 88", desc: "طبقات لازانيا، لحم بقر، صوص بيسامل وجبن بارميزان", descEn: "Lasagna layers, beef ragù, béchamel and Parmesan", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=85" },
    { name: "غنوتشي الأربعة جبن", nameEn: "Four-Cheese Gnocchi", price: "79 ر.س", priceEn: "SAR 79", desc: "غنوتشي طازج، صوص كريمي وأربع أنواع جبن إيطالية", descEn: "Fresh gnocchi, creamy sauce and four Italian cheeses", image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=800&q=85" }
  ],
  dessert: [
    { name: "تيراميسو كلاسيك", nameEn: "Classic Tiramisu", price: "42 ر.س", priceEn: "SAR 42", desc: "مسكربون، قهوة إسبريسو، كاكاو وغمس اللوز", descEn: "Mascarpone, espresso, cocoa and almond biscuit", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85" },
    { name: "بانا كوتا الفراولة", nameEn: "Strawberry Panna Cotta", price: "38 ر.س", priceEn: "SAR 38", desc: "حلوى الكريمة الإيطالية مع صوص الفراولة الطازجة", descEn: "Italian cream dessert with fresh strawberry sauce", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85" },
    { name: "كانولي السيشيلي", nameEn: "Sicilian Cannoli", price: "36 ر.س", priceEn: "SAR 36", desc: "عجينة مقرمشة بحشوة ريكوتا وفستق حلبي", descEn: "Crispy pastry filled with ricotta and pistachio", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=85" },
    { name: "تشيزكيك الليمون", nameEn: "Lemon Cheesecake", price: "40 ر.س", priceEn: "SAR 40", desc: "تشيزكيك كريمي بنكهة الليمون ومربى الفراولة", descEn: "Creamy lemon cheesecake with strawberry preserve", image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?auto=format&fit=crop&w=800&q=85" },
    { name: "أفوجاتو", nameEn: "Affogato", price: "32 ر.س", priceEn: "SAR 32", desc: "آيس كريم فانيليا مع إسبريسو إيطالي طازج", descEn: "Vanilla gelato with a fresh Italian espresso", image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?auto=format&fit=crop&w=800&q=85" },
    { name: "زلابية الزعفران", nameEn: "Saffron Zeppole", price: "34 ر.س", priceEn: "SAR 34", desc: "فطائر إيطالية مقرمشة بسكر الزعفران والعسل", descEn: "Crisp Italian fritters with saffron sugar and honey", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=85" }
  ],
  drinks: [
    { name: "ليمونادا باسيليكو", nameEn: "Basil Lemonade", price: "28 ر.س", priceEn: "SAR 28", desc: "ليمون طازج، أوراق ريحان، شراب سكر وثلج", descEn: "Fresh lemon, basil leaves, sugar syrup and ice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85" },
    { name: "سبريتز أبريكوت", nameEn: "Apricot Spritz", price: "34 ر.س", priceEn: "SAR 34", desc: "مشروب منعش بمشمس المشمش والحمضيات والليمون", descEn: "Refreshing apricot, citrus and lime spritz", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=85" },
    { name: "آيس لاتيه إيطالي", nameEn: "Italian Iced Latte", price: "24 ر.س", priceEn: "SAR 24", desc: "إسبريسو إيطالي، حليب، ثلج ونكهة الفانيليا", descEn: "Italian espresso, milk, ice and vanilla", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85" },
    { name: "موهيتو الحمضيات", nameEn: "Citrus Mojito", price: "30 ر.س", priceEn: "SAR 30", desc: "نعناع طازج، ليمون، برتقال ومياه فوارة", descEn: "Fresh mint, lemon, orange and sparkling water", image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85" },
    { name: "إسبريسو تونيك", nameEn: "Espresso Tonic", price: "26 ر.س", priceEn: "SAR 26", desc: "إسبريسو إيطالي، تونيك بارد وقشر البرتقال", descEn: "Italian espresso, chilled tonic and orange peel", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85" },
    { name: "سان بيلغرينو كلاسيك", nameEn: "San Pellegrino", price: "18 ر.س", priceEn: "SAR 18", desc: "مياه معدنية طبيعية أو بنكهة الحمضيات", descEn: "Sparkling natural mineral water or citrus", image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=800&q=85" }
  ]
};

const grid = document.getElementById("menuGrid");

function renderMenu(category) {
  grid.innerHTML = menu[category].map(dish => {
    const name = currentLanguage === "ar" ? dish.name : dish.nameEn;
    const description = currentLanguage === "ar" ? dish.desc : dish.descEn;
    const price = currentLanguage === "ar" ? dish.price : dish.priceEn;
    return `
    <article class="dish-card">
      <img class="dish-image" src="${dish.image}" alt="${name}" loading="lazy" />
      <div class="dish-info">
        <div class="dish-top">
          <h3>${name}</h3>
          <span class="dish-price">${price}</span>
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
