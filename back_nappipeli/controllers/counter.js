const counterRouter = require('express').Router()
const Counter = require('../models/counter')



counterRouter.get('/:id', async (request, response) => {
    const counter = await Counter.findById(request.params.id)
    response.json(Counter.format(counter))
})

counterRouter.put('/:id', async (request, response) => {
  const body = request.body

  const state = body.state
  const uusi = {
      state
  }
  Counter.findByIdAndUpdate(request.params.id, uusi, { new: true }).then(updated => {
    response.json(updated.toJSON())
  })
  .catch(error => next(error))

})

counterRouter.post('/', async (request, response) => {
      const counter = new Counter({
        state: 0
      })
      const saved = await counter.save()
      response.json(Counter.format(counter))
  })

module.exports = counterRouter