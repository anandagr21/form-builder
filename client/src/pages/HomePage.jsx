import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { getAllForms } from "../functions/saveToDB";

const HomePage = () => {
  const [allForms, setAllForms] = useState([]);

  useEffect(() => {
    getAllForms().then((res) => {
      setAllForms(res.data);
    });
  }, []);

  return (
    <div className="container">
      <Link to={`/form/${uuid()}`}>
        <h1>Create Form</h1>
      </Link>
      <hr />
      <h1>All Forms</h1>

      <div className="row">
        {allForms.map((form) => {
          return (
            <div className="col-md-3 col-6">
              <Link to={`form/${form.form_id}`}>
                <div className="card">
                  <div className="card-body">
                    <h6>{form.form_name}</h6>
                    <h6>{form.form_desc}</h6>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
