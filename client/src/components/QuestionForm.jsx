import { Button, Collapse, Input, Select, Space, Form, Radio } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import "./QuestionForm.css";
import { saveToDB } from "../functions/saveToDB";
import { useHistory } from "react-router-dom";
const { Panel } = Collapse;
const { Option } = Select;

const QuestionForm = () => {
  const history = useHistory();
  const [documentName, setDocumentName] = useState("untitled Document");
  const [documentDescription, setDocumentDesc] = useState("Add Description");

  const [modalVisible, setModalVisible] = useState(false);
  const [modalQues, setModalQues] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("text");
  const [radioValue, setRadioValue] = useState("");
  const [modalTextAnswer, setModalTextAnswer] = useState("");

  const [questions, setQuestions] = useState([]);

  const questionsUI = () => {
    return questions.map((ques, i) => {
      return (
        <Collapse accordion defaultActiveKey={ques.open ? [i] : ""} key={i}>
          <Panel header={questions[i].questionText} key={i}>
            <p>{questions[i].answer}</p>
          </Panel>
        </Collapse>
      );
    });
  };

  const openAddQuesModal = () => {
    setModalVisible(true);
  };

  const handleDropdownChange = (value) => {
    console.log(value);
    setSelectedDropdown(value);
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleModalOK = () => {
    setModalVisible(false);
    setQuestions((oldArray) => [
      ...oldArray,
      {
        questionText: modalQues,
        questionType: selectedDropdown,
        answer: modalTextAnswer,
        open: true,
        required: true,
      },
    ]);
    setModalQues("");
    setModalTextAnswer("");
  };

  const saveForm = () => {
    let form_id = history.location.pathname.split("form/")[1];
    saveToDB(questions, documentName, documentDescription, form_id);
  };

  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder={documentName}
                value={documentName}
                onChange={(e) => {
                  setDocumentName(e.target.value);
                }}
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                placeholder={documentDescription}
                value={documentDescription}
                onChange={(e) => {
                  setDocumentDesc(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <button className="btn btn-primry" onClick={openAddQuesModal}>
            Add question
          </button>
          {questionsUI()}
          <Modal
            title="Add question"
            centered
            visible={modalVisible}
            onOk={handleModalOK}
            onCancel={() => setModalVisible(false)}
          >
            <>
              <div className="d-flex">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={modalQues}
                  onChange={(e) => {
                    setModalQues(e.target.value);
                  }}
                ></input>

                <Select
                  defaultValue="text"
                  style={{ width: 120 }}
                  onChange={handleDropdownChange}
                >
                  <Option value="text">Text</Option>
                  <Option value="multichoice">Multichoice</Option>
                  <Option value="selectradio">Select Radio</Option>
                </Select>
              </div>

              <Form
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                autoComplete="off"
              >
                {selectedDropdown === "text" && (
                  <>
                    <Space
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <input
                        type="text"
                        className="answer"
                        placeholder="Answer"
                        value={modalTextAnswer}
                        onChange={(e) => {
                          setModalTextAnswer(e.target.value);
                        }}
                      ></input>
                      {/* <Radio.Group
                        onChange={handleRadioChange}
                        value={radioValue}
                      >
                        <Space direction="vertical">
                          <Radio value={1}>Option A</Radio>
                          <Radio value={2}>Option B</Radio>
                          <Radio value={3}>Option C</Radio>
                          <Radio value={4}>Option D</Radio>
                        </Space>
                      </Radio.Group> */}
                    </Space>
                  </>
                )}
              </Form>
            </>
          </Modal>
        </div>
      </div>
      <Button onClick={saveForm}>Save Form</Button>
    </div>
  );
};

export default QuestionForm;
