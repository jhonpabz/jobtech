import express from 'express';
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/jobsController.js';

router.route('/create-job').post(createJob);
router.route('/delete-job').delete(deleteJob);
router.route('/get-all-jobs').get(getAllJobs);
router.route('/update-job').patch(updateJob);
router.route('/show-stats').get(showStats);

export default router;
