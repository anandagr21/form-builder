import axios from "axios";

export const saveToDB = async (questions, documentName, documentDescription, form_id) => {
    axios.post(`${process.env.REACT_APP_API}/ques`, { questions, form_name: documentName, form_desc: documentDescription, form_id }, {})
}

export const getFormDetails = async (id) => {
    return await axios.get(`${process.env.REACT_APP_API}/getForm/${id}`)
}

export const getAllForms = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/getAllForms/`)
}