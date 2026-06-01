# Subkit - Canlıya Alma ve Geliştirme Kılavuzu (Deployment Guide)

Bu dosya, kod üzerinde değişiklik yaptığınızda sitenizi yerel ortamda test etmek ve Bunny.net (Magic Containers) üzerinde sıfır kesintiyle güncellemek için kullanacağınız temel komutları içerir.

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

## 🐋 3. Docker Paketini Derleme (Build Image)

Değiştirdiğiniz yeni kodları içeren Bunny uyumlu yeni Docker paketini bilgisayarınızda derleyin:

```bash
docker buildx build --platform linux/amd64 -t atadn/subkit-web:latest --load .
```

---

## 📤 4. Paketi Buluta Yükleme (Push Image)

Derlediğiniz güncel paketi Docker Hub üzerindeki gizli (private) reponuza gönderin:

```bash
docker push atadn/subkit-web:latest
```

---

## 🚀 5. Canlı Sitede Güncelleme (Redeploy)

Yeni paketi Docker Hub'a gönderdikten sonra Bunny.net'in güncel sürümü çekmesi için:

1. **Bunny.net** paneline giriş yapın.
2. Sol menüden **Magic Containers** sekmesine tıklayın.
3. Konteynerinizi (`subkit-web`) seçin.
4. Sağ üst köşede yer alan **"Redeploy"** veya **"Restart Container"** butonuna basın.

Bunny saniyeler içinde yeni paketi arka planda çekecek ve sitenizi **hiç kapatmadan, sıfır saniye kesintiyle** en güncel sürüme güncelleyecektir! 🎉
