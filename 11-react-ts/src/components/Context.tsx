import { useContext } from "react";
import * as React from 'react';

import { AppContext } from "../App";

export default function Context () {
    const details = useContext(AppContext)
  return (
    <>
      {details && (
        <div>
            <h2>Linguagem: {details.language}</h2>
            <h4>Framework: {details.framework}</h4>
            <p>QTD: {details.projects}</p>
        </div>
      )}
    </>
  );
}
