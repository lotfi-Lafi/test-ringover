import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { TasksContext } from '../context/TasksContext';

const AddTask = () => {
    const { addData } = useContext(TasksContext);
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const addItem = async () => {
        await addData({
            "label": label,
            "description": description,
            "start_date": startDate,
            "end_date": endDate
        });
        setLabel('');
        setDescription('');
    };
    return (
        <div className="containerForm">
          <Form>
          <div className="row mb-3">
                <div className='labelForm col-sm-2'>
                    Label
                </div>
                <Form.Group className='col-sm-10'>
                    <Form.Control type="text" value={label} placeholder="Label" onChange={(event)=>setLabel(event.target.value)}/>
                </Form.Group>
            </div>
            <div className="row mb-3">
                <div className='labelForm col-sm-2'>
                    Description
                </div>
                <Form.Group className='col-sm-10'>
                    <FloatingLabel controlId="floatingTextarea2" >
                        <Form.Control
                        as="textarea"
                        value={description}
                        placeholder="Description"
                        onChange={(event)=>setDescription(event.target.value)}
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>
            </div>
            <div className="row mb-3">
                <div className='labelForm col-sm-2'>
                    Date Debut
                </div>
                <Form.Group className='col-sm-10'>
                    <DatePicker 
                        selectsStart
                        isClearable 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        startDate={startDate}
                        endDate={endDate}
                    />
                </Form.Group>
            </div>
            <div className="row mb-3">
                <div className='labelForm col-sm-2'>
                    Date Fin
                </div>
                <Form.Group className='col-sm-10'>
                    <DatePicker 
                        selectsEnd
                        isClearable 
                        selected={endDate} 
                        onChange={(date) => setEndDate(date)} 
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </Form.Group>
            </div>
            <div className="row">
                <div className='labelForm col-sm-8'>
                </div>
                <Button className='col-sm-4' variant="primary" size="lg" onClick={() => addItem()}>
                    Ajouter une tâche
                </Button>
            </div>
          </Form>
        </div>
    )
}

export default AddTask;