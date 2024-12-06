import express, { Express } from 'express';
import cors from 'cors'

const app: Express = express();
const port: number = parseInt(process.env.PORT || '5002', 10);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v2/reservations', );

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
