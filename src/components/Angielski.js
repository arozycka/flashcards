import React from "react";
import {NavLink} from "react-router-dom";
import {WiredCard, WiredButton  } from "wired-toggle"

class English extends React.Component{


    render() {
        return(
            <div className="englishContainer">
                <div className="checklanguage">
                    Wybierz tłumaczenie
                </div>
                <div className="englishDiv">
                <wired-card class="mainWiredCard">
                <div><NavLink  to="/jangielski/polang">POLSKO-ANGIELSKIE</NavLink></div>
                </wired-card>
                <wired-card class="mainWiredCard">
                <div><NavLink  to="/jangielski/angpol">ANGIELSKO-POLSKIE</NavLink></div>
                </wired-card>
                </div>
                <wired-button id="englishButton"><NavLink  to="/">Wróć do strony głównej</NavLink></wired-button>
            </div>

        )

    }
}

export default English;