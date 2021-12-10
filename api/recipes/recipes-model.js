const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
  const rows = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select(
      'r.recipe_id',
      'r.recipe_name', 
      's.step_id', 
      's.step_number', 
      's.step_instructions', 
      'i.ingredient_id', 
      'i.ingredient_name', 
      'si.quantity'
      )
    .where('r.recipe_id', recipe_id)

    const recipe = { 
      recipe_id: rows[0].recipe_id,
      recipe_name: rows[0].recipe_name,
      steps: [] 
    }

    const step_ids = []
    rows.forEach(row => {
      if (!step_ids.includes(row.step_id)) {
        step_ids.push(row.step_id)
        const step = {
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
          ingredients: []
        }
        rows.forEach(row => {
          if (step.step_id === row.step_id && row.ingredient_id) {
            step.ingredients.push({
              ingredient_id: row.ingredient_id, 
              ingredient_name: row.ingredient_name, 
              quantity: row.quantity
            })
          }
        })
        recipe.steps.push(step)
      }
    })

    console.log(recipe);
    return recipe
}

module.exports = {
  getRecipeById
}