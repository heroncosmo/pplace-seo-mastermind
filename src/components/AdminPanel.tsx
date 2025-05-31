
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AddServiceForm from './admin/AddServiceForm';
import BlogGenerator from './admin/BlogGenerator';
import ServicesList from './admin/ServicesList';

const AdminPanel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Painel Administrativo - PPlace</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AddServiceForm />
        <BlogGenerator />
        <ServicesList />
      </div>
    </div>
  );
};

export default AdminPanel;
