import React from "react";
import {
    NavLink
} from 'react-router-dom';
import {WiredCard} from "wired-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown,faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";



class Main extends React.Component{


    render() {
        return(
            <div className="mainContainer">
                <div className="image">
                    <h1>Witamy na stronie do nauki języków obcych! </h1>
                    <FontAwesomeIcon className="icons" icon={faAngleDoubleDown} size="5x"/>
                </div>
                <div className="mainText">
                    <h1>Hej!</h1>
                    <h3>Ta Aplikacja pomoże Ci w łatwy sposób przyswoić słownictwo !</h3>
                    <h3> Głównie przeznaczona jest do nauki słówek języka angielskiego i niemieckiego !</h3>
                    <h3> Aplikacja umożliwia ćwiczenie pisania, zapamiętywania,kojarzenia i osłuchiwania się !</h3>
                    <h3>Nie ma na co tracić czasu! Zatem zaczynamy !</h3>
                    <p> Let’s go ! </p>
                    <FontAwesomeIcon className="icons2" icon={faLongArrowAltDown} size="7x"/>
                </div>
                <div className="checklanguage">
                   Wybierz język
                </div>
                <div className="wiredCardContainer">
                <wired-card class="mainWiredCard">
                <div className="firstcard"><NavLink  to="/jangielski">JĘZYK ANGIELSKI</NavLink></div>
                </wired-card>
                <wired-card class="mainWiredCard">
                <div className="secendcard"><NavLink  to="/jniemiecki">JĘZYK NIEMIECKI</NavLink></div>
                </wired-card>
                </div>
            </div>

        )

    }
}

export default Main;