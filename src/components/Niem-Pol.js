import React from "react";
import {NavLink} from "react-router-dom";
import { WiredToggle,WiredButton,WiredCard  } from "wired-toggle"

class NiemPol extends React.Component{


    render() {
        return(
            <div className="setContainer">
                <wired-card class="setfooter">
                    <div>
                        Przed Tobą 10 zestawów słówek.
                        <br></br>
                        W każdym z nich znajduje się po 10 fiszek niemieckich czasowników.
                    </div>
                </wired-card>
                <div className="sets">
                    <wired-card class="setWiredCard">
                        <div> <NavLink  to="/jniemiecki/niempol/zestawniem/1">zestaw 1</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/2">zestaw 2</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/3">zestaw 3</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/4">zestaw 4</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/5">zestaw 5</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/6">zestaw 6</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/7">zestaw 7</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/8">zestaw 8</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/9">zestaw 9</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/niempol/zestawniem/10">zestaw 10</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                </div>
                <div className="setButton">
                    <wired-button class="setbuttonfirst"><NavLink  to="/">Wróć do strony głównej</NavLink></wired-button>
                    <wired-button class="setbuttonsecend"><NavLink  to="/jniemiecki">Wróć do poprzedniej strony </NavLink></wired-button>
                </div>
            </div>
        )

    }
}

export default NiemPol;