import React, { useEffect } from "react";

// Using Fetch
const CompApi1 = () => {
  let API = "http://hn.algolia.com/api/v1/search?query=html";
  const fetchAPIData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data::::", data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAPIData(API);
  });
  return (
    <div>
      <h3> Hello, Here you can have latest</h3>
      <h4> Tech news </h4>
    </div>
  );
};

export default CompApi1;
