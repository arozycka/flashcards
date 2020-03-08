import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";
import wordsGerman from "../wordsGerman";

class ZestawObcyNiemiecki extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wordsGerman: wordsGerman,
            index: 0,
            showAnswer: false,
        }
    }

    onHandleClickNextWord = () => {
        if (this.state.index + 1 === this.state.wordsGerman[this.props.match.params.number - 1].length) {
            return;
        }
        this.setState({
            ...this.state,
            index: this.state.index + 1,
            showAnswer: false,
        });
    };

    onHandleClickPreviousWord = () => {
        if (this.state.index === 0) {
            return;
        }
        this.setState({
            ...this.state,
            index: this.state.index - 1,
            showAnswer: false,
        });
    };


    render() {
        const {match: {params: {number}}} = this.props;
        const word = this.state.wordsGerman[number - 1][this.state.index];
        let wordToDisplay = undefined;
        if (this.state.showAnswer === true) {
            wordToDisplay = word.polish;
        } else {
            wordToDisplay = word.german;
        }
        return (
            <div className="setContainer">
                <h1>Zestaw {number}</h1>
                <div className="componentFiszka">
                    <wired-button onClick={this.onHandleClickPreviousWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay}/>
                    <Fiszka/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index === 9 && <wired-button><NavLink to="/jniemiecki/niempol/zestawniem"> Następny zestaw </NavLink></wired-button>}
                </div>
                <div className="buttonsKnow">
                    <wired-button>Wiedziałem</wired-button>
                    <wired-button>Nie wiedziałem</wired-button>
                </div>
                <div className="counter">
                    <h1>Odpowiedzi:</h1>
                    <h2>Wiedziałem:0</h2>
                    <h2>Nie wiedziałem:0</h2>
                </div>
                <div className="buttonsNav">
                    <wired-button><NavLink to="/jniemiecki/niempol/zestawniem"> Wróć do zestawów </NavLink>
                    </wired-button>
                    <wired-button><NavLink to="/"> Wróć do strony głównej </NavLink></wired-button>
                </div>
            </div>
        )

    }
}

export default ZestawObcyNiemiecki;