const express = require("express");
const router = require("express").Router();

router.get("/exercise", async (req, res) => {
  res.status(200).redirect("./exercise.html");
});

router.get("/stats", async (req, res) => {
  res.status(200).redirect("./stats.html");
});

module.exports = router;
