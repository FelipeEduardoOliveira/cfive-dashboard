import '@/app/globals.css';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { montserrat, hind } from '@/styles/fonts';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${montserrat.variable} ${hind.variable} antialiased flex flex-col justify-between items-center h-full  p-2.5 w-full`}
    >
      <Header />
      <main className="overflow-y-scroll max-w-96 w-full scrollbar-hide">{children}</main>
      <Menu />
    </div>
  );
}
