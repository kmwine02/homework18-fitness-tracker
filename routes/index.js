router = require("express").Router();
apiRoutes = require("./api");
htmlRoutes = require("./html");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
