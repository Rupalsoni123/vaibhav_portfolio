import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res, next) => {
        if (req.url === '/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            status: 'healthy',
            service: 'Portfolio API',
            timestamp: new Date().toISOString(),
            version: '1.0.0',
            environment: 'local'
          }));
          return;
        }



        next();
      });
    }
  };
}
