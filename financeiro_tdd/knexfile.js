module.exports = {
  test: {
    client: "pg",
    version: 9.6,
    connection: {
      host: "localhost",
      user: "postgres",
      password: "",
      database: "financeiro_tdd"
    },
    migrations: {
      directory: "src/migrations"
    }
  }
};
