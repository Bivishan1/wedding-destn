// // components/ConditionalLayout.tsx
// "use client";

// import { ReactNode } from "react";
// import { usePathname } from "next/navigation";
// import Navbar from "@/components/NavBar"; // Adjust path
// import Footer from "@/components/Footer"; // Adjust path

// export default function ConditionalLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname(); // Get the current route

//   // Pages where Navbar and Footer should NOT appear
//   const excludedRoutes = ["/signup", "/login"];

//   // Check if current route is excluded
//   const isExcluded = excludedRoutes.includes(pathname);

//   return (
//     <>
//       {!isExcluded && <Navbar />}
//       <main>{children}</main>
//       {!isExcluded && <Footer />}
//     </>
//   );
// }
