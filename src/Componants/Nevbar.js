import React, { Component } from 'react'

export default class Nevbar extends Component {
    render() {
        return (           
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="/">All News</a>
                                <a className="nav-link" href="/">Sport</a>
                                <a className="nav-link" href="/">Politics</a>
                               
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}
