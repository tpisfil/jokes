const JokeController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.model");

module.exports = app => {
    app.get("/api", JokeController.helloworld);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.get("/api/jokes/:id",JokeController.findOneJoke);
    app.put("/api/jokes/update/:id",JokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}

