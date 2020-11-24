import React from 'react';

import './App.css';
import users from './api/users';


class App extends React.Component {

    state = {
        users: [],
        currentUser: '',
        userPassword: '',
        err: ''
    }
    usersFetched = async () => {
        const data = await users;
        // console.log('Before setSate',data);
        this.setState({users: data});
        // console.log('State Value',this.state.users);
    }

    setCurrentUser = (event) => {
        // Set the user to state if it exist.
        this.setState({currentUser: event.target.value})
    }
    setPassword = (event) => {
        // Set the password to state if it exist.
        this.setState({userPassword: event.target.value})
    }


    checkUsers = () => {
        // check if the user founded
        const userFounded = this.state.users.find(user => user.userName === this.state.currentUser);
        const passwordMatch = this.state.users.find(user => user.Password === this.state.userPassword);

        if(userFounded && passwordMatch) {
            console.log('the user logged in', this.state.currentUser);
            console.log('the user pass', this.state.userPassword);
        } else {
            console.log('Filed to login');
        }

    }

    onSubmitData = (event,currentUser) => {
        // Submit the from data
        event.preventDefault();
        this.usersFetched();
        this.checkUsers(currentUser);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitData} action="">
                    <input type="text" value={this.state.currentUser} onChange={this.setCurrentUser}/>
                    <input type="password" value={this.state.userPassword} onChange={this.setPassword}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default App;
