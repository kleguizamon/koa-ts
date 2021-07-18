import Koa from 'koa';
import bodyParse from 'koa-bodyparser';
import cors from 'koa2-cors';
import logger from 'koa-logger';
import healthCheck from './routes/healthCheck';
import postGame from './routes/postGame';
import { config } from './config';

const app = new Koa();
const PORT = config.port;

app.use(bodyParse());
app.use(
	cors({
		origin: '*',
	})
);

app.use(logger());

app.use(healthCheck.routes());
app.use(postGame.routes());

const server = app
	.listen(PORT, async () => {
		console.log(`Server listening on port ${PORT}`);
	})
	.on('error', (err) => {
		console.error(err);
	});

export default server;
