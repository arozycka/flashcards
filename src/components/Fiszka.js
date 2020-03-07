import React from "react";
import { WiredCard } from "wired-card"


class Fiszka extends React.Component{



    render() {

        return(
            <div>
                <div>
                    <wired-card class="mainWiredCard">
                        <p>{this.props.word}</p>
                    </wired-card>
                </div>
            </div>
        )
    }
}

export default Fiszka;