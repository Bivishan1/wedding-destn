// import AdminLayout from "@/layouts/AdminLayout";

import AdminLayout from "@/layouts/AdminLayout";
import "../globals.css";

const AdminPanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <AdminLayout>
          <main className="">{children}</main>
        </AdminLayout>
      </body>
    </html>
  );
};

export default AdminPanelLayout;
