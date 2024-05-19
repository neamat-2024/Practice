import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Datepicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className='col-md-3'>
        <h5 className='mb-3'>Select Your Date :</h5>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} 
        placeholderText='Select Your Date'
        dateFormat="dd/MM/yyyy"
        //minDate={new Date()}
        //maxDate={new Date()}
        //filterDate={date=>date.getDay()!=6 && date.getDay()!=0}
        showYearDropdown
        showMonthDropdown
        //showTimeSelect
        //showTimeSelectOnly
        scrollableMonthYearDropdown
        className='red-border'
        />   
    </div>
    
  )
}

export default Datepicker