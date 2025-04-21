import '@/app/globals.css';
import Header from '@/components/Header';
import { montserrat, hind } from '@/styles/fonts';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${montserrat.variable} ${hind.variable} antialiased flex flex-col justify-between items-center min-h-screen p-2.5 w-full`}
    >
      <Header />
      {children}
      <div className="bg-orange-500 w-full max-w-96">
        <h1>Rodapé</h1>
      </div>
    </div>
  );
}
