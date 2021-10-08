const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
		default: false,
	},
});

module.exports = new mongoose.model('Task', TaskSchema);
