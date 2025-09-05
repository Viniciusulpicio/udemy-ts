import * as React from 'react';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import style from "./TaskFrom.module.css"

// INTERFACE
import { ITask } from '../interfaces/Task';

export interface IAppProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void
}

export function TaskForm({ btnText, taskList, setTaskList, task, handleUpdate }: IAppProps) {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficult] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficult(task.difficulty)
    }
  }, [task])

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficult(parseInt(e.target.value))
    }
  }

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {

      handleUpdate(
        id, title, difficulty
      )
    } else {
      const id = Math.floor(Math.random() * 1000)
      const newTask: ITask = { id, title, difficulty }

      setTaskList!([...taskList, newTask])

      setTitle("")
      setDifficult(0)
    }

  }


  return (
    <form onSubmit={addTaskHandler} className={style.form}>
      <div className={style.input_container}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name='title' placeholder='titulo da tarefa' onChange={handlerChange} value={title} />
      </div>
      <div className={style.input_container}>
        <label htmlFor="difficulty">Difficulty</label>
        <input type="text" name='difficulty' placeholder='Dificuldade da tarefa' onChange={handlerChange} value={difficulty} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}
