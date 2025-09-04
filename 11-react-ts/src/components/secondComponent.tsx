import * as React from 'react';

export interface IAppProps {
    name: string
}

export default function App (props: IAppProps) {
  return (
    <div>
      <p>segundo componet</p>
      <p>O nome dele é {props.name}</p>
    </div>
  );
}
