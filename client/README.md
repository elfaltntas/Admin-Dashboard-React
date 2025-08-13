# 📊 SalesVista Dashboard

SalesVista, React, Node.js ve MongoDB kullanılarak geliştirilmiş, satış verilerini ve kullanıcı istatistiklerini gerçek zamanlı olarak gösteren bir yönetim panelidir.  
Bu proje, **login sistemi**, **API ile veri çekme**, **grafikler**, **tablo gösterimi** ve **kategori bazlı satış dağılımı** gibi özellikleri içerir.

---


[📹Login Sayfası](./photo/dashboard.mp4)


## 🚀 Özellikler
- 🔐 **Kullanıcı Girişi (Login)**
- 📈 **Toplam müşteri sayısı, günlük/aylık/yıllık satış istatistikleri**
- 📊 **Kategori bazlı satış dağılım grafiği**
- 📄 **Tabloda işlem listesi (DataGrid)**
- 📥 **Rapor indirme özelliği**
- 📦 **REST API ile MongoDB’den veri çekme**
- 🎨 **Responsive tasarım (Material UI)**

---

## 🛠 Kullanılan Teknolojiler
**Frontend**
- React.js
- Material UI (MUI)
- Redux Toolkit Query (API yönetimi)
- Recharts (grafikler)
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (kimlik doğrulama)
- bcrypt (şifreleme)

---

## 📂 Proje Klasör Yapısı
/project-root
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # StatBox, Header, Chart bileşenleri
│ │ ├── scenes/ # Dashboard, Login, vb.
│ │ ├── state/ # Redux Toolkit API slice
│ │ ├── theme.js
│ │ └── App.js
│ ├── package.json
│
├── server/ # Node.js backend
│ ├── controllers/ # İş mantığı (login, dashboard verileri)
│ ├── models/ # Mongoose modelleri
│ ├── routes/ # API endpoint’leri
│ ├── middleware/ # JWT doğrulama
│ ├── server.js # Express başlangıç dosyası
│ ├── config/ # DB bağlantısı
│ ├── package.json
│
├── .env.example # Ortam değişkenleri örneği
├── README.md


---

## 🔑 Ortam Değişkenleri (.env)
Backend için `.env` dosyası şu şekilde olmalı:

MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbname
JWT_SECRET=your_jwt_secret


---

## ⚙️ Kurulum ve Çalıştırma

### 1️⃣ Depoyu Klonla
```bash
git clone https://github.com/kullanici-adi/salesvista.git


Backendi kur
cd server
npm install
npm run dev


Frontend’i Kur
cd ../client
npm install
npm start


