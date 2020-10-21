const controller = require('../controllers/professor')
const express = require('express')

const router = express.Router()

<<<<<<< HEAD
router.post('/', controller.novo)          //Create
router.get('/', controller.listar)        //Retrieve (all)
router.get('/:id', controller.obterUm)   //Retrieve (one)
router.put('/', controller.atualizar)   //Update
router.delete('/', controller.excluir) //Delete

=======
router.post('/', controller.novo)       // Create
router.get('/', controller.listar)      // Retrieve (all)
router.get('/:id', controller.obterUm)  // Retrieve (one)
router.put('/', controller.atualizar)   // Update
router.delete('/', controller.excluir)  // Delete 
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77

module.exports = router