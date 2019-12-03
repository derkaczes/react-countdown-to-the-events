import React, { Component } from 'react';
import uniqid from 'uniqid';
import Countdown from './CountDown';
import EditEvent from './EditEvent';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 0, name: "śniadanie", hour: "07", minute: "00"},
                { id: 1, name: "obiad", hour: "16", minute: "00" }
            ],
            editedEvent: {
                id: uniqid(),
                name: "",
                hour: "",
                minute: ""
            }
        };
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
    }

    handleEditEvent(val) {
        //this.setState({editedEvents: val});
        this.setState(prevState => {
            return {
                editedEvent: Object.assign(prevState.editedEvent, val)
            };
        });
    }

    handleSaveEvent() {
        this.setState(prevState => ({
            events: [...prevState.events, prevState.editedEvent],
            editedEvent: {
                id: uniqid(),
                name: "",
                hour: "",
                minute: ""
            }    
        }));
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id} name={el.name} hour={el.hour} minute={el.minute}/>
        })
        return (
            <div className="app">
                {events}
                <EditEvent 
                    name={this.state.editedEvent.name}
                    hour={this.state.editedEvent.hour}
                    minute={this.state.editedEvent.minute}
                    onInputChange = {val => this.handleEditEvent(val)} 
                    onSave={() => this.handleSaveEvent()}/>
            </div>
        );
    }
}

export default App;