import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import InputField from "./components/InputField";
import TasksList from "./components/TasksList";
import ModalTask from "./components/ModalTask";
import Button from 'react-bootstrap/Button';
import { AiOutlinePlus } from "react-icons/ai";

const  App = () => {
  const [showModalTask, setShowModalTask] = useState(false);

  const handleShow = () => setShowModalTask(true);
  const handleClose = () => setShowModalTask(false);

 
  return (
    <div className="App">
      <div className="App">
        <span className="heading">Test Ringover</span>
        <ToastContainer />
          <InputField />
          <div className='containerAddButton'>
            <Button className='button' onClick={handleShow}>
              <AiOutlinePlus size={20} /> Ajouter une tâche
            </Button>
          </div>

          <ModalTask
            titleModal="Ajouter une tâche"
            titleButton="Sauvegarder"
            showModalTask={showModalTask} 
            handleClose={handleClose} 
          />
          
          <TasksList />
      </div>
    </div>
  );
}

export default App;
