import React, { Component } from 'react';
import Countdown from './CountDown';

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 0, name: "śniadanie", time: "7:00" },
                { id: 1, name: "obiad", time: "16:00" }
            ]
        }
    }
    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id} name={el.name} time={el.time}/>
        })
        return (
            <div>{events}</div>
        );
    }
}

export default App;