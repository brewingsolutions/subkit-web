# Subkit - Canlıya Alma ve Geliştirme Kılavuzu (GHCR & Bunny.net)

Bu dosya, kod üzerinde değişiklik yaptığınızda sitenizi yerel ortamda test etmek, imajı **GitHub Container Registry (GHCR)** üzerine yüklemek ve Bunny.net (Magic Containers) üzerinde sıfır kesintiyle güncellemek için gerekli kılavuzdur.

---

## 💻 1. Yerel Ortamda Geliştirme (Local Development)

Kodda değişiklik yaparken tarayıcıda anlık görmek için yerel geliştirme sunucusunu başlatın:

```bash
npm run dev
```
* Tarayıcı adresi: [http://localhost:3000](http://localhost:3000)

---

## 🔍 2. Projeyi Derleme Kontrolü (Build Check)

Docker paketini oluşturmadan önce TypeScript veya derleme hatası olmadığından emin olmak için projeyi derleyin:

```bash
npm run build
```

---

## 🤖 3. Otomatik Canlıya Alma (GitHub Actions - Tavsiye Edilen)

Projede `.github/workflows/deploy.yml` otomasyonu aktiftir.

`main` branch'ine kod push ettiğinizde GitHub Actions otomatik olarak:
1. Docker imajını `linux/amd64` mimarisinde derler.
2. `ghcr.io/<github-kullanici-adi>/<repo-adi>:latest` adresiyle GHCR'ye yükler.

---

## 💻 4. Manuel GHCR Yüklemesi (Bilgisayarınızdan)

Eğer imajı GitHub Actions kullanmadan kendi bilgisayarınızdan GHCR'ye yüklemek isterseniz:

1. **GHCR'ye Giriş Yapın:**
   ```bash
   docker login ghcr.io -u KULLANICI_ADI
   # Parola istendiğinde GitHub Personal Access Token (PAT) girin.
   ```

2. **İmajı Derleyin:** *(Adın tamamı küçük harf olmalıdır)*
   ```bash
   docker buildx build --platform linux/amd64 -t ghcr.io/<kullanici-adi>/subkit-web:latest --load .
   ```

3. **GHCR'ye Yükleyin:**
   ```bash
   docker push ghcr.io/<kullanici-adi>/subkit-web:latest
   ```

---

## 🚀 5. Bunny.net (Magic Containers) Konfigürasyonu

İmaj artık GHCR üzerinde tutulacağı için Bunny.net ayarlarını bir defaya mahsus güncelleyin:

1. **Bunny.net** paneline girip **Magic Containers** sekmesinden `subkit-web` konteynerinizi seçin.
2. **Container Image Path:** `ghcr.io/<kullanici-adi>/<repo-adi>:latest` olarak değiştirin.
3. **Registry Authentication (Gizli Repo ise):**
   - **Registry Host:** `ghcr.io`
   - **Username:** GitHub Kullanıcı Adınız
   - **Password / Token:** `read:packages` yetkili GitHub Personal Access Token (PAT).
   *(Not: GitHub Paket Ayarlarından paketi "Public" yaparsanız parola girmeden de Bunny çekebilir).*
4. **Runtime Environment Variables:** İletişim formunun mesajları Telegram'a ulaştırabilmesi için container ortamına aşağıdaki değişkenleri ekleyin:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`

   Bu değişkenler tanımlı değilse iletişim endpoint'i mesaj teslim edilmiş gibi davranmaz ve `503 Service Unavailable` döndürür.
5. **Redeploy:** Sağ üst köşedeki **"Redeploy"** butonuna basarak yeni imajı sıfır kesintiyle canlıya alın. 🎉
