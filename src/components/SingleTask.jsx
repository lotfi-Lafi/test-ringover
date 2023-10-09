import React, { useContext, useState } from "react";
import { AiFillEdit, AiFillDelete, AiFillCalendar } from "react-icons/ai";
import { TasksContext } from '../context/TasksContext';
import ModalTask from "./ModalTask";
import { formatDate } from '../utils/filter';

const SingleTask = (props) => {
  const { deleteData } = useContext(TasksContext);
  const [showModalUpdateTask, setShowModalUpdateTask] = useState(false);

  const handleDelete = async () => {
    await deleteData(props.item.label);
  };
  const handleUpdateItem = () => {
    handleShowUpdateTaskModal();
  };
  const handleShowUpdateTaskModal = () => setShowModalUpdateTask(true);
  const handleCloseUpdateTaskModal = () => setShowModalUpdateTask(false);

    return (
        <div className="taskSingle">
          <div className="CardHeader">
            <div className="detailsLabel">
              {props.item.label}
            </div>
            <div className="action">
              <span
                className="icon"
                onClick={() => {
                }}
              >
                <AiFillEdit variant="primary" onClick={() => handleUpdateItem()} />
              </span>
              <span className="icon" variant="primary" onClick={() => handleDelete()}>
                <AiFillDelete />
              </span>
            </div>
          </div>
          <div className="CardBody">
            <div className="detailsDates">
              <div>
              <AiFillCalendar /> Date Debut : { formatDate(props.item.start_date) }
              </div>
              <div>
              <AiFillCalendar /> Date Fin : { formatDate(props.item.end_date) }
              </div>
            </div>
          
            <div className="detailsDescription">
              <span className="taskSingleText">{props.item.description}</span>
            </div>
          </div>
          <ModalTask
            taskForUpdate={props.item}
            titleModal="Modifier la tâche"
            titleButton="Modifier"
            showModalTask={showModalUpdateTask} 
            handleClose={handleCloseUpdateTaskModal} 
          />
        </div>
    )
}

export default SingleTask;