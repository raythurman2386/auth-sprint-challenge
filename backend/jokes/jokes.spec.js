const supertest = require('supertest');
const server = require('../api/server');


describe("jokes tests", () => {
  test("get jokes", async () => {
    const res = await supertest(server).get('/api/jokes')

    expect(res.status).toBe(401)
  })
  test("2nd jokes", async () => {
    const res = await supertest(server).get('/api/jokes')

    expect(res.type).toBe('application/json')
  })
})