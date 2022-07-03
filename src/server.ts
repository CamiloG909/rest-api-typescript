import express from 'express';
const app = express();

import diaryRouter from './routes/diaries.routes';

app.use(express.json());
app.use('/api/diaries', diaryRouter);

export default app;
