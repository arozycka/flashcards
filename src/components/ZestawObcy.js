import React from "react";
import {NavLink} from "react-router-dom";
import Fiszka from "./Fiszka"
import Counter from "./Counter";

class ZestawObcy extends React.Component{
    render() {
        const {match:{params:{number}}}=this.props;
        return(
            <div>
                <div>
                    <h1>Zestaw {number}</h1>
                    <Fiszka/>
                    <Fiszka/>
                </div>
                <button>Wiedziałem</button>
                <button>Niewiedziałem</button>
                <button>Następne</button>
                <Counter/>
                <button><NavLink  to="/">Wróć do strony głównej</NavLink></button>
            </div>

        )

    }
}

export default ZestawObcy