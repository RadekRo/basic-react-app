import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../css/styles.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Player from './Player';

export default class extends React.Component {

    render() {

        return <BrowserRouter>
            <MuiThemeProvider>
                <React.Fragment>
                    <Header team="LECHIA GDAŃSK" />
                    <Route path="/" exact component={Main}/>
                    <Route path="/player/:id" component={Player}/>
                    <Footer author="Radosław Rocławski"/>
                </React.Fragment>
            </MuiThemeProvider>
        </BrowserRouter>
    }
}


