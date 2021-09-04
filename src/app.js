import dotenv from 'dotenv';
import express from 'express';

import './database';

import homeRouter from './routes/homeRouter';
import usersRouter from './routes/usersRouter';
import authRouter from './routes/authRouter';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/', usersRouter);
    this.app.use('/auth', authRouter);
  }
}

export default new App().app;
