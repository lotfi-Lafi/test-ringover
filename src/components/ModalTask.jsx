import React, { useState, useContext } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { TasksContext } from '../context/TasksContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModalTask = (props) => {
    console.log('ModalTask props.taskUpdate  ====> ', props.taskForUpdate )
    const { addData, updateData } = useContext(TasksContext);
    const [label, setLabel] = useState(props.taskForUpdate ? props.taskForUpdate.label : '');
    const [description, setDescription] = useState(props.taskForUpdate ? props.taskForUpdate.description : '');
    const [startDate, setStartDate] = useState(props.taskForUpdate && props.taskForUpdate.start_date ? new Date(props.taskForUpdate.start_date) : new Date());
    const [endDate, setEndDate] = useState(props.taskForUpdate && props.taskForUpdate.end_date ? new Date(props.taskForUpdate.end_date) : new Date());

    const handelSubmit = async () => {
        let newTask = {
            "label": label,
            "description": description,
            "start_date": startDate,
            "end_date": endDate
        }
        if (props.taskForUpdate && props.taskForUpdate.label) {
            await updateData(newTask, props.taskForUpdate.label);
        }else {
            await addData(newTask);
        }
        setLabel('');
        setDescription('');
        props.handleClose();
    };
     const handleClose = () => {
        props.handleClose();
     };
    return (
        <>
          <Modal
            show={props.showModalTask}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>{ props.titleModal } { props.taskForUpdate && props.taskForUpdate.label ? props.taskForUpdate.label : null } </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="containerForm">
          <Form>
            <div className="row mb-3">
                <div className='labelForm col-sm-3'>
                    Label
                </div>
                <Form.Group className='col-sm-9'>
                    <Form.Control type="text" value={label} placeholder="Label" onChange={(event)=>setLabel(event.target.value)}/>
                </Form.Group>
            </div>
            <div className="row mb-3">
                <div className='labelForm col-sm-3'>
                    Description
                </div>
                <Form.Group className='col-sm-9'>
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
                <div className='labelForm col-sm-3'>
                    Date Debut
                </div>
                <Form.Group className='col-sm-9'>
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
                <div className='labelForm col-sm-3'>
                    Date Fin
                </div>
                <Form.Group className='col-sm-9'>
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
          </Form>
        </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="button" size="lg" onClick={() => handelSubmit()}>
                    { props.titleButton }
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}
export default ModalTask;
