import React from 'react';
import {Switch, Route} from "react-router-dom";
import Name from "./components/name/Name";
import Game from "./components/game/Game";
import Categories from "./components/categories/Categories";
import Static from "./components/static/Static";
import Modal from "./components/modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <>
            <Switch>
                <Route exact path='/' component={Name}/>
                <Route exact path='/gameStart' component={Game}/>
                <Route exact path='/category' component={Categories}/>
                <Route exact path='/static' component={Static}/>
            </Switch>
            <Modal/>
            <ToastContainer />
            </>
    );
};

export default App;