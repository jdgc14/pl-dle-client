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
                {/* <div className="container">
                    <div className="glitch" data-text="ELISABÉTH">
                        ELISABÉTH
                    </div>
                    <div className="glow">ELISABÉTH</div>
                    <p className="subtitle">IMPRACTICAL DEVELOPER</p>
                </div>
                <div className="scanlines"></div> */}
            </div>
        </div>
    )
}

export default Header
