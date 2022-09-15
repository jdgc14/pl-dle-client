import React from 'react'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="text-center mb-5">
            <div className="col-10 col-md-4 m-auto">
                <h2 className="fw-bold">PLdle</h2>
                <img
                    src="https://programaenlinea.net/wp-content/uploads/2018/12/lenguajes-de-programacion-1.png"
                    // src="https://c.tenor.com/a-TsAtfszc8AAAAC/homer-any.gif"
                    className="logo"
                />
                {/* <h5>Guess programming language</h5> */}
                {/* To Do: aply scss animations*/}
                {/* <div class="container">
                    <div class="glitch" data-text="ELISABÉTH">
                        ELISABÉTH
                    </div>
                    <div class="glow">ELISABÉTH</div>
                    <p class="subtitle">IMPRACTICAL DEVELOPER</p>
                </div>
                <div class="scanlines"></div> */}
            </div>
        </div>
    )
}

export default Header
