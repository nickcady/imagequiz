import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import server from '../ServerInterface/server'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: []
        };
    }

    body = () => {
        let { data, username } = this.state;
        return (
            <div className="quiz-images">
                {data.length > 0 ?
                    <div>
                        {data.map((q, i) =>
                            <div key={i}>
                                <Link to={{pathname: "/quiz", state: {id: q.id, username: username}}}>
                                    <figure className='images'>
                                        <img src={require ("../images/" + q.picture)} alt={q.picture}></img>
                                        <figcaption>{q.title}</figcaption>
                                    </figure>
                                </Link>
                            </div>)}
                    </div>
                : ""}
            </div>
        );
    }

    componentDidMount() {
        let data = server.getQuizzes();
        this.setState({data: data});
    }

    render() {
        let username = '';
        let location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }
        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username :
                        <Link to="/login">Login</Link>}
                </div>
                <div className="howdy">Howdy From the Homepage!</div>
                {this.body()}
            </div>
        )
    }

}

export default Home;