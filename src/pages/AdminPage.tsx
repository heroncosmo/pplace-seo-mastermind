
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import SEO from '@/components/SEO';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Admin - PPlace"
        description="Painel administrativo PPlace"
        canonical="https://pplace.com.br/admin"
      />
      <Header />
      <AdminPanel />
      <Footer />
    </div>
  );
};

export default AdminPage;
