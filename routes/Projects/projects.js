const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.render("projectDetails", {
    project: {
      name: `Project${req.params.id}`,
      id: req.params.id,
    },
  });
});

module.exports = router;
