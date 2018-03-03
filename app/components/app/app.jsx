import React from 'react'

export default () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className="navbar-brand" href="#">Secret Crush</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My crushes</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}