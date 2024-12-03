const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController.js")


router.get("/", (req, res) => {
    return res.status(200).json({ message: "OK" });
})
router.post("/register", authController.register)

module.exports = router