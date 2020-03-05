import React from "react";



class Fiszka extends React.Component{



    render() {

        return(
            <div>
                <div>
                   <p>Słowo</p>
                    <p>{this.props.word}</p>

                </div>
            </div>
        )
    }
}

export default Fiszka;