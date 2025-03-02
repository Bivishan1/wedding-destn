import MainLayout from "@/layouts/MainLayout";
import "../globals.css";

export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
        <MainLayout>{children}</MainLayout>
   
  );
}
