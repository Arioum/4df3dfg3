import React from 'react';
import { FeedbackTypes } from '../types/feedbackTypes';

const FeedbackCard: React.FC<FeedbackTypes> = ({
  name,
  feedback,
  createdAt,
}) => {
  return (
    <div className='border-[2px] rounded-[6px] p-[.8em] bg-[#eee]'>
      <p className='text-[.9rem] font-[600] text-[#979797] min-w-fit'>
        {createdAt}
      </p>
      <h3 className='text-[1.2rem] mb-[.4em] font-[700]'>{name}</h3>
      <p className='text-[.9rem]'>{feedback}</p>
    </div>
  );
};

export default FeedbackCard;
