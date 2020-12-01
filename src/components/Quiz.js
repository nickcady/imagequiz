import React from 'react';
import { Link } from 'react-router-dom';
import server from '../ServerInterface/server';
import Question from './Question';
import './Quiz.css'

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [],
            cursor: 0,
            score: 0,
        }
    }

    scoreCard = (username) => {
        const { score } = this.state;
        return (
            <div>
                <div className='score'>You Scored a {score}/6!</div>
                <div><Link to={{pathname: "/imagequiz/", state: {user: username}}}>
                    Back to Home
                </Link></div>
            </div>
        );
    }

    goToNext = () => {
        if (this.state.cursor < this.state.data.length) {
            this.setState({ cursor: this.state.cursor + 1});
        }
    }

    goToPrev = () => {
        if (this.state.cursor > 0) {
            this.setState({ cursor: this.state.cursor - 1});
        }
    }

    componentDidMount() {
        server.getQuiz(this.props.location.state.id).then(data => this.setState({data: data}));
    }

    onChoiceSelected = (correct) => {
        if (this.state.cursor === 6) {
            return;
        }
        if (correct) {
            this.setState({ score: this.state.score + 1});
        }
    }

    render() {
        let username = '';
        let quizid = 0;
        let location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.username) {
                    username = location.state.username;
                    quizid = location.state.id;
                }
            }
        }
        const { data, cursor } = this.state;
        if (cursor === 6) {
            if (username.length > 0) {
                server.saveScore(username, quizid, this.state.score);
            }
            return (
                <div className='scoreCard'>
                    {this.scoreCard(username)}
                </div>
            );
        }
        return (
            <div className='quizContent'>
                {data.length !== 0 ? <Question question = {data[cursor]} 
                onChoiceSelected={this.onChoiceSelected} 
                cursor={cursor} /> : ''}
                <button onClick={this.goToPrev}>Prev</button>
                <button onClick={this.goToNext}>Next</button>
            </div>
        );
    }
}

export default Quiz;