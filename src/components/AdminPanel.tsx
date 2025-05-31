
import React from 'react';
import AddServiceForm from './admin/AddServiceForm';
import BlogGenerator from './admin/BlogGenerator';
import ServicesList from './admin/ServicesList';
import ContentGenerator from './admin/ContentGenerator';

const AdminPanel = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <AddServiceForm />
      <BlogGenerator />
      <ContentGenerator />
      <ServicesList />
    </div>
  );
};

export default AdminPanel;
