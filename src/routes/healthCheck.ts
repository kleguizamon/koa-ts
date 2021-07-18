import Router from 'koa-router';

const router = new Router();

router.get('/healthCheck', async (ctx) => {
	try {
		ctx.body = {
			status: 'success',
			data: 'healthData',
		};
	} catch (err) {
		console.error(err);
	}
});

export default router;
