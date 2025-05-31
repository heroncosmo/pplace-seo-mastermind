
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import AdminLogin from '@/components/AdminLogin';
import SEO from '@/components/SEO';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('admin_logged_in');
    setIsLoggedIn(adminLoggedIn === 'true');
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <>
        <SEO 
          title="Admin Login - PPlace"
          description="Login administrativo PPlace"
          canonical="https://pplace.com.br/admin"
        />
        <AdminLogin onLogin={handleLogin} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Admin - PPlace"
        description="Painel administrativo PPlace"
        canonical="https://pplace.com.br/admin"
      />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Painel Administrativo - PPlace</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sair
          </button>
        </div>
        <AdminPanel />
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
