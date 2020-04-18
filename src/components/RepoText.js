import React from "react";
import { v4 as uuidv4 } from "uuid";

export function RepoText(props) {
  return (
    <>
      {" "}
      <li className="repo-title" key={uuidv4()}>
        {props.item.name}
      </li>
      <li className="repo-description" key={uuidv4()}>
        {props.item.description}
      </li>
    </>
  );
}
