import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { timeSince } from "./timeSince";

function App() {
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://api.github.com/users/msmfa/repos`
      );

      const data = response.data.map((item) => item);
      console.log(data.map((item) => item.updated_at));
      setdisplay([...data]);
    }

    getData();
  }, []);

  // Wrapped in useEffect to stop it re rendering

  return (
    <>
      <div className="repo-container">
        {display.map((item) => (
          <div className="repo" key={uuidv4()}>
            <li className="repo-title" key={uuidv4()}>
              {item.name}
            </li>
            <li className="repo-description" key={uuidv4()}>
              {item.description}
            </li>
            <li className="github-link" key={uuidv4()}>
              <a key={uuidv4()} href={item.html_url}>
                Github Link
              </a>
            </li>
            <li className="website-link" key={uuidv4()}>
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

console.log(timeSince(new Date(["2019-04-17"])));

export default App;
