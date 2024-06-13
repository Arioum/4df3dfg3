import express from 'express';
import { getFeedback, submitFeedback } from '../controllers/feedbackController';

const router = express.Router();

router.get('/', getFeedback);
router.post('/', submitFeedback);

export default router;
