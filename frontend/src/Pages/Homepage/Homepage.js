import React, { useEffect, useState } from "react";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./homepage.scss";
import axios from "axios";
const Homepage = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzExN2M0N2NkYmU1MTdhNDMzMzI3ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzA2MDczMjYsImV4cCI6MTYzMTAzOTMyNn0.h_DVZSgzjpvNiX_IwcEP-K9Dw6nmTGtxd74hFk6yp5o",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Homepage;
