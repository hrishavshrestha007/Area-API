const request = require('supertest');
const app = require('./app');

describe('GET /test', () => {
    it('returns API is working message', async () => {
        const res = await request(app)
            .get('/test');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message', 'API is working');
    });
});

describe('POST /area/circle', () => {
    it('calculates area of circle with valid radius', async () => {
        const res = await request(app)
            .post('/area/circle')
            .send({radius: 5});
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('area', Math.PI * 25);
    });
});

describe('POST /area/rectangle', () => {
    it('calculates area of rectangle with valid length and width', async () => {
        const res = await request(app)
            .post('/area/rectangle')
            .send({length: 4, width: 5});
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('area', 20);
    });
});