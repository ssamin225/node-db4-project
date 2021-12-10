
exports.seed = function(knex, Promise) { // eslint-disable-line
  return knex('step_ingredients').insert([
    {step_id: 2, ingredient_id: 1, quantity: 0.014},
    {step_id: 4, ingredient_id: 1, quantity: 0.028},
    {step_id: 5, ingredient_id: 2, quantity: 1},
    {step_id: 5, ingredient_id: 3, quantity: 0.001}
  ]);
};
