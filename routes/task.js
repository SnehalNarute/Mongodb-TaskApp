const router = require('express').Router();
const Task = require('../models/Task');

// routes
router.post('/add/task', (req, res) => {
	const { description, completed } = req.body;

	const newTask = new Task({ description, completed });
	// save the Task
	newTask
		.save()
		.then(() => {
			console.log('====================================');
			console.log('Task created successfully');
			console.log('====================================');
			console.log(newTask);
			res.redirect('/');
		})
		.catch((err) => console.log(err));
});

router.get('/delete/task/:_id', (req, res) => {
	const { _id } = req.params;
	Task.deleteOne({ _id })
		.then(() => {
			console.log('====================================');
			console.log('Deleted task Successfully!');
			res.redirect('/');
			console.log('====================================');
		})
		.catch((err) => console.log(err));
});

router.post('/update', (req, res) => {
	Task.findOneAndUpdate({ completed: false }, { $set: { completed: true } })
		.then(() => {
			console.log('====================================');
			console.log('Updated task Successfully!');
			res.redirect('/');
			console.log('====================================');
		})
		.catch((err) => console.log(err));
});
module.exports = router;
