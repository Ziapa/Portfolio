import React from 'react';
import s from './App.module.scss';
import { Content } from './components/ContentBar/Content';
import {LeftSideBar} from "./components/LeftSideBar/LeftSideBar";
import {NavBar} from "./components/NavBar/NavBar";

function App() {
    return (
        <div className={s.App}>
            <LeftSideBar/>
            <Content/>
            <NavBar/>
        </div>
    );
}

export default App;
