/* ==========================================================
   قائمة الأقسام والمنتجات
   هذا هو المكان الوحيد الذي تحتاجون تعديله لإضافة أقسام أو صور أو أسعار.
   - name  : اسم القسم
   - desc  : وصف قصير
   - color : لون خلفية القسم عند عدم توفر الصورة
   - items : قائمة الموديلات. كل موديل له:
       src   : مسار الصورة داخل مجلد images
       price : السعر (اكتبوه كما تريدون، مثل 25000 ل.س). إن تُرك فارغاً يظهر "السعر عند التواصل"
   ========================================================== */

function mkItems(prefix, count, prices) {
  const list = [];
  for (let i = 1; i <= count; i++) {
    list.push({
      src: 'images/' + prefix + '-' + i + '.jpg',
      price: (prices && prices[i - 1]) || ''
    });
  }
  return list;
}

window.CATALOG = {
  wholesale: [
    { name: 'رجالي', desc: 'للاستخدام اليومي والمناسبات الرسمية', color: '#3b3a36', items: mkItems('wh-men', 6, []) },
    { name: 'نسائي', desc: 'أناقة تناسب كل المناسبات', color: '#5a3f35', items: mkItems('wh-women', 6, []) },
    { name: 'ولادي', desc: 'متانة وراحة تدوم طوال اليوم', color: '#2f4a4a', items: mkItems('wh-boys', 6, []) },
    { name: 'بناتي', desc: 'ألوان مرحة وتصاميم مريحة', color: '#6b4a5a', items: mkItems('wh-girls', 6, []) },
    { name: 'بيبي', desc: 'ناعمة وآمنة لأقدام الصغار', color: '#4a5a3a', items: mkItems('wh-baby', 6, []) },
    { name: 'باتيك', desc: 'خط مميز بتصاميم خاصة', color: '#4a3a5a', items: mkItems('wh-batik', 6, []) }
  ],
  retail: [
    { name: 'رياضي', desc: 'أحذية رياضية مريحة', color: '#3a4a5a', items: mkItems('rt-sport', 3, []) },
    { name: 'كلاسيك', desc: 'تصاميم كلاسيكية للمناسبات', color: '#5a4a3a', items: mkItems('rt-classic', 3, []) },
    { name: 'صيفي', desc: 'خفيفة ومريحة للصيف', color: '#3a5a4a', items: mkItems('rt-summer', 3, []) }
  ]
};

window.WA_NUMBER = 'WHATSAPP_NUMBER';
