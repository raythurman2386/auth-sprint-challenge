const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

test("get jokes", async () => {
  const res = await supertest(server).get('/api/jokes')

  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
  expect(res.body.length).toBeGreaterThan(0)
})