import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0,
            correct: 0,
            userAnswers: []
        }
    }

    onInputChange = (e) => {
        const selectedVal = e.target.value;
        let x = this.state.userAnswers;
        x[this.props.cursor] = selectedVal;
        this.setState({ userAnswers: x});
        let correct = selectedVal === this.props.question.correct;
        this.props.onChoiceSelected(correct);
    }

    render() {
        const { question, cursor } = this.props;
        return (
            <div>
                <div><img src={require ('../images/' + question.picture)} alt={question.picture} /></div>
                <br />
                <div>{question.title}</div>
                <br />
                {question.choices.map((c, i) =>
                    <div key={i}>
                        <input type="radio" id="male" name="choice" value={c} 
                            checked={c===this.state.userAnswers[cursor] ? 'checked' : ''} 
                            onChange={this.onInputChange}/>
                            <label htmlFor={c}>{c}</label><br/>
                            <br />
                    </div>
                )}
            </div>
        )
    }
}

export default Question;