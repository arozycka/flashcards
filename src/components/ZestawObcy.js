import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import FiszkaRotate from "./Fiszkarotate";
import Counter from "./Counter";
import {wordsEnglish} from "../wordsEnglish";

class ZestawObcy extends React.Component{

    constructor (props){
        super (props);
        this.state = {
            wordsEnglish:wordsEnglish,
            index: 0,
            showAnswer: false,
            know:0,
            unknow:0,
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
    onHandleClickKnow = ()=>{
        this.setState({
            know:this.state.know+1,
        })
    };
    onHandleClickUnknow = ()=>{
        this.setState({
            unknow:this.state.unknow-1,
        })
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
                    <wired-button onClick={this.onHandleClickPreviousWord}>Poprzednie</wired-button>
                    <Fiszka word={wordToDisplay}/>
                    <FiszkaRotate/>
                    <wired-button onClick={this.onHandleClickNextWord}>Następne</wired-button>
                    {this.state.index===9 && <wired-button class="nextSetButton"><NavLink to="/jangielski/angpol/zestawang"> Następny zestaw </NavLink></wired-button>}
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
                    <wired-button><NavLink to="/jangielski/angpol/zestawang"> Wróć do zestawów </NavLink>
                    </wired-button>
                    <wired-button><NavLink to="/"> Wróć do strony głównej </NavLink></wired-button>
                </div>
            </div>
        )

    }
}

export default ZestawObcy;