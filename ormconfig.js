module.exports = {
  type: 'sqlite',
  database: './src/database/database.sqlite',
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
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
