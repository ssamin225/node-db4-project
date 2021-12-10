
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'olive oil'},
    {ingredient_name: 'egg'}
  ]);
};
