# Gizlenen ve Kaldırılan Elemanlar (Hidden & Removed Elements)

Bu belgede, web sitesinde yapılan gizleme/kaldırma/güncelleme/ekleme işlemleri ve bu elemanların nasıl tekrar geri getirileceği belgelenmiştir.

## 1. Gizlenen Elemanlar (Koşullu Render, Sayfa Bileşenleri ve Sabitler)

Bu elemanlar koddan tamamen silinmemiş olup, durum bayrakları, navigasyon sabitleri veya sayfa bileşenlerinin yorum satırına alınmasıyla görünmez kılınmıştır.

### A. Log In & Sign Up Butonları
*   **Konum:** `Navbar` bileşeni (Masaüstü ve Mobil menü görünümleri)
*   **Durum:** Gizli
*   **Nasıl Geri Getirilir?**
    [navbar.tsx](file:///Users/ataberkdonmez/Downloads/test/landing-page/components/layout/navbar.tsx) dosyasını açın. Satır **18** dolaylarında bulunan `showAuthButtons` değişkeninin değerini `true` yapın:
    ```tsx
    const showAuthButtons = true;
    ```

### B. Pricing (Fiyatlandırma) & Blog Linkleri
*   **Konum:** Hem üst navigasyon çubuğu (Header/Navbar) hem de alt menü alanı (Footer).
*   **Durum:** Gizli
*   **Nasıl Geri Getirilir?**
    [navigation.ts](file:///Users/ataberkdonmez/Downloads/test/landing-page/lib/constants/navigation.ts) dosyasını açın:
    1. Üst navigasyon için `NAV_RIGHT_LINKS` dizisindeki ilgili satırların yorumlarını kaldırın:
       ```typescript
       export const NAV_RIGHT_LINKS: { name: string; href: string }[] = [
         { name: "Pricing", href: "#pricing" },
         { name: "Blog", href: "#blog" },
       ];
       ```
    2. Alt menü için `FOOTER_LINKS` nesnesindeki `Product` altındaki `Pricing` ve `Support` altındaki `Blog` yorum satırlarını kaldırın:
       ```typescript
       Product: [
         ...
         { name: "Pricing", href: "#pricing" },
         ...
       ],
       Support: [
         ...
         { name: "Blog", href: "#blog" },
         ...
       ]
       ```

### C. Customers (Müşteriler / Testimonials) Bölümü ve Linki
*   **Konum:** Anasayfadaki `Testimonials` bileşeni ve üst/alt menülerdeki "Customers" linkleri.
*   **Durum:** Gizli
*   **Nasıl Geri Getirilir?**
    1. **Navigasyon ve Footer Linkleri için:** [navigation.ts](file:///Users/ataberkdonmez/Downloads/test/landing-page/lib/constants/navigation.ts) dosyasını açın. `NAV_LINKS` ve `FOOTER_LINKS.Product` içerisindeki `Customers` yorum satırlarını kaldırın:
       ```typescript
       export const NAV_LINKS = [
         { name: "Integrations", href: "#integrations" },
         { name: "Customers", href: "#customers" },
       ];
       ```
    2. **Anasayfa Bölümü için:** [page.tsx](file:///Users/ataberkdonmez/Downloads/test/landing-page/app/page.tsx) dosyasını açın. `Testimonials` importunu ve `<Testimonials />` JSX bileşeninin yorum satırını kaldırın:
       ```tsx
       import { Testimonials } from "@/components/marketing/testimonials";
       // ...
       <main className="flex-1 pt-16">
         <Hero />
         <Features />
         <Testimonials />
       </main>
       ```

---

## 2. Güncellenen ve Eklenen Elemanlar (NGI & Open-Source Geçişi)

Subkit'in **NGI (Next Generation Internet)** vizyonu doğrultusunda "Açık Kaynak Kodlu & Kendi Sunucunda Barındırılabilir (Self-Hosted)" modeline geçmesiyle aşağıdaki güncellemeler yapılmıştır:

*   **NGI Rozeti eklendi:** `Hero` bileşeninin üst kısmına AB Next Generation Internet fon desteğini belirten şık bir rozet eklendi.
*   **Açık Kaynaklı Başlık ve Açıklama:** Başlık "The open-source way to in-app subscriptions" olarak, açıklama ise "Self-hosted veya Cloud" modeline uygun olacak şekilde güncellendi.
*   **Self-Host, Cloud & Contact Butonları:** 
    *   Birincil CTA butonu "Start on Subkit Cloud" (Bulut çözümü).
    *   İkincil buton "Deploy Self-Hosted" (Doğrudan GitHub reposuna yönlendirir).
    *   Üçüncül buton "Contact sales" (Yeni oluşturulan interaktif Contact Us sayfasına yönlendirir).
*   **Typewriter Efekti Kelimeleri:** Sol tarafta akan kelimeler `["self-host", "control", "scale"]` olarak değiştirildi.
*   **Kullanışlılık ve Güç Özellik Izgarası (Benefits Section) Eklendi:**
    - **Konum:** Anasayfada Hero bölümünün hemen altında, Features bölümünün üstünde (`<Benefits />`).
    - **Açıklama:** Subkit'in öne çıkan 6 temel özelliğini modern kart tasarımları ve mikro-animasyonlar ile sunan 3x2 ızgara alanı entegre edildi.
*   **Kıyaslama Tablosu (Comparison Section) Eklendi:** 
    - **Konum:** Anasayfada Features bölümünün hemen altında (`<Comparison />`).
    - **Açıklama:** Subkit'i, kapalı kaynaklı rakipleriyle veri egemenliği ve açık kaynak kod yetenekleri üzerinden karşılaştıran premium, responsive bir kıyaslama tablosu entegre edildi.
*   **İnteraktif İletişim Sayfası (Contact Us Page) Oluşturuldu:**
    - **Konum:** `/contact` rotası altında bağımsız bir sayfa (`app/contact/page.tsx` & `components/marketing/contact-form.tsx`).
    - **Açıklama:** Görseldeki tasarımı yansıtan, Work Email, Company Name, Your Name ve How can we help? alanlarını barındıran; başarılı gönderimlerde dinamik bir başarı kartı (Success Screen) ve yükleme animasyonu (loading state) sunan şık bir form ile entegre edildi. Navbar ve Footer üzerindeki "Contact sales" ve "Contact Us" linkleri bu sayfaya bağlandı.
