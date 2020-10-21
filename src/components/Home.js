import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    render() {
        let username = '';
        let location = this.props.location;
        console.log("it goes here at least");
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }
        console.log("It reaches home");
        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username :
                        <Link to="/login">Login</Link>}
                </div>
                <div><label className='howdy'>Howdy from the Homepage!</label></div>
            </div>
        )
    }

}

export default Home;