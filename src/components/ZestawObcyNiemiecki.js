import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import FiszkaRotate from "./Fiszkarotate";
import Counter from "./Counter";
import wordsGerman from "../wordsGerman";

class ZestawObcyNiemiecki extends React.Component {

    constructor(props) {
        window.speechSynthesis.getVoices();
        super(props);
        this.state = {
            wordsGerman: wordsGerman,
            index: 0,
            showAnswer: false,
            know:0,
            unknow:0,
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

    onHandleClickKnow =()=>{
        const newState = {...this.state};
        const {match:{params:{number}}}=this.props;
        const word = newState.wordsGerman[number - 1][this.state.index];
        if (word.skip===true){
            return
        }else{
            word.skip=true;
            this.setState({
                know:this.state.know+1,
            })
        }
    };

    onHandleClickUnknow = ()=>{
        const newState = {...this.state};
        const {match:{params:{number}}}=this.props;
        const word = newState.wordsGerman[number - 1][this.state.index];
        if (word.skip===true){
            return
        }else{
            word.skip=true;
            this.setState({
                unknow:this.state.unknow+1,
            })
        }
    };

    speakGerman=()=>{
        const {match: {params: {number}}} = this.props;
        const word = this.state.wordsGerman[number - 1][this.state.index].german;
        const utterThis = new SpeechSynthesisUtterance(word);
        const voices = window.speechSynthesis.getVoices();
        utterThis.voice = voices[48];
        utterThis.pitch = 1;
        utterThis.rate = 1;
        window.speechSynthesis.speak(utterThis);
    };


    render() {
        const {match: {params: {number}}} = this.props;
        const word = this.state.wordsGerman[number - 1][this.state.index];
        let wordToDisplayP = word.polish;
        let wordToDisplay = word.german;
        return (
            <div className="setContainer">
                <h1>Zestaw {number}</h1>
                <div className="componentFiszka">
                    <wired-button onClick={this.onHandleClickPreviousWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay} showSpeakerIcon={true} speakFn={this.speakGerman}/>
                    <FiszkaRotate word={wordToDisplayP}/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index === 9 && <wired-button class="nextSetButton"><NavLink to="/jniemiecki/niempol/zestawniem"> Następny zestaw </NavLink></wired-button>}
                </div>
                <div className="buttonsKnow">
                    <wired-button onClick={this.onHandleClickKnow}>Wiedziałem</wired-button>
                    <wired-button onClick={this.onHandleClickUnknow}>Nie wiedziałem</wired-button>
                </div>
                <div className="counter">
                    <h1>Odpowiedzi:</h1>
                    <h2>Wiedziałem:{this.state.know}</h2>
                    <h2>Nie wiedziałem:{this.state.unknow}</h2>
                </div>
                <div className="buttonsNav">
                    <wired-button><NavLink to="/jniemiecki/niempol/zestawniem"> Wróć do zestawów </NavLink></wired-button>
                    <wired-button><NavLink to="/"> Wróć do strony głównej </NavLink></wired-button>
                </div>
            </div>
        )

    }
}

export default ZestawObcyNiemiecki;