import server from '../../src/server';
import request from 'supertest';

//close the server after each test
afterEach((done) => {
	server.close();
	done();
});

describe('routes/postGames', () => {
	//const games = ['World of Warships', 'Battlefield'];

	it('should allow adding a game to the list', async () => {
		const response = await request(server)
			.post('/postGame')
			.send({ game: 'World of Warships' });

		expect(response.status).toEqual(201);
		expect(response.type).toEqual('application/json');
		expect(response.body).toEqual({
			games: ['World of Warships'],
		});
	});
});
