/* ==================================================================
   RagonsAI — by Hostragons®
   Frontend application
   ================================================================== */
(() => {
  'use strict';

  const HOST = {
    url: 'https://www.hostragons.com',
    portal: 'https://my.hostragons.com',
    brand: 'Hostragons®',
    logoWhite: '/assets/hostragons-white-400.png',
    logoLarge: '/assets/hostragons-white-800.png',
    address: '71-75 Shelton Street, Covent Garden, London WC2H 9JQ',
    email: 'support@hostragons.com',
    phone: '+44 7418 358911',
    founded: 2020,
    employees: 50,
    customers: '5.000+',
    companyNo: '14320956',
    socials: [
      { name: 'X (Twitter)', url: 'https://twitter.com/hostragons', icon: 'x' },
      { name: 'Instagram', url: 'https://instagram.com/hostragons', icon: 'ig' },
      { name: 'Facebook', url: 'https://facebook.com/hostragonsglobal', icon: 'fb' },
      { name: 'YouTube', url: 'https://youtube.com/@hostragons', icon: 'yt' },
      { name: 'Medium', url: 'https://hostragons.medium.com', icon: 'md' },
    ],
    services: [
      { name: 'Web Hosting', url: 'https://www.hostragons.com/hosting' },
      { name: 'WordPress Hosting', url: 'https://www.hostragons.com/wordpress-hosting' },
      { name: 'Sanal Sunucu (VPS)', url: 'https://www.hostragons.com/sunucu' },
      { name: 'Domain', url: 'https://www.hostragons.com/domain' },
      { name: 'Mail Hosting', url: 'https://www.hostragons.com/mail-hosting' },
      { name: 'DNS Hosting', url: 'https://www.hostragons.com/dns-hosting' },
      { name: 'Bayi Hosting', url: 'https://www.hostragons.com/bayi-hosting' },
      { name: 'Optimizasyon', url: 'https://www.hostragons.com' },
    ],
  };

  /* ---------- i18n (TR / EN / AR — all LTR per spec) ---------- */
  const I18N = {
    tr: {
      // Auth
      'auth.welcomeBack': 'Tekrar hoş geldin.',
      'auth.welcome': 'Hoş geldin.',
      'auth.loginSubtitle': 'Devam etmek için giriş yapın.',
      'auth.setupSubtitle': 'RagonsAI ilk kurulumu. Yönetici hesabını oluştur.',
      'auth.username': 'Kullanıcı adı',
      'auth.password': 'Parola',
      'auth.passwordRepeat': 'Parola tekrar',
      'auth.passwordHelp': 'En az 8 karakter, güçlü bir parola seçin.',
      'auth.passwordMin': 'En az 8 karakter',
      'auth.login': 'Giriş yap',
      'auth.loggingIn': 'Giriş yapılıyor…',
      'auth.create': 'Hesabı oluştur',
      'auth.creating': 'Oluşturuluyor…',
      'auth.signup': 'Kayıt ol',
      'auth.soon': 'Yakında',
      'auth.signupDisabled': 'Genel kayıt yakında — şimdilik yöneticiniz size hesap açar.',
      'auth.mismatch': 'Parolalar eşleşmiyor.',
      'auth.heroTitle1': 'Tüm AI CLI\'larınız',
      'auth.heroTitle2': 'tek profesyonel arayüzde.',
      'auth.heroDesc': 'RagonsAI, sunucunuzdaki Claude Code, OpenAI Codex, Gemini ve diğer AI CLI\'larını web tarayıcısı üzerinden — SSH\'sız, kalıcı oturumlu, dosya yüklemeli — kullanmanızı sağlar.',
      'auth.feature1': 'SSH\'sız tek tıkla erişim, her yerden',
      'auth.feature2': 'Kalıcı PTY oturumları — tarayıcı kapansa bile CLI çalışır',
      'auth.feature3': 'Dosya & görsel yükle → CLI doğrudan kullanır',
      'auth.feature4': 'Tek hesap, sınırsız proje, sınırsız CLI',
      'auth.feature5': 'Şirket sınıfı altyapı — Hostragons®',
      'auth.aiSupported': 'Desteklenen AI CLI\'ları',
      'auth.customCli': 'Özel CLI ekle',
      'auth.poweredBy': 'Powered by',
      'auth.companyNo': 'Şirket No',
      // Pricing
      'pricing.title': 'Paketler',
      'pricing.subtitle': 'Her ölçek için bir plan. Ücretlendirme yakında — şimdilik mevcut kurulumu kendi sunucunuzda kullanın.',
      'pricing.monthly': '/ay',
      'pricing.peruser': '/kullanıcı/ay',
      'pricing.custom': 'Özel',
      'pricing.popular': 'En popüler',
      'pricing.cta': 'Yakında',
      'pricing.contact': 'İletişime geç',
      'plan.starter': 'Başlangıç',
      'plan.starterDesc': 'Keşfetmek isteyenler için',
      'plan.pro': 'Pro',
      'plan.proDesc': 'Bireysel profesyoneller',
      'plan.premium': 'Premium',
      'plan.premiumDesc': '5× daha fazla kullanım',
      'plan.ultra': 'Ultra',
      'plan.ultraDesc': '20× daha fazla kullanım',
      'plan.team': 'Takım',
      'plan.teamDesc': 'İşbirliği ve yönetim',
      'plan.enterprise': 'Kurumsal',
      'plan.enterpriseDesc': 'SSO, denetim, özel SLA',
      // Plan features
      'feat.basicAccess': 'Temel kullanım kotası',
      'feat.allModels': 'Tüm modellere erişim',
      'feat.priority': 'Öncelikli işlem hattı',
      'feat.5xUsage': '5× daha fazla kullanım',
      'feat.20xUsage': '20× daha fazla kullanım',
      'feat.projects': 'Projeler & geçmiş',
      'feat.bigContext': 'Geniş bağlam penceresi',
      'feat.collab': 'Takım çalışma alanları',
      'feat.adminTools': 'Yönetici araçları',
      'feat.sso': 'SSO / SAML',
      'feat.audit': 'Denetim günlükleri',
      'feat.sla': 'Özel SLA',
      'feat.support': 'Öncelikli destek',
      // App
      'app.newChat': 'Yeni sohbet',
      'app.settings': 'Ayarlar',
      'app.search': 'Sohbet ara…',
      'app.pinned': 'Sabitlenmiş',
      'app.conversations': 'Sohbetler',
      'app.accountSettings': 'Hesap ayarları',
      'app.logout': 'Çıkış yap',
      'app.confirmLogout': 'Çıkış yapmak istediğine emin misin?',
      'app.chat': 'Sohbet',
      'app.terminal': 'Terminal',
      'app.files': 'Dosyalar',
      'app.copy': 'Kopyala',
      'app.paste': 'Yapıştır',
      'app.export': 'Dışa aktar',
      'app.commandPalette': 'Komut paleti',
      'app.restart': 'Yeniden başlat',
      'app.cancel': 'Vazgeç',
      'app.save': 'Kaydet',
      'app.create': 'Oluştur',
      'app.delete': 'Sil',
      'app.rename': 'Yeniden adlandır',
      'app.pin': 'Sabitle',
      'app.unpin': 'Sabitlemeyi kaldır',
      'tabs.aiTools': 'AI Araçları',
      'tabs.account': 'Hesap',
      'tabs.tips': 'İpuçları',
      'tabs.about': 'Hakkında',
      'lang.label': 'Dil',
    },
    en: {
      'auth.welcomeBack': 'Welcome back.',
      'auth.welcome': 'Welcome.',
      'auth.loginSubtitle': 'Sign in to continue.',
      'auth.setupSubtitle': 'Initial setup. Create the admin account.',
      'auth.username': 'Username',
      'auth.password': 'Password',
      'auth.passwordRepeat': 'Password (repeat)',
      'auth.passwordHelp': 'At least 8 characters, pick a strong password.',
      'auth.passwordMin': 'At least 8 characters',
      'auth.login': 'Sign in',
      'auth.loggingIn': 'Signing in…',
      'auth.create': 'Create account',
      'auth.creating': 'Creating…',
      'auth.signup': 'Sign up',
      'auth.soon': 'Coming soon',
      'auth.signupDisabled': 'Public signup is coming soon — for now your admin creates accounts.',
      'auth.mismatch': 'Passwords do not match.',
      'auth.heroTitle1': 'All your AI CLIs',
      'auth.heroTitle2': 'in one professional UI.',
      'auth.heroDesc': 'RagonsAI lets you use Claude Code, OpenAI Codex, Gemini and any other AI CLIs on your server — through your browser, with persistent sessions and file uploads, no SSH required.',
      'auth.feature1': 'One-click access from anywhere, no SSH',
      'auth.feature2': 'Persistent PTY sessions — CLIs survive browser close',
      'auth.feature3': 'Upload files & images → CLIs use them directly',
      'auth.feature4': 'One account, unlimited projects, unlimited CLIs',
      'auth.feature5': 'Enterprise-grade infrastructure — Hostragons®',
      'auth.aiSupported': 'Supported AI CLIs',
      'auth.customCli': 'Add custom CLI',
      'auth.poweredBy': 'Powered by',
      'auth.companyNo': 'Company No',
      'pricing.title': 'Plans',
      'pricing.subtitle': 'A plan for every scale. Billing is coming soon — for now use the current installation on your own server.',
      'pricing.monthly': '/mo',
      'pricing.peruser': '/user/mo',
      'pricing.custom': 'Custom',
      'pricing.popular': 'Most popular',
      'pricing.cta': 'Coming soon',
      'pricing.contact': 'Contact us',
      'plan.starter': 'Starter',
      'plan.starterDesc': 'For exploring the basics',
      'plan.pro': 'Pro',
      'plan.proDesc': 'Individual professionals',
      'plan.premium': 'Premium',
      'plan.premiumDesc': '5× more usage',
      'plan.ultra': 'Ultra',
      'plan.ultraDesc': '20× more usage',
      'plan.team': 'Team',
      'plan.teamDesc': 'Collaboration & admin',
      'plan.enterprise': 'Enterprise',
      'plan.enterpriseDesc': 'SSO, audit, custom SLA',
      'feat.basicAccess': 'Basic usage quota',
      'feat.allModels': 'Access to all models',
      'feat.priority': 'Priority queue',
      'feat.5xUsage': '5× more usage',
      'feat.20xUsage': '20× more usage',
      'feat.projects': 'Projects & history',
      'feat.bigContext': 'Large context window',
      'feat.collab': 'Team workspaces',
      'feat.adminTools': 'Admin tools',
      'feat.sso': 'SSO / SAML',
      'feat.audit': 'Audit logs',
      'feat.sla': 'Custom SLA',
      'feat.support': 'Priority support',
      'app.newChat': 'New chat',
      'app.settings': 'Settings',
      'app.search': 'Search chats…',
      'app.pinned': 'Pinned',
      'app.conversations': 'Conversations',
      'app.accountSettings': 'Account settings',
      'app.logout': 'Log out',
      'app.confirmLogout': 'Are you sure you want to log out?',
      'app.chat': 'Chat',
      'app.terminal': 'Terminal',
      'app.files': 'Files',
      'app.copy': 'Copy',
      'app.paste': 'Paste',
      'app.export': 'Export',
      'app.commandPalette': 'Command palette',
      'app.restart': 'Restart',
      'app.cancel': 'Cancel',
      'app.save': 'Save',
      'app.create': 'Create',
      'app.delete': 'Delete',
      'app.rename': 'Rename',
      'app.pin': 'Pin',
      'app.unpin': 'Unpin',
      'tabs.aiTools': 'AI Tools',
      'tabs.account': 'Account',
      'tabs.tips': 'Tips',
      'tabs.about': 'About',
      'lang.label': 'Language',
    },
    ar: {
      'auth.welcomeBack': 'مرحباً بعودتك.',
      'auth.welcome': 'مرحباً.',
      'auth.loginSubtitle': 'سجّل الدخول للمتابعة.',
      'auth.setupSubtitle': 'الإعداد الأولي. أنشئ حساب المسؤول.',
      'auth.username': 'اسم المستخدم',
      'auth.password': 'كلمة المرور',
      'auth.passwordRepeat': 'كلمة المرور (تكرار)',
      'auth.passwordHelp': '8 أحرف على الأقل، اختر كلمة مرور قوية.',
      'auth.passwordMin': '8 أحرف على الأقل',
      'auth.login': 'تسجيل الدخول',
      'auth.loggingIn': 'جارٍ تسجيل الدخول…',
      'auth.create': 'إنشاء الحساب',
      'auth.creating': 'جارٍ الإنشاء…',
      'auth.signup': 'إنشاء حساب',
      'auth.soon': 'قريباً',
      'auth.signupDisabled': 'التسجيل العام قريباً — حالياً يُنشئ المسؤول الحسابات.',
      'auth.mismatch': 'كلمتا المرور غير متطابقتين.',
      'auth.heroTitle1': 'جميع أدوات الذكاء الاصطناعي',
      'auth.heroTitle2': 'في واجهة احترافية واحدة.',
      'auth.heroDesc': 'RagonsAI يتيح استخدام Claude Code وOpenAI Codex وGemini وأي أدوات ذكاء اصطناعي أخرى على خادمك عبر المتصفح، بجلسات دائمة ورفع للملفات، دون الحاجة إلى SSH.',
      'auth.feature1': 'وصول بنقرة واحدة من أي مكان، دون SSH',
      'auth.feature2': 'جلسات PTY دائمة — تستمر حتى بعد إغلاق المتصفح',
      'auth.feature3': 'رفع ملفات وصور → الأدوات تستخدمها مباشرة',
      'auth.feature4': 'حساب واحد، مشاريع وأدوات بلا حدود',
      'auth.feature5': 'بنية تحتية بمستوى الشركات — Hostragons®',
      'auth.aiSupported': 'الأدوات المدعومة',
      'auth.customCli': 'أضف أداة مخصصة',
      'auth.poweredBy': 'بدعم من',
      'auth.companyNo': 'رقم الشركة',
      'pricing.title': 'الباقات',
      'pricing.subtitle': 'باقة لكل حجم. الفوترة قريباً — حالياً استخدم التثبيت على خادمك.',
      'pricing.monthly': '/شهرياً',
      'pricing.peruser': '/مستخدم/شهرياً',
      'pricing.custom': 'مخصص',
      'pricing.popular': 'الأكثر شعبية',
      'pricing.cta': 'قريباً',
      'pricing.contact': 'تواصل معنا',
      'plan.starter': 'البداية',
      'plan.starterDesc': 'للاستكشاف',
      'plan.pro': 'احترافي',
      'plan.proDesc': 'للمحترفين الأفراد',
      'plan.premium': 'بريميوم',
      'plan.premiumDesc': 'استخدام أكبر بـ 5×',
      'plan.ultra': 'ألترا',
      'plan.ultraDesc': 'استخدام أكبر بـ 20×',
      'plan.team': 'فريق',
      'plan.teamDesc': 'التعاون والإدارة',
      'plan.enterprise': 'مؤسسي',
      'plan.enterpriseDesc': 'SSO، تدقيق، SLA مخصص',
      'feat.basicAccess': 'حصة استخدام أساسية',
      'feat.allModels': 'الوصول لكل النماذج',
      'feat.priority': 'طابور أولوية',
      'feat.5xUsage': 'استخدام أكبر بـ 5×',
      'feat.20xUsage': 'استخدام أكبر بـ 20×',
      'feat.projects': 'المشاريع والسجل',
      'feat.bigContext': 'نافذة سياق كبيرة',
      'feat.collab': 'مساحات عمل جماعية',
      'feat.adminTools': 'أدوات المسؤول',
      'feat.sso': 'SSO / SAML',
      'feat.audit': 'سجلات التدقيق',
      'feat.sla': 'SLA مخصص',
      'feat.support': 'دعم بأولوية',
      'app.newChat': 'محادثة جديدة',
      'app.settings': 'الإعدادات',
      'app.search': 'ابحث في المحادثات…',
      'app.pinned': 'مثبّت',
      'app.conversations': 'المحادثات',
      'app.accountSettings': 'إعدادات الحساب',
      'app.logout': 'تسجيل الخروج',
      'app.confirmLogout': 'هل أنت متأكد من تسجيل الخروج؟',
      'app.chat': 'دردشة',
      'app.terminal': 'طرفية',
      'app.files': 'الملفات',
      'app.copy': 'نسخ',
      'app.paste': 'لصق',
      'app.export': 'تصدير',
      'app.commandPalette': 'لوحة الأوامر',
      'app.restart': 'إعادة التشغيل',
      'app.cancel': 'إلغاء',
      'app.save': 'حفظ',
      'app.create': 'إنشاء',
      'app.delete': 'حذف',
      'app.rename': 'إعادة التسمية',
      'app.pin': 'تثبيت',
      'app.unpin': 'إلغاء التثبيت',
      'tabs.aiTools': 'أدوات الذكاء الاصطناعي',
      'tabs.account': 'الحساب',
      'tabs.tips': 'النصائح',
      'tabs.about': 'حول',
      'lang.label': 'اللغة',
    },
  };
  let CUR_LANG = 'en';
  try { const s = localStorage.getItem('ragonsai_lang'); if (s && I18N[s]) CUR_LANG = s; } catch {}
  const RTL_LANGS = ['ar'];
  function dirFor(code) { return RTL_LANGS.includes(code) ? 'rtl' : 'ltr'; }
  function applyDir(code) {
    const dir = dirFor(code);
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.classList.toggle('rtl', dir === 'rtl');
  }
  function t(key, fallback) { return I18N[CUR_LANG]?.[key] || I18N.tr[key] || fallback || key; }
  function setLang(code) {
    if (!I18N[code]) return;
    CUR_LANG = code;
    try { localStorage.setItem('ragonsai_lang', code); } catch {}
    applyDir(code);
    boot();
  }
  applyDir(CUR_LANG);

  function langSwitcher(extraStyle) {
    const sel = h('select', { onchange: (e) => setLang(e.target.value), style: { background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '5px 8px', color: 'var(--text-1)', fontSize: '12px', cursor: 'pointer', ...(extraStyle || {}) } },
      h('option', { value: 'tr', ...(CUR_LANG === 'tr' ? { selected: true } : {}) }, '🇹🇷 Türkçe'),
      h('option', { value: 'en', ...(CUR_LANG === 'en' ? { selected: true } : {}) }, '🇬🇧 English'),
      h('option', { value: 'ar', ...(CUR_LANG === 'ar' ? { selected: true } : {}) }, '🇸🇦 العربية'),
    );
    return sel;
  }

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const h = (tag, attrs = {}, ...children) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') el.className = v;
      else if (k === 'style') Object.assign(el.style, v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'html') el.innerHTML = v;
      else if (v === true) el.setAttribute(k, '');
      else if (v === false || v == null) {}
      else el.setAttribute(k, v);
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      const ct = typeof c;
      if (ct === 'string' || ct === 'number' || ct === 'boolean') el.appendChild(document.createTextNode(String(c)));
      else el.appendChild(c);
    }
    return el;
  };
  function html(s) { const t = document.createElement('template'); t.innerHTML = s.trim(); return t.content.firstChild; }

  const ICONS = {
    plus: '<svg class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    send: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor"/></svg>',
    settings: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    menu: '<svg class="icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    dots: '<svg class="icon icon-sm" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/></svg>',
    close: '<svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    trash: '<svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
    edit: '<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>',
    power: '<svg class="icon" viewBox="0 0 24 24"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>',
    logout: '<svg class="icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    terminal: '<svg class="icon" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    chat: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    copy: '<svg class="icon" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    paste: '<svg class="icon" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
    user: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    external: '<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    search: '<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    star: '<svg class="icon icon-sm" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    starFill: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    folder: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    upload: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    download: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    paperclip: '<svg class="icon" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',
    file: '<svg class="icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    bolt: '<svg class="icon" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor"/></svg>',
    cloud: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    globe: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    cmd: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
  };

  const Toast = {
    host: null,
    init() { if (this.host) return; this.host = h('div', { class: 'toast-host' }); document.body.appendChild(this.host); },
    show(message, type = 'info', ms = 3200) {
      this.init();
      const el = h('div', { class: `toast ${type}` }, message);
      this.host.appendChild(el);
      setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .25s'; setTimeout(() => el.remove(), 250); }, ms);
    },
  };

  async function api(method, path, body) {
    const opts = { method, credentials: 'same-origin', headers: { 'Content-Type': 'application/json' } };
    if (body !== undefined) opts.body = JSON.stringify(body);
    const res = await fetch(path, opts);
    let data = null;
    try { data = await res.json(); } catch {}
    if (!res.ok) {
      const err = new Error(data?.message || data?.error || `HTTP ${res.status}`);
      err.status = res.status; err.data = data;
      throw err;
    }
    return data;
  }

  function cliColor(cli) {
    if (cli?.color) return cli.color;
    if (cli?.id === 'claude') return '#d97757';
    if (cli?.id === 'codex') return '#10a37f';
    if (cli?.id === 'gemini') return '#4285f4';
    return '#8224e3';
  }
  function cliIcon(cli) { return cli?.icon || (cli?.name || '?')[0].toUpperCase(); }
  // Built-in CLIs use the providers' own brand favicons instead of a letter.
  const CLI_LOGOS = {
    claude: '/assets/cli-claude.png',
    codex: '/assets/cli-codex.png',
    gemini: '/assets/cli-gemini.png',
  };
  function cliLogo(cli) { return cli && CLI_LOGOS[cli.id] ? CLI_LOGOS[cli.id] : null; }
  // Fill an avatar-like container with the brand logo, or fall back to the letter.
  function brandFill(cli, cls, extraStyle) {
    const logo = cliLogo(cli);
    if (logo) {
      return h('div', { class: cls, style: { background: '#fff', overflow: 'hidden', padding: '0', ...(extraStyle || {}) } },
        h('img', { src: logo, alt: cli?.name || '', loading: 'lazy', style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }));
    }
    return h('div', { class: cls, style: { background: cliColor(cli), ...(extraStyle || {}) } }, cliIcon(cli));
  }
  function avatar(cli, size = 22, fontSize = 11) {
    const radius = Math.round(size * 0.27) + 'px';
    const logo = cliLogo(cli);
    if (logo) {
      return h('div', { class: 'avatar', style: { width: size + 'px', height: size + 'px', borderRadius: radius, background: '#fff', overflow: 'hidden', display: 'grid', placeItems: 'center', boxShadow: '0 2px 6px rgba(0,0,0,.4)' } },
        h('img', { src: logo, alt: cli?.name || '', loading: 'lazy', style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }));
    }
    return h('div', { class: 'avatar', style: { width: size + 'px', height: size + 'px', background: cliColor(cli), fontSize: fontSize + 'px', borderRadius: radius, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: '700' } }, cliIcon(cli));
  }
  function userInitials(name) { return (name || '?').slice(0, 2).toUpperCase(); }
  function hostragonsLogo(extraClass = '') { return h('img', { class: 'brand-logo-img ' + extraClass, src: HOST.logoWhite, alt: 'Hostragons' }); }

  function brandText(extraClass = '') {
    return h('div', { class: 'brand-text ' + extraClass },
      h('span', { class: 'name' }, 'Ragons', h('span', { class: 'accent' }, 'AI')),
      h('span', { class: 'sub' }, 'by Hostragons®'),
    );
  }

  function fmtBytes(n) {
    if (!Number.isFinite(n)) return '–';
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
    if (n < 1024 * 1024 * 1024) return (n / 1024 / 1024).toFixed(1) + ' MB';
    return (n / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  }
  function fmtUptime(sec) {
    sec = Math.max(0, Math.floor(sec));
    const d = Math.floor(sec / 86400); sec -= d * 86400;
    const ho = Math.floor(sec / 3600); sec -= ho * 3600;
    const m = Math.floor(sec / 60);
    if (d > 0) return `${d}g ${ho}sa`;
    if (ho > 0) return `${ho}sa ${m}dk`;
    return `${m}dk`;
  }
  function fileExt(name) { const m = String(name).match(/\.([a-z0-9]{1,6})$/i); return (m ? m[1] : '·').toUpperCase(); }
  function isImageName(name) { return /\.(png|jpe?g|gif|webp|svg|bmp|ico|avif)$/i.test(name); }

  /* ---------- Auth screens ---------- */
  function authSidePane() {
    return h('div', { class: 'auth-side' },
      h('div', { class: 'auth-side-inner' },
        hostragonsLogo('lg'),
        h('div', { class: 'auth-hero' },
          h('h1', {}, t('auth.heroTitle1'), h('br'), t('auth.heroTitle2')),
          h('p', {}, t('auth.heroDesc')),
        ),
        h('div', { class: 'auth-features' },
          authFeature(t('auth.feature1')),
          authFeature(t('auth.feature2')),
          authFeature(t('auth.feature3')),
          authFeature(t('auth.feature4')),
          authFeature(t('auth.feature5')),
        ),
        h('div', { class: 'ai-strip' },
          h('div', { class: 'ai-strip-label' }, t('auth.aiSupported')),
          h('div', { class: 'ai-strip-row' },
            aiChip('C', '#d97757', 'Claude Code'),
            aiChip('O', '#10a37f', 'OpenAI Codex'),
            aiChip('G', '#4285f4', 'Gemini'),
            aiChip('+', '#8224e3', t('auth.customCli')),
          ),
        ),
      ),
      h('div', { class: 'auth-side-foot' },
        h('span', {}, '© ', new Date().getFullYear(), ' ',
          h('a', { href: HOST.url, target: '_blank', rel: 'noopener' }, 'Hostragons®'),
          ' · ', t('auth.companyNo'), ': ', HOST.companyNo,
        ),
        h('span', {}, 'London · Singapore'),
      ),
    );
  }
  function authFeature(text) { return h('div', { class: 'auth-feature' }, h('div', { class: 'check' }, html(ICONS.check)), h('span', {}, text)); }
  function aiChip(letter, color, name) {
    return h('div', { class: 'ai-chip-static' },
      h('div', { class: 'av', style: { background: color } }, letter),
      h('span', {}, name),
    );
  }

  function authCardSkeleton(titleText, subtitleText, formNode, showSignup = false) {
    return h('div', { class: 'auth-card' },
      h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0' } },
        h('div', { class: 'auth-logo' }, hostragonsLogo()),
        langSwitcher(),
      ),
      h('div', { class: 'auth-title' }, titleText),
      h('div', { class: 'auth-subtitle' }, subtitleText),
      formNode,
      showSignup ? h('button', {
        class: 'btn-secondary',
        style: { width: '100%', marginTop: '10px', cursor: 'not-allowed', opacity: '.7' },
        title: t('auth.signupDisabled'),
        onclick: (e) => { e.preventDefault(); Toast.show(t('auth.signupDisabled'), 'info', 3600); },
      }, t('auth.signup'), h('span', { class: 'badge brand', style: { marginLeft: '8px' } }, t('auth.soon'))) : null,
      h('div', { class: 'auth-footer' },
        h('span', {}, t('auth.poweredBy'), ' ', h('a', { href: HOST.url, target: '_blank', rel: 'noopener' }, 'Hostragons®')),
        h('span', {}, 'v1.2'),
      ),
    );
  }

  function renderLoading() {
    const root = $('#app'); root.innerHTML = '';
    root.appendChild(h('div', { class: 'loading-screen' },
      hostragonsLogo(),
      h('div', { class: 'spinner' }),
      h('div', { class: 'label' }, 'RagonsAI yükleniyor…'),
    ));
  }

  function renderSetup() {
    document.body.classList.add('auth-page');
    const root = $('#app'); root.innerHTML = '';
    const errBox = h('div', { class: 'alert', style: { display: 'none' } });
    const u = h('input', { type: 'text', autocomplete: 'username', required: true, autofocus: true, placeholder: 'admin' });
    const p = h('input', { type: 'password', autocomplete: 'new-password', required: true, placeholder: t('auth.passwordMin') });
    const p2 = h('input', { type: 'password', autocomplete: 'new-password', required: true });
    const submit = h('button', { class: 'btn-primary', type: 'submit' }, t('auth.create'));
    const form = h('form', { class: 'auth-form', onsubmit: async (e) => {
      e.preventDefault();
      errBox.style.display = 'none';
      if (p.value !== p2.value) { errBox.textContent = t('auth.mismatch'); errBox.style.display = 'block'; return; }
      submit.disabled = true; submit.innerHTML = '<span class="spinner"></span> ' + t('auth.creating');
      try { await api('POST', '/api/setup', { username: u.value.trim(), password: p.value }); boot(); }
      catch (e) { errBox.textContent = e.message; errBox.style.display = 'block'; submit.disabled = false; submit.textContent = t('auth.create'); }
    } },
      h('div', { class: 'field' }, h('label', {}, t('auth.username')), u),
      h('div', { class: 'field' }, h('label', {}, t('auth.password')), p, h('div', { class: 'help' }, t('auth.passwordHelp'))),
      h('div', { class: 'field' }, h('label', {}, t('auth.passwordRepeat')), p2),
      errBox,
      submit,
    );
    root.appendChild(h('div', { class: 'auth-shell' },
      authSidePane(),
      h('div', { class: 'auth-main' }, authCardSkeleton(t('auth.welcome'), t('auth.setupSubtitle'), form, false)),
    ));
    root.appendChild(renderPricingSection());
  }

  function renderLogin() {
    document.body.classList.add('auth-page');
    const root = $('#app'); root.innerHTML = '';
    const errBox = h('div', { class: 'alert', style: { display: 'none' } });
    const u = h('input', { type: 'text', autocomplete: 'username', required: true, autofocus: true });
    const p = h('input', { type: 'password', autocomplete: 'current-password', required: true });
    const submit = h('button', { class: 'btn-primary', type: 'submit' }, t('auth.login'));
    const form = h('form', { class: 'auth-form', onsubmit: async (e) => {
      e.preventDefault();
      errBox.style.display = 'none';
      submit.disabled = true; submit.innerHTML = '<span class="spinner"></span> ' + t('auth.loggingIn');
      try { await api('POST', '/api/login', { username: u.value.trim(), password: p.value }); boot(); }
      catch (e) { errBox.textContent = e.message; errBox.style.display = 'block'; submit.disabled = false; submit.textContent = t('auth.login'); }
    } },
      h('div', { class: 'field' }, h('label', {}, t('auth.username')), u),
      h('div', { class: 'field' }, h('label', {}, t('auth.password')), p),
      errBox,
      submit,
    );
    root.appendChild(h('div', { class: 'auth-shell' },
      authSidePane(),
      h('div', { class: 'auth-main' }, authCardSkeleton(t('auth.welcomeBack'), t('auth.loginSubtitle'), form, true)),
    ));
    root.appendChild(renderPricingSection());
  }

  /* ---------- Pricing section (login page) ---------- */
  function renderPricingSection() {
    const plans = [
      { key: 'starter', price: '$0', period: '', features: ['feat.basicAccess', 'feat.allModels'], cta: 'cta', popular: false },
      { key: 'pro', price: '$20', period: 'pricing.monthly', features: ['feat.allModels', 'feat.projects', 'feat.bigContext'], cta: 'cta', popular: false },
      { key: 'premium', price: '$100', period: 'pricing.monthly', features: ['feat.5xUsage', 'feat.priority', 'feat.projects', 'feat.bigContext'], cta: 'cta', popular: true },
      { key: 'ultra', price: '$200', period: 'pricing.monthly', features: ['feat.20xUsage', 'feat.priority', 'feat.projects', 'feat.bigContext'], cta: 'cta', popular: false },
      { key: 'team', price: '$25', period: 'pricing.peruser', features: ['feat.collab', 'feat.adminTools', 'feat.projects'], cta: 'cta', popular: false },
      { key: 'enterprise', price: t('pricing.custom'), period: '', features: ['feat.sso', 'feat.audit', 'feat.sla', 'feat.support'], cta: 'contact', popular: false, customPrice: true },
    ];
    return h('section', { class: 'pricing-section' },
      h('div', { class: 'pricing-head' },
        h('div', { class: 'pricing-eyebrow' }, h('span', { class: 'dot' }), HOST.brand, ' × RagonsAI'),
        h('h2', {}, t('pricing.title')),
        h('p', {}, t('pricing.subtitle')),
      ),
      h('div', { class: 'pricing-grid' }, ...plans.map(p => h('div', { class: 'price-card' + (p.popular ? ' popular' : '') },
        p.popular ? h('div', { class: 'popular-badge' }, t('pricing.popular')) : null,
        h('div', { class: 'plan-name' }, t('plan.' + p.key)),
        h('div', { class: 'plan-desc' }, t('plan.' + p.key + 'Desc')),
        h('div', { class: 'plan-price' },
          h('span', { class: 'amount' }, p.price),
          p.period ? h('span', { class: 'period' }, t(p.period)) : null,
        ),
        h('ul', { class: 'plan-feats' }, ...p.features.map(f => h('li', {}, h('span', { class: 'check' }, html(ICONS.check)), h('span', {}, t(f))))),
        h('button', {
          class: 'plan-cta',
          title: t('auth.signupDisabled'),
          onclick: (e) => { e.preventDefault(); Toast.show(t('auth.signupDisabled'), 'info', 3500); },
        }, t(p.cta === 'contact' ? 'pricing.contact' : 'pricing.cta'),
          h('span', { class: 'soon-pill' }, t('auth.soon')),
        ),
      ))),
      h('div', { class: 'pricing-foot' },
        h('span', {}, '© ', new Date().getFullYear(), ' ', h('a', { href: HOST.url, target: '_blank', rel: 'noopener' }, 'Hostragons®'),
          ' · ', h('a', { href: HOST.url + '/hakkimizda', target: '_blank', rel: 'noopener' }, 'Hakkımızda'),
          ' · ', h('a', { href: HOST.url + '/iletisim', target: '_blank', rel: 'noopener' }, 'İletişim'),
          ' · ', h('a', { href: HOST.portal, target: '_blank', rel: 'noopener' }, 'my.hostragons'),
        ),
      ),
    );
  }

  /* ---------- State ---------- */
  const State = {
    user: null,
    clis: [],
    conversations: [],
    active: null,
    term: null,
    fitAddon: null,
    ws: null,
    mode: 'chat',
    files: [],
    convFilter: '',
    // WebSocket auto-reconnect bookkeeping
    wsConv: null,            // conversation id the current socket belongs to
    wsAttempts: 0,           // consecutive failed attempts (drives backoff)
    wsTimer: null,           // pending reconnect timer id
    wsIntentional: false,    // true when we deliberately closed (no reconnect)
  };

  try {
    const saved = localStorage.getItem('ragonsai_mode');
    if (saved === 'terminal' || saved === 'chat') State.mode = saved;
  } catch {}

  function setMode(m) {
    State.mode = m;
    try { localStorage.setItem('ragonsai_mode', m); } catch {}
    const chat = $('#chat-area');
    if (chat) chat.classList.toggle('terminal-mode', m === 'terminal');
    document.querySelectorAll('.mode-toggle button').forEach(b => b.classList.toggle('active', b.dataset.mode === m));
    if (State.fitAddon) requestAnimationFrame(() => { try { State.fitAddon.fit(); fitResize(); } catch {} });
    if (State.term && m === 'terminal') setTimeout(() => State.term.focus(), 50);
  }

  async function loadState() {
    const [me, clisRes, convRes] = await Promise.all([
      api('GET', '/api/me'),
      api('GET', '/api/clis'),
      api('GET', '/api/conversations'),
    ]);
    State.user = me.user;
    State.clis = clisRes.clis;
    State.conversations = convRes.conversations;
  }

  function renderApp() {
    document.body.classList.remove('auth-page');
    const root = $('#app'); root.innerHTML = '';
    const shell = h('div', { class: 'app-shell' },
      renderSidebar(),
      h('div', { class: 'main' },
        renderTopbar(),
        h('div', { class: 'chat-area' + (State.mode === 'terminal' ? ' terminal-mode' : ''), id: 'chat-area' }, renderEmpty()),
      ),
      h('div', { class: 'sidebar-backdrop', id: 'sidebar-backdrop', onclick: closeSidebar }),
    );
    root.appendChild(shell);
    setupDragDrop();
    if (State.active) openConversation(State.active, true);
  }

  function renderSidebar() {
    return h('aside', { class: 'sidebar', id: 'sidebar' },
      h('div', { class: 'sidebar-header' },
        h('div', { class: 'brand' },
          h('img', { class: 'brand-icon', src: '/assets/favicon.png', alt: '' }),
          h('div', { class: 'brand-text' },
            h('span', { class: 'name' }, 'Ragons', h('span', { class: 'accent' }, 'AI')),
            h('span', { class: 'sub' }, 'by Hostragons®'),
          ),
        ),
        h('button', { class: 'icon-btn', title: t('app.settings'), onclick: () => openSettings() }, html(ICONS.settings)),
      ),
      h('button', { class: 'new-chat-btn', onclick: () => newSessionWizard() },
        h('span', { class: 'plus' }, '+'),
        h('span', { style: { flex: 1, textAlign: 'left' } }, t('app.newChat')),
        h('span', { class: 'shortcut' }, 'Ctrl+N'),
      ),
      h('div', { class: 'cli-picker' }, ...State.clis.filter(c => c.enabled).map(c => (
        h('button', { class: 'cli-chip', title: `${c.name} ile hızlı başla`, onclick: () => newSessionWizard(c.id) },
          avatar(c, 20, 10),
          h('span', {}, c.name),
        )
      ))),
      h('div', { class: 'search-box', id: 'search-box' },
        h('span', { class: 'icon' }, html(ICONS.search)),
        h('input', { type: 'text', placeholder: t('app.search'), oninput: (e) => { State.convFilter = e.target.value; updateConvList(); $('#search-box').classList.toggle('has-value', !!e.target.value); } }),
        h('button', { class: 'clear', onclick: () => { State.convFilter = ''; $('#search-box').querySelector('input').value = ''; $('#search-box').classList.remove('has-value'); updateConvList(); } }, html(ICONS.close)),
      ),
      h('div', { class: 'conv-list', id: 'conv-list' }, ...renderConvList()),
      h('div', { class: 'sidebar-footer' },
        h('div', { class: 'user-chip', onclick: () => openSettings('account') },
          h('div', { class: 'user-avatar' }, userInitials(State.user.username)),
          h('div', { style: { flex: '1', minWidth: 0 } },
            h('div', { class: 'user-name' }, State.user.username),
            h('div', { class: 'user-role' }, t('app.accountSettings')),
          ),
        ),
        h('button', { class: 'icon-btn', title: t('app.logout'), onclick: logout }, html(ICONS.logout)),
      ),
      h('div', { class: 'sidebar-attribution' },
        h('div', { class: 'row' },
          h('a', { href: HOST.url, target: '_blank', rel: 'noopener' }, 'hostragons.com'),
          h('span', { style: { color: 'var(--text-3)' } }, '·'),
          h('a', { href: HOST.portal, target: '_blank', rel: 'noopener' }, 'müşteri paneli'),
          h('span', { style: { color: 'var(--text-3)' } }, '·'),
          langSwitcher({ padding: '3px 6px', fontSize: '11px' }),
        ),
      ),
    );
  }

  function filteredConvs() {
    const q = State.convFilter.trim().toLowerCase();
    if (!q) return State.conversations;
    return State.conversations.filter(c => (c.title || '').toLowerCase().includes(q) || (c.cli_id || '').toLowerCase().includes(q));
  }

  function renderConvList() {
    const convs = filteredConvs();
    if (!convs.length) {
      return [h('div', { class: 'conv-empty' },
        State.convFilter
          ? h('div', { class: 'conv-empty-text' }, 'Eşleşen sohbet yok.')
          : h('div', { class: 'conv-empty-box' },
              h('div', { class: 'conv-empty-icon' }, html(ICONS.chat)),
              h('div', { class: 'conv-empty-title' }, 'Henüz sohbet yok'),
              h('div', { class: 'conv-empty-sub' }, 'Yeni bir tane başlatın.'),
            ))];
    }
    const pinned = convs.filter(c => c.pinned);
    const others = convs.filter(c => !c.pinned);
    const out = [];
    if (pinned.length) {
      out.push(h('div', { class: 'conv-section-label' }, html(ICONS.starFill), t('app.pinned'), h('span', { class: 'count' }, String(pinned.length))));
      pinned.forEach(c => out.push(convNode(c)));
    }
    if (others.length) {
      out.push(h('div', { class: 'conv-section-label' }, t('app.conversations'), h('span', { class: 'count' }, String(others.length))));
      others.forEach(c => out.push(convNode(c)));
    }
    return out;
  }

  function convNode(c) {
    const cli = State.clis.find(x => x.id === c.cli_id) || { name: c.cli_id };
    return h('div', { class: 'conv-item' + (State.active === c.id ? ' active' : '') + (c.pinned ? ' pinned' : ''), onclick: () => openConversation(c.id) },
      avatar(cli, 22, 11),
      c.pinned ? h('span', { class: 'pin-mark', title: 'Sabitlenmiş' }, html(ICONS.starFill)) : null,
      h('span', { class: 'title' }, c.title),
      h('button', { class: 'menu-btn', onclick: (e) => { e.stopPropagation(); openConvMenu(e, c); } }, html(ICONS.dots)),
    );
  }

  function updateConvList() {
    const list = $('#conv-list');
    if (list) list.replaceChildren(...renderConvList());
  }

  function renderTopbar() {
    const conv = State.conversations.find(c => c.id === State.active);
    const cli = conv ? State.clis.find(x => x.id === conv.cli_id) : null;
    const title = conv?.title || (State.user ? `Merhaba, ${State.user.username}` : 'RagonsAI');
    return h('div', { class: 'topbar' },
      h('button', { class: 'icon-btn menu-toggle', onclick: openSidebar }, html(ICONS.menu)),
      h('div', { class: 'topbar-title' },
        cli ? avatar(cli, 32, 14) : null,
        h('div', { style: { minWidth: 0 } },
          h('div', { class: 'topbar-name' }, title),
          h('div', { class: 'topbar-sub' },
            conv ? [
              h('span', { class: 'status-dot', id: 'status-dot' }),
              h('span', { id: 'status-text' }, 'Hazır'),
              h('span', {}, ' • '),
              h('span', {}, cli?.name || conv.cli_id),
            ] : [h('span', {}, State.conversations.length ? 'Soldan bir sohbet seç' : 'Bir AI seç ve yeni proje başlat')],
          ),
        ),
      ),
      conv ? renderModeToggle() : null,
      conv ? h('button', { class: 'icon-btn', title: 'Dosyalar (Ctrl+O)', onclick: openFilesModal }, html(ICONS.folder)) : null,
      conv ? h('button', { class: 'icon-btn', title: 'Kopyala (Ctrl+Shift+C)', onclick: copySelection }, html(ICONS.copy)) : null,
      conv ? h('button', { class: 'icon-btn', title: 'Yapıştır (Ctrl+Shift+V)', onclick: pasteClipboard }, html(ICONS.paste)) : null,
      conv ? h('button', { class: 'icon-btn', title: 'Sohbeti dışa aktar', onclick: () => exportConv(conv.id) }, html(ICONS.download)) : null,
      conv ? h('button', { class: 'icon-btn', title: 'Komut paleti (Ctrl+K)', onclick: openCmdK }, html(ICONS.cmd)) : null,
      conv ? h('button', { class: 'icon-btn', title: 'CLI\'ı yeniden başlat', onclick: () => restartSession() }, html(ICONS.power)) : null,
    );
  }

  function renderModeToggle() {
    return h('div', { class: 'mode-toggle' },
      h('button', { 'data-mode': 'chat', class: State.mode === 'chat' ? 'active' : '', onclick: () => setMode('chat') }, html(ICONS.chat), h('span', { class: 'icon-text' }, t('app.chat'))),
      h('button', { 'data-mode': 'terminal', class: State.mode === 'terminal' ? 'active' : '', onclick: () => setMode('terminal') }, html(ICONS.terminal), h('span', { class: 'icon-text' }, t('app.terminal'))),
    );
  }

  function renderEmpty() {
    const hour = new Date().getHours();
    const greet = hour < 5 ? 'İyi geceler' : hour < 12 ? 'Günaydın' : hour < 18 ? 'İyi günler' : hour < 22 ? 'İyi akşamlar' : 'İyi geceler';
    const statusPill = h('div', { class: 'status-pill', id: 'empty-status' },
      h('span', { class: 'status-dot running' }), h('span', {}, 'Sistem hazır'));
    api('GET', '/api/stats').then(s => {
      const el = $('#empty-status');
      if (el) el.replaceChildren(
        h('span', { class: 'status-dot running' }),
        h('span', {}, `Sistem hazır · ${s.cpu.count}× CPU · ${fmtBytes(s.mem.total - s.mem.used)} boş RAM · ${s.activeSessions} aktif CLI`),
      );
    }).catch(() => {});

    const recent = State.conversations.slice(0, 4);

    return h('div', { class: 'empty' },
      h('div', { class: 'empty-inner' },
        statusPill,
        h('div', { class: 'empty-mark' },
          h('img', { src: '/assets/favicon.png', alt: '', style: { width: '52px', height: '52px', borderRadius: '14px' } }),
        ),
        h('h1', {}, greet + ', ', h('span', { class: 'accent' }, State.user.username), '.'),
        h('p', {}, 'Bugün hangi projede çalışacaksın? Aşağıdan bir AI seç veya ',
          h('button', { class: 'btn-ghost', style: { display: 'inline-flex', padding: '2px 8px', color: 'var(--brand-4)', verticalAlign: 'baseline', borderRadius: '6px', border: '1px solid var(--border)' }, onclick: openCmdK },
            h('span', { class: 'kbd', style: { marginRight: '4px' } }, 'Ctrl+K'), 'komut paleti'),
          ' ile hızla hareket et.',
        ),
        h('div', { class: 'cli-grid' }, ...State.clis.filter(c => c.enabled).map(c => (
          h('div', { class: 'cli-card', onclick: () => newSessionWizard(c.id) },
            h('div', { class: 'cli-card-head' },
              brandFill(c, 'cli-card-avatar'),
              h('div', { class: 'cli-card-name' }, c.name),
            ),
            h('div', { class: 'cli-card-desc' }, c.description || `${c.name} ile yeni proje başlat`),
            h('div', { class: 'cli-card-cta' }, '+ Yeni sohbet'),
          )
        ))),
        recent.length ? h('div', { style: { marginTop: '34px', textAlign: 'left' } },
          h('div', { class: 'section-title' },
            h('span', {}, 'Son sohbetler'),
            h('button', { class: 'btn-ghost', onclick: openCmdK, style: { fontSize: '12px' } }, 'Tümünü ara →'),
          ),
          h('div', { class: 'recent-grid' }, ...recent.map(c => {
            const cli = State.clis.find(x => x.id === c.cli_id);
            return h('div', { class: 'recent-card', onclick: () => openConversation(c.id) },
              avatar(cli, 28, 13),
              h('div', { style: { minWidth: 0, flex: 1 } },
                h('div', { class: 'recent-title' }, c.title),
                h('div', { class: 'recent-meta' }, (cli?.name || c.cli_id), ' · ', timeAgo(c.updated_at)),
              ),
              c.pinned ? h('span', { style: { color: 'var(--brand-4)' } }, html(ICONS.starFill)) : null,
            );
          })),
        ) : null,
        h('div', { class: 'shortcut-strip' },
          h('div', { class: 'item' }, h('span', { class: 'kbd' }, 'Ctrl+N'), h('span', {}, 'Yeni sohbet')),
          h('div', { class: 'item' }, h('span', { class: 'kbd' }, 'Ctrl+K'), h('span', {}, 'Komut paleti')),
          h('div', { class: 'item' }, h('span', { class: 'kbd' }, 'Ctrl+Shift+T'), h('span', {}, 'Terminal modu')),
          h('div', { class: 'item' }, h('span', { class: 'kbd' }, 'Ctrl+O'), h('span', {}, 'Dosyalar')),
          h('div', { class: 'item' }, h('span', { class: 'kbd' }, 'Sürükle-bırak'), h('span', {}, 'Dosya yükle')),
        ),
        h('div', { class: 'empty-foot' },
          h('span', {}, 'Powered by'),
          hostragonsLogo(),
        ),
      ),
    );
  }

  function timeAgo(ts) {
    const sec = Math.max(1, Math.floor((Date.now() - ts) / 1000));
    if (sec < 60) return `${sec} sn önce`;
    if (sec < 3600) return `${Math.floor(sec / 60)} dk önce`;
    if (sec < 86400) return `${Math.floor(sec / 3600)} sa önce`;
    return `${Math.floor(sec / 86400)} gün önce`;
  }

  function openSidebar() { $('#sidebar').classList.add('open'); $('#sidebar-backdrop').classList.add('show'); }
  function closeSidebar() { $('#sidebar').classList.remove('open'); $('#sidebar-backdrop').classList.remove('show'); }

  /* ---------- New session wizard ---------- */
  function newSessionWizard(preselectCli) {
    const enabled = State.clis.filter(c => c.enabled);
    let chosenCli = preselectCli ? enabled.find(c => c.id === preselectCli) : null;
    const titleInput = h('input', { type: 'text', placeholder: 'örn: Mobile uygulama refaktör, Blog yazısı, Veri analizi…', autofocus: !!chosenCli });
    const errBox = h('div', { class: 'alert', style: { display: 'none' } });

    function renderInner() {
      const body = h('div');
      if (!chosenCli) {
        body.appendChild(h('div', { class: 'help', style: { marginBottom: '14px', fontSize: '13px' } }, 'Önce bir CLI seçin:'));
        body.appendChild(h('div', { class: 'cli-grid', style: { marginTop: '4px' } }, ...enabled.map(c => (
          h('div', { class: 'cli-card', onclick: () => { chosenCli = c; rerender(); } },
            h('div', { class: 'cli-card-head' },
              brandFill(c, 'cli-card-avatar'),
              h('div', { class: 'cli-card-name' }, c.name),
            ),
            h('div', { class: 'cli-card-desc' }, c.description || c.name),
          )
        ))));
      } else {
        body.appendChild(h('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', padding: '12px', borderRadius: '12px', background: 'var(--bg-2)', border: '1px solid var(--border)' } },
          brandFill(chosenCli, 'cli-card-avatar', { width: '40px', height: '40px', borderRadius: '11px', display: 'grid', placeItems: 'center', fontWeight: '700', color: '#fff' }),
          h('div', { style: { flex: 1 } },
            h('div', { style: { fontWeight: '700' } }, chosenCli.name),
            h('div', { style: { fontSize: '12px', color: 'var(--text-2)' } }, chosenCli.description || chosenCli.command),
          ),
          enabled.length > 1 ? h('button', { class: 'btn-ghost', onclick: () => { chosenCli = null; rerender(); } }, 'Değiştir') : null,
        ));
        body.appendChild(h('div', { class: 'field' },
          h('label', {}, 'Hangi projeyi çalıştıracaksın?'),
          titleInput,
          h('div', { class: 'help' }, 'Bu sohbete vereceğin ad. Boş bırakabilirsin — varsayılan kullanılır.'),
        ));
        body.appendChild(errBox);
        setTimeout(() => titleInput.focus(), 30);
        titleInput.onkeydown = (e) => { if (e.key === 'Enter') createBtn.click(); };
      }
      return body;
    }

    let bodyHost = renderInner();
    const createBtn = h('button', { class: 'btn-primary', onclick: async () => {
      if (!chosenCli) { Toast.show('Önce bir CLI seç.', 'error'); return; }
      const title = (titleInput.value || '').trim() || chosenCli.name;
      createBtn.disabled = true; createBtn.innerHTML = '<span class="spinner"></span> Oluşturuluyor…';
      try {
        const res = await api('POST', '/api/conversations', { cliId: chosenCli.id, title });
        State.conversations.unshift(res.conversation);
        State.active = res.conversation.id;
        closeModal();
        renderApp();
      } catch (e) {
        errBox.textContent = e.message; errBox.style.display = 'block';
        createBtn.disabled = false; createBtn.textContent = 'Oluştur';
      }
    } }, 'Oluştur');

    function rerender() {
      const fresh = renderInner();
      bodyHost.replaceWith(fresh);
      bodyHost = fresh;
      createBtn.style.display = chosenCli ? '' : 'none';
    }

    openModal('Yeni proje sohbeti', bodyHost,
      h('div', { style: { display: 'flex', gap: '8px' } },
        h('button', { class: 'btn-ghost', onclick: closeModal }, 'Vazgeç'),
        createBtn,
      ),
    );
    if (!chosenCli) createBtn.style.display = 'none';
  }

  /* ---------- Open conversation ---------- */
  async function openConversation(id, skipRender = false) {
    State.active = id;
    if (!skipRender) {
      updateConvList();
      const top = $('.topbar'); if (top) top.replaceWith(renderTopbar());
    } else {
      updateConvList();
    }
    const chat = $('#chat-area');
    chat.classList.toggle('terminal-mode', State.mode === 'terminal');
    chat.innerHTML = '';
    chat.appendChild(renderChat());
    chat.appendChild(renderDropOverlay());
    setupTerminal();
    connectWs();
    refreshFiles();
    closeSidebar();
  }

  function renderChat() {
    return h('div', { style: { display: 'flex', flexDirection: 'column', flex: '1', minHeight: 0 } },
      h('div', { class: 'terminal-wrap' },
        h('div', { class: 'terminal-container', id: 'term-container' }),
      ),
      h('div', { class: 'files-rail', id: 'files-rail' }),
      h('div', { class: 'composer-wrap' },
        h('div', { class: 'composer' },
          h('button', { class: 'icon-btn', title: 'Dosya/görsel yükle', onclick: openFilePicker }, html(ICONS.paperclip)),
          h('textarea', { id: 'composer-input', placeholder: 'Mesajını yaz… (Enter = gönder, Shift+Enter = yeni satır, dosya sürükle-bırak)', rows: 1, oninput: autoGrow, onkeydown: composerKeydown, onpaste: composerPaste }),
          h('div', { class: 'composer-actions' },
            h('button', { class: 'send-btn', id: 'send-btn', onclick: sendComposer, title: 'Gönder' }, html(ICONS.send)),
          ),
        ),
        h('div', { class: 'composer-hint' },
          h('span', {}, h('span', { class: 'kbd' }, 'Enter'), ' gönder · ',
            h('span', { class: 'kbd' }, 'Shift+Enter'), ' yeni satır · ',
            h('span', { class: 'kbd' }, 'Ctrl+Shift+C'), ' kopya · ',
            h('span', { class: 'kbd' }, 'Ctrl+V'), ' yapıştır · sürükle-bırak ile dosya'),
          h('span', { id: 'tip-status' }, ''),
        ),
      ),
    );
  }

  function renderDropOverlay() {
    return h('div', { class: 'drop-overlay', id: 'drop-overlay' },
      h('div', { class: 'drop-inner' },
        h('div', { class: 'icon-box' }, html(ICONS.upload)),
        h('h3', {}, 'Bırakın, yükleyelim'),
        h('p', {}, 'Dosyalar bu sohbetin çalışma dizinine yüklenecek. CLI doğrudan bunlara erişebilir.'),
      ),
    );
  }

  function autoGrow(e) { const ta = e.target; ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 220) + 'px'; }
  function composerKeydown(e) { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); sendComposer(); } }
  function composerPaste(e) {
    const items = e.clipboardData?.items;
    if (!items) return;
    const files = [];
    for (const it of items) if (it.kind === 'file') { const f = it.getAsFile(); if (f) files.push(f); }
    if (files.length) { e.preventDefault(); uploadFiles(files); }
  }

  /* ---------- Terminal & WS ---------- */
  function setupTerminal() {
    if (State.term) { try { State.term.dispose(); } catch {} State.term = null; }
    const Terminal = window.Terminal;
    const FitAddon = window.FitAddon.FitAddon;
    const WebLinks = window.WebLinksAddon.WebLinksAddon;
    const term = new Terminal({
      fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
      fontSize: 13.5,
      lineHeight: 1.35,
      cursorBlink: true,
      cursorStyle: 'bar',
      allowProposedApi: true,
      scrollback: 10000,
      theme: {
        background: '#08040f',
        foreground: '#f0e9ff',
        cursor: '#c084fc',
        cursorAccent: '#08040f',
        selectionBackground: 'rgba(130, 36, 227, .45)',
        black: '#08040f', brightBlack: '#6b5e8a',
        red: '#ef4444', brightRed: '#fca5a5',
        green: '#22c55e', brightGreen: '#86efac',
        yellow: '#f59e0b', brightYellow: '#fcd34d',
        blue: '#60a5fa', brightBlue: '#93c5fd',
        magenta: '#c084fc', brightMagenta: '#d8b4fe',
        cyan: '#22d3ee', brightCyan: '#67e8f9',
        white: '#f0e9ff', brightWhite: '#ffffff',
      },
    });
    const fit = new FitAddon();
    term.loadAddon(fit);
    term.loadAddon(new WebLinks((event, uri) => { window.open(uri, '_blank', 'noopener'); }));

    term.attachCustomKeyEventHandler((e) => {
      if (e.type !== 'keydown') return true;
      const isMac = navigator.platform.toLowerCase().includes('mac');
      const meta = isMac ? e.metaKey : e.ctrlKey;
      if (meta && e.shiftKey && (e.code === 'KeyC' || e.key === 'C' || e.key === 'c')) { copySelection(); e.preventDefault(); return false; }
      if (meta && e.shiftKey && (e.code === 'KeyV' || e.key === 'V' || e.key === 'v')) { pasteClipboard(); e.preventDefault(); return false; }
      if (meta && !e.shiftKey && (e.code === 'KeyC' || e.key === 'c') && term.hasSelection()) { copySelection(); e.preventDefault(); return false; }
      if (meta && !e.shiftKey && (e.code === 'KeyV' || e.key === 'v')) { pasteClipboard(); e.preventDefault(); return false; }
      return true;
    });

    term.open($('#term-container'));
    State.term = term;
    State.fitAddon = fit;
    requestAnimationFrame(() => { fit.fit(); fitResize(); });
    term.onData((data) => { if (State.ws && State.ws.readyState === 1) State.ws.send(JSON.stringify({ type: 'input', data })); });

    if (State._ro) try { State._ro.disconnect(); } catch {}
    State._ro = new ResizeObserver(() => { try { fit.fit(); fitResize(); } catch {} });
    State._ro.observe($('#term-container'));

    $('#term-container').addEventListener('contextmenu', (e) => {
      if (term.hasSelection()) { e.preventDefault(); copySelection(); }
      else { e.preventDefault(); pasteClipboard(); }
    });
  }

  function fitResize() {
    if (State.term && State.ws && State.ws.readyState === 1) {
      State.ws.send(JSON.stringify({ type: 'resize', cols: State.term.cols, rows: State.term.rows }));
    }
  }

  async function copySelection() {
    if (!State.term) return;
    const sel = State.term.getSelection();
    if (!sel) { Toast.show('Önce kopyalanacak metni seçin.', 'info', 2200); return; }
    try { await navigator.clipboard.writeText(sel); Toast.show('Kopyalandı', 'success', 1500); }
    catch {
      try { const ta = document.createElement('textarea'); ta.value = sel; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); Toast.show('Kopyalandı', 'success', 1500); }
      catch { Toast.show('Kopyalama başarısız.', 'error'); }
    }
  }
  async function pasteClipboard() {
    if (!State.term || !State.ws || State.ws.readyState !== 1) return;
    try { const text = await navigator.clipboard.readText(); if (text) State.ws.send(JSON.stringify({ type: 'input', data: text })); }
    catch { Toast.show('Yapıştırma başarısız — tarayıcı pano izni reddetti.', 'error', 3000); }
  }

  // Cancel any pending reconnect attempt and drop the current socket without
  // triggering the auto-reconnect path (used when switching/closing chats).
  function teardownWs() {
    State.wsIntentional = true;
    if (State.wsTimer) { clearTimeout(State.wsTimer); State.wsTimer = null; }
    if (State.ws) {
      try { State.ws.onclose = null; State.ws.onerror = null; State.ws.onmessage = null; State.ws.close(); } catch {}
      State.ws = null;
    }
  }

  function scheduleReconnect() {
    if (State.wsIntentional) return;
    if (State.wsTimer) return;
    // Exponential backoff: 0.5s, 1s, 2s, 4s … capped at 15s.
    const delay = Math.min(15000, 500 * Math.pow(2, Math.min(State.wsAttempts, 5)));
    State.wsAttempts++;
    setStatus('reconnecting');
    State.wsTimer = setTimeout(() => {
      State.wsTimer = null;
      // Conversation may have changed while we waited — only reconnect if still relevant.
      if (State.active && State.active === State.wsConv) connectWs(true);
    }, delay);
  }

  function connectWs(isRetry = false) {
    // A fresh (non-retry) connect starts a new logical session for State.active.
    if (!isRetry) {
      teardownWs();
      State.wsConv = State.active;
      State.wsAttempts = 0;
    }
    State.wsIntentional = false;
    if (State.wsTimer) { clearTimeout(State.wsTimer); State.wsTimer = null; }
    if (State.ws) { try { State.ws.onclose = null; State.ws.close(); } catch {} State.ws = null; }

    const proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const convId = State.active;
    let ws;
    try {
      ws = new WebSocket(`${proto}//${location.host}/ws/terminal?conversationId=${encodeURIComponent(convId)}`);
    } catch (e) { scheduleReconnect(); return; }
    State.ws = ws;
    setStatus(isRetry ? 'reconnecting' : 'connecting');

    ws.onopen = () => {
      State.wsAttempts = 0;
      setStatus('running');
      // Make sure the PTY matches the (possibly resized) terminal after a reconnect.
      try { fitResize(); } catch {}
    };
    ws.onclose = () => {
      if (State.ws === ws) State.ws = null;
      if (State.wsIntentional || State.active !== convId) { setStatus('closed'); return; }
      scheduleReconnect();
    };
    ws.onerror = () => { try { ws.close(); } catch {} };
    ws.onmessage = (ev) => {
      let msg; try { msg = JSON.parse(ev.data); } catch { return; }
      if (msg.type === 'data') State.term && State.term.write(msg.data);
      else if (msg.type === 'exit') { State.term && State.term.write(`\r\n\x1b[33m[CLI sonlandı, exit code ${msg.exitCode}]\x1b[0m\r\n`); State.wsIntentional = true; setStatus('closed'); }
      else if (msg.type === 'ready') { if (State.fitAddon) { try { State.fitAddon.fit(); fitResize(); } catch {} } }
      else if (msg.type === 'error') State.term && State.term.write(`\r\n\x1b[31m[hata] ${msg.message}\x1b[0m\r\n`);
    };
  }

  function setStatus(state) {
    const dot = $('#status-dot'); const txt = $('#status-text');
    if (!dot || !txt) return;
    dot.classList.toggle('running', state === 'running');
    dot.classList.toggle('reconnecting', state === 'reconnecting' || state === 'connecting');
    dot.classList.toggle('error', state === 'error' || state === 'closed');
    const labels = { connecting: 'Bağlanıyor…', reconnecting: 'Yeniden bağlanıyor…', running: 'Çalışıyor', closed: 'Durdu', error: 'Hata' };
    txt.textContent = labels[state] || state;
  }

  function sendComposer() {
    const ta = $('#composer-input');
    if (!ta || !State.ws || State.ws.readyState !== 1) return;
    const text = ta.value;
    if (!text.trim()) return;
    State.ws.send(JSON.stringify({ type: 'input', data: text + '\r' }));
    ta.value = ''; ta.style.height = 'auto'; ta.focus();
  }

  function restartSession() {
    if (!State.active || !State.ws) return;
    if (!confirm('Bu sohbetin CLI oturumunu durdurup yeniden başlatmak istiyor musun?')) return;
    try { State.ws.send(JSON.stringify({ type: 'kill' })); } catch {}
    setTimeout(() => openConversation(State.active), 600);
  }

  /* ---------- Conv menu / actions ---------- */
  function openConvMenu(e, conv) {
    closeContextMenu();
    const menu = h('div', { class: 'context-menu', style: { left: e.clientX + 'px', top: (e.clientY + 4) + 'px' } },
      h('button', { onclick: async () => {
        closeContextMenu();
        await api('POST', `/api/conversations/${conv.id}/pin`, { pinned: !conv.pinned });
        await reloadConvs(); updateConvList();
        Toast.show(conv.pinned ? 'Sabitleme kaldırıldı' : 'Sabitlendi', 'success', 1400);
      } }, html(conv.pinned ? ICONS.star : ICONS.starFill), conv.pinned ? 'Sabitlemeyi kaldır' : 'Sabitle'),
      h('button', { onclick: async () => {
        closeContextMenu();
        const t = prompt('Yeni başlık:', conv.title);
        if (t && t.trim()) { await api('PATCH', `/api/conversations/${conv.id}`, { title: t.trim() }); await reloadConvs(); updateConvList(); if (State.active === conv.id) { const top = $('.topbar'); if (top) top.replaceWith(renderTopbar()); } }
      } }, html(ICONS.edit), 'Yeniden adlandır'),
      h('button', { onclick: () => { closeContextMenu(); exportConv(conv.id); } }, html(ICONS.download), 'Dışa aktar (.md)'),
      h('hr'),
      h('button', { class: 'danger', onclick: async () => {
        closeContextMenu();
        if (!confirm(`"${conv.title}" sohbeti ve tüm dosyaları kalıcı olarak silinsin mi?`)) return;
        await api('DELETE', `/api/conversations/${conv.id}`);
        if (State.active === conv.id) { teardownWs(); State.active = null; }
        await reloadConvs();
        if (!State.active) {
          const chat = $('#chat-area');
          chat.innerHTML = ''; chat.appendChild(renderEmpty()); chat.appendChild(renderDropOverlay());
          const top = $('.topbar'); if (top) top.replaceWith(renderTopbar());
        } else { updateConvList(); }
      } }, html(ICONS.trash), 'Sil'),
    );
    document.body.appendChild(menu);
    setTimeout(() => document.addEventListener('click', closeContextMenu, { once: true }), 0);
  }
  function closeContextMenu() { document.querySelectorAll('.context-menu').forEach(n => n.remove()); }

  async function reloadConvs() {
    const res = await api('GET', '/api/conversations');
    State.conversations = res.conversations;
  }

  function exportConv(id) {
    const link = document.createElement('a');
    link.href = `/api/conversations/${id}/export`;
    link.download = '';
    document.body.appendChild(link); link.click(); link.remove();
  }

  async function logout() {
    if (!confirm(t('app.confirmLogout'))) return;
    teardownWs();
    try { await api('POST', '/api/logout'); } catch {}
    boot();
  }

  /* ---------- Modal ---------- */
  function openModal(title, body, footer, wide = false) {
    closeModal();
    const back = h('div', { class: 'modal-backdrop', onclick: (e) => { if (e.target === back) closeModal(); } },
      h('div', { class: 'modal' + (wide ? ' wide' : '') },
        h('div', { class: 'modal-header' },
          h('div', { class: 'modal-title' }, title),
          h('button', { class: 'icon-btn', onclick: closeModal }, html(ICONS.close)),
        ),
        h('div', { class: 'modal-body' }, body),
        footer ? h('div', { class: 'modal-footer' }, footer) : null,
      ),
    );
    document.body.appendChild(back);
  }
  function closeModal() { document.querySelectorAll('.modal-backdrop').forEach(n => n.remove()); }

  /* ---------- File upload / list ---------- */
  function setupDragDrop() {
    const handlers = {};
    handlers.dragover = (e) => {
      if (!State.active) return;
      if (!Array.from(e.dataTransfer?.types || []).includes('Files')) return;
      e.preventDefault();
      const chat = $('#chat-area'); if (chat) chat.classList.add('dragover');
    };
    handlers.dragleave = (e) => {
      if (e.target === document || e.relatedTarget === null) {
        const chat = $('#chat-area'); if (chat) chat.classList.remove('dragover');
      }
    };
    handlers.drop = (e) => {
      if (!State.active) return;
      e.preventDefault();
      const chat = $('#chat-area'); if (chat) chat.classList.remove('dragover');
      const files = Array.from(e.dataTransfer?.files || []);
      if (files.length) uploadFiles(files);
    };
    for (const [k, fn] of Object.entries(handlers)) document.addEventListener(k, fn);
  }

  function openFilePicker() {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.multiple = true;
    inp.onchange = () => uploadFiles(Array.from(inp.files || []));
    inp.click();
  }

  async function uploadFiles(files) {
    if (!State.active) return;
    if (!files.length) return;
    const fd = new FormData();
    for (const f of files) fd.append('files', f);
    Toast.show(`${files.length} dosya yükleniyor…`, 'info', 2000);
    try {
      const res = await fetch(`/api/conversations/${State.active}/files`, { method: 'POST', credentials: 'same-origin', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Yükleme hatası');
      Toast.show(`${data.files.length} dosya yüklendi`, 'success', 1800);
      await refreshFiles();
    } catch (e) { Toast.show('Yükleme hatası: ' + e.message, 'error'); }
  }

  async function refreshFiles() {
    if (!State.active) { State.files = []; updateFilesRail(); return; }
    try {
      const res = await api('GET', `/api/conversations/${State.active}/files`);
      State.files = res.files || [];
      updateFilesRail();
    } catch {}
  }

  function updateFilesRail() {
    const rail = $('#files-rail');
    if (!rail) return;
    rail.innerHTML = '';
    const files = State.files.filter(f => !f.dir);
    rail.classList.toggle('has-files', files.length > 0);
    if (!files.length) return;
    const visible = files.slice(0, 8);
    for (const f of visible) {
      rail.appendChild(h('div', { class: 'file-chip', title: `${f.name} (${fmtBytes(f.size)}) — tıkla, indir` },
        h('span', { class: 'file-icon' }, html(ICONS.file)),
        h('a', { href: `/api/conversations/${State.active}/files/download?name=${encodeURIComponent(f.name)}`, target: '_blank', class: 'name' }, f.name),
        h('span', { class: 'size' }, fmtBytes(f.size)),
        h('button', { class: 'x', title: 'Sil', onclick: async () => {
          if (!confirm(`"${f.name}" silinsin mi?`)) return;
          await fetch(`/api/conversations/${State.active}/files?name=${encodeURIComponent(f.name)}`, { method: 'DELETE', credentials: 'same-origin' });
          refreshFiles();
        } }, '×'),
      ));
    }
    if (files.length > visible.length) {
      rail.appendChild(h('button', { class: 'file-chip', onclick: openFilesModal }, h('span', { class: 'name' }, `+${files.length - visible.length} daha…`)));
    }
  }

  async function openFilesModal() {
    if (!State.active) return;
    await refreshFiles();
    const grid = h('div', { class: 'files-grid' });
    if (!State.files.length) grid.appendChild(h('div', { style: { gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-3)', padding: '20px' } }, 'Bu sohbetin çalışma dizini boş. Dosya yükleyin veya CLI ile oluşturun.'));
    for (const f of State.files) {
      grid.appendChild(h('div', { class: 'file-card' },
        h('div', { class: 'top' },
          h('div', { class: 'ext' }, f.dir ? 'DIR' : fileExt(f.name)),
          h('div', { style: { minWidth: 0, flex: 1 } },
            h('div', { class: 'name', title: f.name }, f.name),
            h('div', { class: 'size' }, f.dir ? 'klasör' : fmtBytes(f.size)),
          ),
        ),
        f.dir ? null : h('div', { class: 'actions' },
          h('a', { class: 'btn', href: `/api/conversations/${State.active}/files/download?name=${encodeURIComponent(f.name)}` },
            h('button', {}, 'İndir'),
          ),
          h('button', { class: 'danger', onclick: async () => {
            if (!confirm(`"${f.name}" silinsin mi?`)) return;
            await fetch(`/api/conversations/${State.active}/files?name=${encodeURIComponent(f.name)}`, { method: 'DELETE', credentials: 'same-origin' });
            await refreshFiles();
            openFilesModal();
          } }, 'Sil'),
        ),
      ));
    }
    openModal('Çalışma dizini dosyaları',
      h('div', {},
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', gap: '10px' } },
          h('div', { style: { color: 'var(--text-2)', fontSize: '13px' } }, 'Buraya yüklediğin her şey CLI\'nin çalışma dizinindedir; CLI bunlara doğrudan erişebilir.'),
          h('button', { class: 'btn-secondary', onclick: openFilePicker }, html(ICONS.upload), 'Yükle'),
        ),
        grid,
      ), null, true);
  }

  /* ---------- Command palette ---------- */
  function openCmdK() {
    closeCmdK();
    let selected = 0;
    let items = [];

    const input = h('input', { type: 'text', placeholder: 'Komut, sohbet, CLI ara…', autofocus: true });
    const list = h('div', { class: 'cmdk-list' });

    function build() {
      const q = input.value.trim().toLowerCase();
      items = [];
      // Quick actions
      const quick = [
        { label: 'Yeni sohbet…', hint: 'Ctrl+N', action: () => { closeCmdK(); newSessionWizard(); }, group: 'Eylem' },
        { label: 'Ayarları aç', hint: '', action: () => { closeCmdK(); openSettings(); }, group: 'Eylem' },
        { label: 'Dosyalar', hint: 'Ctrl+O', action: () => { closeCmdK(); openFilesModal(); }, group: 'Eylem' },
        { label: 'Mod: ' + (State.mode === 'chat' ? 'Terminal\'e geç' : 'Sohbet\'e geç'), hint: 'Ctrl+Shift+T', action: () => { closeCmdK(); setMode(State.mode === 'chat' ? 'terminal' : 'chat'); }, group: 'Eylem' },
        { label: 'Çıkış yap', hint: '', action: () => { closeCmdK(); logout(); }, group: 'Eylem' },
      ];
      // CLI quick start
      const cliItems = State.clis.filter(c => c.enabled).map(c => ({
        label: `Yeni ${c.name} sohbeti`,
        hint: c.id,
        action: () => { closeCmdK(); newSessionWizard(c.id); },
        group: 'AI Araçları',
        avatar: { color: cliColor(c), letter: cliIcon(c), logo: cliLogo(c) },
      }));
      // Conversations
      const convItems = State.conversations.map(c => {
        const cli = State.clis.find(x => x.id === c.cli_id);
        return {
          label: c.title,
          hint: cli?.name || c.cli_id,
          action: () => { closeCmdK(); openConversation(c.id); },
          group: 'Sohbetler',
          avatar: { color: cliColor(cli), letter: cliIcon(cli), logo: cliLogo(cli) },
        };
      });
      const all = [...quick, ...cliItems, ...convItems];
      const filtered = q ? all.filter(it => it.label.toLowerCase().includes(q) || (it.hint || '').toLowerCase().includes(q) || it.group.toLowerCase().includes(q)) : all;
      items = filtered;
      selected = 0;
      paint();
    }
    function paint() {
      list.innerHTML = '';
      if (!items.length) { list.appendChild(h('div', { class: 'cmdk-empty' }, 'Eşleşen sonuç yok.')); return; }
      let lastGroup = null;
      items.forEach((it, idx) => {
        if (it.group !== lastGroup) { lastGroup = it.group; list.appendChild(h('div', { class: 'cmdk-group-label' }, it.group)); }
        list.appendChild(h('div', { class: 'cmdk-item' + (idx === selected ? ' highlight' : ''), onclick: it.action, onmouseenter: () => { selected = idx; paintHighlight(); } },
          it.avatar ? (it.avatar.logo
            ? h('div', { class: 'av', style: { background: '#fff', overflow: 'hidden', padding: '0' } }, h('img', { src: it.avatar.logo, alt: '', loading: 'lazy', style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }))
            : h('div', { class: 'av', style: { background: it.avatar.color } }, it.avatar.letter)) : null,
          h('span', { class: 'label' }, it.label),
          it.hint ? h('span', { class: 'hint' }, it.hint) : null,
        ));
      });
    }
    function paintHighlight() {
      $$('.cmdk-item', list).forEach((n, i) => n.classList.toggle('highlight', i === selected));
      const hl = list.querySelector('.cmdk-item.highlight');
      if (hl) hl.scrollIntoView({ block: 'nearest' });
    }
    input.oninput = build;
    input.onkeydown = (e) => {
      if (e.key === 'Escape') { closeCmdK(); }
      else if (e.key === 'ArrowDown') { selected = Math.min(items.length - 1, selected + 1); paintHighlight(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { selected = Math.max(0, selected - 1); paintHighlight(); e.preventDefault(); }
      else if (e.key === 'Enter') { const it = items[selected]; if (it) it.action(); e.preventDefault(); }
    };
    const back = h('div', { class: 'cmdk-backdrop', onclick: (e) => { if (e.target === back) closeCmdK(); } },
      h('div', { class: 'cmdk' },
        h('div', { class: 'cmdk-input' },
          html(ICONS.search),
          input,
          h('span', { class: 'esc' }, 'ESC'),
        ),
        list,
      ),
    );
    document.body.appendChild(back);
    build();
    setTimeout(() => input.focus(), 30);
  }
  function closeCmdK() { document.querySelectorAll('.cmdk-backdrop').forEach(n => n.remove()); }

  /* ---------- Settings ---------- */
  function openSettings(initialTab = 'clis') {
    let currentTab = initialTab;
    const body = h('div');
    const tabBar = h('div', { class: 'tabs' });
    const tabs = [
      { id: 'clis', label: t('tabs.aiTools') },
      { id: 'account', label: t('tabs.account') },
      { id: 'tips', label: t('tabs.tips') },
      { id: 'about', label: t('tabs.about') },
    ];
    function renderTabs() {
      tabBar.innerHTML = '';
      for (const t of tabs) tabBar.appendChild(h('button', { class: 'tab' + (currentTab === t.id ? ' active' : ''), onclick: () => { currentTab = t.id; renderTabs(); renderBody(); } }, t.label));
    }
    function renderBody() {
      body.innerHTML = '';
      if (currentTab === 'clis') body.appendChild(renderSettingsClis());
      else if (currentTab === 'account') body.appendChild(renderSettingsAccount());
      else if (currentTab === 'tips') body.appendChild(renderSettingsTips());
      else if (currentTab === 'about') body.appendChild(renderSettingsAbout());
    }
    renderTabs(); renderBody();
    openModal('Ayarlar', h('div', {}, tabBar, body), null, true);
  }

  function renderSettingsClis() {
    const wrap = h('div');
    wrap.appendChild(h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' } },
      h('div', { style: { color: 'var(--text-2)', fontSize: '13px' } }, 'CLI\'ları yönet, API anahtarlarını ayarla, kendi CLI\'larını ekle.'),
      h('button', { class: 'btn-secondary', onclick: () => openCliEditor(null) }, html(ICONS.plus), 'Yeni CLI'),
    ));
    for (const c of State.clis) {
      wrap.appendChild(h('div', { class: 'cli-row' },
        brandFill(c, 'cli-row-avatar'),
        h('div', { class: 'cli-row-info' },
          h('div', { class: 'cli-row-name' }, c.name,
            c.builtin ? h('span', { class: 'badge brand' }, 'yerleşik') : null,
            c.enabled ? h('span', { class: 'badge on' }, 'aktif') : h('span', { class: 'badge' }, 'kapalı'),
          ),
          h('div', { class: 'cli-row-meta' }, c.command + (c.args?.length ? ' ' + c.args.join(' ') : '')),
        ),
        h('button', { class: 'icon-btn', title: 'Düzenle', onclick: () => openCliEditor(c) }, html(ICONS.edit)),
        !c.builtin ? h('button', { class: 'icon-btn', title: 'Sil', onclick: async () => { if (!confirm(`"${c.name}" silinsin mi?`)) return; try { await api('DELETE', `/api/clis/${c.id}`); await reloadClis(); openSettings('clis'); } catch (e) { Toast.show(e.message, 'error'); } } }, html(ICONS.trash)) : null,
      ));
    }
    return wrap;
  }

  function openCliEditor(existing) {
    const isNew = !existing;
    const cli = existing || { id: '', name: '', command: '', args: [], env: {}, icon: '', color: '#8224e3', description: '', enabled: true, builtin: false };
    const idIn = h('input', { type: 'text', value: cli.id, placeholder: 'ollama, perplexity, vb.', disabled: !isNew });
    const nameIn = h('input', { type: 'text', value: cli.name });
    const cmdIn = h('input', { type: 'text', value: cli.command, placeholder: '/usr/bin/codex' });
    const argsIn = h('input', { type: 'text', value: (cli.args || []).join(' '), placeholder: '(boşlukla ayır)' });
    const descIn = h('input', { type: 'text', value: cli.description || '' });
    const iconIn = h('input', { type: 'text', value: cli.icon || '', maxlength: 2, style: { width: '60px', textAlign: 'center' } });
    const enabledIn = h('input', { type: 'checkbox', ...(cli.enabled !== false ? { checked: true } : {}) });

    const colors = ['#d97757', '#10a37f', '#4285f4', '#8224e3', '#b60c91', '#6a62fe', '#06b6d4', '#ec4899', '#f59e0b', '#22c55e'];
    let chosenColor = cli.color || colors[3];
    const swatchesEl = h('div', { class: 'swatches' });
    function paintSwatches() {
      swatchesEl.innerHTML = '';
      for (const col of colors) swatchesEl.appendChild(h('div', { class: 'swatch' + (col === chosenColor ? ' active' : ''), style: { background: col }, onclick: () => { chosenColor = col; paintSwatches(); } }));
    }
    paintSwatches();

    const envHost = h('div', { class: 'env-editor' });
    const envState = Object.entries(cli.env || {}).map(([k, v]) => ({ k, v }));
    function paintEnv() {
      envHost.innerHTML = '';
      envState.forEach((row, i) => {
        const kIn = h('input', { type: 'text', placeholder: 'KEY (örn: OPENAI_API_KEY)', value: row.k, oninput: (e) => { envState[i].k = e.target.value; } });
        const vIn = h('input', { type: 'text', placeholder: 'değer (API key)', value: row.v, oninput: (e) => { envState[i].v = e.target.value; } });
        envHost.appendChild(h('div', { class: 'env-row' }, kIn, vIn, h('button', { class: 'remove', title: 'Sil', onclick: () => { envState.splice(i, 1); paintEnv(); } }, html(ICONS.trash))));
      });
      envHost.appendChild(h('button', { class: 'btn-ghost', onclick: () => { envState.push({ k: '', v: '' }); paintEnv(); } }, html(ICONS.plus), 'Yeni ortam değişkeni'));
    }
    paintEnv();

    const errBox = h('div', { class: 'alert', style: { display: 'none' } });
    const body = h('div', {},
      h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' } },
        h('div', { class: 'field' }, h('label', {}, 'ID *'), idIn, h('div', { class: 'help' }, 'Benzersiz, kısa kimlik.')),
        h('div', { class: 'field' }, h('label', {}, 'Ad *'), nameIn),
      ),
      h('div', { class: 'field', style: { marginTop: '14px' } }, h('label', {}, 'Komut yolu *'), cmdIn, h('div', { class: 'help' }, 'Tam yol verin: ör. /usr/bin/codex')),
      h('div', { class: 'field', style: { marginTop: '14px' } }, h('label', {}, 'Argümanlar'), argsIn),
      h('div', { class: 'field', style: { marginTop: '14px' } }, h('label', {}, 'Açıklama'), descIn),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '14px', marginTop: '14px', alignItems: 'start' } },
        h('div', { class: 'field' }, h('label', {}, 'Simge'), iconIn),
        h('div', { class: 'field' }, h('label', {}, 'Renk'), swatchesEl),
      ),
      h('div', { class: 'field', style: { marginTop: '20px' } }, h('label', {}, 'Ortam değişkenleri (API anahtarları)'), envHost,
        h('div', { class: 'help' }, 'Örn: ', h('code', {}, 'ANTHROPIC_API_KEY'), ', ', h('code', {}, 'OPENAI_API_KEY'), ', ', h('code', {}, 'GEMINI_API_KEY'), '. CLI başlatılırken bu değişkenler işleme inject edilir.')),
      h('div', { style: { marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' } }, enabledIn, h('span', {}, 'Kenar çubuğunda göster')),
      errBox,
    );

    const saveBtn = h('button', { class: 'btn-primary', onclick: async () => {
      errBox.style.display = 'none';
      const env = {};
      for (const r of envState) { if (r.k.trim()) env[r.k.trim()] = r.v; }
      const args = argsIn.value.trim() ? argsIn.value.trim().split(/\s+/) : [];
      const payload = { name: nameIn.value.trim(), command: cmdIn.value.trim(), args, env, icon: iconIn.value.trim() || (nameIn.value.trim()[0] || '?').toUpperCase(), color: chosenColor, description: descIn.value.trim(), enabled: enabledIn.checked };
      try {
        if (isNew) {
          if (!idIn.value.trim() || !payload.name || !payload.command) { errBox.textContent = 'ID, ad ve komut zorunlu.'; errBox.style.display = 'block'; return; }
          await api('POST', '/api/clis', { id: idIn.value.trim(), ...payload });
        } else { await api('PATCH', `/api/clis/${cli.id}`, payload); }
        await reloadClis(); closeModal(); openSettings('clis'); Toast.show('Kaydedildi', 'success');
      } catch (e) { errBox.textContent = e.message; errBox.style.display = 'block'; }
    } }, isNew ? 'Oluştur' : 'Kaydet');

    openModal(isNew ? 'Yeni CLI' : `Düzenle — ${cli.name}`, body,
      h('div', { style: { display: 'flex', gap: '8px' } }, h('button', { class: 'btn-ghost', onclick: closeModal }, 'Vazgeç'), saveBtn),
      true,
    );
  }

  function renderSettingsAccount() {
    const wrap = h('div');
    const userIn = h('input', { type: 'text', value: State.user.username });
    const curPwIn = h('input', { type: 'password' });
    const newPwIn = h('input', { type: 'password' });
    const new2In = h('input', { type: 'password' });
    const errBox = h('div', { class: 'alert', style: { display: 'none' } });
    const okBox = h('div', { class: 'alert success', style: { display: 'none' } });
    wrap.appendChild(h('div', { class: 'field' }, h('label', {}, 'Kullanıcı adı'), userIn));
    wrap.appendChild(h('button', { class: 'btn-secondary', style: { marginTop: '10px' }, onclick: async () => {
      errBox.style.display = 'none'; okBox.style.display = 'none';
      const cp = prompt('Doğrulama için mevcut parolanı gir:');
      if (!cp) return;
      try {
        await api('POST', '/api/me/username', { newUsername: userIn.value.trim(), currentPassword: cp });
        State.user.username = userIn.value.trim();
        const side = $('.sidebar .user-name'); if (side) side.textContent = State.user.username;
        okBox.textContent = 'Kullanıcı adı güncellendi.'; okBox.style.display = 'block';
      } catch (e) { errBox.textContent = e.message; errBox.style.display = 'block'; }
    } }, 'Kullanıcı adını güncelle'));
    wrap.appendChild(h('hr', { style: { border: 'none', borderTop: '1px solid var(--border)', margin: '24px 0' } }));
    wrap.appendChild(h('div', { style: { fontWeight: 700, marginBottom: '12px' } }, 'Parola değiştir'));
    wrap.appendChild(h('div', { class: 'field' }, h('label', {}, 'Mevcut parola'), curPwIn));
    wrap.appendChild(h('div', { class: 'field', style: { marginTop: '10px' } }, h('label', {}, 'Yeni parola'), newPwIn));
    wrap.appendChild(h('div', { class: 'field', style: { marginTop: '10px' } }, h('label', {}, 'Yeni parola tekrar'), new2In));
    wrap.appendChild(h('button', { class: 'btn-secondary', style: { marginTop: '14px' }, onclick: async () => {
      errBox.style.display = 'none'; okBox.style.display = 'none';
      if (newPwIn.value.length < 8) { errBox.textContent = 'Yeni parola en az 8 karakter olmalı.'; errBox.style.display = 'block'; return; }
      if (newPwIn.value !== new2In.value) { errBox.textContent = 'Parolalar eşleşmiyor.'; errBox.style.display = 'block'; return; }
      try {
        await api('POST', '/api/me/password', { currentPassword: curPwIn.value, newPassword: newPwIn.value });
        curPwIn.value = newPwIn.value = new2In.value = '';
        okBox.textContent = 'Parola güncellendi.'; okBox.style.display = 'block';
      } catch (e) { errBox.textContent = e.message; errBox.style.display = 'block'; }
    } }, 'Parolayı değiştir'));
    wrap.appendChild(errBox); wrap.appendChild(okBox);
    return wrap;
  }

  function renderSettingsTips() {
    return h('div', { style: { lineHeight: 1.7, color: 'var(--text-1)', fontSize: '14px' } },
      h('div', { style: { fontWeight: 700, fontSize: '15px', marginBottom: '8px' } }, 'Klavye kısayolları'),
      h('ul', { style: { paddingLeft: '20px', color: 'var(--text-2)' } },
        h('li', {}, h('span', { class: 'kbd' }, 'Ctrl+N'), ' — yeni sohbet'),
        h('li', {}, h('span', { class: 'kbd' }, 'Ctrl+K'), ' — komut paleti (her şeyi ara)'),
        h('li', {}, h('span', { class: 'kbd' }, 'Ctrl+O'), ' — bu sohbetin dosyaları'),
        h('li', {}, h('span', { class: 'kbd' }, 'Ctrl+Shift+T'), ' — sohbet ↔ terminal modu'),
        h('li', {}, h('span', { class: 'kbd' }, 'Ctrl+Shift+C'), ' — kopyala (her zaman) · ', h('span', { class: 'kbd' }, 'Ctrl+Shift+V'), ' — yapıştır'),
        h('li', {}, h('span', { class: 'kbd' }, 'Ctrl+C'), ' — seçim varsa kopyalar, yoksa CLI\'a SIGINT yollar'),
      ),
      h('div', { style: { fontWeight: 700, fontSize: '15px', marginTop: '20px', marginBottom: '8px' } }, 'Dosya & görsel yükleme'),
      h('ul', { style: { paddingLeft: '20px', color: 'var(--text-2)' } },
        h('li', {}, 'Sürükle-bırak: dosyaları sohbet ekranına bırakın'),
        h('li', {}, 'Mesaj kutusundaki ', h('strong', {}, '📎'), ' butonu: dosya seçici açar'),
        h('li', {}, 'Görsel yapıştırma: ekran görüntüsünü ', h('span', { class: 'kbd' }, 'Ctrl+V'), ' ile mesaj kutusuna yapıştırın → otomatik yüklenir'),
        h('li', {}, 'Yüklenen dosyalar sohbetin çalışma dizininde olur (', h('code', {}, '/opt/ai-cli/sessions/<id>/'), '). CLI bunlara doğrudan erişebilir — ', h('em', {}, '"summarize @file.pdf"'), ' gibi kullanabilirsiniz.'),
        h('li', {}, h('strong', {}, 'Önemli:'), ' sohbeti silerseniz tüm dosyalar kalıcı olarak silinir.'),
      ),
      h('div', { style: { fontWeight: 700, fontSize: '15px', marginTop: '20px', marginBottom: '8px' } }, 'Sohbet ↔ Terminal modu'),
      h('ul', { style: { paddingLeft: '20px', color: 'var(--text-2)' } },
        h('li', {}, h('strong', {}, 'Sohbet modu:'), ' altta mesaj kutusu — günlük kullanım için ideal.'),
        h('li', {}, h('strong', {}, 'Terminal modu:'), ' tam ekran terminal — sekme tamamlama, ok tuşları, vim, fzf gibi her şey çalışır.'),
        h('li', {}, 'İkisi aynı PTY oturumunu paylaşır. İstediğin zaman geçersin, CLI hiç durmaz.'),
      ),
      h('div', { style: { fontWeight: 700, fontSize: '15px', marginTop: '20px', marginBottom: '8px' } }, 'API anahtarları & login'),
      h('ul', { style: { paddingLeft: '20px', color: 'var(--text-2)' } },
        h('li', {}, 'OpenAI/Codex, Gemini gibi CLI\'lar genelde ', h('strong', {}, 'browser login'), ' veya ', h('strong', {}, 'API key'), ' ile çalışır.'),
        h('li', {}, 'Browser login: URL\'yi seçip ', h('span', { class: 'kbd' }, 'Ctrl+Shift+C'), ' ile kopyala, kendi bilgisayarında aç.'),
        h('li', {}, 'API key: ', h('em', {}, 'Ayarlar → AI Araçları → [CLI] → Düzenle → Ortam değişkenleri'), ' kısmına ekle.'),
      ),
    );
  }

  function renderSettingsAbout() {
    const wrap = h('div', { style: { lineHeight: 1.65, fontSize: '14px', color: 'var(--text-1)' } });
    wrap.appendChild(h('div', { class: 'about-hero' },
      hostragonsLogo('lg'),
      h('div', { class: 'text' },
        h('div', { class: 'title' }, 'Hostragons® — Çok Ama Çok Hızlı Hosting'),
        h('div', { class: 'sub' }, `${HOST.customers} müşteri tarafından güveniliyor · Birleşik Krallık merkezli · TrustPilot 4.7/5`),
      ),
    ));

    wrap.appendChild(h('p', { class: 'mt-6' },
      h('strong', {}, HOST.brand), ', ', new Date().getFullYear() - HOST.founded, ' yıllık deneyimiyle Birleşik Krallık merkezli, ',
      'web hosting, sanal sunucu, alan adı, mail hosting ve WordPress hosting hizmetleri sunan bir teknoloji firmasıdır. ',
      h('strong', {}, 'Londra'), ' ve ', h('strong', {}, 'Singapur'), '\'da Tier III+ veri merkezlerinden, nVME SSD disklerle yüksek performans sağlar.'),
    );

    wrap.appendChild(h('p', { class: 'mt-4' },
      h('strong', {}, 'RagonsAI'), ', Hostragons® altyapısında çalışan, sunucunuzdaki Claude Code, OpenAI Codex, Gemini ve özel olarak tanımladığınız tüm CLI\'lara web tarayıcısı üzerinden — SSH\'sız, kalıcı oturumlu, dosya yükleme destekli — erişim sağlayan profesyonel bir araçtır.'));

    wrap.appendChild(h('div', { class: 'about-grid' },
      aboutCard('Kuruluş', `${HOST.founded}`, 'Türkiye → Londra (2022)'),
      aboutCard('Müşteri', HOST.customers, 'küresel'),
      aboutCard('Çalışan', String(HOST.employees), 'tam zamanlı'),
      aboutCard('Şirket No', HOST.companyNo, 'United Kingdom'),
      aboutCard('Destek', '24/7/365', 'her zaman online'),
      aboutCard('Veri Merkezi', 'London · Singapore', 'Tier III+'),
    ));

    wrap.appendChild(h('div', { style: { fontWeight: 700, fontSize: '14px', marginTop: '22px' } }, 'Hizmetler'));
    wrap.appendChild(h('div', { class: 'about-services' }, ...HOST.services.map(s =>
      h('a', { class: 'about-service', href: s.url, target: '_blank', rel: 'noopener' },
        h('span', { class: 'dot' }), h('span', {}, s.name),
      )
    )));

    wrap.appendChild(h('div', { style: { fontWeight: 700, fontSize: '14px', marginTop: '22px' } }, 'İletişim'));
    wrap.appendChild(h('div', { class: 'about-grid' },
      aboutCard('Adres', HOST.address.split(',')[0], HOST.address.split(',').slice(1).join(',').trim()),
      aboutCard('E-posta', h('a', { href: `mailto:${HOST.email}` }, HOST.email), ''),
      aboutCard('Telefon', HOST.phone, 'Birleşik Krallık'),
      aboutCard('Web', h('a', { href: HOST.url, target: '_blank', rel: 'noopener' }, 'www.hostragons.com'), ''),
    ));

    wrap.appendChild(h('div', { style: { fontWeight: 700, fontSize: '14px', marginTop: '22px' } }, 'Sosyal medya'));
    wrap.appendChild(h('div', { class: 'about-links' }, ...HOST.socials.map(s =>
      h('a', { class: 'about-link', href: s.url, target: '_blank', rel: 'noopener' }, html(ICONS.external), s.name),
    )));

    wrap.appendChild(h('div', { style: { fontWeight: 700, fontSize: '14px', marginTop: '22px' } }, 'Ödüller'));
    wrap.appendChild(h('ul', { style: { marginTop: '6px', paddingLeft: '20px', color: 'var(--text-2)' } },
      h('li', {}, '2026: ', h('strong', {}, 'Top 25 Best Gaming Hosting Provider'), ' — HostAdvice'),
      h('li', {}, '2025: ', h('strong', {}, 'Top 25 Offshore Hosting'), ' — HostAdvice'),
      h('li', {}, '2021: ', h('strong', {}, 'Top 10 Cloud Hosting'), ' — HostAdvice'),
      h('li', {}, 'HostAdvice 4.6/5 · TrustPilot 4.7/5'),
    ));

    // System stats (live)
    wrap.appendChild(h('div', { style: { fontWeight: 700, fontSize: '14px', marginTop: '22px' } }, 'Bu sunucu'));
    const statsHost = h('div', { class: 'stats-grid', id: 'stats-grid' }, h('div', { style: { color: 'var(--text-3)', fontSize: '13px' } }, 'Yükleniyor…'));
    wrap.appendChild(statsHost);
    api('GET', '/api/stats').then(s => {
      statsHost.innerHTML = '';
      const memPct = s.mem.total ? Math.round((s.mem.used / s.mem.total) * 1000) / 10 : 0;
      statsHost.appendChild(statCard('Host', s.host, s.platform));
      statsHost.appendChild(statCard('CPU', String(s.cpu.count) + ' çekirdek', s.cpu.model.slice(0, 28)));
      statsHost.appendChild(statCard('RAM', `${fmtBytes(s.mem.used)} / ${fmtBytes(s.mem.total)}`, `${memPct}% kullanımda`, memPct));
      if (s.disk) statsHost.appendChild(statCard('Disk', `${fmtBytes(s.disk.used)} / ${fmtBytes(s.disk.total)}`, `${s.disk.usedPct}% kullanımda`, s.disk.usedPct));
      statsHost.appendChild(statCard('Uptime', fmtUptime(s.uptimeSec), 'sistem'));
      statsHost.appendChild(statCard('Servis', fmtUptime(s.procUptimeSec), `node ${s.node}`));
      statsHost.appendChild(statCard('Aktif CLI', String(s.activeSessions), 'çalışan oturum'));
    }).catch(() => { statsHost.innerHTML = '<div style="color:var(--text-3);font-size:13px">Sistem bilgisi alınamadı.</div>'; });

    wrap.appendChild(h('p', { class: 'mt-6', style: { color: 'var(--text-3)', fontSize: '12px' } },
      'Sunucu: ', h('code', {}, location.hostname), ' · RagonsAI v1.1 · © ', new Date().getFullYear(), ' Hostragons®',
    ));

    return wrap;
  }

  function aboutCard(label, value, meta) {
    return h('div', { class: 'about-card' },
      h('div', { class: 'label' }, label),
      h('div', { class: 'value' }, value),
      meta ? h('div', { class: 'meta' }, meta) : null,
    );
  }
  function statCard(label, value, meta, pct) {
    return h('div', { class: 'stat-card' },
      h('div', { class: 'label' }, label),
      h('div', { class: 'value' }, value),
      meta ? h('div', { style: { fontSize: '11.5px', color: 'var(--text-3)', marginTop: '2px' } }, meta) : null,
      typeof pct === 'number' ? h('div', { class: 'bar' }, h('div', { style: { width: Math.min(100, pct) + '%' } })) : null,
    );
  }

  async function reloadClis() { const res = await api('GET', '/api/clis'); State.clis = res.clis; }

  /* ---------- Global shortcuts ---------- */
  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toLowerCase().includes('mac');
    const meta = isMac ? e.metaKey : e.ctrlKey;
    // Ignore if focused inside terminal (it handles its own shortcuts) — but allow Ctrl+K / Ctrl+N
    if (meta && !e.shiftKey && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault(); openCmdK();
    } else if (meta && !e.shiftKey && (e.key === 'n' || e.key === 'N')) {
      // Some browsers reserve Ctrl+N. We try anyway.
      e.preventDefault(); newSessionWizard();
    } else if (meta && !e.shiftKey && (e.key === 'o' || e.key === 'O')) {
      if (State.active) { e.preventDefault(); openFilesModal(); }
    } else if (meta && e.shiftKey && (e.key === 'T' || e.key === 't')) {
      if (State.active) { e.preventDefault(); setMode(State.mode === 'chat' ? 'terminal' : 'chat'); }
    }
  });

  /* ---------- Boot ---------- */
  async function boot() {
    Toast.init();
    renderLoading();
    try {
      const bs = await api('GET', '/api/bootstrap');
      if (bs.needsSetup) { renderSetup(); return; }
    } catch {}
    try {
      await loadState();
      if (State.conversations.length && !State.active) State.active = State.conversations[0].id;
      renderApp();
    } catch (e) {
      renderLogin();
    }
  }

  // When the network returns or the tab regains focus, reconnect a dead socket
  // immediately instead of waiting out the backoff timer.
  function maybeReconnect() {
    if (!State.active) return;
    if (State.wsIntentional) return;
    if (State.ws && (State.ws.readyState === 0 || State.ws.readyState === 1)) return;
    if (State.wsTimer) { clearTimeout(State.wsTimer); State.wsTimer = null; }
    State.wsAttempts = 0;
    State.wsConv = State.active;
    connectWs(true);
  }
  window.addEventListener('online', maybeReconnect);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) maybeReconnect(); });

  document.addEventListener('DOMContentLoaded', boot);
})();
