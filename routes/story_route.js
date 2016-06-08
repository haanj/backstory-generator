'use strict'
module.exports = (router) => {
  router.route('/stories')
    .get((req, res) => {
      res.json(require('../library/generator')('dwarf'))
    })
}
