const express = require('express')
const router = express.Router()
const taskController = require('../controller/task.js')

router.get('/', taskController.getAll)
router.post('/', taskController.create)
router.delete('/:id', taskController.deleteById)
router.put('/:id', taskController.updateById)
router.get('/:id', taskController.getById)

module.exports = router