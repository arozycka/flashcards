import React from "react";
import {
    NavLink
} from 'react-router-dom';
import {WiredCard  } from "wired-toggle"


class Main extends React.Component{


    render() {
        return(
            <div className="mainContainer">
                <div className="image"></div>
                <div className="mainText">
                    <h1>Hej!</h1>
                    <h2>Witamy na stronie do nauki języków obcych! </h2>
                    <h3>Ta Aplikacja pomoże Ci w łatwy sposób przyswoić słownictwo !
                        Głównie przeznaczona jest do nauki słówek języka angielskiego i niemieckiego !
                        Aplikacja umożliwia ćwiczenie pisania, zapamiętywania i kojarzenia !
                        Nie ma na co tracić czasu! Zatem zaczynamy !</h3>
                    <p> Let’s go ! </p>
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