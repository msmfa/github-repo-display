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
      const repoCreated = data.sort((a, b) => b.id - a.id);

      // the ids are allocated based on creation of repo date
      setdisplay([...repoCreated]);
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
            <li key={uuidv4()}>{timeSince(new Date(item.updated_at))}</li>
          </div>
        ))}
      </div>
    </>
  );
}

console.log(timeSince(new Date(["2019-04-17"])));
console.log(timeSince(new Date(["2020-03-17T10:47:29Z"])));

function hoursAgo(date) {
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  interval = Math.floor(seconds / 3600);

  return interval + " minutes ago";
}

console.log(hoursAgo(new Date(["2019-04-17"])));

export default App;
