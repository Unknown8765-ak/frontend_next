import React from 'react'
import StatsCard from '@/components/admin/Dashboard/StatsCard';
import QuickActions from '@/components/admin/Dashboard/QuickActions';
import AdminProtectedRoute from '@/auth/AdminProtectedRoute';
const Dashboard = () => {
  return (
    <>
    <AdminProtectedRoute>
      <StatsCard />
      <QuickActions />
      </AdminProtectedRoute>
    </>
  );
};

export default Dashboard;
