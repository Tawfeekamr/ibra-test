import React, { Component } from 'react'
import './Dashboard.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Demo from './Demo'


export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <div className="dashboard">
                    <Navbar/>
                    <div className="dashboard__w">
                        <Sidebar/>

                        <Demo/>

                    </div>
                </div>
            </div>

        )
    }
}
