import '@/app/globals.css';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import ProtectedRoute from '@/components/ProtectedRoute';
import EditProviderClient from '@/components/providers/EditProviderClient';
import { useAuth } from '@/context/AuthContext';
import { montserrat, hind } from '@/styles/fonts';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <EditProviderClient>
        <div
          className={`${montserrat.variable} ${hind.variable} antialiased flex flex-col justify-between items-center h-full  p-2.5 w-full menu-container`}
        >
          <Header />
          <main className="overflow-y-scroll max-w-3xl w-full scrollbar-hide">{children}</main>
          <Menu />
        </div>
      </EditProviderClient>
    </ProtectedRoute>
  );
}
