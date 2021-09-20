const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     required: [true, "ID is required!"]
    // },
    
    setup: {
        type: String,
        required: [true, "Setup is required!"],
        minlength: [10, "Setup must be at least 10 chars long!"]
    },
    
    punchline: {
        type: String,
        required: [true, "Punchline is definitely required!"],
        minlength: [3, "Punchline must be at least 3 characters!"]
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;