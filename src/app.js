import dotenv from 'dotenv';
import express from 'express';

import './database';

import homeRouter from './routes/homeRouter';
import authRouter from './routes/authRouter';
import usersRouter from './routes/usersRouter';
import studentsRouter from './routes/studentsRouter';
import profilePictureRouter from './routes/profilePictureRouter';

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
    this.app.use('/auth', authRouter);
    this.app.use('/users', usersRouter);
    this.app.use('/students', studentsRouter);
    this.app.use('/pictures', profilePictureRouter);
  }
}

export default new App().app;
