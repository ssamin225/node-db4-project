
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 256).notNullable().unique()
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.integer('step_number').unsigned().notNullable()
      tbl.string('step_instructions').notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
    })
    .createTable('quantities', tbl => {
      tbl.increments('quantity_id')
    })
  };

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
