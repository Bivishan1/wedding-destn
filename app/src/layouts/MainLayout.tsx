import Navbar from "@/components/NavBar";
// import ClientLayout from "./clientLayout";
import Footer from "@/components/Footer";
import { UIProvider } from "@/context/PopUpContext";
import GoToTop from "@/components/atoms/GoToTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
  <>     
   
        {/* CssBaseline helps normalize the CSS */}
        <UIProvider>
          <Navbar />
        {/* <PopupProvider> */}
          {children}
        <Footer />
        <GoToTop />
        </UIProvider>
        {/* </PopupProvider> */}
      
    </>
  );
};

export default MainLayout;
