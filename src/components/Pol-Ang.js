import React from "react";
import {NavLink} from "react-router-dom";
import { WiredToggle,WiredButton,WiredCard  } from "wired-toggle"
import {wordsEnglish} from "../wordsEnglish";

class PolAng extends React.Component{

    constructor(props){
        super(props);
        this.state={
            setList:[
                {number:1,state:false},
                {number:2,state:false},
                {number:3,state:false},
                {number:4,state:false},
                {number:5,state:false},
                {number:6,state:false},
                {number:7,state:false},
                {number:8,state:false},
                {number:9,state:false},
                {number:10,state:false}
                ]
        }
    }

    handlerChange = (e) => {
        const newState = {...this.state};
        const valueToggle = e.target.id;
        newState.setList[Number(valueToggle)-1].state=true;
        this.setState(newState);
    };

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
                    {
                        this.state.setList.map(el=> <wired-card class="setWiredCard">
                            <div><NavLink to={"/jangielski/polang/zestaw/" + el.number}>ZESTAW {el.number}</NavLink>
                                <wired-toggle value= {el.state} id={el.number} onClick={this.handlerChange}></wired-toggle>
                            </div>
                        </wired-card>)
                    }

                </div>
                <div className="setButton">
                <wired-button class="setbuttonfirst"><NavLink  to="/">Wróć do strony głównej</NavLink></wired-button>
                <wired-button class="setbuttonsecend"><NavLink  to="/jangielski">Wróć do poprzedniej strony </NavLink></wired-button>
                </div>
            </div>

        )

    }
}

export default PolAng;