import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";
import {WiredButton} from "wired-elements";
import {wordsEnglish} from "../wordsEnglish";

class Zestaw extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wordsEnglish: wordsEnglish,
            index: 0,
            showAnswer: false,
            value: "",
            correct:0,
            incorrect:0,
            backgroundColor: "#cdeae7",
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
            backgroundColor: "#cdeae7"
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
            backgroundColor: "#cdeae7"
        });
    };

    showAnswer = () => {
        const newState = {...this.state};
        const {match:{params:{number}}}=this.props;
        const word = newState.wordsEnglish[number - 1][this.state.index];
        if(word.skip ===true){
            return;
        }
        newState.showAnswer = true;
        if(this.state.value===this.state.wordsEnglish[number - 1][this.state.index].english){
            newState.correct = this.state.correct + 1;
            newState.backgroundColor="green";
            word.skip=true;
        } else {
            newState.incorrect = this.state.incorrect + 1;
            newState.backgroundColor="red";
            word.skip=true;
        }
        this.setState(newState);
    };

    handlerChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        const {match: {params: {number}}} = this.props;
        const word = this.state.wordsEnglish[number - 1][this.state.index];
        let wordToDisplay = undefined;
        if (this.state.showAnswer === true) {
            wordToDisplay = word.english;
        } else {
            wordToDisplay = word.polish;
        }
        let style={
            backgroundColor:this.state.backgroundColor,
        };
        return (
            <div className="setContainer">
                <h1>Zestaw {number}</h1>
                <div className="componentFiszka">
                    <wired-button onClick={this.onHandleClickPreviousWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay}/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index === 9 &&
                    <wired-button class="nextSetButton"><NavLink to="/jangielski/polang/zestaw"> Następny zestaw </NavLink></wired-button>}
                </div>
                <input className="input" type="text" value={this.state.value} id="myInputAng"
                       onChange={this.handlerChange} style={style}/>
                <wired-button onClick={this.showAnswer}>Sprawdź</wired-button>
                <Counter correct={this.state.correct} incorrect={this.state.incorrect}/>
                <div className="buttonsNav">
                    <wired-button><NavLink to="/jangielski/polang/zestaw"> Wróć do zestawów </NavLink>
                    </wired-button>
                    <wired-button><NavLink to="/"> Wróć do strony głównej </NavLink></wired-button>
                </div>
            </div>
        )

    }
}

export default Zestaw;