import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
export default class Nevbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-white bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <li><a className="nav-link " aria-current="page" href="/general">All News</a></li>
                            <li><a className="nav-link " aria-current="page" href="/business">Business</a></li>
                            <li><a className="nav-link " aria-current="page" href="/entertainment">Entertainment</a></li>
                            <li><a className="nav-link " aria-current="page" href="/general">General</a></li>
                            <li><a className="nav-link " aria-current="page" href="/health">Health</a></li>
                            <li><a className="nav-link " aria-current="page" href="/science">Science</a></li>
                            <li><a className="nav-link " aria-current="page" href="/sports">Sports</a></li>
                            <li><a className="nav-link " aria-current="page" href="/technology">Technology</a></li>

                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
