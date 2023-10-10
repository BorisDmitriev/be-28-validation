const express = require("express");
const router = express.Router();
const { validationInputs } = require("../middleware/validation")
const { userValidationRule } = require("../lib/validation/userRules")

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.post("/register", validationInputs(userValidationRule),function (req, res, next) {
     res.json( req.body )
});

module.exports = router;
