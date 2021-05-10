import React from 'react'
import '../../styles/RadioButton.css'
import { useHistory } from 'react-router-dom'

export default function CustomizedRadios(props) {

    let history = useHistory()
    function changeHandle(e){
        history.push(e.target.dataset.path)
        props.setOpen(false)
    }
    return (
        <div className="radio-box">
            
            <label className="radio-label" htmlFor="All">
                <h5> All </h5>
                <p>Activities during class-time, study-time and play time are shown.</p>
            </label>
            
            <input onChange={changeHandle} data-path="/" className="radio-input" type="radio" name="timetype" id="All" />
<hr />  

            <label className="radio-label" htmlFor="class">
                <h5>Class-time-only</h5>
                <p>Only the activities during the times you scheduled as class-time are shown.</p>
            </label>
            <input onChange={changeHandle} data-path="/classtime" className="radio-input" type="radio" name="timetype" id="class" />
<hr />

            <label className="radio-label" htmlFor="free">
                <h5> Free-time-only </h5>
                <p>
                    Only the activities during the times you scheduled as free-time or when manually switched to free-mode from the mode page are shown.are shown.
            </p>
            </label>
            <input onChange={ changeHandle} data-path="freetime" className="radio-input" type="radio" name="timetype" id="free" />
<hr />

            <label className="radio-label" htmlFor="study">
                <h5> Study-time-only </h5>
                <p>Only the activities during the times you scheduled as study-time or when manually switched to study-mode from the mode page are shown.</p>
            </label>
            <input onChange={changeHandle} className="radio-input" data-path="studytime" type="radio" name="timetype" id="study" />
        </div>
    );
}