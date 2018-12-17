import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Text } from 'informed';



class home extends Component {
    render() {
        return (
            <div className="App">
                <h1> Assure your future </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    </p>

                <Form id="intro-form">
                    <label htmlFor="intro-name">First name:</label>
                    <Text field="name" id="intro-name" />
                    <button type="submit">Submit</button>
                </Form>

                <RaisedButton label="Yes" />

            </div>
        )
    }

}

export default home;