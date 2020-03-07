import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";
import {WiredButton} from "wired-elements";
import {wordsEnglish} from "../wordsEnglish";

class Zestaw extends React.Component{

     constructor (props){
    super (props);
    this.state = {
        wordsEnglish:wordsEnglish,
        index: 0,
        showAnswer: false,
    }
}

onHandleClickNextWord = () => {
    if (this.state.index + 1 === this.state.wordsEnglish[this.props.match.params.number - 1].length) {
        return;
    }
    this.setState({
        ...this.state,
        index: this.state.index + 1,
        showAnswer: false,
    });
};

showAnswer = () => {
    this.setState({
        ...this.state,
        showAnswer: true,
    });
};

render() {
    const {match:{params:{number}}}=this.props;
    const word = this.state.wordsEnglish[number - 1][this.state.index];
    let wordToDisplay = undefined;
    if (this.state.showAnswer === true) {
        wordToDisplay = word.english;
    } else {
        wordToDisplay = word.polish;
    }
    return(
        <div className="setContainer">
            <h1>Zestaw {number}</h1>
            <div className="componentFiszka">
                <wired-button onClick={this.onHandleClickNextWord}>Poprzednie</wired-button>
                <Fiszka word={wordToDisplay}/>
                <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                {this.state.index===9 && <wired-button>Następny zestaw</wired-button>}
            </div>
            <wired-input/>
            <wired-button onClick={this.showAnswer}>Sprawdź</wired-button>
            <Counter/>
            <wired-button><NavLink  to="/">Wróć do strony głównej</NavLink></wired-button>
        </div>
    )

}
}

export default Zestaw;