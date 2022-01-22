router = require("express").Router();
apiRoutes = require("./api");
htmlRoutes = require("./html");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
