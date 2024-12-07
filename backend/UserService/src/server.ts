import express, { Express } from 'express';
import cors from 'cors'
import { authenticate } from './middlewares/authenticationMiddleware';
import { scheduleCronJobs } from "./utils/cronScheduler";

import {router as DiaryRouter} from './routes/DiaryRoutes'
import {router as UserRouter} from './routes/UserRoutes'
import {router as UserProfileRouter} from './routes/UserProfileRoutes'
import {router as Childrouter} from './routes/ChildHouseRoutes'

const app: Express = express();
const port: number = parseInt(process.env.PORT || '5002', 10);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

scheduleCronJobs();

app.use('/api/v2/diary', DiaryRouter);
app.use('/api/v2/user', UserRouter);
app.use('/api/v2/user-profile', UserProfileRouter);
app.use('/api/v2/child-house', Childrouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
