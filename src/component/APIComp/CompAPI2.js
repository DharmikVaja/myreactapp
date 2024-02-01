import React, { useState, useEffect } from "react";
import axios from "./axios.jsx";
// import "./compAPI.css";
import "./apiStyle1.css";
// const API = "https://jsonplaceholder.typicode.com";

const CompAPI2 = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/posts`);
      setMyData(response.data);
      setIsError(null);
    } catch (error) {
      setIsError(error.message);
    }
  };
  fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <h2 className="heading">API Data will be shown here:</h2>
          <div className="row">
            {myData.map((post) => {
              const { id, title, body } = post;
              return (
                <div
                  key={id}
                  className="col-lg-4 col-md-6 col-sm-12 single-box"
                >
                  <hr />
                  <div className="apiContent text-white">
                    <h4>{title.slice(0, 15)}</h4>
                    <h6>{body.slice(0, 250)}</h6>
                  </div>
                </div>
              );
            })}
            {isError && <div className="error-message">Error: {isError}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompAPI2;
