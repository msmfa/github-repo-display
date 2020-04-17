import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState([]);
  const [descrip, setDescrip] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://api.github.com/users/msmfa/repos`
      );

      const repoName = response.data.map((item) => item.name);
      const repoDescription = response.data.map((item) => item.description);
      setName([...repoName]);
      setDescrip([...repoDescription]);
    }
    getData();
  }, []);
  console.log(descrip.map((item) => item));

  // Wrapped in useEffect to stop it re rendering

  return (
    <div className="flex">
      <div>
        {name.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      <div>
        {descrip.map(function (item) {
          if (item === null) {
            return <div>{"no value given"}</div>;
          } else return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
