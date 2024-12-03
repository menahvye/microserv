const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController.js")

router.post("/", authController.test)
router.get("/:id", authController.x)

module.exports = router