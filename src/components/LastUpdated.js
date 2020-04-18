import React from "react";
import { v4 as uuidv4 } from "uuid";
import { timeSince } from "./timeSince";

export function LastUpdated(props) {
  return (
    <>
      <li key={uuidv4()}>{timeSince(new Date(props.item.updated_at))}</li>
    </>
  );
}
