import { Context } from 'koa';
import Router from 'koa-router';

const router = new Router();

router.post('/postGame', async (ctx: Context) => {
	try {
		ctx.status = 201;
		ctx.body = {
			games: ['World of Warships'],
		};
	} catch (err) {
		console.error(err);
	}
});
export default router;
