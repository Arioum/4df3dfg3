import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitResponse, setSubmitResponse] = useState<
    string | { message: string } | null
  >(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post(
        'http://localhost:4000/feedback',
        { name, feedback },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => setSubmitResponse(res.data))
      .catch((error) => setSubmitResponse(error.response.data));
    setName('');
    setFeedback('');
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [feedback]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitResponse(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [submitResponse]);

  const renderSubmitResponse = () => {
    if (typeof submitResponse === 'string') {
      return submitResponse;
    } else if (submitResponse && typeof submitResponse === 'object') {
      return submitResponse.message;
    }
    return null;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[1em]'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-[2px] rounded-[6px] p-[.6em_1em]'
          required
        />
        <textarea
          placeholder='Feedback'
          ref={textareaRef}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className='border-[2px] rounded-[6px] p-[.6em_1em] min-h-[210px] overflow-hidden resize-none'
          required
        />
        <button
          type='submit'
          className='bg-[#202020] text-[#fff] p-[.6em_1em] rounded-[6px] hover:bg-[#4f4f4f]'
        >
          Submit
        </button>
      </form>
      {submitResponse && (
        <p className='bg-[#3f9c28] text-[#fff] font-[700] flex-1 p-[.6em_1em] rounded-[6px] mt-[1em] text-center'>
          {renderSubmitResponse()}
        </p>
      )}
    </>
  );
};

export default FeedbackForm;
