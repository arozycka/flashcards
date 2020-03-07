import React from 'react';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './FiszkiApp.scss';
import Main from "./components/Main";
import Angielski from "./components/Angielski"
import Niemiecki from "./components/Niemiecki"
import PolAng from "./components/Pol-Ang";
import AngPol from "./components/Ang-Pl";
import PolNiem from "./components/Pol-Niem";
import NiemPol from "./components/Niem-Pol"
import store from "./redux/store";
import Zestaw from "./components/Zestaw";
import ZestawObcy from "./components/ZestawObcy";
import SetGerman from "./components/SetGerman";
import ZestawObcyNiemiecki from "./components/ZestawObcyNiemiecki";

function FiszkiApp() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/jniemiecki/niempol/zestaw/:number" component={ZestawObcyNiemiecki}></Route>
                        <Route path="/jniemiecki/polniem/zestaw/:number" component={SetGerman}></Route>
                        <Route path="/jangielski/angpol/zestaw/:number" component={ZestawObcy}></Route>
                        <Route path="/jangielski/polang/zestaw/:number" component={Zestaw}></Route>
                        <Route path="/jniemiecki/niempol" component={NiemPol}></Route>
                        <Route path="/jniemiecki/polniem" component={PolNiem}></Route>
                        <Route path="/jangielski/angpol" component={AngPol}></Route>
                        <Route path="/jangielski/polang" component={PolAng}></Route>
                        <Route path="/jniemiecki" component={Niemiecki}></Route>
                        <Route path="/jangielski" component={Angielski}></Route>
                        <Route path="/" component={Main}></Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default FiszkiApp;
