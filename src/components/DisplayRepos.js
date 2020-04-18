import React from "react";
import { v4 as uuidv4 } from "uuid";
import { RepoText } from "./RepoText";
import { GithubLink } from "./GithubLink";
import { LastUpdated } from "./LastUpdated";

export function DisplayRepos(props) {
  return props.display.map((item) => (
    <div className="repo" key={uuidv4()}>
      <RepoText item={item} />
      <GithubLink item={item} />
      <LastUpdated item={item} />
    </div>
  ));
}
