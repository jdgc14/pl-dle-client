import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="p-4" style={{ minHeight: '25vh' }}>
            <div className="d-flex justify-content-evenly gap-5 m-auto">
                <div>
                    <h2 style={{ fontWeight: '600' }}>PLdle</h2>
                    <div className="text-start">
                        <h6>
                            ©2022 JDGC14. <br /> All Rights Reserved.
                        </h6>
                        <h6>
                            Powered by <span>React</span>.
                        </h6>
                    </div>
                </div>
                <div className="text-center">
                    <h2 style={{ fontWeight: '600' }}>Contact</h2>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column gap-2">
                            <a href="https://www.linkedin.com/in/jdgc14/">
                                <i className="fa-brands fa-linkedin buttons-footer"></i>
                            </a>{' '}
                            <a href="https://github.com/jdgc14/">
                                <i className="fa-brands fa-github buttons-footer"></i>
                            </a>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <a href="https://twitter.com/learner_14">
                                <i class="fa-brands fa-twitter buttons-footer"></i>
                            </a>
                            <a href="mailto:pldle.jdgc14@gmail.com">
                                <i className="fa-solid fa-envelope buttons-footer"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
