/* ==========================================================
   الأقسام والموديلات والألوان
   عدّلوا هذا الملف فقط لإضافة أو تغيير أي شيء.
   - name   : اسم القسم أو الموديل
   - models : قائمة الموديلات في القسم
   - colors : ألوان كل موديل، ولكل لون صورة
   - price  : السعر (إن تُرك فارغاً يظهر "السعر عند التواصل")

   اسم ملف الصورة داخل مجلد images:
   <البادئة>-m<رقم الموديل>-<مفتاح اللون>.jpg
   مثال: images/wh-men-m1-black.jpg
   ========================================================== */

window.WA_PHONE = '963957449482';
window.IG_URL = 'https://www.instagram.com/darbshoes.sy';

const COLOR_KEYS = [
  { key: 'black', name: 'أسود' },
  { key: 'brown', name: 'بني' },
  { key: 'white', name: 'أبيض' }
];

function buildModels(prefix, count) {
  const list = [];
  for (let m = 1; m <= count; m++) {
    list.push({
      name: 'موديل ' + m,
      price: '',
      colors: COLOR_KEYS.map(c => ({
        name: c.name,
        src: 'images/' + prefix + '-m' + m + '-' + c.key + '.jpg'
      }))
    });
  }
  return list;
}

window.CATALOG = {
  wholesale: [
    { name: 'رجالي', desc: 'للاستخدام اليومي والمناسبات الرسمية', color: '#2a2622', models: buildModels('wh-men', 4) },
    { name: 'نسائي', desc: 'أناقة تناسب كل المناسبات', color: '#3a322a', models: buildModels('wh-women', 4) },
    { name: 'ولادي', desc: 'متانة وراحة تدوم طوال اليوم', color: '#14120f', models: buildModels('wh-boys', 4) },
    { name: 'بناتي', desc: 'ألوان مرحة وتصاميم مريحة', color: '#C66B41', models: buildModels('wh-girls', 4) },
    { name: 'بيبي', desc: 'ناعمة وآمنة لأقدام الصغار', color: '#b8924a', models: buildModels('wh-baby', 4) },
    { name: 'باتيك', desc: 'خط مميز بتصاميم خاصة', color: '#3a322a', models: buildModels('wh-batik', 4) }
  ],
  retail: [
    { name: 'رياضي', desc: 'أحذية رياضية مريحة', color: '#2a2622', models: buildModels('rt-sport', 3) },
    { name: 'كلاسيك', desc: 'تصاميم كلاسيكية للمناسبات', color: '#b8924a', models: buildModels('rt-classic', 3) },
    { name: 'صيفي', desc: 'خفيفة ومريحة للصيف', color: '#C66B41', models: buildModels('rt-summer', 3) }
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

window.waLink = function (msg) {
  return 'https://wa.me/' + window.WA_PHONE + (msg ? '?text=' + encodeURIComponent(msg) : '');
};
