import React from "react";
import {NavLink} from "react-router-dom";
import Checkbox from "./Checkbox";

class AngPol extends React.Component{


    render() {
        return(
            <div>
                <div>
                    Przed tobą 10 zestaów słówek.
                    W każdym z nich znajduje się po 10 fiszek.
                </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/1">ZESTAW 1</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/2">ZESTAW 2</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/3">ZESTAW 3</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/4">ZESTAW 4</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/5">ZESTAW 5</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/6">ZESTAW 6</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/7">ZESTAW 7</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/8">ZESTAW 8</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/9">ZESTAW 9</NavLink> <Checkbox/> </div>
                <div> <NavLink  to="/jangielski/angpol/zestaw/10">ZESTAW 10</NavLink> <Checkbox/> </div>
                <button><NavLink  to="/">Wróć do strony głównej</NavLink></button>
                <button><NavLink  to="/jangielski">Wróć do poprzedniej strony </NavLink></button>
            </div>

        )

    }
}

export default AngPol;