const Task = require ('../models/task')

const getAll = async (req, res) => {
	const result = await Task.find()
	res.json(result)
}

const create = async (req, res) => {
	const newTask = new Task(req.body)
	newTask.save((err, saveInfo) => {
		if(err){
			console.log('Ha ocurrido un error', err)
			return res.status(500).json({ error: err })
		}
		return res.json({ Task: saveInfo })
	})
}

const deleteById = async (req, res) => {
	const TaskToDelete = await Task.findByIdAndDelete(req.params.id)
	if(!TaskToDelete){
		return res.json({ message: 'nothing to delete' })
	}
	return res.json({ message: 'ok' })
}

module.exports = { getAll, create, deleteById }