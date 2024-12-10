import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import buttonStyle from '../ButtonStyle';

import my_state from './my_state';
import './my_state';

import  my_questions from '../model/basic_questions.json';


import Controller from '../controller/Controller';

class Quiz extends React.Component {

    state = {
        score: 0,
        count: 0
    };

    // questionSelected = (ansBool, id) => {
    //     ansBool ? this.incrementScore() : this.dontIncrementScore();
    //     alert("id: " + id);
    // }
    
    incrementScore = () => {
        // var scoreUpdate = 0;
        // if (0 == Controller.questionTimes) {
        //     scoreUpdate = 1;
        // } else if (1 == Controller.questionTimes) {
        //     scoreUpdate = 1/2;
        // }
        this.setState({
            score: this.state.score + 1
        });
        this.setState({
            count: this.state.count + 1
        });
        // Controller.questionTimes += 1;
        alert("You are correct!"); // could be executed before the setStates are done!
    };

    dontIncrementScore = () => {
       this.setState({
            count: this.state.count + 1
        });
        // Controller.questionTimes += 1;
        alert("Sorry - not correct");
    };

    handleSubmit = () => {
        my_state.my_score = this.state.score;
        my_state.my_count = this.state.count;
        
        alert("Total score: " + this.state.score + "/" + this.state.count);
    };
    
    render() {
        return(
           <div style={quizPageStyle}>
            <h1>My Questions</h1>
                {my_questions.map((quest) => (
                <div> 
                    <h2>{quest["question"]}</h2>
                        {quest["answers"].map((ans) => (
                            <div>
                                <label>
                                <input  
                                        type = "radio"
                                        name = { quest["id"] }
                                        key = { quest["id"] }
                                        onClick = { ans["isCorrect"] ? this.incrementScore : this.dontIncrementScore }
                                        value = { ans["isCorrect"] } /> 
                                    { ans["answer"] }
                                </label> 
                                <br />
                            </div>
                        ))}
                    
                </div>
                ))}
                 <br />
                <button style = {buttonStyle} onClick={this.handleSubmit} >Done</button>
        </div>
        );
    }
}

export default Quiz;