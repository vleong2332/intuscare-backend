import express from 'express';

import { generateRoute } from './lib/httpRoute';
import { math } from './handler/math';

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

  // Routes
  // ------
  generateRoute(app, '/math', 'POST', math);

  app.listen(config.port, () => {
    console.log(`Assessment app listening on port ${config.port}`);
  });
}
