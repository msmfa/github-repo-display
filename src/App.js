import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://api.github.com/users/msmfa/repos`
      );

      const data = response.data.map((item) => item);
      setdisplay([...data]);
    }

    getData();
  }, []);

  // Wrapped in useEffect to stop it re rendering

  return (
    <>
      <div classname="repo-container">
        {display.map((item) => (
          <div key={uuidv4()}>
            <li className="repo-name" key={uuidv4()}>
              {item.name}
            </li>
            <li className="repo-description" key={uuidv4()}>
              {item.description}
            </li>
            <li className="repo-github" key={uuidv4()}>
              <a key={uuidv4()} href={item.html_url}>
                Github Link
              </a>
            </li>
            <li className="repo-website" key={uuidv4()}>
              <a key={uuidv4()} href={item.homepage}>
                Live Website
              </a>
            </li>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
