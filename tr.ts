import type { TranslationKeys } from "./en";

const tr: TranslationKeys = {
  // Common
  common: {
    save: "Kaydet",
    cancel: "İptal",
    delete: "Sil",
    edit: "Düzenle",
    back: "Geri",
    loading: "Yükleniyor...",
    confirm: "Onayla",
    yes: "Evet",
    no: "Hayır",
    enabled: "Etkin",
    disabled: "Devre dışı",
    configured: "Yapılandırıldı",
    not_configured: "Yapılandırılmadı",
    coming_soon: "Yakında",
    available: "Kullanılabilir",
    click_to_manage: "Yönetmek için tıkla",
    click_to_setup: "Kurmak için tıkla",
    click_to_customize: "Özelleştirmek için tıkla",
    required: "Gerekli",
    optional: "Opsiyonel",
    search: "Ara",
    no_results: "Sonuç bulunamadı",
    error: "Bir şeyler yanlış gitti",
    success: "Başarılı",
  },

  // Navigation / Sidebar
  nav: {
    dashboard: "Panel",
    queue: "Sıra",
    tickets: "Destek Talepleri",
    applications: "Başvurular",
    settings: "Ayarlar",
    logout: "Çıkış Yap",
  },

  // Auth
  auth: {
    login: "Discord ile Giriş Yap",
    logout: "Çıkış Yap",
    login_description: "Devam etmek için Discord hesabınla giriş yap",
  },

  // Customer dashboard
  customer: {
    welcome: "Tekrar hoş geldin, {name}!",
    subtitle: "FiveM sunucunun yapılandırmasını ve sıra ayarlarını yönet.",
    setup_progress: "Kurulum İlerlemesi",
    required_completed: "{completed} / {total} gerekli öğe tamamlandı",
    completed: "Tamamlandı",
    remaining: "Kalan",
    all_completed: "Tüm gerekli öğeler tamamlandı!",
    done: "Bitti",

    // Section headers
    essential_setup: "Temel Kurulum",
    discord_configuration: "Discord Yapılandırması",
    features: "Özellikler",
    branding: "Markalaşma",

    // Essential setup cards
    fivem_title: "FiveM API Yapılandırması",
    fivem_desc_done: "FiveM sunucun yapılandırıldı ve sıra yönetimine hazır.",
    fivem_desc_pending: "Sıra yönetimini etkinleştirmek için FiveM API ayarlarını yapılandır.",

    discord_title: "Discord Kurulumu",
    discord_desc_done: "Discord botun yapılandırıldı ve sıra yönetimine hazır.",
    discord_desc_pending: "Discord bot token'ını ve sunucu ID'sini yapılandır.",

    tebex_title: "Tebex API Yapılandırması",
    tebex_desc_done: "Tebex API yapılandırıldı ve ödeme takibine hazır.",
    tebex_desc_pending: "Satın alma geçmişini etkinleştirmek için Tebex API anahtarını yapılandır.",

    // Discord configuration cards
    dashboard_roles_title: "Panel Rol Ayarları",
    dashboard_roles_desc: "Panel erişimi ve sıraya katılım için Discord rollerini yapılandır.",
    dashboard_roles_locked: "Panel rol ayarlarını yapmak için önce Discord kurulumunu tamamla.",

    queue_roles_title: "Sıra Rolleri",
    queue_roles_desc: "Öncelik, bypass slotları ve express pass için Discord rollerini yapılandır.",
    queue_roles_desc_done: "Sıra önceliği ve bypass için Discord rollerin ayarlanmış.",
    queue_roles_locked: "Sıra rollerini ayarlamak için önce Discord kurulumunu tamamla.",

    moderators_title: "Moderatörler",
    moderators_desc: "Sunucundaki ticket ve başvuruları yönetmek için moderatörler ekle.",
    moderators_desc_done: "Ticket ve başvurulara erişimi olan moderatörlerin var.",
    moderators_locked: "Moderatörleri yönetmek için önce Discord kurulumunu tamamla.",
    discord_required: "Önce Discord kurulumunu tamamla",

    // Features cards
    module_settings_title: "Modül Ayarları",
    module_settings_desc: "Modülleri etkinleştir veya devre dışı bırak ve oyuncular ile moderatörler için sıra erişimini kontrol et",

    application_builder_title: "Başvuru Oluşturucu",
    application_builder_desc: "Oyuncuların doldurabileceği özel sorularla başvuru formları oluştur ve yönet.",

    tickets_title: "Destek Talepleri",
    tickets_desc: "Ticket kategorilerini yönet ve oyuncular ile moderatörler için destek sistemini özelleştir.",

    notifications_title: "Discord Bildirimleri",
    notifications_desc: "Sıra, başvurular ve ticketlar için Discord bildirimlerini yapılandır",

    queue_builder_title: "Sıra Oluşturucu",
    queue_builder_desc: "Gelişmiş kurallar, öncelikler ve otomasyon ile sıra sistemini oluştur ve özelleştir.",

    language_title: "Dil",
    language_desc: "Oyuncuların göreceği arayüz dilini ayarla.",

    // Branding cards
    app_customization_title: "Uygulama Özelleştirme",
    app_customization_desc: "Tüm uygulamada kullanılacak ana renk gibi genel ayarları özelleştir.",

    dashboard_customization_title: "Panel Özelleştirme",
    dashboard_customization_desc: "Senin ve tüm oyuncuların/moderatörlerin göreceği panel logosunu özelleştir.",

    home_page_title: "Ana Sayfa Özelleştirme",
    home_page_desc: "Oyuncular için ana sayfanın görünümünü, içeriğini ve hızlı bağlantılarını özelleştir.",

    login_customization_title: "Giriş Sayfası Özelleştirme",
    login_customization_desc: "Giriş sayfasının görünümünü, markasını ve doğrulama akışını özelleştir.",

    custom_domain_title: "Özel Alan Adı",
    custom_domain_desc_done: "Özel alan adın yapılandırıldı ve kullanıma hazır.",
    custom_domain_desc_pending: "Ana sayfanda kendi domainini kullanmak için özel alan adı yapılandır.",
  },

  // Language settings page
  language: {
    title: "Dil",
    description: "Oyuncuların göreceği arayüz dilini ayarla.",
    select_label: "Arayüz Dili",
    select_description: "Oyuncuların sıra, ticket ve başvuruları kullanırken göreceği dili belirler.",
    select_language: "Dil Seç",
    select_language_description: "Oyuncuların göreceği dili seç.",
    save_success: "Dil başarıyla kaydedildi",
    save_error: "Dil kaydedilirken hata oluştu",
    english: "İngilizce",
    spanish: "İspanyolca",
  },

  // Queue
  queue: {
    title: "Sıra",
    position: "Pozisyon",
    join: "Sıraya Katıl",
    leave: "Sıradan Ayrıl",
    players_in_queue: "Sırada {count} oyuncu var",
    your_position: "Sıradaki yerin: {position}",
    estimated_wait: "Tahmini bekleme: {time}",
    queue_closed: "Sıra kapalı",
    queue_open: "Sıra açık",
  },

  // Tickets
  tickets: {
    title: "Destek Talepleri",
    create: "Ticket Oluştur",
    open: "Açık",
    closed: "Kapalı",
    no_tickets: "Ticket yok",
    subject: "Konu",
    description: "Açıklama",
    status: "Durum",
    created_at: "Oluşturuldu",
    updated_at: "Son güncelleme",
    close_ticket: "Ticket Kapat",
    ticket_closed: "Ticket kapatıldı",
    message_placeholder: "Mesajını yaz...",
    send: "Gönder",
  },

  // Applications
  applications: {
    title: "Başvurular",
    submit: "Başvuru Gönder",
    no_applications: "Mevcut başvuru yok",
    submitted: "Başvuru başarıyla gönderildi",
    already_submitted: "Bu başvuruyu zaten gönderdin",
    status: "Durum",
    pending: "Beklemede",
    approved: "Onaylandı",
    rejected: "Reddedildi",
  },
};

export default tr;