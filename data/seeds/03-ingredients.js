
exports.seed = function(knex, Promise) { // eslint-disable-line
  return knex('ingredients').insert([
    {ingredient_name: 'olive oil'},
    {ingredient_name: 'egg'},
    {ingredient_name: 'test'}
  ]);
};
