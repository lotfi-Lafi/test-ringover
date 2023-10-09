import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Filter = () => {
    const [startDateFilter, setStartDateFilter] = useState(new Date());
    const [endDateFilter, setEndDateFilter] = useState(new Date());
    return (
        <div className="filter">
            <div className="row">
                <div className='labelFormFilter col-sm-3'>
                    Date Debut
                </div>
                <div className='col-sm-3'>
                    <DatePicker 
                        selectsStart
                        isClearable 
                        selected={startDateFilter} 
                        onChange={(date) => setStartDateFilter(date)} 
                        startDate={startDateFilter}
                        endDate={endDateFilter}
                    />
                </div>
                <div className='labelFormFilter col-sm-3'>
                    Date Fin
                </div>
                <div className='col-sm-3'>
                    <DatePicker 
                        selectsEnd
                        isClearable 
                        selected={endDateFilter} 
                        onChange={(date) => setEndDateFilter(date)} 
                        startDate={startDateFilter}
                        endDate={endDateFilter}
                        minDate={startDateFilter}
                    />
                </div>
            </div>
        </div>
    )
}
export default Filter;