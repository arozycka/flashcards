import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";
import {WiredButton} from "wired-elements";
import wordsGerman from "../wordsGerman";
import { WiredCombo } from "wired-combo"
class SetGerman extends React.Component{

    constructor (props){
        super (props);
        this.state = {
            wordsGerman:wordsGerman,
            index: 0,
            showAnswer: false,
            value:""
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
        if (this.state.index  === 0) {
            return;
        }
        this.setState({
            ...this.state,
            index: this.state.index - 1,
            showAnswer: false,
        });
    };

    showAnswer = () => {
        this.setState({
            ...this.state,
            showAnswer: true,
        });
    };

    onHandleClickPutWord1 = (e) => {
        this.setState({
            ...this.state,
            value:e.target.value +"ö"
        });
    };
    onHandleClickPutWord2 = (e) => {
        this.setState({
            ...this.state,
            value:e.target.value+"ä"
        });
    };
    onHandleClickPutWord3 = (e) => {
        this.setState({
            ...this.state,
            value:e.target.value+"ß"
        });
    };
    onHandleClickPutWord4 = () => {
        let inputVal = document.getElementById("myInput").value;
        this.setState({
            ...this.state,
            value:inputVal+"ü"
        });
    };

    render() {
        const {match:{params:{number}}}=this.props;
        const word = this.state.wordsGerman[number - 1][this.state.index];
        let wordToDisplay = undefined;
        if (this.state.showAnswer === true) {
            wordToDisplay = word.german;
        } else {
            wordToDisplay = word.polish;
        }
        return(
            <div className="setContainer">
                <h1>Zestaw {number}</h1>
                <div className="componentFiszka">
                    <wired-button onClick={this.onHandleClickPreviousWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay}/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index===9 && <wired-button><NavLink to="/jniemiecki/polniem/zestawpolniem"> Następny zestaw </NavLink></wired-button>}
                </div>
                <wired-input type ="text" value={this.state.value} id="myInput"/>
                <div>
                    <wired-button onClick={this.onHandleClickPutWord1}>ö</wired-button>
                    <wired-button onClick={this.onHandleClickPutWord2}>ä</wired-button>
                    <wired-button onClick={this.onHandleClickPutWord3}>ß</wired-button>
                    <wired-button onClick={this.onHandleClickPutWord4}>ü</wired-button>
                </div>
                <wired-button id="setGermanButton" onClick={this.showAnswer}>Sprawdź</wired-button>
                <Counter/>
                <div className="buttonsNav">
                    <wired-button><NavLink to="/jniemiecki/polniem/zestawpolniem"> Wróć do zestawów </NavLink>
                    </wired-button>
                    <wired-button><NavLink to="/"> Wróć do strony głównej </NavLink></wired-button>
                </div>
            </div>
        )

    }
}

export default SetGerman;