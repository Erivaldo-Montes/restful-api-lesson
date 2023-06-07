import Fastify from 'fastify'
import { knex } from './database'

const app = Fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('server online')
  })
