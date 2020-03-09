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
            value:"",
            correct:0,
            incorrect:0,
            backgroundColor: "#cdeae7"
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
            backgroundColor: "#cdeae7"
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
            backgroundColor: "#cdeae7"
        });
    };

    showAnswer = () => {
        const newState = {...this.state};
        const {match:{params:{number}}}=this.props;
        const word = newState.wordsGerman[number - 1][this.state.index];
        if(word.skip ===true){
            return;
        }
        newState.showAnswer = true;
        if(this.state.value===this.state.wordsGerman[number - 1][this.state.index].german){
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

    onHandleClickPutWord1 = () => {
        this.setState({
            ...this.state,
            value:this.state.value +"ö"
        });
    };
    onHandleClickPutWord2 = () => {
        this.setState({
            ...this.state,
            value:this.state.value+"ä"
        });
    };
    onHandleClickPutWord3 = () => {
        this.setState({
            ...this.state,
            value:this.state.value+"ß"
        });
    };
    onHandleClickPutWord4 = () => {
        this.setState({
            ...this.state,
            value:this.state.value+"ü"
        });
    };
    handlerChange = (e) => {
        this.setState({
            value: e.target.value
        })
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
        let style={
            backgroundColor:this.state.backgroundColor,
        };
        return(
            <div className="setContainer">
                <h1>Zestaw {number}</h1>
                <div className="componentFiszka">
                    <wired-button onClick={this.onHandleClickPreviousWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay}/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index===9 && <wired-button class="nextSetButton"><NavLink to="/jniemiecki/polniem/zestawpolniem"> Następny zestaw </NavLink></wired-button>}
                </div>
                <input className="input" type="text" value={this.state.value} id="myInput" onChange={this.handlerChange} style={style}/>
                <div>
                    <wired-button onClick={this.onHandleClickPutWord1}>ö</wired-button>
                    <wired-button onClick={this.onHandleClickPutWord2}>ä</wired-button>
                    <wired-button onClick={this.onHandleClickPutWord3}>ß</wired-button>
                    <wired-button onClick={this.onHandleClickPutWord4}>ü</wired-button>
                </div>
                <wired-button id="setGermanButton" onClick={this.showAnswer}>Sprawdź</wired-button>
                <Counter correct={this.state.correct} incorrect={this.state.incorrect}/>
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