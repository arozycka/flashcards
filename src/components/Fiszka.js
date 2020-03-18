import React from "react";
import { WiredCard } from "wired-card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp} from "@fortawesome/free-solid-svg-icons";

class Fiszka extends React.Component{

    speak = () => {
        this.props.speakFn();
    };

    render() {
        return(
            <div>
                <div>
                    <wired-card class="mainWiredCard">
                        {this.props.showSpeakerIcon && <FontAwesomeIcon className="speaker-icon" icon={faVolumeUp} onClick={this.speak}/>}
                        <p>{this.props.word}</p>
                    </wired-card>
                </div>
            </div>
        )
    }
}

export default Fiszka;