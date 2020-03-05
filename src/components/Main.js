import React from "react";
import {
    NavLink
} from 'react-router-dom';


class Main extends React.Component{


    render() {
        return(
            <div>
                <div>
                    <h1>Hej!</h1>
                    <h2>Witamy na stronie do nauki języków obcych! </h2>
                    <h3>Ta Aplikacja pomoże Ci w łatwy sposób przyswoić słownictwo !
                        Głównie przeznaczona jest do nauki słówek języka angielskiego i niemieckiego !
                        Aplikacja umożliwia ćwiczenie pisania, zapamiętywania i kojarzenia !
                        Nie ma na co tracić czasu! Zatem zaczynamy !
                    </h3>
                    <p>Let’s go ! </p>
                </div>
                <div>
                   Wybierz język
                </div>
                <div><NavLink  to="/jangielski">JĘZYK ANGIELSKI</NavLink></div>
                <div><NavLink  to="/jniemiecki">JĘZYK NIEMIECKI</NavLink></div>
            </div>

        )

    }
}

export default Main;