import Fastify from 'fastify'
import { knex } from './database'
import { randomUUID } from 'crypto'

const app = Fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('server online')
  })
