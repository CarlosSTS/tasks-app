import express from "express";
import cors from 'cors';

import mongoose from "mongoose";
import routes from './routes';

const app = express();

mongoose.connect('MONGODB_URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Port 3333')
})