const express = require("express");
const router = express.Router();

const basic = require("./controllers/basic");

router.get("/", basic.home);
router.get("/fruits", basic.getFruits);
router.post("/add-fruit", basic.addFruits);

module.exports = router;
