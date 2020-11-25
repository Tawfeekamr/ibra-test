import React, { Component } from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import Company from './Company';
import Footer from './Footer';
import LoginCard from './LoginCard'
import Dashboard from './Dashboard';

class App extends Component {
    state = {
        auth: false
    }

    setAuth = (isloggdIn) => {
        console.log('as login',isloggdIn);
        this.setState({
            auth: isloggdIn
        })

        if(isloggdIn) {
           console.log(isloggdIn);
           this.redirectToDashboard();
       }

    }

    redirectToDashboard = () => {
        window.location.replace("/Dashboard");
    }



    render() {

    return (
      <div className="app">

          <Route>
              <Switch>
                  <Route exact path="/">
                      <div className="login__screen">
                          <div className="container">
                              <div className="row mx-auto">
                                  <div className="col-12 col-md-6">
                                      <Company/>
                                  </div>
                                  <div className="col-12 col-md-6">
                                      <LoginCard auth={this.state.auth} setAuth={this.setAuth}/>
                                  </div>
                              </div>
                          </div>
                          <div className="footer__container"><Footer/></div>

                      </div>
                  </Route>
                  <Route path="/dashboard">
                      <Dashboard auth={this.state.auth} />
                  </Route>
              </Switch>
          </Route>
      </div>

    );
  }
}

export default App
