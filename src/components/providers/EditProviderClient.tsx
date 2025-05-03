'use client';

import { EditProvider } from '@/context/EditContext';

export default function EditProviderClient({ children }: { children: React.ReactNode }) {
  return <EditProvider>{children}</EditProvider>;
}
