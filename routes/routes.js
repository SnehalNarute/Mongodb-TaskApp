const router = require('express').Router();
const Task = require('../models/Task');

// routes will be here....
router.get('/', async (req, res) => {
	const allTask = await Task.find();
	res.render('index', { task: allTask });
});

module.exports = router;
