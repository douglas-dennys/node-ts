import 'dotenv/config';

import * as express from 'express';
import 'express-async-errors';

import { exceptionHandler } from './middleware/exceptionHandler';
import router from './routes';
import cors from './middleware/cors';
import helmet from './middleware/helmet';
import rateLimit from './middleware/rateLimit';

const app: express.Application = express();

app.use(express.json());
app.use(cors);
app.use(rateLimit);
app.use(exceptionHandler);
app.use(helmet);
app.use(router);

export default app;
