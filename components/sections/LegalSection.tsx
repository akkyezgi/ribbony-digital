'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

type LegalType = 'kvkk' | 'privacy' | 'cookies';
type Locale = 'tr' | 'en';

interface Section {
  id: string;
  title: string;
  body: string[];
  list?: string[];
  subsections?: { title: string; body: string[] }[];
}

interface LegalContent {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

// ─── Content ──────────────────────────────────────────────────────────────────

const CONTENT: Record<LegalType, Record<Locale, LegalContent>> = {

  // ── KVKK ────────────────────────────────────────────────────────────────────

  kvkk: {
    tr: {
      title: 'KVKK Aydınlatma Metni',
      lastUpdated: 'Son güncelleme: Ocak 2025',
      intro:
        'Ribbony Dijital Pazarlama ("Ribbony" veya "Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmek amacıyla bu Aydınlatma Metni hazırlanmıştır.',
      sections: [
        {
          id: 'veri-sorumlusu',
          title: '1. Veri Sorumlusunun Kimliği',
          body: [
            'Veri sorumlusu sıfatıyla Ribbony Dijital Pazarlama, Büyükdere Caddesi No:1, Levent, Şişli, İstanbul adresinde faaliyet göstermektedir. İletişim: info@ribbony.com | +90 (212) 000 00 00.',
          ],
        },
        {
          id: 'isleme-amaci',
          title: '2. Kişisel Verilerin İşlenme Amaçları',
          body: [
            'Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:',
          ],
          list: [
            'Talep ettiğiniz hizmetlerin sunulması ve sözleşme ilişkisinin yürütülmesi',
            'İletişim formları aracılığıyla iletilen talep, soru ve şikayetlerin yanıtlanması',
            'Dijital pazarlama hizmetlerine ilişkin tekliflerin hazırlanması',
            'Hizmet kalitesinin iyileştirilmesi ve müşteri memnuniyetinin ölçülmesi',
            'Yasal yükümlülüklerin yerine getirilmesi ve hukuki süreçlerin yürütülmesi',
            'Web sitesi güvenliğinin sağlanması ve teknik sorunların giderilmesi',
            'Açık rızanız bulunması halinde ticari elektronik ileti gönderilmesi',
          ],
        },
        {
          id: 'alici-gruplari',
          title: '3. Kişisel Verilerin Aktarılabileceği Alıcı Grupları',
          body: [
            'Kişisel verileriniz; hizmet sunumunun gerektirdiği ölçüde ve KVKK\'nın 8. ve 9. maddeleri çerçevesinde aşağıdaki alıcı gruplarına aktarılabilir:',
          ],
          list: [
            'Bulut altyapısı ve barındırma hizmeti sağlayıcıları (Vercel, Google Cloud)',
            'E-posta gönderim hizmeti sağlayıcıları (Resend)',
            'Web analitik hizmeti sağlayıcıları (Google Analytics 4)',
            'Reklam platformları (Google Ads, Meta Ads) — yalnızca açık rızanız dahilinde',
            'Yasal zorunluluk kapsamında yetkili kamu kurum ve kuruluşları',
          ],
        },
        {
          id: 'toplama-yontemi',
          title: '4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi',
          body: [
            'Kişisel verileriniz; web sitemizde yer alan iletişim formları, e-posta yazışmaları, telefon görüşmeleri ve çerezler aracılığıyla otomatik ya da otomatik olmayan yollarla toplanmaktadır.',
            'İşlemelerin hukuki sebepleri şunlardır: (a) sözleşmenin kurulması veya ifası, (b) meşru menfaatlerimizin korunması, (c) yasal yükümlülüklerin yerine getirilmesi, (d) açık rızanızın alınması.',
          ],
        },
        {
          id: 'saklama-sureleri',
          title: '5. Kişisel Veri Saklama Süreleri',
          body: [
            'Kişisel verileriniz; işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen yasal saklama süreleri esas alınarak muhafaza edilmektedir. Amacın sona ermesi ve yasal sürelerin dolması halinde veriler güvenli biçimde imha edilmektedir.',
          ],
          list: [
            'İletişim formu verileri: son işlem tarihinden itibaren 3 yıl',
            'Sözleşme ve fatura bilgileri: yasal yükümlülük gereği 10 yıl',
            'Çerez verileri: çerez türüne göre değişmekle birlikte en fazla 13 ay',
            'Analitik veriler: anonimleştirilerek süresiz saklanabilir',
          ],
        },
        {
          id: 'haklar',
          title: '6. Kişisel Veri Sahibinin Hakları',
          body: [
            'KVKK\'nın 11. maddesi uyarınca kişisel verilerinize ilişkin aşağıdaki haklardan yararlanabilirsiniz:',
          ],
          list: [
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
            'İşlenmişse buna ilişkin bilgi talep etme',
            'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
            'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
            'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
            'Kanun\'un 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme',
            'Yapılan işlemlerin verinin aktarıldığı üçüncü kişilere bildirilmesini isteme',
            'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize sonuç doğurmasına itiraz etme',
            'Kanun\'a aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme',
          ],
        },
        {
          id: 'basvuru',
          title: '7. Başvuru Yöntemi',
          body: [
            'Haklarınızı kullanmak için info@ribbony.com adresine e-posta göndererek veya Büyükdere Caddesi No:1, Şişli, İstanbul adresine yazılı başvuruda bulunarak Şirketimize iletebilirsiniz. Başvurularınız, kimliğinizin doğrulanmasının ardından KVKK\'nın 13. maddesi gereğince en geç otuz (30) gün içinde yanıtlanacaktır.',
          ],
        },
      ],
    },
    en: {
      title: 'KVKK Disclosure Text',
      lastUpdated: 'Last updated: January 2025',
      intro:
        'This Disclosure Text has been prepared by Ribbony Digital Marketing ("Ribbony" or "Company") to inform you about the processing of your personal data within the scope of the Law on Protection of Personal Data No. 6698 ("KVKK").',
      sections: [
        {
          id: 'data-controller',
          title: '1. Identity of the Data Controller',
          body: [
            'As the data controller, Ribbony Digital Marketing operates at Büyükdere Caddesi No:1, Levent, Sisli, Istanbul, Turkey. Contact: info@ribbony.com | +90 (212) 000 00 00.',
          ],
        },
        {
          id: 'processing-purposes',
          title: '2. Purposes of Processing Personal Data',
          body: ['Your personal data is processed for the following purposes:'],
          list: [
            'Providing the services you request and managing the contractual relationship',
            'Responding to inquiries, questions, and complaints submitted via contact forms',
            'Preparing proposals related to digital marketing services',
            'Improving service quality and measuring customer satisfaction',
            'Fulfilling legal obligations and conducting legal proceedings',
            'Ensuring website security and resolving technical issues',
            'Sending commercial electronic messages subject to your explicit consent',
          ],
        },
        {
          id: 'recipients',
          title: '3. Recipient Groups to Which Personal Data May Be Transferred',
          body: [
            'Your personal data may be transferred to the following recipient groups to the extent required for service delivery and within the framework of Articles 8 and 9 of KVKK:',
          ],
          list: [
            'Cloud infrastructure and hosting service providers (Vercel, Google Cloud)',
            'Email delivery service providers (Resend)',
            'Web analytics service providers (Google Analytics 4)',
            'Advertising platforms (Google Ads, Meta Ads) — only with your explicit consent',
            'Authorized public institutions and organizations within the scope of legal obligation',
          ],
        },
        {
          id: 'collection-method',
          title: '4. Method of Data Collection and Legal Basis',
          body: [
            'Your personal data is collected through contact forms on our website, email correspondence, phone calls, and cookies, via automated or non-automated means.',
            'The legal bases for processing are: (a) establishment or performance of a contract, (b) protection of our legitimate interests, (c) fulfillment of legal obligations, (d) your explicit consent.',
          ],
        },
        {
          id: 'retention',
          title: '5. Personal Data Retention Periods',
          body: [
            'Your personal data is retained for the duration required by the purpose of processing and in accordance with the legal retention periods prescribed by applicable legislation. Upon expiry of the purpose and legal periods, data is securely destroyed.',
          ],
          list: [
            'Contact form data: 3 years from the date of last transaction',
            'Contract and invoice information: 10 years as required by law',
            'Cookie data: up to 13 months depending on cookie type',
            'Analytics data: may be retained indefinitely in anonymized form',
          ],
        },
        {
          id: 'rights',
          title: '6. Rights of the Personal Data Subject',
          body: [
            'Pursuant to Article 11 of KVKK, you may exercise the following rights regarding your personal data:',
          ],
          list: [
            'Learn whether your personal data has been processed',
            'Request information if it has been processed',
            'Learn the purpose of processing and whether it is used accordingly',
            'Know third parties to whom data has been transferred domestically or abroad',
            'Request correction if data is incomplete or incorrect',
            'Request deletion or destruction under Article 7 of the Law',
            'Request notification of corrections or deletions to third parties',
            'Object to results arising solely from automated analysis that are unfavorable to you',
            'Claim compensation if you suffer damage due to unlawful processing',
          ],
        },
        {
          id: 'application',
          title: '7. How to Apply',
          body: [
            'To exercise your rights, you may contact us by email at info@ribbony.com or by written application to Büyükdere Caddesi No:1, Sisli, Istanbul. Your applications will be responded to within thirty (30) days at the latest following verification of your identity, in accordance with Article 13 of KVKK.',
          ],
        },
      ],
    },
  },

  // ── Privacy Policy ──────────────────────────────────────────────────────────

  privacy: {
    tr: {
      title: 'Gizlilik Politikası',
      lastUpdated: 'Son güncelleme: Ocak 2025',
      intro:
        'Ribbony olarak gizliliğinizi ciddiye alıyoruz. Bu politika, web sitemizi (ribbony.com) ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda hangi kişisel verilerin toplandığını, nasıl kullanıldığını ve haklarınızı açıklamaktadır.',
      sections: [
        {
          id: 'kapsam',
          title: '1. Kapsam',
          body: [
            'Bu Gizlilik Politikası; ribbony.com alan adı üzerinden sunulan web sitesi, iletişim formları ve dijital hizmetler için geçerlidir. Üçüncü taraf web siteleri veya platformlar bu politika kapsamında değildir.',
          ],
        },
        {
          id: 'toplanan-veriler',
          title: '2. Topladığımız Kişisel Veriler',
          body: ['Yalnızca hizmet sunumu için gerekli olan veriler toplanmaktadır:'],
          subsections: [
            {
              title: 'Doğrudan sağladığınız veriler',
              body: [
                'İletişim formu doldurmak, bülten aboneliği oluşturmak veya hizmet talebi iletmek suretiyle ad-soyad, e-posta adresi, telefon numarası, şirket adı ve mesaj içeriğini bizimle paylaşırsınız.',
              ],
            },
            {
              title: 'Otomatik olarak toplanan veriler',
              body: [
                'Web sitemizi ziyaretiniz sırasında IP adresi, tarayıcı türü ve versiyonu, ziyaret edilen sayfalar, ziyaret süresi ve referans URL gibi teknik veriler çerezler ve analitik araçlar aracılığıyla toplanabilir.',
              ],
            },
          ],
        },
        {
          id: 'kullanim-amaci',
          title: '3. Verilerin Kullanım Amaçları',
          body: ['Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:'],
          list: [
            'Tarafınızdan gelen talep ve soruları yanıtlamak',
            'Hizmet teklifleri ve sözleşme süreçlerini yürütmek',
            'Dijital pazarlama hizmetlerini sunmak ve geliştirmek',
            'Web sitesi performansını analiz etmek ve iyileştirmek',
            'Yasal yükümlülükleri yerine getirmek',
            'Açık rızanız dahilinde pazarlama iletişimi yapmak',
          ],
        },
        {
          id: 'paylasim',
          title: '4. Verilerin Paylaşımı',
          body: [
            'Kişisel verileriniz üçüncü taraflarla satılmaz, kiralanmaz veya ticari amaçla paylaşılmaz. Veriler; hizmet sunumu amacıyla altyapı sağlayıcılar (Vercel, Google Cloud), e-posta servisleri (Resend) ve analitik araçlar (Google Analytics 4) ile paylaşılabilir. Bu sağlayıcıların tamamı veri güvenliğine ilişkin geçerli standartları karşılamaktadır.',
            'Bunların dışında; yasal zorunluluk, mahkeme kararı veya resmi talep halinde yetkili kurum ve kuruluşlarla paylaşım yapılabilir.',
          ],
        },
        {
          id: 'guvenlik',
          title: '5. Veri Güvenliği',
          body: [
            'Kişisel verilerinizi yetkisiz erişim, değiştirme, ifşa etme veya imhaya karşı korumak için endüstri standardı teknik ve idari tedbirler uygulamaktayız. Web sitemiz SSL/TLS şifreleme protokolü ile güvence altına alınmıştır.',
            'Bununla birlikte, internet üzerinden hiçbir veri aktarımının veya depolama yönteminin %100 güvenli olduğunu garanti edemeyiz. Herhangi bir güvenlik ihlali tespit etmeniz halinde lütfen info@ribbony.com adresine bildirin.',
          ],
        },
        {
          id: 'cerezler',
          title: '6. Cerezler',
          body: [
            'Web sitemiz, deneyiminizi iyileştirmek ve performansı analiz etmek amacıyla cerezler kullanmaktadır. Cerezleri nasıl kullandığımız ve tercihlerinizi nasıl yönetebileceğiniz hakkında ayrıntılı bilgi için Cerez Politikamızı inceleyebilirsiniz.',
          ],
        },
        {
          id: 'ucuncu-taraf',
          title: '7. Ucuncu Taraf Baglantilar',
          body: [
            'Web sitemiz, Google, Instagram ve LinkedIn gibi üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz. Söz konusu siteleri ziyaret etmeden önce gizlilik politikalarını incelemenizi öneririz.',
          ],
        },
        {
          id: 'degisiklikler',
          title: '8. Politika Degisiklikleri',
          body: [
            'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişikliklerde web sitemizde duyuru yapılacaktır. Politikanın güncel sürümü her zaman bu sayfada yayımlanmaktadır.',
          ],
        },
        {
          id: 'iletisim',
          title: '9. İletişim',
          body: [
            'Gizlilik uygulamalarımıza ilişkin sorularınız için info@ribbony.com adresinden veya +90 (212) 000 00 00 numaralı telefondan bizimle iletişime geçebilirsiniz.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 2025',
      intro:
        'At Ribbony, we take your privacy seriously. This policy explains what personal data is collected when you visit our website (ribbony.com) or use our services, how it is used, and your rights.',
      sections: [
        {
          id: 'scope',
          title: '1. Scope',
          body: [
            'This Privacy Policy applies to the website, contact forms, and digital services provided through the ribbony.com domain. Third-party websites or platforms are not covered by this policy.',
          ],
        },
        {
          id: 'data-collected',
          title: '2. Personal Data We Collect',
          body: ['Only data necessary for service delivery is collected:'],
          subsections: [
            {
              title: 'Data you provide directly',
              body: [
                'By filling out a contact form, subscribing to a newsletter, or submitting a service request, you share your name, email address, phone number, company name, and message content with us.',
              ],
            },
            {
              title: 'Automatically collected data',
              body: [
                'During your visit to our website, technical data such as IP address, browser type and version, pages visited, visit duration, and referral URL may be collected via cookies and analytics tools.',
              ],
            },
          ],
        },
        {
          id: 'purposes',
          title: '3. Purposes of Data Use',
          body: ['Collected personal data is used for the following purposes:'],
          list: [
            'Responding to requests and inquiries from you',
            'Managing service proposals and contract processes',
            'Delivering and improving digital marketing services',
            'Analyzing and improving website performance',
            'Fulfilling legal obligations',
            'Conducting marketing communications with your explicit consent',
          ],
        },
        {
          id: 'sharing',
          title: '4. Data Sharing',
          body: [
            "Your personal data is not sold, rented, or shared commercially with third parties. Data may be shared with infrastructure providers (Vercel, Google Cloud), email services (Resend), and analytics tools (Google Analytics 4) for service delivery purposes. All such providers meet applicable data security standards.",
            'Beyond these, sharing may occur with authorized institutions and organizations in the event of a legal obligation, court order, or official request.',
          ],
        },
        {
          id: 'security',
          title: '5. Data Security',
          body: [
            'We implement industry-standard technical and administrative measures to protect your personal data against unauthorized access, modification, disclosure, or destruction. Our website is secured with SSL/TLS encryption.',
            'However, we cannot guarantee that any data transmission over the internet or storage method is 100% secure. If you detect any security breach, please report it to info@ribbony.com.',
          ],
        },
        {
          id: 'cookies',
          title: '6. Cookies',
          body: [
            'Our website uses cookies to improve your experience and analyze performance. For detailed information on how we use cookies and how to manage your preferences, please review our Cookie Policy.',
          ],
        },
        {
          id: 'third-party',
          title: '7. Third-Party Links',
          body: [
            'Our website may contain links to third-party websites such as Google, Instagram, and LinkedIn. We are not responsible for their privacy practices. We recommend reviewing their privacy policies before visiting those sites.',
          ],
        },
        {
          id: 'changes',
          title: '8. Policy Changes',
          body: [
            'We may update this Privacy Policy from time to time. For significant changes, an announcement will be made on our website. The current version of the policy is always published on this page.',
          ],
        },
        {
          id: 'contact',
          title: '9. Contact',
          body: [
            'For questions about our privacy practices, you can reach us at info@ribbony.com or by phone at +90 (212) 000 00 00.',
          ],
        },
      ],
    },
  },

  // ── Cookie Policy ───────────────────────────────────────────────────────────

  cookies: {
    tr: {
      title: 'Cerez Politikasi',
      lastUpdated: 'Son güncelleme: Ocak 2025',
      intro:
        'Bu Cerez Politikasi, ribbony.com web sitesinde kullanilan cerezleri, amaclarini ve tercihlerinizi nasil yonetebileceginizi aciklamaktadir.',
      sections: [
        {
          id: 'cerez-nedir',
          title: '1. Cerez Nedir?',
          body: [
            'Cerezler, ziyaret ettiginiz web siteleri tarafindan cihazinizda depolanan kucuk metin dosyalaridir. Siteyi bir dahaki ziyaretinizde tarayiciniz bu dosyalari sunucuya geri gonderir ve sitenin sizi taninmasini saglar.',
            'Cerezler; oturum cerezleri (tarayiciyi kapattiktan sonra silinen) ve kalici cerezler (belirlenen bir sure boyunca cihazda kalan) olmak uzere iki ana kategoride siniflandirilir.',
          ],
        },
        {
          id: 'cerez-turleri',
          title: '2. Kullandigimiz Cerez Turleri',
          body: ['Web sitemizde uc farkli cerez kategorisi kullanilmaktadir:'],
        },
        {
          id: 'zorunlu-cerezler',
          title: '3. Zorunlu Cerezler',
          body: [
            'Bu cerezler, web sitesinin dogru bicimde calisabilmesi icin zorunludur ve devre disi birakilamazlar. Genellikle yalnizca sizin tarafinizdan gerceklestirilen ve gizlilik tercihlerinizin ayarlanmasi, oturum acma veya form doldurma gibi hizmet taleplerini karsiliyan islemlere yanit olarak olusturulurlar.',
          ],
          list: [
            'Cerez tercih cerezleri: tercihlerinizi kaydeder (maks. 12 ay)',
            'Oturum cerezleri: guvenli gezinti icin kullanilir, tarayici kapatildiginda silinir',
            'CSRF koruma cerezleri: form guvenligini saglar',
          ],
        },
        {
          id: 'analitik-cerezler',
          title: '4. Analitik Cerezler',
          body: [
            'Bu cerezler, ziyaretci sayisini ve trafik kaynaklarini olcmemizi saglar, boylece site performansini anlamamiza ve iyilestirmemize yardimci olur. Toplanan tum bilgiler toplu haldedir ve anonimdir.',
          ],
          list: [
            'Google Analytics 4 (_ga, _ga_*): ziyaretci davranislarini analiz etmek icin kullanilir, suresi 13 aya kadardir',
            'Yalnizca analitik cerezlere izin verdiyseniz yuklenirler',
          ],
        },
        {
          id: 'pazarlama-cerezleri',
          title: '5. Pazarlama Cerezleri',
          body: [
            'Bu cerezler; reklamlarin etkinligini olcmek, yeniden hedefleme kampanyalari yurутmek ve size ilgi alanlariyla uyumlu reklamlar gostermek icin kullanilir. Yalnizca bu cerezlere izin vermeniz halinde yuklenir.',
          ],
          list: [
            'Meta Pixel (_fbp, _fbc): Facebook ve Instagram reklamlarinin performansini olcmek icin kullanilir',
            'Google Ads: reklam donusum takibi icin kullanilir',
          ],
        },
        {
          id: 'yonetim',
          title: '6. Cerez Tercihlerinizi Nasil Yonetirsiniz?',
          body: [
            'Web sitemizi ilk ziyaretinizde cerez tercihlerinizi secmenizi saglayan bir cerez bildirimi gorunur. Tercihlerinizi istediginiz zaman guncelleyebilirsiniz.',
            'Bunun yani sira, tarayicinizin ayarlarindan cerezleri engelleyebilir veya silebilirsiniz. Ancak zorunlu cerezlerin engellenmesi durumunda sitenin bazi islevleri dogru calismayadilir.',
          ],
          subsections: [
            {
              title: 'Populer tarayiclarda cerez yonetimi',
              body: [
                'Chrome: Ayarlar > Gizlilik ve guvenlik > Cerezler ve diger site verileri',
                'Firefox: Tercihler > Gizlilik ve Guvenlik > Cerezler ve Site Verileri',
                'Safari: Tercihler > Gizlilik > Cerezleri ve web sitesi verilerini yonet',
                'Edge: Ayarlar > Gizlilik, arama ve hizmetler > Cerezleri ve diger site verilerini yonet',
              ],
            },
          ],
        },
        {
          id: 'ucuncu-taraf',
          title: '7. Ucuncu Taraf Cerezleri',
          body: [
            'Google ve Meta gibi ucuncu taraf hizmetleri kendi cerezlerini yerlestirebilir. Bu cerezler, ilgili sirketlerin gizlilik politikalari kapsamindadir. Daha fazla bilgi icin Google Gizlilik Politikasi ve Meta Gizlilik Politikasi sayfalarini inceleyebilirsiniz.',
          ],
        },
        {
          id: 'iletisim',
          title: '8. İletisim',
          body: [
            'Cerez politikamiza iliskin sorulariniz icin info@ribbony.com adresinden veya +90 (212) 000 00 00 numarasini arayarak bizimle iletisime gecebilirsiniz.',
          ],
        },
      ],
    },
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: January 2025',
      intro:
        'This Cookie Policy explains the cookies used on the ribbony.com website, their purposes, and how you can manage your preferences.',
      sections: [
        {
          id: 'what-are-cookies',
          title: '1. What Are Cookies?',
          body: [
            'Cookies are small text files stored on your device by websites you visit. On your next visit, your browser sends these files back to the server, allowing the site to recognize you.',
            'Cookies are classified into two main categories: session cookies (deleted after you close the browser) and persistent cookies (remaining on the device for a specified duration).',
          ],
        },
        {
          id: 'types',
          title: '2. Types of Cookies We Use',
          body: ['Three categories of cookies are used on our website:'],
        },
        {
          id: 'necessary',
          title: '3. Necessary Cookies',
          body: [
            'These cookies are essential for the website to function correctly and cannot be disabled. They are typically set only in response to actions you take that constitute service requests, such as setting your privacy preferences, logging in, or filling out forms.',
          ],
          list: [
            'Cookie preference cookies: saves your preferences (max. 12 months)',
            'Session cookies: used for secure browsing, deleted when browser is closed',
            'CSRF protection cookies: ensures form security',
          ],
        },
        {
          id: 'analytics',
          title: '4. Analytics Cookies',
          body: [
            'These cookies allow us to count visitors and measure traffic sources, helping us understand and improve site performance. All information collected is aggregated and anonymous.',
          ],
          list: [
            'Google Analytics 4 (_ga, _ga_*): used to analyze visitor behavior, duration up to 13 months',
            'Only loaded if you have consented to analytics cookies',
          ],
        },
        {
          id: 'marketing',
          title: '5. Marketing Cookies',
          body: [
            'These cookies are used to measure ad effectiveness, run retargeting campaigns, and show you ads aligned with your interests. They are only loaded if you consent to them.',
          ],
          list: [
            'Meta Pixel (_fbp, _fbc): used to measure Facebook and Instagram ad performance',
            'Google Ads: used for ad conversion tracking',
          ],
        },
        {
          id: 'manage',
          title: '6. How to Manage Your Cookie Preferences',
          body: [
            'A cookie notice allowing you to choose your cookie preferences appears on your first visit to our website. You can update your preferences at any time.',
            'You can also block or delete cookies from your browser settings. However, blocking necessary cookies may cause some website functions to not work correctly.',
          ],
          subsections: [
            {
              title: 'Cookie management in popular browsers',
              body: [
                'Chrome: Settings > Privacy and security > Cookies and other site data',
                'Firefox: Preferences > Privacy & Security > Cookies and Site Data',
                'Safari: Preferences > Privacy > Manage Website Data',
                'Edge: Settings > Privacy, search, and services > Manage cookies and site data',
              ],
            },
          ],
        },
        {
          id: 'third-party',
          title: '7. Third-Party Cookies',
          body: [
            'Third-party services such as Google and Meta may place their own cookies. These cookies are subject to the privacy policies of the respective companies. For more information, you can review the Google Privacy Policy and Meta Privacy Policy pages.',
          ],
        },
        {
          id: 'contact',
          title: '8. Contact',
          body: [
            'For questions about our cookie policy, you can reach us at info@ribbony.com or by calling +90 (212) 000 00 00.',
          ],
        },
      ],
    },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  type: LegalType;
}

export default function LegalSection({ type }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations(
    type === 'kvkk' ? 'kvkk' : type === 'privacy' ? 'privacy' : 'cookies',
  );
  const prefix = locale === 'en' ? '/en' : '';
  const content = CONTENT[type][locale];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[860px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 font-body text-sm text-[#6b6b6b]">
            <li>
              <Link href={`${prefix}/`} className="hover:text-[#e13e90] transition-colors duration-150">
                {locale === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
            </li>
            <li className="text-[#c0c0c0]">/</li>
            <li className="text-[#0f0f0f] font-medium">{tPage('pageTitle')}</li>
          </ol>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 pb-8 border-b border-[#ebebeb]"
        >
          <h1
            className="font-heading font-extrabold text-[#0f0f0f] tracking-tight mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.15 }}
          >
            {tPage('pageTitle')}
          </h1>
          <p className="font-body text-sm text-[#6b6b6b]">{tPage('lastUpdated')}</p>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="font-body text-base text-[#3d3d3d] leading-relaxed mb-12 p-6 bg-[#f7f7f7] rounded-[16px] border-l-4 border-[#e13e90]"
        >
          {content.intro}
        </motion.p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {content.sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
            >
              <h2 className="font-heading font-bold text-xl text-[#0f0f0f] mb-4">
                {section.title}
              </h2>

              {section.body.map((para, j) => (
                <p key={j} className="font-body text-base text-[#3d3d3d] leading-relaxed mb-3">
                  {para}
                </p>
              ))}

              {section.list && (
                <ul className="mt-3 flex flex-col gap-2.5 pl-1">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 font-body text-sm text-[#3d3d3d] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e13e90] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections?.map((sub, j) => (
                <div key={j} className="mt-5 pl-5 border-l-2 border-[#ebebeb]">
                  <h3 className="font-body font-bold text-base text-[#0f0f0f] mb-2">
                    {sub.title}
                  </h3>
                  {sub.body.map((para, k) => (
                    <p key={k} className="font-body text-sm text-[#3d3d3d] leading-relaxed mb-2">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 pt-8 border-t border-[#ebebeb]"
        >
          <p className="font-body text-sm text-[#6b6b6b] leading-relaxed">
            {locale === 'tr'
              ? 'Bu belge hakkında sorularınız için '
              : 'For questions about this document, please contact us at '}
            <a
              href="mailto:info@ribbony.com"
              className="text-[#e13e90] hover:underline font-medium"
            >
              info@ribbony.com
            </a>
            {locale === 'tr' ? ' adresine yazabilirsiniz.' : '.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
