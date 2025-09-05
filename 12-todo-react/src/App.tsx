import React from 'react';

// components
import Header from './components/header';
import Footer from './components/footer';
import {TaskForm} from  "./components/TaskForm"
import {TaskList} from  "./components/TaskList"
import {Modal} from "./components/modal"

// CSS
import styles from './app.module.css'

// INTERFACE
import { ITask } from './interfaces/Task';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState <ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList (
      taskList.filter(task => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean ) => {
    const modal = document.querySelector("#modal")
    if(display) {
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const eidtTask = (task: ITask) => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updadteTask = (id: number, title: string, difficulty: number) => {
    const updadteTask: ITask = {id, title, difficulty}

    const updatedItens = taskList.map((task) => {
      return task.id === updadteTask.id ? updadteTask : task
    })

    setTaskList(updatedItens)

    hideOrShowModal(false);
  }

  return (
    <div>
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate} />} />
        <Header></Header>
        
        <main className={styles.main}>
          <div>
            <h2>O que voce vai fazer?</h2>
            <TaskForm btnText='Criar Tarefa' taskList={taskList}  setTaskList={setTaskList} handleUpdate={updadteTask}/>
          </div>

          <div>
            <h2>Suas tarefas:</h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit = {eidtTask} />
          </div>
        </main>

        <Footer></Footer>
    </div>
  );
}

export default App;
