import React from "react";


class Counter extends React.Component{


    render() {
        return(
            <div className="counter">
                <h1>Odpowiedzi:</h1>
                <h2>Poprawne:0</h2>
                <h2>Błędne:0</h2>
            </div>

        )

    }
}

export default Counter;