import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from 'themes'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from 'scenes/layout'
import Dashboard from 'scenes/dashboard'
import Products from 'scenes/products'
import Customers from 'scenes/customers'
import Transactions from 'scenes/transactions'
import Geography from 'scenes/geography'
import Overview from 'scenes/overview'
import Daily from 'scenes/daily'
import Monthly from 'scenes/monthly'
import Breakdown from 'scenes/breakdown'
import Admins from 'scenes/admins'
import Performance from 'scenes/performance'
import Login from 'components/Login'
import ProtectedRoute from 'components/ProtectedRoute'

function App() {

  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/dashboard" />} replace />
            <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admins />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
