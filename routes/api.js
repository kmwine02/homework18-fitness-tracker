const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      console.log("Error in api call...");
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
