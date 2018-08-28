import React, { Component } from 'react';

// Person is the name of the component
class Person extends Component {

    constructor() {

        super();


        this.state = {
            Name: '____',
            Role: '_____'

        }

        this.nameChange = this.nameChange.bind(this);
        this.roleChange = this.roleChange.bind(this);
        this.consoleChange = this.consoleChange.bind(this);
    }



    nameChange(event) {
        this.setState({ Name: event.target.value }
        )
    }

    roleChange(event) {
        this.setState({ Role: event.target.value }

        )
    }

    consoleChange ()  {
        console.log('Persons name is', this.nameChange);
        console.log('Role is' , this.roleChange);
    }


    render() {
        return (
            // JSX
            <div className="Person">
<br />
<br />
<br />
<br />
<br />
<br />

                <label>Name:</label>
                <input onChange={this.nameChange} placeholder="john doe"></input>
                <br />
                <label>Role:</label>
                <input onChange={this.roleChange} placeholder="Actor"></input>
                <br />
                <br />

                <input onClick={this.consoleChange} type="submit"></input>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

<div className="dom">
                {this.state.Name} is famous for <br /> {this.state.Role}!!!!!!!
                </div>
            </div>

        );
    };
}



export default Person; 