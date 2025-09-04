import { useState, ChangeEvent } from "react";
import * as React from 'react';

export interface Props {
}

export default function State (props: Props) {

    const [text, setText] = useState<string | null>("testando o hook")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
