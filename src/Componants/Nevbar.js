import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nevbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-white bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <li><Link className="nav-link " aria-current="page" to="/general">All News</Link></li>
                            <li><Link className="nav-link " aria-current="page" to="/business">Business</Link></li>
                            <li><Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
                            <li><Link className="nav-link " aria-current="page" to="/general">General</Link></li>
                            <li><Link className="nav-link " aria-current="page" to="/health">Health</Link></li>
                            <li><Link className="nav-link " aria-current="page" to="/science">Science</Link></li>
                            <li><Link className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
                            <li><Link className="nav-link " aria-current="page" to="/technology">Technology</Link></li>

                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
