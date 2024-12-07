import { deleteSharedDiariesJob } from "../jobs/deleteSharedDiariesJob";

export const cronJobs = [
  {
    name: 'delete-shared-diaries',
    schedule: '0 0 * * *',  // Každý den o půlnoci
    job: deleteSharedDiariesJob,
  },
];
