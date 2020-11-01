import React from 'react';
import { Link } from 'react-router-dom';
import server from '../ServerInterface/server';
import Question from './Question';
import './Quiz.css'

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            cursor: 0,
            score: 0,
        }
    }

    scoreCard = () => {
        const { score } = this.state;
        return (
            <div>
                <div className='score'>You Scored a {score}/6!</div>
                <div><Link to={{pathname: "/imagequiz/", state: {username: this.props.location.username}}}>
                    Back to Home
                </Link></div>
            </div>
        );
    }

    goToNext = () => {
        if (this.state.cursor < this.state.data.questions.length) {
            this.setState({ cursor: this.state.cursor + 1});
        }
    }

    goToPrev = () => {
        if (this.state.cursor > 0) {
            this.setState({ cursor: this.state.cursor - 1});
        }
    }

    componentDidMount() {
        let data = server.getQuiz(this.props.location.state.id);
        this.setState({ data: data });
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
        const { data, cursor, userAnswers } = this.state;
        if (cursor === 6) {
            return (
                <div className='scoreCard'>
                    {this.scoreCard()}
                </div>
            );
        }
        return (
            <div className='quizContent'>
                {data.questions ? <Question question = {data.questions[cursor]} 
                onChoiceSelected={this.onChoiceSelected} 
                cursor={cursor} /> : ''}
                <button onClick={this.goToPrev}>Prev</button>
                <button onClick={this.goToNext}>Next</button>
            </div>
        );
    }
}

export default Quiz;