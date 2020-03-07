import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";
import {wordsEnglish} from "../wordsEnglish";

class ZestawObcyNiemiecki extends React.Component{

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
            wordToDisplay = word.polish;
        } else {
            wordToDisplay = word.english;
        }
        return(
            <div className="setContainer">
                <h1>Zestaw {number}</h1>
                <div className="componentFiszka">
                    <wired-button onClick={this.onHandleClickNextWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay}/>
                    <Fiszka/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index===9 && <wired-button>Następny zestaw</wired-button>}
                </div>
                <div className="buttonsKnow">
                <wired-button onClick={this.showAnswer}>Wiedziałem</wired-button>
                <wired-button onClick={this.showAnswer}>Nie wiedziałem</wired-button>
                </div>
                <div className="counter">
                    <h1>Odpowiedzi:</h1>
                    <h2>Wiedziałem:0</h2>
                    <h2>Nie wiedziałem:0</h2>
                </div>
                <wired-button><NavLink  to="/">Wróć do strony głównej</NavLink></wired-button>
            </div>
        )

    }
}

export default ZestawObcyNiemiecki;