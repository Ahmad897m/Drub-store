/* ==========================================================
   الأقسام والأصناف
   - كل قسم (رجالي، نسائي...) يحتوي على أصناف.
   - كل صنف مجموعة صور فقط، ولا يظهر له اسم على الموقع.
   - السعر: إن تُرك فارغاً يظهر "السعر عند التواصل" وعند الضغط عليه يفتح واتساب.
   - الصور داخل مجلد images بالصيغة: <البادئة>-<رقم الصورة>.jpg
   ========================================================== */

window.WA_PHONE = '963957449482';
window.IG_URL = 'https://www.instagram.com/darbshoes.sy';
window.SITE_BASE = 'https://ahmad897m.github.io/Drub-store/';

function makeItem(base, count, price) {
  const photos = [];
  for (let p = 1; p <= count; p++) photos.push('images/' + base + '-' + p + '.jpg');
  return { photos: photos, price: price || '' };
}

function placeholderItems(prefix, itemCount, photoCount) {
  const list = [];
  for (let i = 1; i <= itemCount; i++) list.push(makeItem(prefix + '-' + i, photoCount));
  return list;
}

window.CATALOG = {
  wholesale: [
    {
      name: 'رجالي', desc: 'للاستخدام اليومي والمناسبات الرسمية', color: '#2a2622',
      items: [
        makeItem('wh-men-lacoste', 5),
        makeItem('wh-men-zara', 6),
        makeItem('wh-men-polo', 5),
        makeItem('wh-men-single', 1)
      ]
    },
    {
      name: 'نسائي', desc: 'أناقة تناسب كل المناسبات', color: '#3a322a',
      items: [
        makeItem('wh-women-f1', 5),
        makeItem('wh-women-f2', 4),
        makeItem('wh-women-f3', 4),
        makeItem('wh-women-f4', 4)
      ]
    },
    { name: 'ولادي', desc: 'متانة وراحة تدوم طوال اليوم', color: '#14120f', items: placeholderItems('wh-boys', 4, 3) },
    { name: 'بناتي', desc: 'ألوان مرحة وتصاميم مريحة', color: '#C66B41', items: placeholderItems('wh-girls', 4, 3) },
    { name: 'بيبي', desc: 'ناعمة وآمنة لأقدام الصغار', color: '#b8924a', items: placeholderItems('wh-baby', 4, 3) },
    { name: 'باتيك', desc: 'خط مميز بتصاميم خاصة', color: '#3a322a', items: placeholderItems('wh-batik', 4, 3) }
  ],
  retail: [
    {
      name: 'رجالي', desc: 'أنواع محددة للبيع المفرد', color: '#2a2622',
      items: [1, 2, 3, 4, 5, 6].map(n => makeItem('rt-men-' + n, 1))
    },
    { name: 'رياضي', desc: 'أحذية رياضية مريحة', color: '#2a2622', items: placeholderItems('rt-sport', 3, 3) },
    { name: 'كلاسيك', desc: 'تصاميم كلاسيكية للمناسبات', color: '#b8924a', items: placeholderItems('rt-classic', 3, 3) },
    { name: 'صيفي', desc: 'خفيفة ومريحة للصيف', color: '#C66B41', items: placeholderItems('rt-summer', 3, 3) }
  ]
};

/* مساعدات مشتركة */
window.makeImg = function (src, alt, text) {
  const img = document.createElement('img');
  img.src = src; img.alt = alt; img.loading = 'lazy';
  img.onerror = () => {
    const ph = document.createElement('span');
    ph.className = 'ph';
    ph.textContent = text;
    img.replaceWith(ph);
  };
  return img;
};

window.priceMsg = function (photoPath) {
  return 'ما هو سعر هذا الموديل:\n' + window.SITE_BASE + photoPath;
};

window.waLink = function (msg) {
  return 'https://wa.me/' + window.WA_PHONE + (msg ? '?text=' + encodeURIComponent(msg) : '');
};
