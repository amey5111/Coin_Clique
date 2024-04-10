import React from 'react';
import Image from 'next/image';
import { FallBackCardProps } from './types';

const FallBackCard: React.FC<FallBackCardProps> = ({ imgSrc, heading, subHeading }) => {
  return (
    <div className="flex items-center justify-center text-purple-300 p-4 rounded-lg mx-auto text-center">
      <div>
        <Image className='mx-auto opacity-20' src={imgSrc} alt="" height={200} width={200} />
        <p className="text-lg font-semibold">{heading}</p>
        <p className="text-sm">{subHeading}</p>
      </div>
    </div>
  );
};

export default FallBackCard;
