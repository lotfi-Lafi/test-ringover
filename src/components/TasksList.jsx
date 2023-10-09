import React, {useContext} from "react";
import SingleTask from "./SingleTask";
import { TasksContext } from '../context/TasksContext';

const TasksList = (props) => {
    const { tasks } = useContext(TasksContext);
    return (
        <div className="container">
            {tasks && tasks.map((item, index) => {
            return (
                <div className="task" key={index}>
                    <SingleTask item={item}  handleShowUpdateTaskModal={props.handleShowUpdateTaskModal} />
                </div>
            )
        })}
        </div>
    )
}

export default TasksList;