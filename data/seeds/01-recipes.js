
exports.seed = function(knex, Promise) { // eslint-disable-line
  return knex('recipes').insert([
    { recipe_name: 'Spaghetti Bolognese' },
    { recipe_name: 'Fried Egg' }
  ]);
};
