import React, {Component} from 'react';//component feature
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017'
        }
    }

    changeDeadline(){
        this.setState({deadline: 'November 25, 2017'})
    }

    render( ) {//have to include the return statment
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <div>
                    <div className="Clock-days">14 Days</div>
                    <div className="Clock-hours">30 Hours</div>
                    <div className="Clock-minutes">15 Minutes</div>
                    <div className="Clock-seconds">20 Seconds</div>
                </div>
                <input placeholder='new date' />
                <button onClick={() => this.changeDeadline()}>
                    Submit
                </button>
            </div>
        )
    }
}

export default App;
