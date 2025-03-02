'use client';
import PersonIcon from "public/icons/PersonIcon";
import ShowHideIcon from "public/icons/ShowHideIcon";
import { useSidebar } from "@/context/SidebarContext";


const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <nav className={`sticky left-0 top-0 ${isOpen ? '' : 'w-full'} bg-white shadow-md p-4 flex justify-between items-center z-30`}>
      {/* Logo on the Left */}
      <div className="text-xl font-bold text-gray-800">
        <div className="flex items-center">
          {/* <span className="text-2xl font-bold font-workSans">
                        Destination Wedding
                      </span> */}
          {/* <Image
                        alt="nav-logo"
                        className="object-center bg-cover"
                        src={`/icons/nav-icon.svg`}
                        width={40}
                        height={40}
                      /> */}
          <button className="text-gray-800 " onClick={toggleSidebar} aria-label="Toggle sidebar">
            <ShowHideIcon />
          </button>
        </div>
      </div>

      {/* Admin Profile on the Right */}
      <div
        className="flex items-center px-4 py-2 gap-2 rounded-xl bg-red-900  text-white"
      >
        {/* Admin Profile Icon */}
        <div className="admin-icon bg-white p-1 rounded-full text-red-800">

        <PersonIcon />
        </div>

        {/* Admin Info */}
        <div>
          <p className="font-medium text-lg ">Nishant</p>
          <p className="text-sm ">Admin</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
