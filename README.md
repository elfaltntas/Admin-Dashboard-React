# 🚀 Admin Dashboard - Modern React & Node.js Dashboard

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.8.3-yellow)
![Material-UI](https://img.shields.io/badge/Material--UI-5.10.15-purple)

## 📖 Project Overview

This project is a comprehensive admin dashboard application developed using modern web technologies. Built with React frontend and Node.js backend, it offers real-time data visualization, user management, and business analytics features.

## 🎥 Demo Video

📹 **Dashboard Demo Video Available**

The project includes a demo video (`dashboard.mp4`) that showcases all the features and functionality of this admin dashboard.

*To view the demo video, download the `dashboard.mp4` file from the project's assets folder.*

**Video Features:**
- Complete dashboard walkthrough
- All major features demonstration
- User interface showcase
- Responsive design examples

## ✨ Features

### 🔐 Security & Authentication
- JWT-based authentication
- Password hashing (bcryptjs)
- Protected routes
- Session management

### 📊 Dashboard & Analytics
- Real-time data visualization
- Interactive charts and graphs
- Sales performance analysis
- Customer behavior analysis
- Geographic data visualization

### 🎨 Modern UI/UX
- Material-UI v5 design system
- Responsive design
- Dark/Light theme support
- Modern and clean interface

### 📱 Responsive Design
- Mobile compatible
- Tablet compatible
- Desktop optimized

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0** - Modern React hooks and functional components
- **Material-UI 5.10.15** - Google Material Design component library
- **Redux Toolkit** - State management
- **React Router 6** - Client-side routing
- **Nivo Charts** - Data visualization library
- **Emotion** - CSS-in-JS styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
admin-dashboard-main/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── scenes/         # Page components
│   │   ├── state/          # Redux store and API
│   │   ├── themes.js       # Theme configuration
│   │   └── App.js          # Main application component
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routers/           # API routes
│   ├── database/          # Database connection
│   └── package.json
└── README.md
```

## 🚀 Installation and Setup

### Requirements
- Node.js 18+ 
- MongoDB
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/admin-dashboard-main.git
cd admin-dashboard-main
```

### 2. Backend setup
```bash
cd server
npm install
```

### 3. Create environment variables
```bash
# Create server/.env file
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5001
```

### 4. Start the backend
```bash
npm run dev
```

### 5. Frontend setup (new terminal)
```bash
cd ../client
npm install
```

### 6. Start the frontend
```bash
npm start
```

The application will run at `http://localhost:3000`.

## 📊 Dashboard Features

### Main Dashboard
- General sales statistics
- Performance metrics
- Quick access cards

### Product Management
- Product list and details
- Inventory tracking
- Product performance analysis

### Customer Management
- Customer database
- Customer behavior analysis
- Segmentation

### Sales Analysis
- Daily, monthly sales reports
- Geographic sales distribution
- Performance comparisons

### Admin Panel
- User management
- System settings
- Log tracking

## 🔧 API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### General
- `GET /general/user/:id` - User information
- `GET /general/dashboard` - Dashboard data

### Sales
- `GET /sales/overview` - Sales overview
- `GET /sales/transactions` - Transaction list

### Management
- `GET /management/admins` - Admin list
- `POST /management/admins` - Add admin

## 🎨 Theme System

The project uses an advanced theme system based on Material-UI:
- Dark/Light mode support
- Customizable color palette
- Responsive breakpoints
- Typography system

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: xs, sm, md, lg, xl
- **Flexbox** and **Grid** layout systems
- **Touch-friendly** interface

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Password security with bcryptjs
- **Protected Routes** - Authorization control
- **CORS Protection** - Cross-origin request security
- **Helmet.js** - HTTP header security

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

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👨‍💻 Developer

**Elfal** - [GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) - UI component library
- [Nivo](https://nivo.rocks/) - Chart library
- [React](https://reactjs.org/) - Frontend framework
- [Node.js](https://nodejs.org/) - Backend runtime

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

---

⭐ Don't forget to star this project if you like it!




