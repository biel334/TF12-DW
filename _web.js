import express from 'express';
import chalk from 'chalk';

import router from './routes/router.js';
import app from "./bootstrap/app.js";

import LogMiddleware from './app/Http/Middlewares/LogMiddleware.js';

/** Inicializador */
app();

/** */
/** Iniciar roteador */
const web = express();

web.use(express.json());

/** Registrar Middleware */
web.use((req, res, next) => LogMiddleware.handle(req, res, next));

/** Registrar as Rotas */
web.use('/', router);

const port = process.env.NODE_WEB_PORT;

web.listen(port, () => {
    console.log(chalk.green(`Servidor node web rodando na porta ${port}`));
});