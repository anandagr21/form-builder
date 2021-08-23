import React, { useEffect, useState } from "react";
import { getFormDetails } from "../functions/saveToDB";

const FormPage = ({ match }) => {
  const [formDetail, setFormDetail] = useState({});
  useEffect(() => {
    console.log(match);
    getFormDetails(match.params.id).then((res) => {
      console.log(res.data);
      setFormDetail(res.data);
    });
  }, [match]);
  return <div>formDetail</div>;
};

export default FormPage;
