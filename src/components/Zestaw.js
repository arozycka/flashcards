import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";

class Zestaw extends React.Component{

     constructor (props){
         super (props);
         this.state = {
             wordsLists: [
                 [
                     { id: 1, english: "refuse", polish: "odrzucać", correct:null},
                     { id: 2, english: "threaten", polish: "grozić", correct:null},
                     { id: 3, english: "convince", polish: "przekonać", correct:null},
                     { id: 4, english: "encourage", polish: "zachęcać", correct:null},
                     { id: 5, english: "persuade", polish: "namawiać", correct:null},
                     { id: 6, english: "warn", polish: "ostrzec", correct:null},
                     { id: 7, english: "accuse sb of ", polish: "oskarżać kogoś o", correct:null},
                     { id: 8, english: "admit", polish: "przyznać", correct:null},
                     { id: 9, english: "blame sb for ", polish: "winić kogoś o", correct:null},
                     { id: 10, english: "deny", polish: "zaprzeczać", correct:null},
                 ],
                 [
                     { id: 1, english: "refuse", polish: "odrzucać", correct:null},
                     { id: 2, english: "threaten", polish: "grozić", correct:null},
                     { id: 3, english: "convince", polish: "przekonać", correct:null},
                     { id: 4, english: "encourage", polish: "zachęcać", correct:null},
                     { id: 5, english: "persuade", polish: "namawiać", correct:null},
                     { id: 6, english: "warn", polish: "ostrzec", correct:null},
                     { id: 7, english: "accuse sb of ", polish: "oskarżać kogoś o", correct:null},
                     { id: 8, english: "admit", polish: "przyznać", correct:null},
                     { id: 9, english: "blame sb for ", polish: "winić kogoś o", correct:null},
                     { id: 10, english: "deny", polish: "zaprzeczać", correct:null},
                 ],
                 [
                     { id: 1, english: "refuse", polish: "odrzucać", correct:null},
                     { id: 2, english: "threaten", polish: "grozić", correct:null},
                     { id: 3, english: "convince", polish: "przekonać", correct:null},
                     { id: 4, english: "encourage", polish: "zachęcać", correct:null},
                     { id: 5, english: "persuade", polish: "namawiać", correct:null},
                     { id: 6, english: "warn", polish: "ostrzec", correct:null},
                     { id: 7, english: "accuse sb of ", polish: "oskarżać kogoś o", correct:null},
                     { id: 8, english: "admit", polish: "przyznać", correct:null},
                     { id: 9, english: "blame sb for ", polish: "winić kogoś o", correct:null},
                     { id: 10, english: "deny", polish: "zaprzeczać", correct:null},
                 ],
             ],
             index: 0,
             showAnswer: false,
         }
     }

    onHandleClickNextWord = () => {
         if (this.state.index + 1 === this.state.wordsLists[this.props.match.params.number - 1].length) {
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
     }

    render() {
    const {match:{params:{number}}}=this.props;
    const word = this.state.wordsLists[number - 1][this.state.index];
    let wordToDisplay = undefined;
    if (this.state.showAnswer === true) {
        wordToDisplay = word.polish;
    } else {
        wordToDisplay = word.english;
    }
        return(
            <div>
                <div>
                    <h1>Zestaw {number}</h1>
                    <Fiszka word={wordToDisplay}/>
                    <button onClick={this.onHandleClickNextWord}>Następne</button>
                </div>
                <input/>
                <button onClick={this.showAnswer}>Sprawdź</button>
                <Counter/>
                <button><NavLink  to="/">Wróć do strony głównej</NavLink></button>
            </div>

        )

    }
}

export default Zestaw;