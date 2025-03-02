"use client";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import { usePathname } from 'next/navigation';

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Manage Vanues',
    href: '/admin/venues',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Manage Vendors',
    href: '/admin/vendors',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const Sidebar = ({}) => {
  const { isOpen ,toggleSidebar  } = useSidebar();
  const pathname = usePathname();


  return (
    <div>
    {/* Sidebar overlay - shown when sidebar is open on mobile */}
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? '' : 'hidden'}`}
    onClick={toggleSidebar} />
    <aside
      className={`fixed duration-300 bg-white text-black w-64 h-full p-4 z-40 sidebar-menu transition-transform  ${isOpen? 'translate-x-0' : '-translate-x-full'}`}
    >
      <Link href="/admin" className="flex items-center justify-center py-7 border-b border-b-black">
        <h2 className="font-bold text-base text-black mb-0">
          Destination{" "}
          <span className="bg-[#f84525] text-white px-2 rounded-md">Wedding</span>
        </h2>
      </Link>
      <h2 className="text-xl font-bold mb-4 text-gray-500">Admin Panel</h2>
      
      <ul className="space-y-2">
      {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link href={item.href}>
                  <div
                    className={`flex items-center text-gray-700 p-4 ${
                      isActive ? 'bg-gray-200' : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className={`${isActive ? 'text-red-800' : ''}`}>
                      {item.icon}
                    </div>
                    <span className={`ml-3 ${isActive ? 'font-medium text-red-800' : ''}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-1 h-6 bg-red-800 rounded-full"></div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
      <button className="w-full mx-auto border border-red-400 p-2 text-center rounded-md mt-3 hover:bg-red-300 transition-all duration-300 flex flex-row-reverse justify-center gap-2">Sign Out <Image alt='logout' src='/icons/logout.svg' height={20} width={20} /> </button>
    </aside>
    </div>
  );
};

export default Sidebar;
