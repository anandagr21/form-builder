const Form = require("../models/form");

exports.saveQues = async (req, res) => {
    try {
        const newForm = await new Form(req.body).save();
        res.json(newForm);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

exports.getAllForms = async (req, res) => {
    const allForms = await Form.find({}).exec()
    res.json(allForms);
}

exports.getFormDetail = async (req, res) => {
    console.log(req.params.id);
    const formDetail = await Form.findOne({ form_id: req.params.id }).exec()
    res.json(formDetail)
}