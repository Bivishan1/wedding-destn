// components/AdminLayout.tsx
'use client';
import Sidebar from "@/components/admin/sidebar";
import Navbar from "@/components/admin/navbar";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"; // Import 

// Create an inner layout component that can access the sidebar context
const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();
  
  return (
   
    <AppRouterCacheProvider>
      <Sidebar />
      <div 
        className={`w-full bg-gray-200 min-h-screen transition-all duration-300 ${
          isOpen ? 'md:w-[calc(100%-256px)] md:ml-64' : 'md:w-full md:ml-0'
        }`}
      >
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
      </div>
      </AppRouterCacheProvider>
  
  );
};

// Main layout component that provides the context
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
};

export default AdminLayout;