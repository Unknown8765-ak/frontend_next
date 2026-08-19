import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import AdminProtectedRoute from "@/auth/AdminProtectedRoute";

const AdminPanelLayout = ({ children }) => {
  return (
    <AdminProtectedRoute>
      <div className="flex h-screen overflow-hidden bg-slate-100">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />

          <main className="min-h-0 flex-1 overflow-y-auto p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </AdminProtectedRoute>
  );
};

export default AdminPanelLayout;