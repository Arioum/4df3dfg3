import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './compoents/FeedbackForm';
import FeedbackList from './compoents/FeedbackList';
import Tabs from './compoents/Tabs';

const App: React.FC = () => {
  return (
    <main className='container'>
      <h1 className='text-[2rem] font-[700] mb-[1em] text-center'>
        Feedback Management System
      </h1>
      <section>
        <Router>
          <Tabs />
          <Routes>
            <Route path='/' element={<FeedbackForm />} />
            <Route path='/all-feedbacks' element={<FeedbackList />} />
          </Routes>
        </Router>
      </section>
    </main>
  );
};

export default App;
