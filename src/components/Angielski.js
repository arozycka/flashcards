import React from "react";
import {NavLink} from "react-router-dom";

class English extends React.Component{


    render() {
        return(
            <div>
                <div>
                    Wybierz tłumaczenie
                </div>
                <div><NavLink  to="/jangielski/polang">POLSKO-ANGIELSKIE</NavLink></div>
                <div><NavLink  to="/jangielski/angpol">ANGIELSKO-POLSKIE</NavLink></div>
                <button><NavLink  to="/">Wróć do strony głównej</NavLink></button>
            </div>

        )

    }
}

export default English;