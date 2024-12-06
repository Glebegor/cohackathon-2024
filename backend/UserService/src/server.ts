import express, { Express } from 'express';

const app: Express = express();

const port: number = parseInt(process.env.PORT || '5002', 10);

// Spuštění serveru
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});