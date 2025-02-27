
import Dashboard from '@/components/admin/dashboard';



export default function AdminPage() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen">
    
        <main className="p-4">
          <Dashboard />
        </main>
  
    </div>
  );
}
