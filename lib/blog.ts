export interface BlogPost {
  slug: string;
  publishedAt: string;
  readTime: number;
  author: string;
  category: string;
  coverImage: string;
  tr: BlogPostLocaleData;
  en: BlogPostLocaleData;
}

export interface BlogPostLocaleData {
  title: string;
  description: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'seo-stratejisi-2025',
    publishedAt: '2025-03-12',
    readTime: 8,
    author: 'Emre Çelik',
    category: 'seo',
    coverImage: '/images/blog/seo-stratejisi-2025.jpg',
    tr: {
      title: "2025'te Organik Büyüme İçin Uygulamanız Gereken 7 SEO Stratejisi",
      description:
        "Google'ın 2024 core güncellemeleri ve yapay zeka odaklı arama deneyimiyle birlikte SEO büyük bir dönüşüm geçiriyor. 2025'te öne çıkmak için bu stratejileri uygulayın.",
      content: `
## Giriş

2024 yılında Google, birden fazla core algoritma güncellemesi yayımladı ve arama sonuçlarının yüzü ciddi biçimde değişti. Yapay zeka destekli AI Overviews özelliğinin devreye girmesiyle birlikte artık yalnızca anahtar kelime yoğunluğuna odaklanan siteler değil, gerçek uzmanlık ve değer sunan içerikler ön plana çıkıyor.

Bu yazıda, 2025'te organik trafiğinizi artırmak için uygulayabileceğiniz 7 kanıtlanmış SEO stratejisini ele alacağız.

## 1. E-E-A-T Sinyallerini Güçlendirin

Google'ın kalite değerlendirme çerçevesi artık E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) üzerine kuruluyor. Yazar biyografileri, referanslar, özgün vaka çalışmaları ve şeffaf kaynak gösterimi bu sinyalleri güçlendiren temel unsurlardır.

Pratik adımlar:
- Her blog yazısına gerçek biyografisi ve uzmanlık alanı olan yazar profili ekleyin
- İçeriklerinizde birincil araştırma verilerinden veya deneyimlerinizden örnekler sunun
- Güvenilir sektör kaynaklarına (dergi, akademik çalışma, resmi kurum) atıfta bulunun

## 2. Semantik SEO ile Topical Authority Oluşturun

Tek bir anahtar kelimeye odaklanmak yerine, o konuyu çevreleyen tüm ilgili sorulara ve alt konulara kapsamlı biçimde yanıt veren bir içerik kümesi (content cluster) oluşturun.

Örneğin "sosyal medya yönetimi" ana konusu etrafında:
- Instagram algoritması nasıl çalışır?
- LinkedIn B2B pazarlama taktikleri
- Sosyal medya analitiği nasıl okunur?
- Topluluk yönetimi en iyi pratikleri

gibi alt konularda içerikler üretmek sitenizin topical authority'sini artırır.

## 3. Core Web Vitals'ı Optimize Edin

Google, sayfa deneyimini bir sıralama faktörü olarak değerlendirmeye devam ediyor. 2025'te özellikle şu metriklere odaklanın:

- **LCP (Largest Contentful Paint):** 2,5 saniyenin altında olmalı
- **INP (Interaction to Next Paint):** 200ms altında hedefleyin
- **CLS (Cumulative Layout Shift):** 0,1'in altında tutun

Öne çıkan önlem: Görüntü formatlarını AVIF veya WebP'ye dönüştürün, sunucu taraflı render kullanın ve gereksiz JavaScript yüklemelerini erteyin.

## 4. Yapay Zeka Arama için Optimize Edin (SGE/AI Overviews)

Google'ın AI Overviews özelliği, kullanıcıların arama sorgularına doğrudan SERP'te özet yanıtlar sunuyor. Bu kutucuklarda yer almak için:

- Net, doğrudan soruları yanıtlayan paragraflar yazın
- Yapılandırılmış veri (schema markup) kullanın
- FAQ ve how-to formatlarını tercih edin
- İçeriklerinizi özlü, otoriter ve kaynaklara dayalı hale getirin

## 5. Sesli Arama ve Sohbet Tarzı Sorgular

"Nasıl yapılır", "ne demek", "neden" gibi konuşma tarzı sorgular giderek artıyor. İçeriklerinizi bu sorgulara yanıt verecek biçimde yapılandırın:

- Başlıkları soru formatında yazın
- Kısa ve öz doğrudan yanıtlarla giriş yapın, ardından ayrıntılara girin
- Yerel sorgular için "yakınımda" aramaları dikkate alın

## 6. Geri Bağlantı Kalitesini Miktardan Üstün Tutun

2025'te 1.000 düşük kaliteli link yerine 10 yüksek kaliteli backlink çok daha fazla etki yaratıyor. Odak noktaları:

- Sektörünüzle ilgili medya ve dergilerde misafir yazar olmak
- Orijinal araştırma veya veri çalışmaları yayımlamak (linke layık içerik)
- Dijital PR stratejileriyle sektör haberlerine konu olmak
- Kırık link (broken link) building yapmak

## 7. İçerik Güncellemesine Yatırım Yapın

Yeni içerik üretmek kadar mevcut içerikleri güncel tutmak da önemlidir. Yılda en az bir kez:

- Tarihli istatistikleri ve verileri güncelleyin
- Kullanım dışı kalan bölümleri kaldırın
- Yeni gelişmeleri ekleyin
- Dahili linkleme yapısını gözden geçirin

Güncellenmiş içerikler, Google tarafından yeni crawl edilme fırsatı yakalar ve genellikle hızlı bir sıralama artışı sağlar.

## Sonuç

2025 SEO'su; teknik mükemmellik, gerçek uzmanlık ve kullanıcı merkezli içerik anlayışının kesişiminde şekilleniyor. Bu 7 stratejiyi tutarlı biçimde uygulayan markalar, yapay zekanın yeniden çizdiği arama ortamında güçlü konumlarını koruyacak.

SEO stratejinizi güçlendirmek için Ribbony uzmanlarıyla ücretsiz bir danışmanlık görüşmesi planlayabilirsiniz.
      `.trim(),
    },
    en: {
      title: '7 SEO Strategies You Need to Apply for Organic Growth in 2025',
      description:
        "With Google's 2024 core updates and AI-focused search experience, SEO is undergoing a major transformation. Apply these strategies to stand out in 2025.",
      content: `
## Introduction

In 2024, Google rolled out multiple core algorithm updates and the face of search results changed significantly. With the introduction of AI-powered AI Overviews, it's no longer sites focused purely on keyword density that stand out — it's content that offers genuine expertise and real value.

In this post, we'll cover 7 proven SEO strategies you can implement to grow your organic traffic in 2025.

## 1. Strengthen Your E-E-A-T Signals

Google's quality evaluation framework is now built around E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Author biographies, credentials, original case studies, and transparent sourcing are the key elements that strengthen these signals.

Practical steps:
- Add real author profiles with genuine bios and areas of expertise to every blog post
- Include examples from primary research data or your own experiences in your content
- Cite reliable industry sources (journals, academic studies, official institutions)

## 2. Build Topical Authority with Semantic SEO

Instead of focusing on a single keyword, create a content cluster that comprehensively addresses all related questions and subtopics surrounding the main subject.

For example, around the main topic "social media management," producing content on:
- How does the Instagram algorithm work?
- LinkedIn B2B marketing tactics
- How to read social media analytics
- Community management best practices

...will increase your site's topical authority.

## 3. Optimize Core Web Vitals

Google continues to evaluate page experience as a ranking factor. In 2025, focus especially on these metrics:

- **LCP (Largest Contentful Paint):** Should be under 2.5 seconds
- **INP (Interaction to Next Paint):** Target under 200ms
- **CLS (Cumulative Layout Shift):** Keep under 0.1

Key action: Convert image formats to AVIF or WebP, use server-side rendering, and defer unnecessary JavaScript loading.

## 4. Optimize for AI Search (SGE/AI Overviews)

Google's AI Overviews feature provides direct summary answers to user search queries right in the SERP. To appear in these boxes:

- Write paragraphs that clearly and directly answer specific questions
- Use structured data (schema markup)
- Prefer FAQ and how-to formats
- Make your content concise, authoritative, and source-backed

## 5. Voice Search and Conversational Queries

Conversational queries like "how to," "what does X mean," and "why" are growing rapidly. Structure your content to answer these queries:

- Write headings in question format
- Lead with short, direct answers before going into detail
- Account for "near me" searches for local queries

## 6. Prioritize Backlink Quality Over Quantity

In 2025, 10 high-quality backlinks have far more impact than 1,000 low-quality ones. Focus areas:

- Guest writing for industry-related media and publications
- Publishing original research or data studies (link-worthy content)
- Getting covered in industry news through digital PR strategies
- Broken link building

## 7. Invest in Content Updates

Keeping existing content up to date is just as important as producing new content. At least once a year:

- Update outdated statistics and data
- Remove obsolete sections
- Add new developments
- Review internal linking structure

Updated content gets a new crawling opportunity from Google and often delivers a quick ranking boost.

## Conclusion

SEO in 2025 is shaped at the intersection of technical excellence, genuine expertise, and a user-centered content philosophy. Brands that consistently apply these 7 strategies will maintain strong positions in the search landscape that AI is redrawing.

You can schedule a free consultation with Ribbony experts to strengthen your SEO strategy.
      `.trim(),
    },
  },
  {
    slug: 'sosyal-medya-trendleri-2025',
    publishedAt: '2025-04-03',
    readTime: 6,
    author: 'Zeynep Arslan',
    category: 'sosyal-medya',
    coverImage: '/images/blog/sosyal-medya-trendleri-2025.jpg',
    tr: {
      title: "2025'in En Güçlü Sosyal Medya Trendleri",
      description:
        "TikTok'un arama motoru olarak yükselişi, kısa video egemenliği ve topluluk odaklı içerik — 2025'te sosyal medyada öne çıkmak için ne yapmanız gerektiğini keşfedin.",
      content: `
## Giriş

Sosyal medya platformları, 2025'e girerken birbirinden farklı ve sürpriz dinamiklerle karşımıza çıkıyor. Algoritma değişiklikleri, yeni format tercihleri ve kullanıcı davranışlarındaki köklü dönüşümler, markaların stratejilerini gözden geçirmesini zorunlu kılıyor.

Bu yazıda 2025'in öne çıkan sosyal medya trendlerini ve bu trendlerden nasıl yararlanabileceğinizi ele alıyoruz.

## 1. Kısa Video Hakimiyeti Devam Ediyor

TikTok, Instagram Reels ve YouTube Shorts, organik erişimi en yüksek içerik formatları olmayı sürdürüyor. 60 saniyenin altındaki videolar, statik gönderilere kıyasla ortalama 3 kat daha fazla erişim elde ediyor.

Strateji önerileri:
- Her içeriği dikey (9:16) format önceliğiyle tasarlayın
- İlk 3 saniyede dikkat çekici bir kanca kullanın
- Altyazı ve görsel metin kullanın (kullanıcıların %85'i sessiz izliyor)
- Platformların yerel editör araçlarını (CapCut, Meta Suite) tercih edin

## 2. TikTok Artık Bir Arama Motoru

Z kuşağının %40'ından fazlası, Google yerine TikTok'u kullanarak ürün araştırması yapıyor. Bu durum, TikTok içeriklerinin arama odaklı biçimde üretilmesini zorunlu hale getiriyor.

Nasıl optimize edilir:
- İçerik başlıklarına ve alt yazılara anahtar kelimeler ekleyin
- "nasıl yapılır", "inceleme", "karşılaştırma" formatlarını benimseyin
- Hashtag'leri keyword gibi kullanın, trend hashtag'lerden ziyade niş ve spesifik tag'leri tercih edin

## 3. LinkedIn B2B İçin Güçleniyor

LinkedIn, organik erişim açısından Instagram ve Facebook'u geride bırakıyor. Özellikle B2B markalar ve kurucular (founder-led content) için benzersiz bir fırsat sunuyor.

2025'te LinkedIn'de öne çıkmanın yolları:
- Kişisel profil odaklı içerik (kurumsal sayfa yerine) daha fazla erişim sağlıyor
- Carousel (belge gönderisi) formatı yüksek etkileşim üretiyor
- Kısa video Reels benzeri içerikler organik büyüme sağlıyor
- Samimi, deneyim paylaşımı içeren yazılar viral potansiyel taşıyor

## 4. Mikro ve Nano Influencer'lar Kazanıyor

Mega influencer çağı geride kalıyor. 10.000–100.000 takipçili mikro influencer'lar, milyonluk hesaplara kıyasla 3-5 kat daha yüksek etkileşim oranı sunuyor ve çok daha yüksek güvenilirlik algısı yaratıyor.

Bir marka için bu ne anlama geliyor:
- Birkaç mega influencer yerine çok sayıda mikro influencer ile çalışın
- Sektör nişinize gerçekten hakim, özgün içerik üreticilerini tercih edin
- Tek seferlik tanıtımlar yerine uzun soluklu iş birlikleri kurun

## 5. Topluluk Yönetimi Öncelik Haline Geldi

Algoritmaların azalan organik erişimi karşısında markalar, sahip oldukları kanalları (owned communities) ön plana çıkarıyor. Facebook Grupları, Discord sunucuları ve WhatsApp toplulukları giderek daha stratejik araçlar haline geliyor.

## 6. Yapay Zeka Destekli İçerik Üretimi

ChatGPT, Midjourney ve Canva AI gibi araçlar içerik üretim süreçlerine entegre olmuş durumda. Ancak dikkat: yapay zeka destekli içerik, insan denetimi ve özgün bakış açısı olmadan hızla özgünlüğünü yitiriyor.

Doğru denge: Yapay zekayı hız ve ölçek için, insanı özgünlük ve ton kontrolü için kullanın.

## Sonuç

2025'in sosyal medya ortamı, yüksek hızda değişiyor. Bu trendleri erkenden benimseyen markalar, algoritma değişikliklerinin önünde kalmayı başarıyor. Sosyal medya stratejinizi bu trendlere göre yeniden şekillendirmek için Ribbony ekibiyle iletişime geçin.
      `.trim(),
    },
    en: {
      title: 'The Most Powerful Social Media Trends of 2025',
      description:
        "TikTok's rise as a search engine, short video dominance, and community-focused content — discover what you need to do to stand out on social media in 2025.",
      content: `
## Introduction

Social media platforms are entering 2025 with distinct and surprising dynamics. Algorithm changes, new format preferences, and fundamental shifts in user behavior are forcing brands to rethink their strategies.

In this post, we cover the standout social media trends of 2025 and how you can leverage them.

## 1. Short Video Dominance Continues

TikTok, Instagram Reels, and YouTube Shorts continue to be the content formats with the highest organic reach. Videos under 60 seconds receive an average of 3× more reach compared to static posts.

Strategy recommendations:
- Design every piece of content with vertical (9:16) format as the priority
- Use an attention-grabbing hook in the first 3 seconds
- Use captions and on-screen text (85% of users watch on mute)
- Prefer native platform editing tools (CapCut, Meta Suite)

## 2. TikTok Is Now a Search Engine

More than 40% of Gen Z now uses TikTok instead of Google to research products. This makes it essential to produce TikTok content with a search-focused approach.

How to optimize:
- Add keywords to content titles and captions
- Adopt "how-to," "review," and "comparison" formats
- Use hashtags like keywords — prefer niche and specific tags over trending hashtags

## 3. LinkedIn Is Growing Stronger for B2B

LinkedIn is outpacing Instagram and Facebook in terms of organic reach, especially for B2B brands and founder-led content.

Ways to stand out on LinkedIn in 2025:
- Personal profile-focused content reaches more people than company page content
- Carousel (document post) format drives high engagement
- Short-video Reels-style content delivers organic growth
- Authentic, experience-sharing posts carry viral potential

## 4. Micro and Nano Influencers Are Winning

The mega-influencer era is fading. Micro-influencers with 10,000–100,000 followers offer 3–5× higher engagement rates compared to million-follower accounts and create significantly higher credibility.

What this means for a brand:
- Work with many micro-influencers instead of a few mega ones
- Choose genuine content creators who truly know your industry niche
- Build long-term partnerships rather than one-off promotions

## 5. Community Management Has Become a Priority

Faced with declining organic reach from algorithms, brands are putting owned communities front and center. Facebook Groups, Discord servers, and WhatsApp communities are becoming increasingly strategic tools.

## 6. AI-Assisted Content Creation

Tools like ChatGPT, Midjourney, and Canva AI are now integrated into content production workflows. But beware: AI-assisted content quickly loses its authenticity without human oversight and a unique perspective.

The right balance: Use AI for speed and scale, humans for authenticity and tone control.

## Conclusion

The social media landscape of 2025 is changing at high speed. Brands that adopt these trends early are managing to stay ahead of algorithm changes. Contact the Ribbony team to reshape your social media strategy around these trends.
      `.trim(),
    },
  },
  {
    slug: 'google-ads-roi-artirma',
    publishedAt: '2025-04-24',
    readTime: 7,
    author: 'Selin Öztürk',
    category: 'reklam',
    coverImage: '/images/blog/google-ads-roi-artirma.jpg',
    tr: {
      title: "Google Ads Kampanyalarınızın ROI'sini 3 Ayda İkiye Katlayan 5 Taktik",
      description:
        "Bütçenizi artırmadan Google Ads performansınızı nasıl iyileştirirsiniz? Kanıtlanmış 5 optimizasyon taktiğiyle ROAS'ınızı kısa sürede artırın.",
      content: `
## Giriş

Google Ads, doğru yönetildiğinde en yüksek ROI sağlayan dijital pazarlama kanallarından biridir. Ancak "doğru yönetim" çoğu zaman düşünüldüğünden daha fazla ayrıntı gerektirir. Bütçeyi artırmadan sonuçları iyileştirmek mümkündür — ve bu yazıda tam olarak bunu nasıl yapabileceğinizi göreceğiz.

## 1. Negatif Anahtar Kelime Listesini Düzenli Genişletin

En sık yapılan hata, kampanya kurulumundan sonra negatif anahtar kelime listesinin güncellenmemesidir. Arama terimlerinizi haftalık gözden geçirin ve bütçenizi tüketen alakasız aramaları negatif listeye ekleyin.

Kontrol edilmesi gereken arama sorgusu kategorileri:
- Rakip marka adları (eğer hedeflemek istemiyorsanız)
- Alakasız sektör terimleri
- "Ücretsiz", "bedava", "indir" gibi satın alma niyeti taşımayan sorgular
- Yanlış coğrafya eşleşmeleri

Aylık kurtarılan bütçe potansiyeli: toplam harcamanın %15-25'i.

## 2. Reklam Metni A/B Testini Sistematik Hale Getirin

Çoğu hesapta tek bir reklam metni yıllarca aynı şekilde çalışır. Her reklam grubu için en az 3 farklı başlık ve açıklama kombinasyonu test edin.

Test öncelikleri:
- **Başlık 1:** Değer önerisi vs. soru formatı vs. rakamsal kanıt
- **Açıklama:** Özellik odaklı vs. fayda odaklı vs. aciliyet yaratma
- **CTA:** "Teklif Al" vs. "Ücretsiz Deneyin" vs. "Hemen Başlayın"

En az 300-500 impression toplayan varyantları istatistiksel güvenle değerlendirin.

## 3. Hedef ROAS ile Akıllı Teklif Stratejisine Geçin

Manuel CPC veya Maksimum Tıklama stratejilerinden Hedef ROAS (tROAS) veya Hedef EBM (tCPA) stratejisine geçin. Ancak bu geçişi yeterli dönüşüm verisi birikmeden yapmayın.

Geçiş için minimum koşul:
- Son 30 günde en az 30-50 dönüşüm
- Dönüşüm takibinin doğru çalıştığından emin olmak
- İlk haftalarda öğrenme modunu tolere etmek

Akıllı teklif stratejileri, gün içi bütçe tahsisini ve kitle sinyallerini manuel takibe kıyasla çok daha etkin kullanır.

## 4. Kitle Katmanlamasından Yararlanın

Arama kampanyalarınıza RLSA (Remarketing Lists for Search Ads) ve müşteri listeleri ekleyerek aynı arama sorgusu için farklı kitlelerle farklı teklif çarpanları kullanın.

Uygulanabilecek kitle segmentleri:
- Siteyi ziyaret etmiş ama dönüşüm gerçekleştirmemiş kullanıcılar (+%20–40 teklif artışı)
- Belirli sayfaları görüntülemiş kullanıcılar (yüksek niyet segmenti)
- Mevcut müşteriler (çapraz satış fırsatları)
- Benzer kitleler (lookalike)

## 5. Landing Page ve Reklam Mesajı Uyumunu Optimize Edin

Tıklama başı maliyet (CPC) ne kadar düşerse düşsün, landing page kalite skoru düşükse bütçeniz çöpe gidecektir. Reklamla landing page arasındaki mesaj uyumunu (message match) güçlendirin.

Kontrol listesi:
- Reklam başlığındaki kelimeler landing page H1'inde geçiyor mu?
- CTA butonu reklam içindeki teklif ile örtüşüyor mu?
- Sayfa yükleme hızı mobilde 3 saniyenin altında mı?
- Form veya sepet adımı mümkün olduğunca basit mi?

Landing page kalite skoru %20-30 iyileştirildiğinde, dönüşüm oranında benzer oranda artış gözlemliyoruz.

## Sonuç

Google Ads optimizasyonu tek seferlik değil, sürekli bir süreçtir. Bu 5 taktiği sistematik biçimde uygulayan müşterilerimiz, ortalama 3 ay içinde ROAS'larını %40-90 aralığında iyileştiriyor. Reklam kampanyalarınızı bu çerçevede değerlendirmek için Ribbony uzmanlarıyla iletişime geçebilirsiniz.
      `.trim(),
    },
    en: {
      title: '5 Tactics to Double Your Google Ads ROI in 3 Months',
      description:
        'How do you improve your Google Ads performance without increasing your budget? Boost your ROAS quickly with these 5 proven optimization tactics.',
      content: `
## Introduction

When managed correctly, Google Ads is one of the digital marketing channels that delivers the highest ROI. But "correct management" usually requires more detail than most people think. It's possible to improve results without increasing budget — and in this post, we'll show you exactly how.

## 1. Regularly Expand Your Negative Keyword List

The most common mistake is failing to update the negative keyword list after a campaign is set up. Review your search terms weekly and add irrelevant searches that are draining your budget to the negative list.

Categories of search queries to check:
- Competitor brand names (if you don't want to target them)
- Irrelevant industry terms
- Non-purchase-intent queries like "free," "download," "tutorial"
- Incorrect geographic matches

Monthly budget savings potential: 15–25% of total spend.

## 2. Systematize Ad Copy A/B Testing

In most accounts, a single ad copy runs unchanged for years. Test at least 3 different headline and description combinations per ad group.

Testing priorities:
- **Headline 1:** Value proposition vs. question format vs. numerical proof
- **Description:** Feature-focused vs. benefit-focused vs. urgency creation
- **CTA:** "Get a Quote" vs. "Try for Free" vs. "Get Started Now"

Evaluate variants that have collected at least 300–500 impressions with statistical confidence.

## 3. Switch to Smart Bidding with Target ROAS

Move from Manual CPC or Maximize Clicks strategies to Target ROAS (tROAS) or Target CPA (tCPA). But don't make this switch before enough conversion data has accumulated.

Minimum conditions for the switch:
- At least 30–50 conversions in the last 30 days
- Ensuring conversion tracking is working correctly
- Tolerating learning mode in the first weeks

Smart bidding strategies use intraday budget allocation and audience signals far more effectively than manual bidding.

## 4. Take Advantage of Audience Layering

Add RLSA (Remarketing Lists for Search Ads) and customer lists to your search campaigns to use different bid multipliers for different audiences on the same search query.

Applicable audience segments:
- Users who visited the site but didn't convert (+20–40% bid increase)
- Users who viewed specific pages (high-intent segment)
- Existing customers (cross-sell opportunities)
- Similar audiences (lookalike)

## 5. Optimize Landing Page and Ad Message Alignment

No matter how low the cost per click (CPC) gets, if the landing page quality score is low, your budget is going to waste. Strengthen the message match between the ad and the landing page.

Checklist:
- Do the words in the ad headline appear in the landing page H1?
- Does the CTA button align with the offer in the ad?
- Is the page loading speed under 3 seconds on mobile?
- Is the form or checkout step as simple as possible?

When landing page quality scores improve by 20–30%, we observe a similar increase in conversion rates.

## Conclusion

Google Ads optimization is a continuous process, not a one-time event. Our clients who systematically apply these 5 tactics improve their ROAS by 40–90% within an average of 3 months. Contact Ribbony experts to evaluate your ad campaigns within this framework.
      `.trim(),
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 2): BlogPost[] {
  return posts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
