module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [
    'src/models/**/*.ts'
  ],
  migrations: [
    'src/database/migrations/**/*.ts'
  ],
  subscribers: [
    'src/subscriber/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/subscriber'
  }
}
