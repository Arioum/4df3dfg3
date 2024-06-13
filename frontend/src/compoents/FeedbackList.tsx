import React, { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';
import { FeedbackTypes } from '../types/feedbackTypes';

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackTypes[]>([]);

  useEffect(() => {
    if (window.Worker) {
      const worker = new Worker('/workers/feedbackWorker.js');

      worker.onmessage = (event) => {
        setFeedbacks(event.data);
      };

      worker.postMessage('fetch');
      return () => worker.terminate();
    } else {
      console.error('Web Workers are not supported in this browser.');
    }
  }, []);

  return (
    <div className='flex flex-col gap-[1em]'>
      {feedbacks.length === 0 && (
        <h1 className='text-center text-[1.2rem] font-[600]'>
          There is no feedbacks yet
        </h1>
      )}
      {feedbacks.map((feedback, index) => (
        <FeedbackCard
          key={index}
          name={feedback.name}
          feedback={feedback.feedback}
          createdAt={feedback.createdAt}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
