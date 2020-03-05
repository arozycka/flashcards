import React from "react";


class Checkbox extends React.Component{


    render() {
        return(
            <div>
                 <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

        )

    }
}

export default Checkbox;