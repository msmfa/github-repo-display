import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [descrip, setDescrip] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://api.github.com/users/msmfa/repos`
      );

      const repoName = response.data.map((item) => item.name);
      const repoDescription = response.data.map((item) => item.description);
      const githubLink = response.data.map((item) => item.html_url);
      const updatedAt = response.data.map((item) => item.updated_at);
      console.log(updatedAt);
      const displayArray = repoName.reduce(
        (acc, i, ind) =>
          acc.push(i, repoDescription[ind], githubLink[ind]) && acc,
        []
      );
      setDescrip([...displayArray]);
    }
    getData();
  }, []);

  // Wrapped in useEffect to stop it re rendering

  return (
    <div className="flex">
      {descrip.map((item, index) => {
        if (item === null) {
          return <div className="description">{"no description"}</div>;
        }
        if (index % 3 === 0) {
          return <div className="title">{item}</div>;
        }
        if ((index + 1) % 3 === 0) {
          return <a href={item}>{"Github Link"}</a>;
        } else return <div className="description">{item}</div>;
      })}
    </div>
  );
}

export default App;
