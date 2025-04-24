import cors from 'cors'
import express, {Response, Request} from 'express';
import {createServer} from 'http'
import { router } from './routes';
import { disconnectPrisma } from '../prisma';
import { env } from '../config/env';

const api = express();
const http = createServer(api)
const port = env.PORT

api.use(express.urlencoded({ extended : true }))
api.use(express.json());
api.use(cors())
api.use(router);
api.set('port', port);

api.get('/', (_: Request, res: Response): any => {
    return res.status(200).json({
      status: 'online'
    });
  });

http.listen( port, () => {
  console.log(`Server running on port ${port}`);
});

// Lógica de encerramento do servidor
const handleShutdown = async () => {
  await disconnectPrisma();
  http.close(() => {
    process.exit(0);
  });
};

// Ouvinte de sinal de encerramento do processo
process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);


export const runAPI = ()=>{
  console.log("Run")
}