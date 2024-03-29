import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { resolve } from 'path';
import homeRoutes from './routes/home';
import userRoutes from './routes/user';
import alunoRoutes from './routes/aluno';
import tokenRoutes from './routes/token';
import fotoRoutes from './routes/foto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
