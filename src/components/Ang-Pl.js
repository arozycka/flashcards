import React from "react";
import {NavLink} from "react-router-dom";
import { WiredToggle,WiredButton,WiredCard  } from "wired-toggle"

class AngPol extends React.Component{


    render() {
        return(
            <div className="setContainer">
                <wired-card class="setfooter">
                    <div>
                        Przed Tobą 10 zestawów słówek.
                        <br></br>
                        W każdym z nich znajduje się po 10 fiszek.
                    </div>
                </wired-card>
                <div className="sets">
                    <wired-card class="setWiredCard">
                        <div> <NavLink  to="/jangielski/angpol/zestawang/1">zestaw 1</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/2">zestaw 2</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/3">zestaw 3</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/4">zestaw 4</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/5">zestaw 5</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/6">zestaw 6</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/7">zestaw 7</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/8">zestaw 8</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/9">zestaw 9</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestawang/10">zestaw 10</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                </div>
                <div className="setButton">
                    <wired-button class="setbuttonfirst"><NavLink  to="/">Wróć do strony głównej</NavLink></wired-button>
                    <wired-button class="setbuttonsecend"><NavLink  to="/jangielski">Wróć do poprzedniej strony </NavLink></wired-button>
                </div>
            </div>

        )

    }
}

export default AngPol;