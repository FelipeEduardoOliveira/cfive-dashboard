'use client';

import Title from '../Texts/title';
import { getOnlyLetter } from '@/utils/formatNamesType';

interface ProfileProps {
  userName: string;
  hasNotification?: boolean;
}

const Profile = ({ userName, hasNotification }: ProfileProps) => {
  return (
    <div className="relative w-20 border h-20 rounded-full flex justify-center items-center border-[#EFF5FF]">
      {hasNotification && (
        <div className="absolute top-1 right-2 w-2.5 h-2.5 rounded-full bg-[#E41010]" />
      )}

      <Title title={`${getOnlyLetter(userName)}`} className="font-semibold" />
    </div>
  );
};

export default Profile;
