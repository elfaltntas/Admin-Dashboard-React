# Admin Dashboard Login Sistemi Kurulumu

Bu proje MongoDB tabanlı bir admin dashboard'a login sistemi ekler.

## Kurulum Adımları

### 1. Server Dependencies Kurulumu
```bash
cd server
npm install
```

### 2. Client Dependencies Kurulumu
```bash
cd client
npm install
```

### 3. MongoDB Bağlantısı
MongoDB'nin çalıştığından emin olun. Server klasöründe `.env` dosyası oluşturun:

```env
PORT=9000
MONGODB_URL=mongodb://localhost:27017/admin_dashboard
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 4. Password Hash'leme
Mevcut kullanıcıların password'larını hash'lemek için:
```bash
cd server
npm run hash-passwords
```

### 5. Server'ı Başlatma
```bash
cd server
npm run dev
```

### 6. Client'ı Başlatma
```bash
cd client
npm start
```

## Test Kullanıcıları

Mevcut kullanıcı bilgileri:
- **Email**: kranstead0@narod.ru
- **Password**: omMDCh
- **Role**: superadmin

- **Email**: oveneur2@marketwatch.com  
- **Password**: WwDjOlH
- **Role**: admin

## Özellikler

- ✅ JWT tabanlı authentication
- ✅ Protected routes
- ✅ Login/Logout işlemleri
- ✅ Password hashing
- ✅ Token verification
- ✅ Responsive login form
- ✅ Error handling
- ✅ Loading states

## API Endpoints

- `POST /auth/login` - Kullanıcı girişi
- `GET /auth/verify` - Token doğrulama

## Güvenlik

- Passwords bcrypt ile hash'lenir
- JWT token'lar 24 saat geçerlidir
- Protected route'lar sadece authenticated kullanıcılara açıktır
