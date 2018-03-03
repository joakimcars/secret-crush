import React from 'react'

export default () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className="navbar-brand" href="#">Secret Crush</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">My crushes</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}