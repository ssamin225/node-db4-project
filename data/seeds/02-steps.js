
exports.seed = function(knex, Promise) { // eslint-disable-line
  return knex('steps').insert([
    {
      step_number: 1, 
      step_instructions: 'Put a large saucepan on a medium heat', 
      recipe_id: 1
    },
    {
      step_number: 2, 
      step_instructions: 'Add 1 tbsp olive oil', 
      recipe_id: 1
    },
    {
      step_number: 1, 
      step_instructions: 'Put a nonstick pan on a medium heat',
      recipe_id: 2
    },
    {
      step_number: 2, 
      step_instructions: 'Add 2 tbsp olive oil',
      recipe_id: 2
    },
    {
      step_number: 3, 
      step_instructions: 'Crack open the egg and add it',
      recipe_id: 2
    }
  ]);
};
