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
                        <div> <NavLink  to="/jangielski/angpol/zestaw/1">ZESTAW 1</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/2">ZESTAW 2</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/3">ZESTAW 3</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/4">ZESTAW 4</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/5">ZESTAW 5</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/6">ZESTAW 6</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/7">ZESTAW 7</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/8">ZESTAW 8</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/9">ZESTAW 9</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jangielski/angpol/zestaw/10">ZESTAW 10</NavLink>
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