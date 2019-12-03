import React from 'react';

const EditEvent = props => {
    return (
        <div className="edit-event">
            <div className="edit-event__input-group">
                <label htmlFor="name">name </label>
                <input type="text" id="name" name="name"/>
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="hour">hour </label>
                <input type="tel" id="hour" name="hour"/>
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="minute">minute </label>
                <input type="tel" id="minute" name="minute"/>
            </div>
            <button onClick={() => props.onSave()}>Add</button>
            <button>Cancel</button>
        </div>
    )
}

export default EditEvent;