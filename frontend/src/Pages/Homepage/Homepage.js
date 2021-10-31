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
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          "https://video-library1.herokuapp.com/api/",
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer " + currentUser.accessToken,
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
