import React from "react";

class FiszkaRotate extends React.Component{



    render() {

        return(
            <div>
                <div>
                    <wired-card class="mainWiredCard" id="fiszkaRotate">
                        <p>{this.props.word}</p>
                    </wired-card>
                </div>
            </div>
        )
    }
}

export default FiszkaRotate;