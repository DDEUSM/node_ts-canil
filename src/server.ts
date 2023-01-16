import express,{Request, Response, Router} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes';

// Comando para permitir o acesso as informações do arquivo .env, onde se encontra a nossa porta do Servidor.
dotenv.config();

// Iniciando/construindo o Servidor Node com express;
const server = express();

// Construir o nosso engine Template com o mustache;
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Comando para conceder ao server.ts acesso aos arquivos estáticos da pasta public, arquivos como .css
server.use(express.static(path.join(__dirname,'../public')));

// Rotas
server.use(mainRoutes);

// Rotas // Error 404
server.use('',(req:Request, resp:Response)=> {
    resp.status(404).send('Erro, página não encontrada!');
});

// Conectar o server a porta
server.listen(process.env.PORT);