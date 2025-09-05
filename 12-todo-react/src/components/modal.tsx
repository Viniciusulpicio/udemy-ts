import * as React from 'react';

// CSS
import style from "./Modal.module.css"

export interface IAppProps {
  children: React.ReactNode
}

export function Modal ({children}: IAppProps) {
  
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.add("hide")
  };

  return (
    <div id='modal' className='hide'>
      <div className={style.fade} onClick={closeModal}></div>
      <div className={style.modal}>
        <h2>texto modal</h2>
        {children}
      </div>
    </div>
  );
}
