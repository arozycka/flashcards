import React from "react";

class FiszkaRotate extends React.Component{



    render() {

        return(
            <div className="card" id="fiszkaRotate">
                <wired-card class="mainWiredCard back" id="fiszkaRotateBack">
                    <p>{this.props.word}</p>
                </wired-card>
                <wired-card class="mainWiredCard front" id="fiszkaRotateFront">
                </wired-card>
            </div>
        )
    }
}

export default FiszkaRotate;