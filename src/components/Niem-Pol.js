import React from "react";
import {NavLink} from "react-router-dom";
import { WiredToggle,WiredButton,WiredCard  } from "wired-toggle"

class NiemPol extends React.Component{

    constructor(props){
        super(props);
        this.state={
            setList:[1,2,3,4,5,6,7,8,9,10]
        }
    }

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

                    {
                        this.state.setList.map(el=> <wired-card class="setWiredCard">
                            <div><NavLink to={"/jniemiecki/niempol/zestawniem/" + el}>ZESTAW {el}</NavLink>
                                <wired-toggle id={el}></wired-toggle>
                            </div>
                        </wired-card>)
                    }
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