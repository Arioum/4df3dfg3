import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tabs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <section className='bg-[#dbdbdb] p-[.3em] rounded-[6px] flex mb-[1em]'>
      <Link
        to='/'
        className={`flex-1 text-center p-[.6em_0] ${
          pathname === '/' ? 'bg-[#202020] text-[#fff] rounded-[3px]' : ''
        }`}
      >
        Feedback Form
      </Link>
      <Link
        to='/all-feedbacks'
        className={`flex-1 text-center p-[.6em_0] ${
          pathname === '/all-feedbacks'
            ? 'bg-[#202020] text-[#fff] rounded-[3px]'
            : ''
        }`}
      >
        All Feedbacks
      </Link>
    </section>
  );
};

export default Tabs;
