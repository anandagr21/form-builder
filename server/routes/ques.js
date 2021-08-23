const express = require("express");
const { saveQues, getAllForms, getFormDetail } = require("../controllers/ques");
const router = express.Router();

router.post("/ques", saveQues)
router.get("/getAllForms", getAllForms)
router.get("/getForm/:id", getFormDetail)

module.exports = router;