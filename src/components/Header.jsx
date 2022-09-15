import React from 'react'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="">
            <div className="col-10 col-md-4 m-auto">
                <img src={''} className="logo" />
            </div>
            <div
                className="position-fixed d-flex flex-column gap-3"
                style={{
                    right: '5%',
                    top: '65px',
                    zIndex: '1',
                }}
            >
                <button className="btn btn-link p-0">
                    <i className="fa-solid fa-house button-home"></i>
                </button>
                <button className="btn btn-link p-0">
                    <i className="fa-solid fa-star button-home"></i>
                </button>
            </div>
        </div>
    )
}

export default Header
