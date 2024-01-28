import express from 'express';

import { logger } from './middleware/logger';
import mathRouter from "./routes/math";

/**
 * Server used to run the application
 *
 * @param config
 */
export function run (config) {
  const app = express();

  // Middleware
  // ------
  app.use(express.json());
  app.use(logger);

  // Routes
  // ------
  app.use("/math", mathRouter);

  app.listen(config.port, () => {
    console.log(`Assessment app listening on port ${config.port}`);
  });
}
