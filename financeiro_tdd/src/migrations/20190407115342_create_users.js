// progredir o banco
exports.up = knex => {
  return knex.schema.createTable("users", t => {
    t.increments("id").primary(), t.string("name").notNull();
    t.string("email")
      .notNull()
      .unique();
    t.string("passwd").notNull();
  });
};

// voltar a um estado anterior
exports.down = knex => {
  return knext.schema.dropTable("users");
};
