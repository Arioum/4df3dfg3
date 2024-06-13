interface Feedback {
  name: string;
  feedback: string;
  createdAt: string;
}

const feedbackEntries: Feedback[] = [];

export const getAllFeedback = (): Feedback[] => feedbackEntries;

export const addFeedback = (feedback: Feedback): void => {
  feedbackEntries.push(feedback);
};
