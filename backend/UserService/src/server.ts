import express, { Express } from 'express';
import cors from 'cors'

import userRoutes from './routes/userRoutes'
import userProfileRoutes from './routes/userProfileRoutes'
import childHouseRoutes from './routes/userRoutes'

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
