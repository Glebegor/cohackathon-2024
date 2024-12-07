import cron from 'node-cron';
import { cronJobs } from '../config/cronConfig';

export const scheduleCronJobs = () => {
  cronJobs.forEach(({ name, schedule, job }) => {
    try {
      cron.schedule(schedule, job);
      console.log(`Cron job "${name}" scheduled with schedule "${schedule}".`);
    } catch (error) {
      console.error(`Error scheduling cron job "${name}": ${error.message}`);
    }
  });
};
