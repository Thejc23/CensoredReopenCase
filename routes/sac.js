const express = require("express");
var router = express.Router();

const SACController = require("../controllers/sac.controller");

router.post("/case", async function(req, res, next) {
  const myData = req.body.value;
  const checkboxValue = req.body.checkbox;
  const response = await SACController.openCase(myData, checkboxValue);

  if (response) {
    return res.send({
      error: false,
      message: "el caso ha sido abierto"
    });
  } else {
    return res.status(500).send({
      error: true,
      message: "Ha ocurrido un error"
    });
  }
});

module.exports = router;
