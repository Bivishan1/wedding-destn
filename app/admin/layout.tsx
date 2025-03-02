// import AdminLayout from "@/layouts/AdminLayout";

import AdminLayout from "@/layouts/AdminLayout";
import "../globals.css";

export default function AdminPanelLayout  ({ children }: { children: React.ReactNode })  {
  return (
  
        <AdminLayout>
          <main className="">{children}</main>
        </AdminLayout>
  )
};

