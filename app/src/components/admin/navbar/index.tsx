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
          <button className="text-gray-800" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <ShowHideIcon />
          </button>
        </div>
      </div>

      {/* Admin Profile on the Right */}
      <div
        className="flex items-center p-1 gap-2 h-[29px] rounded-2xl"
      >
        {/* Admin Profile Icon */}
        <PersonIcon />

        {/* Admin Info */}
        <div>
          <p className="font-semibold text-gray-800">Name</p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
