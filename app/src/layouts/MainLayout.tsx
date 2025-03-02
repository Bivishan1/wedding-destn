import Navbar from "@/components/NavBar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"; // Import AppRouterCacheProvider
// import ClientLayout from "./clientLayout";
import Footer from "@/components/Footer";
import { UIProvider } from "@/context/PopUpContext";
import GoToTop from "@/components/atoms/GoToTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
  <>     
   <AppRouterCacheProvider>
        {/* CssBaseline helps normalize the CSS */}
        <UIProvider>
          <Navbar />
        {/* <PopupProvider> */}
          {children}
        </UIProvider>
        <Footer />
        <GoToTop />
        {/* </PopupProvider> */}
      </AppRouterCacheProvider>
    </>
  );
};

export default MainLayout;
