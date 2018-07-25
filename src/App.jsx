import React, {Component} from 'react';//component feature

class App extends Component {
    render( ) {//have to include the return statment
        return (
            <div>
                <div>Countdown to December 25, 2017</div>
                <div>
                    <div>14 Days</div>
                    <div>30 Hours</div>
                    <div>15 Minutes</div>
                    <div>20 Seconds</div>
                </div>
            </div>
        )
    }
}

export default App;
