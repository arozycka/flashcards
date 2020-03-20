import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";
import {WiredButton} from "wired-elements";
import {wordsEnglish} from "../wordsEnglish";

class Zestaw extends React.Component {

    constructor(props) {
        super(props);
        window.speechSynthesis.getVoices();
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
        const newState = {...this.state};
        const {match:{params:{number}}}=this.props;
        const word = newState.wordsEnglish[number - 1][this.state.index];
        word.skip=false;
        if (this.state.index + 1 === this.state.wordsEnglish[this.props.match.params.number - 1].length) {
            return;
        }
        this.setState({
            ...this.state,
            index: this.state.index + 1,
            showAnswer: false,
            backgroundColor: "#cdeae7",
            value:""
        });
    };

    onHandleClickPreviousWord = () => {
        const newState = {...this.state};
        const {match:{params:{number}}}=this.props;
        const word = newState.wordsEnglish[number - 1][this.state.index];
        word.skip=false;
        if (this.state.index === 0) {
            return;
        }
        this.setState({
            ...this.state,
            index: this.state.index - 1,
            showAnswer: false,
            backgroundColor: "#cdeae7",
            value:""
        });

    };

    showAnswer = () => {
        const newState = {...this.state};
        const {match:{params:{number}}}=this.props;
        const word = newState.wordsEnglish[number - 1][this.state.index];
        const wordEnglish = this.state.wordsEnglish[number - 1][this.state.index].english;
        // od
        const utterThis = new SpeechSynthesisUtterance(wordEnglish);
        const voices = window.speechSynthesis.getVoices();
        utterThis.voice = voices[1];
        utterThis.pitch = 1;
        utterThis.rate = 1;
        window.speechSynthesis.speak(utterThis);
        // do
        if(word.skip ===true){
            return;
        }

        newState.showAnswer = true;
        if(this.state.value===this.state.wordsEnglish[number - 1][this.state.index].english ||this.state.value===this.state.wordsEnglish[number - 1][this.state.index].english +" "){
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

    speakEnglish = () => {
        const {match: {params: {number}}} = this.props;
        const word = this.state.wordsEnglish[number - 1][this.state.index].english;
        const voices = window.speechSynthesis.getVoices();
        const utterThis = new SpeechSynthesisUtterance(word);
        utterThis.voice = voices[1];
        utterThis.pitch = 1;
        utterThis.rate = 1;
        window.speechSynthesis.speak(utterThis);
    };

    render() {
        const {match: {params: {number}}} = this.props;
        const word = this.state.wordsEnglish[number - 1][this.state.index];
        let wordToDisplay = undefined;
        let showSpeakerIcon = undefined;
        if (this.state.showAnswer === true) {
            wordToDisplay = word.english;
            showSpeakerIcon = true;
        } else {
            wordToDisplay = word.polish;
            showSpeakerIcon = false;
        }
        let style={
            backgroundColor:this.state.backgroundColor,
        };
        return (
            <div className="setContainer">
                <h1>Zestaw {number}</h1>
                <div className="componentFiszka">
                    <wired-button onClick={this.onHandleClickPreviousWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay} showSpeakerIcon={showSpeakerIcon} speakFn={this.speakEnglish}/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index === 9 &&
                    <wired-button class="nextSetButton"><NavLink to="/jangielski/polang/zestaw"> Następny zestaw </NavLink></wired-button>}
                </div>
                <div className="inputButton" id="englishCheck">
                <input className="input" type="text" value={this.state.value} id="myInputAng"
                       onChange={this.handlerChange} style={style}/>
                <wired-button id="checkButton2"onClick={this.showAnswer}>Sprawdź</wired-button>
                </div>
                <Counter correct={this.state.correct} incorrect={this.state.incorrect}/>
                <div className="buttonsNav">
                    <wired-button><NavLink to="/jangielski/polang/zestaw"> Wróć do zestawów </NavLink></wired-button>
                    <wired-button><NavLink to="/"> Wróć do strony głównej </NavLink></wired-button>
                </div>
            </div>
        )

    }
}

export default Zestaw;