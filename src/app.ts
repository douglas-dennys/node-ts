import "dotenv/config";

import express from "express";

import router from "./routes";
import cors from "./middleware/cors";
import helmet from "./middleware/helmet";
import rateLimit from "./middleware/rateLimit";

const app: express.Application = express();

app.use(express.json());
app.use(cors);
app.use(rateLimit);
app.use(helmet);
app.use(router);

export default app;
