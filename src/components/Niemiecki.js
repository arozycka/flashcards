import React from "react";
import {NavLink} from "react-router-dom";

class German extends React.Component{


    render() {
        return(
            <div>
                <div>
                    Wybierz tłumaczenie
                </div>
                <div><NavLink  to="/jniemiecki/polniem">POLSKO-NIEMIECKIE</NavLink></div>
                <div><NavLink  to="/jniemiecki/niempol">NIEMIECKO-POLSKIE</NavLink></div>
                <button><NavLink  to="/">Wróć do strony głównej</NavLink></button>
            </div>

        )

    }
}

export default German;