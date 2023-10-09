import React, { useState, useContext } from "react";
import "./styles.css";
import { AiFillSliders, AiOutlineSearch } from "react-icons/ai";
import Filter from './Filter';
import { TasksContext } from '../context/TasksContext';

const InputField = () => {
  const [newItem, setNewItem] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const { searchData } = useContext(TasksContext);

  const searchItem = async () => {
    searchData(newItem);
  };
  const handelShowFilter = async () => {
    setShowFilter(!showFilter);
  };
    return (
      <div className="containerFilter">
        <div className="input">
          <input
            type="text"
            value={newItem}
            placeholder="Recherche"
            className="inputBox"
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={() => handelShowFilter()} className="inputSubmitFilter">
            <AiFillSliders size={15} />
          </button>
          <button onClick={() => searchItem()} className="inputSubmit">
            <AiOutlineSearch size={25}/>
          </button>
        </div>
        {showFilter ? <Filter /> : null}
      </div>
    )
}
export default InputField;