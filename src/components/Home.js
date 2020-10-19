import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            flowers: {}
        };
    }

    render() {
        let username = '';
        let location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                    return (
                        <div>
                            <div className="loginButton">
                                {username.length > 0 ? username :
                                    <Link to="/login">Login</Link>}
                            </div>
                            <div>
                                <label class='howdy'>Howdy from the Homepage!</label>
                            </div>
                            <div class="column">
                                <figure class="flower">
                                    <img src="cherryblossom.png" />
                                    <figcaption>Cherry Blossom</figcaption>
                                </figure>
                                <figure class="flower">
                                    <img src="daffodil.png" />
                                    <figcaption>Daffodil</figcaption>
                                </figure>
                                <figure class="flower">
                                    <img src="daisy.jpg" />
                                    <figcaption>Daisy</figcaption>
                                </figure>
                                <figure class="flower">
                                    <img src="lily.jpg" />
                                    <figcaption>Lily</figcaption>
                                </figure>
                            </div>
                            <div class="column">
                                <figure class="flower">
                                    <img src="sunflower.png" />
                                    <figcaption>Sunflower</figcaption>
                                </figure>
                                <figure class="flower">
                                    <img src="rose.png" />
                                    <figcaption>Rose</figcaption>
                                </figure>
                                <figure class="flower">
                                    <img src="tulip.png" />
                                    <figcaption>Tulip</figcaption>
                                </figure>
                                <figure class="flower">
                                    <img src="waterlily.png" />
                                    <figcaption>Waterlily</figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                }
            }
        }
        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username :
                        <Link to="/login">Login</Link>}
                </div>
                <div><label class='howdy'>Howdy from the Homepage!</label></div>
            </div>
        )
    }

}

export default Home;