import React from "react";
import {NavLink} from "react-router-dom";
import { WiredToggle,WiredButton,WiredCard  } from "wired-toggle"

class PolNiem extends React.Component{


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
                        <div> <NavLink  to="/jniemiecki/polniem/zestawpolniem/1">zestaw 1</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/2">zestaw 2</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/3">zestaw 3</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/4">zestaw 4</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/5">zestaw 5</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/6">zestaw 6</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/7">zestaw 7</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/8">zestaw 8</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/9">zestaw 9</NavLink>
                            <wired-toggle></wired-toggle>
                        </div>
                    </wired-card>
                    <wired-card class="setWiredCard">
                        <div><NavLink to="/jniemiecki/polniem/zestawpolniem/10">zestaw 10</NavLink>
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

export default PolNiem;