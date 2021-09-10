const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, "Setup is required"],
			minlength: [10, "Setup must be at least 10 characters long"]
		},
		punchLine: {
			type: String,
			required: [true, "Punch Line is required"],
			minlength: [3, "Punch Line must be at least 3 characters long"]
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
		_v: {
			type: Number,
		},
	},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
