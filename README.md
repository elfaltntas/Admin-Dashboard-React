# 🚀 Admin Dashboard - Modern React & Node.js Dashboard

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.8.3-yellow)
![Material-UI](https://img.shields.io/badge/Material--UI-5.10.15-purple)

## 📖 Proje Hakkında

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir admin dashboard uygulamasıdır. React frontend ve Node.js backend ile geliştirilmiş olup, gerçek zamanlı veri görselleştirme, kullanıcı yönetimi ve iş analitiği özellikleri sunar.

## 🎥 Demo Video

![Dashboard Demo](assets/dashboard.mp4)

*Proje demo videosunu yukarıdaki video dosyasından izleyebilirsiniz.*

## ✨ Özellikler

### 🔐 Güvenlik & Kimlik Doğrulama
- JWT tabanlı kimlik doğrulama
- Şifre hashleme (bcryptjs)
- Korumalı rotalar
- Oturum yönetimi

### 📊 Dashboard & Analitik
- Gerçek zamanlı veri görselleştirme
- İnteraktif grafikler ve chartlar
- Satış performans analizi
- Müşteri davranış analizi
- Coğrafi veri görselleştirme

### 🎨 Modern UI/UX
- Material-UI v5 tasarım sistemi
- Responsive tasarım
- Dark/Light tema desteği
- Modern ve temiz arayüz

### 📱 Responsive Tasarım
- Mobil uyumlu
- Tablet uyumlu
- Desktop optimize

## 🛠️ Teknoloji Stack

### Frontend
- **React 18.2.0** - Modern React hooks ve functional components
- **Material-UI 5.10.15** - Google Material Design component library
- **Redux Toolkit** - State management
- **React Router 6** - Client-side routing
- **Nivo Charts** - Veri görselleştirme kütüphanesi
- **Emotion** - CSS-in-JS styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL veritabanı
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Şifre hashleme

## 📁 Proje Yapısı

```
admin-dashboard-main/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Yeniden kullanılabilir bileşenler
│   │   ├── scenes/         # Sayfa bileşenleri
│   │   ├── state/          # Redux store ve API
│   │   ├── themes.js       # Tema konfigürasyonu
│   │   └── App.js          # Ana uygulama bileşeni
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/        # Route controller'ları
│   ├── models/            # MongoDB modelleri
│   ├── routers/           # API route'ları
│   ├── database/          # Veritabanı bağlantısı
│   └── package.json
└── README.md
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- MongoDB
- npm veya yarn

### 1. Repository'yi klonlayın
```bash
git clone https://github.com/yourusername/admin-dashboard-main.git
cd admin-dashboard-main
```

### 2. Backend kurulumu
```bash
cd server
npm install
```

### 3. Environment variables oluşturun
```bash
# server/.env dosyası oluşturun
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5001
```

### 4. Backend'i başlatın
```bash
npm run dev
```

### 5. Frontend kurulumu (yeni terminal)
```bash
cd ../client
npm install
```

### 6. Frontend'i başlatın
```bash
npm start
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

## 📊 Dashboard Özellikleri

### Ana Dashboard
- Genel satış istatistikleri
- Performans metrikleri
- Hızlı erişim kartları

### Ürün Yönetimi
- Ürün listesi ve detayları
- Stok takibi
- Ürün performans analizi

### Müşteri Yönetimi
- Müşteri veritabanı
- Müşteri davranış analizi
- Segmentasyon

### Satış Analizi
- Günlük, aylık satış raporları
- Coğrafi satış dağılımı
- Performans karşılaştırmaları

### Admin Paneli
- Kullanıcı yönetimi
- Sistem ayarları
- Log takibi

## 🔧 API Endpoints

### Authentication
- `POST /auth/login` - Kullanıcı girişi
- `POST /auth/register` - Kullanıcı kaydı

### General
- `GET /general/user/:id` - Kullanıcı bilgileri
- `GET /general/dashboard` - Dashboard verileri

### Sales
- `GET /sales/overview` - Satış genel bakış
- `GET /sales/transactions` - İşlem listesi

### Management
- `GET /management/admins` - Admin listesi
- `POST /management/admins` - Admin ekleme

## 🎨 Tema Sistemi

Proje, Material-UI tabanlı gelişmiş bir tema sistemi kullanır:
- Dark/Light mode desteği
- Özelleştirilebilir renk paleti
- Responsive breakpoint'ler
- Typography sistemi

## 📱 Responsive Tasarım

- **Mobile First** yaklaşımı
- **Breakpoint'ler**: xs, sm, md, lg, xl
- **Flexbox** ve **Grid** layout sistemleri
- **Touch-friendly** interface

## 🔒 Güvenlik Özellikleri

- **JWT Authentication** - Güvenli token tabanlı kimlik doğrulama
- **Password Hashing** - bcryptjs ile şifre güvenliği
- **Protected Routes** - Yetkilendirme kontrolü
- **CORS Protection** - Cross-origin request güvenliği
- **Helmet.js** - HTTP header güvenliği

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
```

### Backend (Heroku/Railway)
```bash
cd server
npm start
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

**Elfal** - [GitHub](https://github.com/yourusername)

## 🙏 Teşekkürler

- [Material-UI](https://mui.com/) - UI component library
- [Nivo](https://nivo.rocks/) - Chart library
- [React](https://reactjs.org/) - Frontend framework
- [Node.js](https://nodejs.org/) - Backend runtime

## 📞 İletişim

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!




