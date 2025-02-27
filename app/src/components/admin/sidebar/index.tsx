"use client";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";


const Sidebar = ({}) => {
  const { isOpen ,toggleSidebar  } = useSidebar();

  // const { toggleSidebar } = useSidebar();



  return (
    <>
    {/* Sidebar overlay - shown when sidebar is open on mobile */}
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? '' : 'hidden'}`}
    onClick={toggleSidebar} />
    <aside
      className={`fixed duration-300 bg-white text-black w-64 h-full p-4 z-40 sidebar-menu transition-transform  ${isOpen? 'translate-x-0' : '-translate-x-full'}`}
    >
      <Link href="/admin" className="flex items-center justify-center pb-4 border-b border-b-black">
        <h2 className="font-bold text-base text-black mb-0">
          Destination{" "}
          <span className="bg-[#f84525] text-white px-2 rounded-md">Wedding</span>
        </h2>
      </Link>
      <h2 className="text-xl font-bold mb-4 text-gray-500">Admin Panel</h2>
      
      <ul className="space-y-2">
        <li>
          <Link
            href="/admin/"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/venues"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Manage Venues
          </Link>
        </li>
        <li>
          <Link
            href="/admin/vendors"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Manage Event Vendors
          </Link>
        </li>
      </ul>
      <button className="w-full mx-auto border border-red-400 p-2 text-center rounded-md mt-3 hover:bg-red-300 transition-all duration-300 flex flex-row-reverse justify-center gap-2">Sign Out <Image alt='logout' src='/icons/logout.svg' height={20} width={20} /> </button>
    </aside>
    </>
  );
};

export default Sidebar;
