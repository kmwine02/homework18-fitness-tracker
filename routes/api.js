const router = require("express").Router();
const Workout = require("../models/workout");

router.put("/workouts/:id", (req, res) => {
  // console.log(req.body);

  Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error in api call...");
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    { $match: { _id: { $exists: true } } },
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((dbTransaction) => {
      console.dir(dbTransaction);
      res.json(dbTransaction);
    })
    .catch((err) => {
      console.log("Error in api call...");
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/workouts", (req, res) => {
  Workout.create({
    day: Date.now(),
  })
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      console.log("Error in api call...");
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    { $match: { _id: { $exists: true } } },
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
