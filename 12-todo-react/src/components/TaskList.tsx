import * as React from 'react';

// interface
import { ITask } from '../interfaces/Task';

//css
import style from "./TaskList.module.css"

export interface IAppProps {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask):void;
}

export function TaskList ({taskList, handleDelete, handleEdit}: IAppProps) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={style.task}>
            <div className={style.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={style.actions}>
              <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
              <i className='bi bi-trash' onClick={() => {
                handleDelete(task.id);
              }}></i>

            </div>
          </div>
        ))
      ) : (
        <p>não tem tarefas cadastradas</p>
      )}
    </>
  );
}
