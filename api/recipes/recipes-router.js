const express = require('express')
const Recipe = require('./recipes-model')

const router = express.Router()

router.get('/:id', (req, res, next) => {
  Recipe.getRecipeById(req.params.id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe)
      } else {
        next({ status: 404, message: 'not found' })
      }
    }).catch(next)
})

module.exports = router