import React, { useEffect } from "react";
import axios from "axios";

const CompAPI2 = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://hn.algolia.com/api/v1/search?query=html"
        );
        console.log(res.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>call API by axios promise </div>
    </>
  );
};

export default CompAPI2;

// Adv of axios over fetch,
// 1) no need of json bcoz data is bydefault json formated.
// 2) All type of http method can be called- GET, POST, DELETE, PATCH
