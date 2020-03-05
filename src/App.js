import React from 'react';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.scss';
import Shop from './components/Article/Shop.js';
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" component={Shop}></Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
