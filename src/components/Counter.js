import React from "react";


class Counter extends React.Component{


    render() {
        return(
            <div className="counter">
                <h1>Odpowiedzi:</h1>
                <h2>Poprawne:{this.props.correct}</h2>
                <h2>Błędne:{this.props.incorrect}</h2>
            </div>

        )

    }
}

export default Counter;