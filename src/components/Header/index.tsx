'use client';

import React from 'react';
import Profile from '../Profile';
import Title from '../Texts/title';
import { getFirstAndLastName } from '@/utils/formatNamesType';

const Header = () => {
  const [hasNotification, setHasNotification] = React.useState(false);
  const userName = 'Felipe Eduardo Rodrigues de Oliveira';
  return (
    <div
      className="flex justify-between items-center w-full max-w-96 h-20"
      onClick={() => setHasNotification(!hasNotification)}
    >
      <Title title={`${getFirstAndLastName(userName)}`} className="font-semibold" />

      <Profile userName={userName} hasNotification={hasNotification} />
    </div>
  );
};

export default Header;
