import React, { useState, createContext, useEffect } from 'react';
import { getTasksList, addItemToList, deleteItem, updateItem } from '../services/tasks'


export const TasksContext = createContext();

export  const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const searchData = (searchItem) => {
        getTasksList().then( res => {
            setTasks(res)
            const filteredList = res.filter((item) =>
                item.label.toLowerCase().includes(searchItem.toLowerCase())
            );
            setTasks(filteredList);
        })
    };
    const fetchData = async () => {
        const response = await getTasksList();
        setTasks(response);
    };
    
    const addData = async (newItem) => {
        await addItemToList(newItem);
        fetchData();
    };

    const updateData = async (newItem, label) => {
        await updateItem(newItem, label);
        fetchData();
    };

    const deleteData = async (item) => {
        const response = await deleteItem(item);
        fetchData();
    };

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <TasksContext.Provider value={{ tasks, addData, deleteData, setTasks, fetchData, searchData, updateData }}>
            {children}
        </TasksContext.Provider>
    )
}