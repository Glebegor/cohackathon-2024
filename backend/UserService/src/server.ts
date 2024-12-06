import express, { Express } from 'express';
import cors from 'cors'
import { authenticate } from './middlewares/authenticationMiddleware';

import diaryRoutes from './routes/DiaryRoutes'
import userRoutes from './routes/UserRoutes'
import userProfileRoutes from './routes/UserProfileRoutes'
import childHouseRoutes from './routes/ChildHouseRoutes'

const app: Express = express();
const port: number = parseInt(process.env.PORT || '5002', 10);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v2/user', userRoutes);
app.use('/api/v2/user-profile', userProfileRoutes);
app.use('/api/v2/child-house', childHouseRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
