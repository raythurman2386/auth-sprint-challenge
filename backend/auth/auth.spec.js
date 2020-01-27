const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

test("register route", async () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  const newUser = {
    "username": "test",
    "password": "test"
  }

  const res = await supertest(server).post('/api/auth/register').send(newUser)

  expect(res.status).toBe(201);
  expect(res.type).toBe('application/json');
  expect(res.body.id).toBe(1)
  expect(res.body.username).toMatch(/test/i)
})

test("register fail", async () => {
  const res = await supertest(server).post('/api/auth/register')

  expect(res.status).toBe(500)
})

test("login", async () => {
  const user = {
    "username": "test",
    "password": "test"
  }
  await supertest(server).post('/api/auth/register').send(user)
  const res = await supertest(server).post('/api/auth/login').send(user)

  expect(res.status).toBe(200)
  expect(res.body.message).toContain("Welcome")
  expect(res.body.token).toBeDefined()
})

test("login fail", async () => {
  const res = await supertest(server).post('/api/auth/login')

  expect(res.status).toBe(500);
})