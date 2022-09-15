import React from 'react'
import '../styles/ColorsIndicator.css'

const ColorsIndicator = () => {
    return (
        <div className="fw-bold">
            <h5>Colors indicators:</h5>
            <div className="col-4 d-flex mx-auto">
                <div className="mx-auto">
                    <div>
                        <div className="color-card bg-coincidence-true"></div>
                        <small>Correct</small>
                    </div>
                    <div>
                        <div className="color-card bg-coincidence-1"></div>
                        <small>One correct</small>
                    </div>
                </div>
                <div className="mx-auto">
                    <div>
                        <div className="color-card bg-coincidence-false"></div>
                        <small>Incorrect</small>
                    </div>

                    <div>
                        <div className="color-card bg-coincidence-2"></div>
                        <small>Two correct</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorsIndicator
