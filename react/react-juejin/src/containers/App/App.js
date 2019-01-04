import React, { Component } from 'react'
import './App.css'
// import Index from '../../components/Index/Index'
import Header from '../../components/Index/Header';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { registerAction } from '../../redux/action/users';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header users={this.props.users} registerActions={this.props.registerActions} />
                </div>
                <div className="App-body">
                    <div className="welcome-view">
                        <div className="category-nav">
                            1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
                        <div className="main">
                            21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
                        <div className="sidebar">
                            31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            user: state.user
        }
    },
    (dispacth) => {
        return {
            registerActions: bindActionCreators(registerAction, dispacth)
        }
    }
)(App);