'use client';

import React from 'react';
import Profile from '../Profile';
import Title from '../Texts/title';
import { getFirstAndLastName } from '@/utils/formatNamesType';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const { user } = useAuth();
  const [hasNotification, setHasNotification] = React.useState(false);
  const userName = user?.email === 'cfivepublicity@gmail.com' ? 'Carolyne Nascimento' : 'Anônimo';
  const { logout } = useAuth();
  return (
    <div
      className="flex justify-between items-center w-full max-w-96 h-20 mb-2"
      onClick={() => setHasNotification(!hasNotification)}
    >
      <Title title={`${getFirstAndLastName(userName)}`} className="font-semibold" />

      <Profile userName={userName} hasNotification={hasNotification} />
      {/* <div onClick={logout}> Out </div> */}
    </div>
  );
};

export default Header;
