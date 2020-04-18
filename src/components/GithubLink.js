import React from "react";
import { v4 as uuidv4 } from "uuid";

export function GithubLink(props) {
  return (
    <>
      {" "}
      <li className="github-link" key={uuidv4()}>
        <a
          key={uuidv4()}
          href={props.item.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a>
      </li>
    </>
  );
}
